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
  { label: 'Home', value: '/' },
  { label: 'Try it out', value: '/playground' },
  { label: 'Docs', value: '/test2' },
  // Add more options here if needed
];





export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>  
          <Header client={client} wallets={wallets} radioOptions={radioOptions} chains={chains}/>
          <span className="block h-24"></span>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500">{children}</div>
          
        </div>
        
    );
  }


