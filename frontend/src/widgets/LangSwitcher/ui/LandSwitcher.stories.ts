import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
	title: 'Widgets/LangSwitcher',
	component: LangSwitcher,
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const Default: Story = {
}
