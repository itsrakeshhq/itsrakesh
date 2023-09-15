import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "../";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        style={{
          objectFit: "fill",
        }}
        className="rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
