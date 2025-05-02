import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
	title: 'Shared/AppLink',
	component: AppLink,
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
		children: 'Primary',
	},
}

export const Inverted: Story = {
	args: {
		theme: AppLinkTheme.INVERTED,
		children: 'Inverted',
	},
}
