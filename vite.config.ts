import path from 'path';
import { defineConfig, Plugin } from 'vite';
import glsl from 'vite-plugin-glsl';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
	console.log('⚓ ' + mode)
	return {
		root: './src',
		base: mode === 'development' ? '/' : '/physical-raymarchig/',
		publicDir: '../public',
		plugins: [
			glsl(),
			handlebars({
				partialDirectory: path.resolve(__dirname, './src/partials/')
			}) as Plugin
		],
		build: {
			outDir: '../dist',
			rollupOptions: {
				input: {
					home: path.resolve(__dirname, './src/index.html')
				}
			},
			cssCodeSplit: false,
			emptyOutDir: true
		},
		server: {
			host: true
		}
	}
})
