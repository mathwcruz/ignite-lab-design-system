import { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "."

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Hit me",
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
    maxWidth: {
      control: {
        type: 'number'
      }
    },
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};

export const MaxWidth: StoryObj<ButtonProps> = {
  args: {
    children: "Log in",
    maxWidth: 500,
  }
};