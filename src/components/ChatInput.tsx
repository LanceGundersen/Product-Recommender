"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


interface ChatInputProps {
  /**
   * The submit function
   */
  onSubmit: (message: string) => void;
}

/**
 * Primary UI component for a chat input
 */
export const ChatInput = ({
  onSubmit,
}: ChatInputProps) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData('');
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="I am looking for ..." value={formData} onChange={(e) => setFormData(e.target.value)} />
        <Button type="submit">Ask PRB</Button>
      </div>
    </form>
  );
};
