// ChatInterface.tsx
"use client"

import React, { useState } from 'react';
import { ChatInput } from '@/components/ChatInput';
import { ChatBubble } from '@/components/ChatBubble';

import { faker } from '@faker-js/faker'; // TODO: REMOVE WITH DATA

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot', content: string }>>([]);

  const handleSubmit = (message: string) => {
    setMessages(current => [...current, { sender: 'user', content: message }]);
    fakeResponse();
  };

  // TODO: REMOVE WITH DATA
  const fakeResponse = () => {
    setTimeout(() => {
      setMessages(current => [...current, { sender: 'bot', content: faker.lorem.lines({ min: 1, max: 3 }) }]);
    }, 5000);
  }

  const userImage = faker.image.avatar();
  const botImage = faker.image.avatar();

  return (
    <div className="chat-interface">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <ChatBubble
              invertedAlignment={message.sender === 'bot' ? true : false}
              text={message.content}
              dateTime={faker.date.recent()}
              imgUrl={message.sender === 'bot' ? botImage : userImage}
            />
          </li>
        ))}
      </ul>
      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
};
