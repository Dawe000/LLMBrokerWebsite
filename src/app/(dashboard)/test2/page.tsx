"use client";

import { client } from "../../client";
import { TransactionButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia} from "thirdweb/chains";
import Dropdown from "@/app/components/dropdown";
import { useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import ChatHeader from "@/app/components/chatheader";





export default function Home() {
  



  return (
    <div className="flex flex-col min-h-screen">
      
      
      {/* Main Content Below the Header */}
      <main className="p-4 pb-10 flex-grow container max-w-screen-lg mx-auto">
        {/* Your main page content goes here */}
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <ChatHeader/>
      </main>
    </div>
  );
}