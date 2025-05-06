import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
	.use(initReactI18next)
	.init({
		lng: 'en',
		fallbackLng: 'en',
		ns: ['translationsNS'],
		defaultNS: 'translationsNS',
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react!!
		},
		resources: { en: { translationsNS: {} } },
	}).then(() => {
		console.log('i18n test done')
	}).catch((err) => {
		console.log('i18n test failed with', err)
	})

export default i18n
