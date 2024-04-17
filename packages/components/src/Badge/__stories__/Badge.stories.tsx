import type { Meta, StoryObj } from "@storybook/react"

import { Badge, BadgeVariant } from "../src/Badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      options: Object.values(BadgeVariant),
      control: { type: "radio" },
    },
    as: { control: { type: "text" } },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Overview: Story = {
  args: {
    children: "Badge",
    variant: BadgeVariant.Primary,
  },
}

export const CustomElement: Story = {
  args: {
    href: "#",
    as: "a",
    children: "Custom element",
    variant: BadgeVariant.Outline,
  },
}
