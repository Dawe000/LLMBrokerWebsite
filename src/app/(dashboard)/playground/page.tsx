"use client";

import { client } from "../../client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia} from "thirdweb/chains";
import ChatContainer from "../../components/chatcontainer"

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
        <ChatContainer/>
      </main>
    </div>
  );
}