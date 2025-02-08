"use client";
import React from 'react';
import { TransactionButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia} from "thirdweb/chains";
import Dropdown from "@/app/components/dropdown";
import { useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import {client} from "../client";
import TransactTokensContainer from "./transacttokenscontainer";



const ChatHeader = () => {

  const account = useActiveAccount();
  const chain = sepolia;

  const contract = getContract({
    address: "0xF59dC8bd3bA1bAd1b7a052dCEAb406d619eD1C57",
    chain: sepolia,
    client,
  });

  const transaction = prepareContractCall({
    contract,
    method: "function store(uint256 value)",
    params: [123n],
  });

  const [selectedValue, setSelectedValue] = useState('');

  function handleSelectionChange(selectedValue: string) {
    setSelectedValue(selectedValue);
    console.log(`Selected value: ${selectedValue}`);
  }

  function handleSuccess() {
    console.log("Transaction successful!");
  }

  function handleError(error: Error) {
    console.error("Transaction failed:", error);
  }
  
    return (
      <header className="w-full px-6 py-4 bg-gray-900 shadow-md rounded-t-lg"> {/* Added rounded top corners */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1"> {/* Left side */}
            <Dropdown 
              options={["op1","op2","op3"]} 
              onSelectionChange={handleSelectionChange} 
              defaultValue="op1"
            />
          </div>
          
          <div className="flex items-center gap-x-6"> {/* Right side with proper spacing */}
            <p className="text-white text-sm font-medium">Numtokens</p>
            <TransactionButton
              transaction={() => transaction}
              onTransactionConfirmed={handleSuccess}
              onError={handleError}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200" // Enhanced button styling
            >
              Confirm Transaction
            </TransactionButton>
          </div>
        </div>
      </header>
    );
  };
  
  export default ChatHeader;