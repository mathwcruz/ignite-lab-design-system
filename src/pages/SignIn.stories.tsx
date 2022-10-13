import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { SignIn } from "./SignIn";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {
    children: "Hit me",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    mws: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: "Ok!"
          }));
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Entry your email address"),
      "matheuswachcruz@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("************"), "testecruzin");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(
        canvas.getByText("You have successfully signed in")
      ).toBeInTheDocument();
    });
  },
};
