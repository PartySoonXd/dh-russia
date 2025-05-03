export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'Theme',
			items: [
				{ value: 'light', icon: 'sun', title: 'Light (default)' },
				{ value: 'dark', icon: 'moon', title: 'Dark' },
			],
			showName: true,
		},
	},
	locale: {
		name: 'Locale',
		description: 'Internationalization locale',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'en', title: 'English' },
				{ value: 'ru', title: 'Russian' },
			],
			showName: true,
		},
	},
}
