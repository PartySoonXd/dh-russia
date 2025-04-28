import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

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

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[name]--[hash:base64:4]' : '[hash:base64:8]',
						exportLocalsConvention: 'as-is',
						namedExport: false,
					},
				},
			},
			'sass-loader',
		],
	}

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
