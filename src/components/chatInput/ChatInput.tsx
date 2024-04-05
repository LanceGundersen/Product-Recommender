import React, { SyntheticEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


interface ChatInputProps {
  /**
   * The submit function
   */
  onSubmit: (message: String) => void;
}

/**
 * Primary UI component for a chat input
 */
export const ChatInput = ({
  onSubmit,
}: ChatInputProps) => {
  const [formData, setFormData] = useState(String);

  const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  })

  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData('');
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="I am looking for ..." onChange={handleChange} />
        <Button type="submit">Ask PRB</Button>
      </div>
    </form>
  );
};
