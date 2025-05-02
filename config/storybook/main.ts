import type { StorybookConfig } from '@storybook/react-webpack5'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import buildCssLoader from '../build/loaders/buildCssLoader'

const config: StorybookConfig = {
	stories: [
		'../../src/**/*.mdx',
		'../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	// eslint-disable-next-line
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions,
				}),
			]
		}

		if (config.plugins) {
			config.plugins.push(
				new MiniCssExtractPlugin(),
			)
		}

		if (config.module) {
			const cssLoader = buildCssLoader(true)

			config.module.rules?.push(cssLoader)
		}

		return config
	},
}
export default config
