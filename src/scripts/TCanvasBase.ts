import GUI from 'lil-gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

export type Assets = {
	[key in string]: {
		data?: THREE.Texture | THREE.VideoTexture | GLTF
		path: string
		encoding?: boolean
		flipY?: boolean
	}
}

export abstract class TCanvasBase {
	protected container: HTMLDivElement

	protected renderer: THREE.WebGLRenderer
	protected scene: THREE.Scene
	protected camera: THREE.Camera
	protected clock: THREE.Clock
	protected resizeCallback?: () => void
	protected disposeCallback?: () => void

	private _orbitControls?: OrbitControls
	private _gui?: GUI
	private enableOrbitControlsDamping = false
	private animeId?: number
	private composer?: EffectComposer
	private stats?: Stats

	constructor(parentNode: ParentNode, containerClassName = 'three-container') {
		let container: HTMLDivElement | null
		try {
			container = parentNode.querySelector<HTMLDivElement>(`.${containerClassName}`)
			if (!container) throw new Error(`undefind container: ${containerClassName}`)
		} catch (e) {
			console.error(e)
			throw e
		}

		this.container = container!

		const { renderer, scene, camera } = this.init()
		this.renderer = renderer
		this.scene = scene
		this.camera = camera

		this.clock = new THREE.Clock()

		this.addEvents()
	}

	// ------------------------------------------------------
	// initialize
	private init = () => {
		const { width, height, aspect } = this.size
		// renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(width, height)
		renderer.shadowMap.enabled = true
		renderer.outputEncoding = THREE.sRGBEncoding
		// ↓ with unreal bloom effect
		// renderer.toneMapping = THREE.ACESFilmicToneMapping
		// append canvas element
		this.container.appendChild(renderer.domElement)
		// scene
		const scene = new THREE.Scene()
		// camera
		const camera = new THREE.PerspectiveCamera(50, aspect, 0.01, 1000)
		camera.position.set(0, 0, 5)

		return { renderer, scene, camera }
	}

	// ------------------------------------------------------
	// utils
	protected get gui() {
		if (!this._gui) this._gui = new GUI()
		return this._gui
	}

	protected get size() {
		// const { offsetWidth: width, offsetHeight: height } = this.container
		const { innerWidth: width, innerHeight: height } = window
		const aspect = width / height
		return { width, height, aspect }
	}

	protected get effectComposer() {
		if (!this.composer) {
			this.composer = new EffectComposer(this.renderer)
			this.composer.addPass(new RenderPass(this.scene, this.camera))
		}
		return this.composer
	}

	protected setOrbitControls = (damping: number | false = 0.1) => {
		if (!this._orbitControls) this._orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		if (typeof damping === 'number') {
			this._orbitControls.enableDamping = true
			this._orbitControls.dampingFactor = damping
		} else {
			this._orbitControls.enableDamping = false
			this._orbitControls.dampingFactor = 0
		}
		this.enableOrbitControlsDamping = this._orbitControls.enableDamping
		return this._orbitControls
	}

	protected setPerspectiveCamera = (fov?: number, aspect?: number, near?: number, far?: number) => {
		this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
	}

	protected setOrthographicCamera = (
		left?: number,
		right?: number,
		top?: number,
		bottom?: number,
		near?: number,
		far?: number
	) => {
		this.camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far)
	}

	protected setStats = () => {
		if (!this.stats) {
			this.stats = Stats()
			this.container.appendChild(this.stats.dom)
		}
	}

	protected calcCoveredTextureScale = (texture: THREE.Texture, aspect: number, target?: THREE.Vector2) => {
		const result = target ?? new THREE.Vector2()
		const imageAspect = texture.image.width / texture.image.height

		if (aspect < imageAspect) result.set(aspect / imageAspect, 1)
		else result.set(1, imageAspect / aspect)

		return result
	}

	protected coveredBackgroundTexture = (texture: THREE.Texture) => {
		texture.matrixAutoUpdate = false
		const scale = this.calcCoveredTextureScale(texture, this.size.aspect)
		texture.matrix.setUvTransform(0, 0, scale.x, scale.y, 0, 0.5, 0.5)

		return texture
	}

	private getExtension = (path: string) => {
		const s = path.split('.')
		return s[s.length - 1]
	}

	protected loadAssets = async (assets: Assets) => {
		const textureLoader = new THREE.TextureLoader()
		const gltfLoader = new GLTFLoader()

		await Promise.all(
			Object.values(assets).map(async v => {
				const extension = this.getExtension(v.path)

				if (['jpg', 'png', 'webp'].includes(extension)) {
					const texture = await textureLoader.loadAsync(v.path)
					texture.userData.aspect = texture.image.width / texture.image.height
					v.encoding && (texture.encoding = THREE.sRGBEncoding)
					v.flipY !== undefined && (texture.flipY = v.flipY)
					v.data = texture
				} else if (['glb'].includes(extension)) {
					const gltf = await gltfLoader.loadAsync(v.path)
					v.data = gltf
				} else if (['webm', 'mp4'].includes(extension)) {
					const video = document.createElement('video')
					video.src = v.path
					video.muted = true
					video.loop = true
					video.autoplay = true
					video.preload = 'auto'
					video.playsInline = true
					// await video.play()
					const texture = new THREE.VideoTexture(video)
					texture.userData.aspect = video.videoWidth / video.videoHeight
					v.encoding && (texture.encoding = THREE.sRGBEncoding)
					v.data = texture
				}
			})
		)
	}

	// ------------------------------------------------------
	// helper
	protected setAxesHelper = (size?: number) => {
		const axesHelper = new THREE.AxesHelper(size)
		this.scene.add(axesHelper)
	}

	// ------------------------------------------------------
	// event
	private addEvents = () => {
		window.addEventListener('resize', this.handleResize)
	}

	private handleResize = () => {
		const { width, height, aspect } = this.size

		if (this.camera instanceof THREE.PerspectiveCamera) {
			this.camera.aspect = aspect
			this.camera.updateProjectionMatrix()
		} else if (this.camera instanceof ExOrthographicCamera) {
			this.camera.update(aspect)
		}

		this.renderer.setSize(width, height)
		this.composer?.setSize(width, height)

		this.resizeCallback && this.resizeCallback()

		this.render()
	}

	// ------------------------------------------------------
	// lifecycle
	protected animate = (callback?: () => void) => {
		this.animeId = requestAnimationFrame(this.animate.bind(this, callback))

		this.enableOrbitControlsDamping && this._orbitControls?.update()
		this.stats && this.stats.update()

		callback && callback()

		this.render()
	}

	protected render = () => {
		if (!this.composer) {
			this.renderer.render(this.scene, this.camera)
		} else {
			this.composer.render()
		}
	}

	dispose = () => {
		this.disposeCallback && this.disposeCallback()

		this.stats && this.container.removeChild(this.stats.dom)
		this._gui && this._gui.destroy()

		this.animeId && cancelAnimationFrame(this.animeId)
		window.removeEventListener('resize', this.handleResize)
	}
}

export class ExOrthographicCamera extends THREE.OrthographicCamera {
	constructor(private halfHeight: number, near: number, far: number, aspect: number) {
		const halfWidth = halfHeight * aspect
		super(-halfWidth, halfWidth, halfHeight, -halfHeight, near, far)
	}

	update = (aspect: number) => {
		const halfWidth = this.halfHeight * aspect
		this.left = -halfWidth
		this.right = halfWidth
		this.updateProjectionMatrix()
	}
}
