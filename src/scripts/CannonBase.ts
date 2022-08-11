import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { Tuple3 } from '../home/type';

export abstract class PhysicalBody {
	protected body?: CANNON.Body
	protected debugMesh?: THREE.Mesh
	private relativePoint = new CANNON.Vec3()
	private tVec3 = new THREE.Vector3()
	private cVec3 = new CANNON.Vec3()

	private _position = new THREE.Vector3()
	private _quaternion = new THREE.Quaternion()

	constructor(protected world: CANNON.World) {}

	abstract update: (...args: any) => any

	protected setBody = (body: CANNON.Body) => {
		this.body = body
		this.world.addBody(this.body)
	}

	protected setDebugMesh = (scene: THREE.Scene, mesh: THREE.Mesh) => {
		this.debugMesh = mesh
		scene.add(this.debugMesh)
	}

	protected get coordinates() {
		if (this.body) {
			this._position.set(this.body.position.x, this.body.position.y, this.body.position.z)
			this._quaternion.set(
				this.body.quaternion.x,
				this.body.quaternion.y,
				this.body.quaternion.z,
				this.body.quaternion.w
			)
		}
		return { position: this._position, quaternion: this._quaternion }
	}

	protected applyForce = (force: number, relativePoint: Tuple3 = [0, 0, 0]) => {
		if (this.body) {
			this.relativePoint.set(relativePoint[0], relativePoint[1], relativePoint[2])
			this.tVec3.set(this.body.position.x, this.body.position.y, this.body.position.z).normalize().multiplyScalar(force)
			this.body.applyForce(this.cVec3.set(this.tVec3.x, this.tVec3.y, this.tVec3.z), this.relativePoint)
		}
	}

	protected syncDebugMesh = () => {
		if (this.body && this.debugMesh) {
			const { position, quaternion } = this.coordinates
			this.debugMesh.position.copy(position)
			this.debugMesh.quaternion.copy(quaternion)
		}
	}
}
