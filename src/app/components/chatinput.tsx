"use client"
import React, { useState } from 'react';

interface ChatInputProps {
    onSubmit: (value: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput(''); // Clear input after submission
    }
  };

  return (
    <main className="p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center border border-gray-300 rounded-md">
          <input 
            className="text-gray-600 flex-grow p-2 border-none focus:ring-0 focus:outline-none" 
            placeholder="Enter your prompt..." 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            className="p-2 hover:bg-gray-100 focus:outline-none" 
            type="submit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6 text-gray-600" viewBox="0 -0.5 25 25">
              {/* ... SVG path ... */}
            </svg>
          </button>
        </div>
      </form>
    </main>
  );
}

export default ChatInput;