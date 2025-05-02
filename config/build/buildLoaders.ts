import webpack from 'webpack'
import { BuildOptions } from './types/config'
import buildCssLoader from './loaders/buildCssLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [{
			loader: 'file-loader',
		}],
	}

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	}

	const styleLoader = buildCssLoader(isDev)

	const tsLoader = {
		test: /\.tsx?$/,
		loader: 'ts-loader',
		exclude: '/node_modules/',
	}

	return [
		fileLoader,
		svgLoader,
		tsLoader,
		styleLoader,
	]
}
