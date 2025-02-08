import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  options: string[];
  onSelectionChange?: (selectedValue: string) => void;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelectionChange,
  defaultValue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onSelectionChange) {
      onSelectionChange(option);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-40 text-black">
      <div 
        className="border rounded px-4 py-2 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue}
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full border rounded mt-1 bg-white shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;