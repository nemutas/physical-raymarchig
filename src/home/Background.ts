import * as THREE from 'three';
import { publicPath } from '../scripts/utils';
import backgroundFrag from './shaders/backgroundFrag.glsl';
import backgroundVert from './shaders/backgroundVert.glsl';

export class Background {
	private renderTarget!: THREE.WebGLRenderTarget
	private scene!: THREE.Scene
	private camera!: THREE.OrthographicCamera

	private material!: THREE.ShaderMaterial

	constructor(private width: number, private height: number) {
		this.init()
		this.createMesh()
	}

	private init = () => {
		// render target
		this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
		// this.renderTarget.texture.encoding = THREE.sRGBEncoding
		// scene
		this.scene = new THREE.Scene()
		// camera
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10)
		this.camera.position.z = 1
	}

	private createMesh = async () => {
		const loader = new THREE.TextureLoader()
		const names = ['noise', 'wlop1', 'wlop2', 'wlop3']

		const textures = await Promise.all(
			names.map(async name => {
				const ext = name === 'noise' ? 'png' : 'jpg'
				const texture = await loader.loadAsync(publicPath(`/resources/${name}.${ext}`))
				texture.encoding = THREE.sRGBEncoding
				return texture
			})
		)

		const aspect = this.width / this.height

		const geometry = new THREE.PlaneGeometry(2, 2)
		this.material = new THREE.ShaderMaterial({
			uniforms: {
				u_noise: { value: { texture: textures[0], uvScale: this.calcCoveredTextureScale(textures[0], aspect) } },
				u_image1: { value: { texture: textures[1], uvScale: this.calcCoveredTextureScale(textures[1], aspect) } },
				u_image2: { value: { texture: textures[2], uvScale: this.calcCoveredTextureScale(textures[2], aspect) } }
			},
			vertexShader: backgroundVert,
			fragmentShader: backgroundFrag
		})
		const mesh = new THREE.Mesh(geometry, this.material)
		this.scene.add(mesh)
	}

	private calcCoveredTextureScale = (texture: THREE.Texture, aspect: number, target?: THREE.Vector2) => {
		const result = target ?? new THREE.Vector2()
		const imageAspect = texture.image.width / texture.image.height

		if (aspect < imageAspect) result.set(aspect / imageAspect, 1)
		else result.set(1, imageAspect / aspect)

		return result
	}

	get texture() {
		return this.renderTarget.texture
	}

	resize = (aspect: number) => {
		const noise = this.material.uniforms.u_noise.value
		this.calcCoveredTextureScale(noise.texture, aspect, noise.uvScale)
		const image1 = this.material.uniforms.u_image1.value
		this.calcCoveredTextureScale(image1.texture, aspect, image1.uvScale)
		const image2 = this.material.uniforms.u_image2.value
		this.calcCoveredTextureScale(image2.texture, aspect, image2.uvScale)
	}

	update = (renderer: THREE.WebGLRenderer) => {
		renderer.setRenderTarget(this.renderTarget)
		renderer.render(this.scene, this.camera)
		renderer.setRenderTarget(null)
	}
}
