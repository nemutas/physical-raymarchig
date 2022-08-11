import { TCanvas } from './TCanvas';

class App {
	constructor() {
		const parentNode = document.querySelector('.home')!
		new TCanvas(parentNode)
	}
}

new App()
