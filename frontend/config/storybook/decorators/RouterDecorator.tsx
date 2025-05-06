import { BrowserRouter } from 'react-router-dom'
import type { DecoratorFunction } from 'storybook/internal/csf'

export const RouterDecorator: DecoratorFunction = (StoryFn) => {
	return (
		<BrowserRouter>
			<StoryFn />
		</BrowserRouter>
	)
}
