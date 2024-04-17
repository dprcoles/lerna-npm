import type { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonSize, ButtonVariant } from "../src/Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: "radio" },
    },
    size: {
      options: Object.values(ButtonSize),
      control: { type: "radio" },
    },
    as: { control: { type: "text" } },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Overview: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.Primary,
  },
}

export const OnClick: Story = {
  args: {
    onClick: () => alert("You clicked me!"),
    children: "Click to trigger",
    variant: ButtonVariant.Primary,
  },
}

export const CustomElement: Story = {
  args: {
    href: "#",
    as: "a",
    children: "Custom element",
    variant: ButtonVariant.Link,
  },
}

export const FullWidth: Story = {
  args: {
    children: "Full width",
    isFullWidth: true,
    variant: ButtonVariant.Primary,
  },
}
