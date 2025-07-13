import React from 'react';

interface SimpleButtonProps {
  onClick?: () => void; // Optional onClick function prop
  inform: string;
  type?: string; // Optional type prop, default is 'button'
  disabled?: boolean; // Optional disabled prop
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ onClick,inform }) => {
  return (
    <button
      
      onClick={onClick} // Attach the onClick handler
      className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-accent-600 bg-secondary-100 px-5 py-3 font-medium text-text-500 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
    >
    {inform}
    </button>
  );
};

export default SimpleButton;
