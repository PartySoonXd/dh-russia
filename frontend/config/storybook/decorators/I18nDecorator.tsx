import { DecoratorFunction } from 'storybook/internal/types'
import { Suspense, useEffect } from 'react'
import i18n from '@/shared/config/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

const I18nDecorator: DecoratorFunction = (StoryFn, context) => {
	const { locale } = context.globals

	useEffect(() => {
		// eslint-disable-next-line
		i18n.changeLanguage(locale ? locale : 'ru')
	}, [locale])

	return (
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<StoryFn />
			</I18nextProvider>
		</Suspense>
	)
}

export default I18nDecorator
