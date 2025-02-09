"use client"
import { useState } from 'react';
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import ChatInput from "./chatinput";
import UserApi from "llmbrokerapilib";
import { client } from "../client";
import { useActiveAccount } from "thirdweb/react";

interface Message {
    role: string;
    content: string;
}

interface ChatWindowProps {
    selectedServer: any;
    initialMessages?: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedServer, initialMessages = [] }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const account = useActiveAccount();

    const handleSubmit = async (input: string) => {
        if (!selectedServer) {
            console.error('No server selected');
            return;
        }

        const userMessage: Message = {
            role: "user",
            content: input
        };
        
        setMessages(prevMessages => [...prevMessages, userMessage]);

        try {
            const api = new UserApi(client, account);
            
            // Get the server endpoint
            const endpoint = await api.GetServerEndpoint(selectedServer.serverContract);
            const keypair = {
                publicKey: "-----BEGIN PUBLIC KEY-----MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGg/SPdLQlP0Fu671ucCCewME9T7iFduptUq+PaA9FfiVrnOFN8GTCrXMhznAbcPsqnElmnlIgWLGlc1IjJJ7n0z7l8469TU70+AptSTjp00dzp6tMGe0MIk0T8m3guJYXqe4H/J9XRM7276SNLVQsAdEsXODkC24PS19eK9LinXAgMBAAE=-----END PUBLIC KEY-----",
                privateKey: "-----BEGIN RSA PRIVATE KEY-----MIICWwIBAAKBgGg/SPdLQlP0Fu671ucCCewME9T7iFduptUq+PaA9FfiVrnOFN8GTCrXMhznAbcPsqnElmnlIgWLGlc1IjJJ7n0z7l8469TU70+AptSTjp00dzp6tMGe0MIk0T8m3guJYXqe4H/J9XRM7276SNLVQsAdEsXODkC24PS19eK9LinXAgMBAAECgYBCYhJPz2/kUCoOSjU2E5lH5AT4+le+/WplkiDJsCJomGwLk8y8nKECItj5iK0R6oAmFVaHBm8cwpC6ec5V4bho18+SMSWhw062FTKTsWtff9R+6U0VdtJ1BzI0mvriUpDqsrmr1YEjYFoBeg5PYtvNLpEiOqWoR/PMKUK2+WgnCQJBAKtKv2gI6s3iS+OiDIC+VAuCPPhu4eXmNeAGnsuY7vCbWt0f3a4fDX99xwInNB64omZV03oelgACg8qLRVKdMqUCQQCbzMqGNAJhfbdMQ3ldeqcBovcCAZIWiZEMpknU/qVZwvgswXuC1NtCCPbWNEV+5p69MgtTg311Vh6K6EX0IC3LAkAugp5UXk97Vd3rUj342zUw5s0tW9ZEuWyZhtKpT75ZYKWccyGbPN1KZ9mYkRKK4PFfviAtAY8TM5ubbJOHKh3tAkAP1Svvn3FuftwVv/WhbklyfSEk7wvthmVbJ7rxDj+3c3zM74yhqwftGgQbmIxHbSBMkb1c60vglLPd4eTZ/jspAkEAkiKoHJhHo0uoHopFxeqHB+xPNIj4ORenPpEUNTgvpw6aylPJw8HU+4Vpf07kI7xI8WLdDugoN+5vbqEWToZeEQ==-----END RSA PRIVATE KEY-----"
            }
            // Make the API call
            const response = await api.PromptAI(
                endpoint,
                messages.concat(userMessage), // Include full conversation history
                1000, // max_tokens - adjust as needed
                keypair, // keypair placeholder
                account?.address
            );

            const botMessage: Message = {
                role: "bot",
                content: response || "No response from server"
            };
            
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            
            // Add error message to chat
            const errorMessage: Message = {
                role: "bot",
                content: "Sorry, there was an error processing your request."
            };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
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