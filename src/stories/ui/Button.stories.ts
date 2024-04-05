import { Button, ButtonProps } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    // Example of adding a color control for dynamic color changes in Storybook UI
    // backgroundColor: { control: 'color' },
  },
  // args can be used here if you want to set default values for all stories
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Button story
export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
    // You can add more default args here
  },
};

// Destructive Button story
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

// Outline Button story
export const Outline: Story = {
  args: {
    children: 'Learn More',
    variant: 'outline',
  },
};

// Add more variant stories as needed
