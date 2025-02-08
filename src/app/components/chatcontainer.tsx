"use client"
import ChatHeader from "./chatheader";
import ChatWindow from "./chatwindow";

const ChatContainer = () => {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <ChatHeader />
                <ChatWindow />
            </div>
        </div>
    );
};

export default ChatContainer;