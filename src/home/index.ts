import { TCanvas } from './TCanvas';

class App {
	private canvas: TCanvas

	constructor() {
		const parentNode = document.querySelector('.home')!
		this.canvas = new TCanvas(parentNode)

		window.addEventListener('beforeunload', this.handleBeforeunload)
	}

	private handleBeforeunload = () => {
		this.canvas.dispose()
	}
}

new App()
