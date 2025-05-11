import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import { BuildOptions } from './types/config'
import path from 'path'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	const { paths } = options

	return {
		extensions: [
			'.ts', '.tsx', '.js',
		],
		plugins: [
			new TsconfigPathsPlugin({}),
		],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {
			'@app': path.resolve(__dirname, '..', '..', 'src', 'app'),
			'@entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
			'@features': path.resolve(__dirname, '..', '..', 'src', 'features'),
			'@shared': path.resolve(__dirname, '..', '..', 'src', 'shared'),
			'@pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
			'@widgets': path.resolve(__dirname, '..', '..', 'src', 'widgets'),
		},
	}
}
