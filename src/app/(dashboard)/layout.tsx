"use client";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";
import Header from "../components/header";
import { sepolia, ethereum} from "thirdweb/chains";

// Define the wallets you want to support
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  // Add other wallets as needed
];

const chains = [sepolia,ethereum];

const radioOptions = [
  { label: 'test1', value: '/' },
  { label: 'test2', value: '/test2' },
  { label: 'test3', value: '/test3' },
  // Add more options here if needed
];




export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>   
            <Header client={client} wallets={wallets} radioOptions={radioOptions} chains={chains}/>
            <div>{children}</div>
        </div>
        
    );
  }