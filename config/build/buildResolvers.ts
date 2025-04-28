import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import { BuildOptions } from './types/config'

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
	}
}
