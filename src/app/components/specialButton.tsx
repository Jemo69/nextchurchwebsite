import React from "react";

// Define the props interface for the button component
// Use PascalCase for interface names and camelCase for prop names
interface SpecialButtonProps {
  onClick?: () => void; // Optional onClick function prop
  inform: string;       // Text content for the button
}

// Define the functional component using the props interface
// Use PascalCase for component names
const SpecialButton: React.FC<SpecialButtonProps> = ({ onClick, inform }) => {
  return (
    // Attach the onClick handler and use the inform prop for the button text
    <button
      onClick={onClick} // Use the onClick prop
      className="cursor-pointer flex justify-between items-center bg-accent-200 px-3 py-2 rounded-full text-primary-500 tracking-wider shadow-xl hover:bg-accent-50 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
    >
      {inform} {/* Use the inform prop for the button text */}
      <svg
        className="w-5 h-5 animate-bounce ml-2" // Added margin-left for spacing
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default SpecialButton;
