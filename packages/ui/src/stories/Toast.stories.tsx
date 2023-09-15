import type { Meta, StoryObj } from "@storybook/react";

import { useToast, Button, Toast, Toaster, ToastAction } from "../";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Simple: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
            duration: 5000,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
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
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
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
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Success: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "success",
            title: "Your message has been sent.",
            description: "We'll get back to you as soon as we can.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "warning",
            title: "Your message has been sent.",
            description: "We'll get back to you as soon as we can.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const Info: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "info",
            title: "Your message has been sent.",
            description: "We'll get back to you as soon as we can.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};
