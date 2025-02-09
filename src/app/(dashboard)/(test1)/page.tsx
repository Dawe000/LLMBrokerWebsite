"use client";

import { client } from "../../client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia} from "thirdweb/chains";

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
      
      
      {/* Main Content Below the Header */}
      <main className="p-4 pb-10 flex-grow container max-w-screen-lg mx-auto">
        {/* Your main page content goes here */}
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p>Using idle hardware to provide decentralized LLM services </p>
      </main>
    </div>
  );
}