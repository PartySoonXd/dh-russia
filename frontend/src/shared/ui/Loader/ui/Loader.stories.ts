import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
	title: 'Shared/Loader',
	component: Loader,
}

type Story = StoryObj<typeof Loader>

export const Default: Story = {
}

export default meta
