"use client"
import { useState } from "react";
import React from 'react';

interface InputProps {
  id?: string;
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
  type = 'text',
  value,
  onChange,
  className = "bg-[#222630] px-4 py-3 my-2 w-full outline-none w-[280px] focus:bg-[#222630] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95]  border-[#2B3040]",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative w-full">
      <input
        id={name}
        className={className}
        name={name}
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {isPassword && (
        <button
          type="button"
          tabIndex={-1}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 focus:outline-none"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            // Eye open SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            // Eye closed SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.7 6.7A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
