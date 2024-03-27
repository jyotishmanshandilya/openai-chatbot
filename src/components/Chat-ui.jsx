"use client"

import { useChat } from 'ai/react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ChatUI() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full max-w-3xl mx-auto md:mt-10 border border-gray-200 rounded-lg divide-y divide-gray-200">
      <div className="grid w-full p-4 gap-2">
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
      </div>
      <div className="p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : ""
            } items-end space-x-2`}
          >
            <div
              className={`flex flex-col space-y-1 items-${
                message.role === "user" ? "end" : "start"
              }`}
            >
              <div className="rounded-lg p-4 bg-gray-100 ">
                {message.content}
              </div>
              <div className="text-xs text-gray-500">
                {message.role === "user" ? "You" : "Chatbot"}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message"
            className="text-gray-100"
          />
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </div>
    </div>
  );
}
