"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Option {
    label: string;
    value: string;
}

interface RadioProps {
    options?: Option[];
    color?: string;
}

const Radio: React.FC<RadioProps> = ({
    options = [{ label: "test", value: "test" }, { label: "test2", value: "test2" }],
    color = 'blueviolet'}) => {

    const pathname = usePathname();

    const getGradientStyle = (isSelected: boolean): React.CSSProperties => {
        if (isSelected) {
            return {
                backgroundImage: `linear-gradient(to right, ${color}, red)`,
                color: 'white',
            };
        }
        return {};
    };

    return (
        <div className="inline-flex space-x-2 border-3 rounded-xl select-none">
            {options.map((option) => (
                <Link key={option.value} href={option.value} passHref>
                    <label
                        className="radio flex items-center justify-center rounded-lg p-1 cursor-pointer transition bg-white duration-150 ease-in-out hover:border-2 hover:border-red-500 border-2 border-transparent"
                        style={getGradientStyle(pathname === option.value)}
                    >
                        <input
                            type="radio"
                            name="radio"
                            value={option.value}
                            className="hidden"
                        />
                        <span
                            className={`tracking-widest ${
                                pathname === option.value ? 'text-white' : 'text-gray-700'
                            } px-4 py-2 rounded-lg transition duration-150 ease-in-out`}
                        >
                            {option.label}
                        </span>
                    </label>
                </Link>
            ))}
        </div>
    );
};

export default Radio;