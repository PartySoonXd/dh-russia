import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		theme: ButtonTheme.PRIMARY,
		children: 'Primary',
	},
}

export const Clear: Story = {
	args: {
		theme: ButtonTheme.CLEAR,
		children: 'Clear',
	},
}
