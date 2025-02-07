"use client";

import { client } from "../../client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia} from "thirdweb/chains";
import ChatWindow from "../../components/chatwindow"

export default function Home() {
  const account = useActiveAccount();
  const chain = sepolia;
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain,
    address: account?.address,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="p-4 pb-10 flex-grow container max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold">Docs</h1>
        <p>Wallet address: {account?.address}</p>
        <p>
          Wallet balance: {balance?.displayValue} {balance?.symbol}
        </p>
        <p>This is page 3</p>
        <ChatWindow initialMessages = {[
			{
				"role": "user",
				"content": "Test"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
		{
				"role": "user",
				"content": "Thank you for your help"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			},
			{
				"role": "assistant",
				"content": "<think>\n\n</think>\n\nHello! It looks like you're testing. How can I assist you today? If you have any questions or need help with something, feel free to ask!"
			}
		]}/>
      </main>
    </div>
  );
}