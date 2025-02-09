"use client";
import React, { useEffect } from 'react';
import { TransactionButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import Dropdown from "@/app/components/dropdown";
import { useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import { client } from "../client";
import TransactTokensContainer from "./transacttokenscontainer";
import UserApi from "llmbrokerapilib";
import { Aoboshi_One } from 'next/font/google';

interface ChatHeaderProps {
    onServerSelect: (server: any) => void;
    onUpdateTokens: (tokens: number) => void; // Add a callback for updating tokens
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onServerSelect, onUpdateTokens }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [numTokens, setNumTokens] = useState<string>('0');
    const account = useActiveAccount();

    function handleSelectionChange(selectedValue: string) {
        setSelectedValue(selectedValue);
        console.log(`Selected value: ${selectedValue}`);
    }

    // Add a function to update tokens
    const updateTokens = async (serverContract: string) => {
        try {
            const api = new UserApi(client, account);
            const agreementAddress = await api.GetClientAgreement(serverContract, account?.address);
            if (agreementAddress) {
                const tokens = await api.GetRemainingTokens(agreementAddress);
                setNumTokens(tokens.toString());
                onUpdateTokens(tokens); // Update tokens in the parent component
            }
        } catch (error) {
            console.error("Error fetching tokens:", error);
        }
    };

    async function handleClick() {
        let api = new UserApi(client, account);
        try {
            const servers = await api.GetServerList();
            console.log(servers);

            // Use selectedValue instead of hardcoded value
            const selectedServer = await api.GetSortedServers(selectedValue);
            console.log(selectedServer);
            const depositamount = BigInt("100000000000000000"); // 0.1 FLR in wei
            const publickey = "-----BEGIN PUBLIC KEY-----MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGg/SPdLQlP0Fu671ucCCewME9T7iFduptUq+PaA9FfiVrnOFN8GTCrXMhznAbcPsqnElmnlIgWLGlc1IjJJ7n0z7l8469TU70+AptSTjp00dzp6tMGe0MIk0T8m3guJYXqe4H/J9XRM7276SNLVQsAdEsXODkC24PS19eK9LinXAgMBAAE=-----END PUBLIC KEY-----"

            // Add check for valid server selection
            if (!selectedServer || selectedServer.length === 0) {
                throw new Error("No servers available for selected model");
            }

            const result = await api.CreateAgreement(
                "0x51704f11Efd65Ce777db05B453B2BFe201A96Af0",
                publickey,
                depositamount
            );

            console.log(result);

            // Pass the selected server up
            onServerSelect(selectedServer[0]);

            // Update tokens after agreement is created
            await updateTokens(selectedServer[0].serverContract);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        // Initial token update
        updateTokens('0x51704f11Efd65Ce777db05B453B2BFe201A96Af0');
    }, []);

    return (
        <header className="w-full px-6 py-4 bg-gray-900 shadow-md rounded-t-lg"> {/* Added rounded top corners */}
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1"> {/* Left side */}
                    <Dropdown
                        options={["deepseek-r1:14b", "test"]}
                        onSelectionChange={handleSelectionChange}
                        defaultValue="deepseek-r1:14b"
                    />
                </div>

                <div className="flex items-center gap-x-6"> {/* Right side with proper spacing */}
                    <p className="text-white text-sm font-medium">{numTokens} tokens</p>
                    <button
                        onClick={handleClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Buy Tokens
                    </button>
                </div>
            </div>
        </header>
    );
};

export default ChatHeader;