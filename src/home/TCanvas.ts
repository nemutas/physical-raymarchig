import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { Assets, TCanvasBase } from '../scripts/TCanvasBase';
import { publicPath } from '../scripts/utils';
import { AMOUNT, spheres } from './datas';
import screenFrag from './shaders/screenFrag.glsl';
import screenVert from './shaders/screenVert.glsl';
import { Simulator } from './Simulator';

export class TCanvas extends TCanvasBase {
	private screenMat?: THREE.ShaderMaterial
	private simulator!: Simulator
	private fxaa?: ShaderPass

	private assets: Assets = {
		matcap: { path: publicPath('/resources/0A0A0A_A9A9A9_525252_747474-512px.png') },
		image: { path: publicPath('/resources/wlop1.jpg') }
	}

	private datas = {
		transparent: true
	}

	constructor(parentNode: ParentNode) {
		super(parentNode)

		this.loadAssets(this.assets).then(() => {
			this.setScene()
			this.createMesh()
			this.setCameraPosition(this.size.width)
			this.setResizeCallback()
			this.setPostprocessing()
			this.setDispose()
			this.animate(this.update)
		})
	}

	private setScene = () => {
		this.setOrthographicCamera(-1, 1, 1, -1, 0, 10)
		this.camera.position.z = 5

		this.simulator = new Simulator(this.size.width, this.size.height)

		this.gui.open(false)
	}

	private createMesh = async () => {
		const textures = {
			image: this.assets.image.data as THREE.Texture,
			matcap: this.assets.matcap.data as THREE.Texture
		}
		textures.image.wrapS = THREE.MirroredRepeatWrapping
		textures.image.wrapT = THREE.MirroredRepeatWrapping

		{
			const fragmentShader = screenFrag.replaceAll('AMOUNT', AMOUNT.toString())

			const geometry = new THREE.PlaneGeometry(2, 2)
			const material = new THREE.ShaderMaterial({
				uniforms: {
					u_spheres: { value: spheres },
					u_aspect: { value: this.size.aspect },
					u_camPosZ: { value: 3.0 },
					u_image: {
						value: { texture: textures.image, uvScale: this.calcCoveredTextureScale(textures.image, this.size.aspect) }
					},
					u_matcap: { value: textures.matcap },
					u_opacity: { value: 0 }
				},
				vertexShader: screenVert,
				fragmentShader,
				transparent: true
			})
			const mesh = new THREE.Mesh(geometry, material)
			this.scene.add(mesh)
			this.screenMat = material

			const onTransparent = (transparent: boolean) => {
				const body = document.querySelector('body')!

				if (transparent) {
					material.uniforms.u_opacity.value = 0
					this.container.style.pointerEvents = 'none'
					body.style.overflow = 'auto'
				} else {
					material.uniforms.u_opacity.value = 1
					this.container.style.pointerEvents = 'auto'
					body.style.overflow = 'hidden'
				}
			}
			onTransparent(this.datas.transparent)
			this.gui.add(this.datas, 'transparent').onChange((v: boolean) => onTransparent(v))
		}

		{
			const geometry = new THREE.PlaneGeometry(2, 2)
			const material = new THREE.MeshBasicMaterial({ map: this.simulator.texture, transparent: true })
			const mesh = new THREE.Mesh(geometry, material)
			mesh.position.z = 1
			mesh.visible = false
			this.scene.add(mesh)

			this.gui.add(mesh, 'visible').name('debug')
		}
	}

	private setResizeCallback = () => {
		this.resizeCallback = async () => {
			const { aspect, width, height } = this.size
			// screen
			const uniforms = this.screenMat!.uniforms
			uniforms.u_aspect.value = aspect
			this.calcCoveredTextureScale(uniforms.u_image.value.texture, aspect, uniforms.u_image.value.uvScale)
			// set camera position
			this.setCameraPosition(width)
			// simulator
			this.simulator.handleResize(width, height)
			// postprocessing
			this.fxaa!.uniforms.resolution.value.set(1 / width, 1 / height)
		}
	}

	private setCameraPosition = (width: number) => {
		let z = 1.0 - THREE.MathUtils.smoothstep(width, 769, 1600)
		z = z * (5 - 3) + 3
		this.simulator!.cameraPositionZ = z
		this.screenMat!.uniforms.u_camPosZ.value = z
	}

	private setPostprocessing = () => {
		this.fxaa = new ShaderPass(FXAAShader)
		this.fxaa.uniforms.resolution.value.set(1 / this.size.width, 1 / this.size.height)
		this.effectComposer.addPass(this.fxaa)
	}

	private update = () => {
		this.simulator.update(this.renderer)
		spheres.forEach((sphere, i) => {
			this.screenMat!.uniforms.u_spheres.value[i].position = sphere.position
		})
	}

	private setDispose = () => {
		this.disposeCallback = () => {
			this.simulator.dispose()
		}
	}
}
