import * as THREE from 'three';
import { SphereDetaile } from './type';

const rand = (seed: number, min = 0.1, max = 0.4) => THREE.MathUtils.seededRandom(seed) * (max - min) + min

export const AMOUNT = 12

export const spheres: SphereDetaile[] = [...Array(AMOUNT)].map((_, i) => {
	const seed = i + 1
	return { radius: rand(seed), position: [rand(seed, -1, 1), rand(seed + 100, -1, 1), rand(seed + 200, -1, 1)] }
})
