// https://pmndrs.github.io/cannon-es/docs/
// https://github.com/nemutas/r3f-water-drops

import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { Mouse3d } from '../scripts/Mouse3d';
import { spheres } from './datas';
import { PlaneStaticBody, SphereBody, SphereRigidBody } from './PhysicalBodyFactory';

export class Simulator {
	private renderTarget!: THREE.WebGLRenderTarget
	private scene!: THREE.Scene
	private camera!: THREE.PerspectiveCamera
	private world!: CANNON.World
	private mouse3d!: Mouse3d

	private sphereBodies: SphereBody[] = []
	private sphereRigidBody?: SphereRigidBody

	constructor(width: number, height: number) {
		this.init(width, height)
		this.createMesh()
	}

	private init = (width: number, height: number) => {
		// render target
		this.renderTarget = new THREE.WebGLRenderTarget(width, height)
		// scene
		this.scene = new THREE.Scene()
		// camera
		this.camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 100)
		this.camera.position.set(0, 0, 3)
		this.camera.lookAt(0, 0, 0)
		// world
		this.world = new CANNON.World({ gravity: new CANNON.Vec3(0, 0, 0) })
		// mouse event
		this.mouse3d = new Mouse3d(this.camera)
	}

	private createMesh = () => {
		// sphere
		this.sphereBodies = spheres.map(sphere => {
			const body = new SphereBody(this.world, sphere)
			body.debug(this.scene)
			return body
		})

		// mouse tracker
		this.sphereRigidBody = new SphereRigidBody(this.world, 0.5)
		this.sphereRigidBody.debug(this.scene, new THREE.MeshBasicMaterial({ color: '#f00', wireframe: true }))

		// constraints
		const back = new PlaneStaticBody(this.world, [0, 0, -0.7], [0, 0, 0])
		back.debug(this.scene, [2, 2])
		back.update()

		const front = new PlaneStaticBody(this.world, [0, 0, 0.7], [Math.PI, 0, 0])
		front.debug(this.scene, [2, 2])
		front.update()
	}

	get texture() {
		return this.renderTarget.texture
	}

	set cameraPositionZ(z: number) {
		this.camera.position.z = z
	}

	handleResize = (width: number, height: number) => {
		this.camera.aspect = width / height
		this.camera.updateProjectionMatrix()
		this.renderTarget.setSize(width, height)
	}

	update = (renderer: THREE.WebGLRenderer) => {
		this.world.fixedStep()

		this.sphereBodies.forEach((body, i) => {
			const { position } = body.update()
			spheres[i].position = position.toArray()
		})

		this.sphereRigidBody?.update(this.mouse3d.position)

		renderer.setRenderTarget(this.renderTarget)
		renderer.render(this.scene, this.camera)
		renderer.setRenderTarget(null)
	}
}
