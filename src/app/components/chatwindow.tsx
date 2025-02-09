"use client"
import { useState } from 'react';
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import ChatInput from "./chatinput";

interface Message {
    role: string;
    content: string;
}

const ChatWindow = ({ initialMessages = [] }: { initialMessages?: Message[] }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const handleSubmit = async (input: string) => {
        // Add user message
        const userMessage: Message = {
            role: "user",
            content: input
        };
        
        setMessages(prevMessages => [...prevMessages, userMessage]);

        // Here you can call your API or other function
        // For example:
        try {
            // const response = await yourApiCall(input);
            // Add bot response
            const botMessage: Message = {
                role: "bot",
                content: "This is a sample response" // Replace with actual response
            };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1200px] h-[600px] bg-gray-800 rounded-lg shadow-lg flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <MessageBox 
                            className="text-black"
                            key={index}
                            position={message.role === "user" ? "right" : "left"}
                            type={"text"}
                            title={message.role === "user" ? "You" : "Bot"}
                            text={message.content}
                            date={new Date()}
                            id={index.toString()}
                            focus={false}
                            titleColor={message.role === "user" ? "#007AFF" : "#4CAF50"}
                            status="sent"
                            notch={true}
                            forwarded={false}
                            replyButton={false}
                            removeButton={false}
                            copiableDate={false}
                            retracted={false}
                        />
                    ))}
                </div>
                
                <div className="border-t border-gray-200 p-0">
                    <ChatInput onSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;