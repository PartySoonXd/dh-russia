import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'
import DotenvWebpackPlugin from 'dotenv-webpack'

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { isDev, paths } = options

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new DotenvWebpackPlugin({
			path: path.resolve(__dirname, '..', '..', '.env'),
		}),
	]

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin({}))
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}))
	}

	return plugins
}
