"use client";
import { ConnectButton } from "thirdweb/react";
import React from 'react';
import Radio from './radiobutton';

interface HeaderProps {
  client: any;
  wallets: any;
  radioOptions?: any; // Add the options property, making it optional
  chains?: any;
}

const Header: React.FC<HeaderProps> = ({ client, wallets, radioOptions, chains }) => {
  return (
    <header className="w-full px-6 py-4 bg-gray-800 shadow-md fixed top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Radio Buttons */}
        <Radio options={radioOptions} color="#6B46C1" /> {/* Adjust color as needed */}

        {/* Right Side: Connect Button */}
        <ConnectButton
          client={client}
          appMetadata={{
            name: 'Example App',
            url: 'https://example.com',
          }}
          wallets={wallets}
          chains={chains}
        />
      </div>
    </header>
  );
};

export default Header;