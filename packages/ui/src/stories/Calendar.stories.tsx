import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Calendar } from "../";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};
