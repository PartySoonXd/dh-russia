import type { Preview } from '@storybook/react'
import '@app/styles/index.scss'
import { ThemeDecorator } from './decorators/ThemeDecorator'
import { globalTypes } from './globalTypes'
import { RouterDecorator } from './decorators/RouterDecorator'

const preview: Preview = {
	globalTypes: globalTypes,
	decorators: [
		ThemeDecorator,
		RouterDecorator,
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
