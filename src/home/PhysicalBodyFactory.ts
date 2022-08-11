import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { PhysicalBody } from '../scripts/CannonBase';
import { SphereDetaile, Tuple2, Tuple3 } from './type';

export class SphereBody extends PhysicalBody {
	constructor(world: CANNON.World, private detaile: SphereDetaile, private mass = 1) {
		super(world)
		this.createBody()
	}

	private createBody = () => {
		const { radius, position } = this.detaile

		const body = new CANNON.Body({
			mass: this.mass,
			shape: new CANNON.Sphere(radius),
			linearDamping: 0.95,
			fixedRotation: true
		})
		body.position.set(position[0], position[1], position[2])
		this.setBody(body)
	}

	debug = (scene: THREE.Scene, material?: THREE.Material) => {
		const geometry = new THREE.SphereGeometry(this.detaile.radius)
		const _material = material ?? new THREE.MeshBasicMaterial({ wireframe: true })
		const mesh = new THREE.Mesh(geometry, _material)
		this.setDebugMesh(scene, mesh)
	}

	update = () => {
		this.applyForce(-30 * this.detaile.radius)
		this.syncDebugMesh()
		return this.coordinates
	}
}

export class SphereRigidBody extends PhysicalBody {
	constructor(world: CANNON.World, private radius = 1) {
		super(world)
		this.createBody()
	}

	private createBody = () => {
		const body = new CANNON.Body({
			type: CANNON.Body.KINEMATIC,
			shape: new CANNON.Sphere(this.radius)
		})
		this.setBody(body)
	}

	debug = (scene: THREE.Scene, material?: THREE.Material) => {
		const geometry = new THREE.SphereGeometry(this.radius)
		const _material = material ?? new THREE.MeshBasicMaterial({ wireframe: true })
		const mesh = new THREE.Mesh(geometry, _material)
		this.setDebugMesh(scene, mesh)
	}

	update = (mouse: THREE.Vector3) => {
		this.body!.position.set(mouse.x, mouse.y, mouse.z)
		this.syncDebugMesh()
	}
}

export class PlaneStaticBody extends PhysicalBody {
	constructor(world: CANNON.World, private position: Tuple3 = [0, 0, 0], private rotation: Tuple3 = [0, 0, 0]) {
		super(world)
		this.createBody()
	}

	private createBody = () => {
		const body = new CANNON.Body({
			type: CANNON.Body.STATIC,
			shape: new CANNON.Plane(),
			position: new CANNON.Vec3(this.position[0], this.position[1], this.position[2]),
			quaternion: new CANNON.Quaternion().setFromEuler(this.rotation[0], this.rotation[1], this.rotation[2])
		})
		this.setBody(body)
	}

	debug = (scene: THREE.Scene, size: Tuple2 = [1, 1], material?: THREE.Material) => {
		const geometry = new THREE.PlaneGeometry(size[0], size[1])
		const _material = material ?? new THREE.MeshBasicMaterial({ wireframe: true })
		const mesh = new THREE.Mesh(geometry, _material)
		this.setDebugMesh(scene, mesh)
	}

	update = () => {
		this.syncDebugMesh()
	}
}
