import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '@/components/ui/input';

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // You can define controls for props like 'placeholder', 'disabled', etc.
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<InputProps>;

export default meta;

// Type for the story object
type Story = StoryObj<typeof meta>;

// Default Input story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Disabled Input story
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input',
  },
};

// Example with different border color
export const WithCustomBorder: Story = {
  args: {
    placeholder: 'Custom Border',
    className: 'border-2 border-primary', // Assuming 'border-primary' is a defined class in your project
  },
};

// Add more stories to cover different states or variations of your Input component
