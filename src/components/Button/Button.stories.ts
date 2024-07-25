import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './ButtonComponent.vue'

const meta = {
  component: Button,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button'
  }
}
