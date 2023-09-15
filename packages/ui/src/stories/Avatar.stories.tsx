import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "../";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://github.com/rakeshpotnuru.png"
        alt="@rakeshpotnuru"
      />
      <AvatarFallback>RP</AvatarFallback>
    </Avatar>
  ),
};
