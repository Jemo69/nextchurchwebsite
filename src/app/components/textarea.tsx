import React from "react";

interface TextAreaProps {
  id: string;
  placeholder: string;
  message: string;

  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
  message,
  onChange: setMessage,
}) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows={5}
      className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] sm:text-sm"
    />
  );
};
export default TextArea;