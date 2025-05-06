import { ThemeProvider } from '@/app/providers/ThemeProvider'
import type { DecoratorFunction } from 'storybook/internal/csf'

export const ThemeDecorator: DecoratorFunction = (StoryFn, context) => {
	return (
		<div
			className={`app ${context.globals.theme}`}
			style={{ margin: '-15px' }}
		>
			<ThemeProvider>
				<StoryFn />
			</ThemeProvider>
		</div>
	)
}
