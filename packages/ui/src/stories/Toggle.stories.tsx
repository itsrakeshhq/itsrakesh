import { FontBoldIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "../";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: <FontBoldIcon className="h-4 w-4" />,
    "aria-label": "Toggle bold",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithText: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <FontBoldIcon className="mr-2 h-4 w-4" />
        Italic
      </>
    ),
  },
};
