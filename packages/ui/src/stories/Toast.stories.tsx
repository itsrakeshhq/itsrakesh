import type { Meta, StoryObj } from "@storybook/react";

import { Button, Toaster, toast } from "../components";

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster richColors closeButton />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Simple: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast("Event has been created.");
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast("Uh oh! Something went wrong.", {
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast.error("Event has not been created");
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Success: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast.success("Event has been created");
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Warning: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast.warning("Event start time cannot be earlier than 8am");
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Info: Story = {
  render: () => {
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast.info("Be at the area 10 minutes before the event time");
        }}
      >
        Show Toast
      </Button>
    );
  },
};
