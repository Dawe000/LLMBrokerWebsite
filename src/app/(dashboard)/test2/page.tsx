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
<<<<<<< HEAD
        <h1 className="text-2xl font-bold">Welcome to the Docs</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Useful Links</h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a href="https://github.com/Dawe000/LLMBroker" className="text-white hover:underline">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/llmbrokerapilib" className="text-white hover:underline">
                NPM Module
              </a>
            </li>
          </ul>
        </div>
=======
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
>>>>>>> 1abc340 (post hackathon cleanup commit)
      </main>
    </div>
  );
}