import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const buildCssLoader = (isDev: boolean) => {
	return {
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
}

export default buildCssLoader
