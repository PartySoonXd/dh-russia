import type { Preview } from '@storybook/react'
import '@app/styles/index.scss'
import { ThemeDecorator } from './decorators/ThemeDecorator'
import { globalTypes } from './globalTypes'
import { RouterDecorator } from './decorators/RouterDecorator'
import I18nDecorator from './decorators/I18nDecorator'

const preview: Preview = {
	globalTypes: globalTypes,
	decorators: [
		I18nDecorator,
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
