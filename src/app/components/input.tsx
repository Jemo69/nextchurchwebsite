import React from 'react';

interface InputProps {
  id?:string
  name: string;
  placeholder: string;
  type?: string; // Optional, defaults to 'text'
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Allow overriding or extending default classes
  disabled?: boolean; // Optional disabled prop
  required?: boolean; // Optional required prop
}

const CustomInput: React.FC<InputProps> = ({
  name,
  placeholder,
  type = 'text', // Default type to 'text' if not provided
  value,
  onChange,
  className = "bg-[#222630] px-4 py-3 my-2 w-full outline-none w-[280px] focus:bg-[#222630] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95]  border-[#2B3040]" // Default classes
}) => {
  return (
    <input
      id={name}
      className={className}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
