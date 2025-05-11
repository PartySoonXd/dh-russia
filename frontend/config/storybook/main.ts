import type { StorybookConfig } from '@storybook/react-webpack5'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { DefinePlugin } from 'webpack'

import buildCssLoader from '../build/loaders/buildCssLoader'
import buildSvgLoader from 'config/build/loaders/buildSvgLoader'
import { RuleSetRule } from 'webpack'

const config: StorybookConfig = {
	stories: [
		'../../src/**/*.mdx',
		'../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	staticDirs: ['../../public'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@newhighsco/storybook-addon-svgr',
			options: {
				svgrOptions: {
					icon: true,
					expandProps: false,
				},
			},
		},
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
			config.plugins.push(
				new DefinePlugin({
					__IS_DEV__: true,
				}),
			)
		}

		if (config.module) {
			const cssLoader = buildCssLoader(true)
			const svgLoader = buildSvgLoader()

			// @ts-ignore
			config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
				if (/\.svg/.test(rule.test as string)) {
					return {
						...rule, exclude: /\.svg$/i,
					}
				}

				return rule
			})

			config.module.rules?.push(svgLoader)
			config.module.rules?.push(cssLoader)
		}

		return config
	},
}
export default config
