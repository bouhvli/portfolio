import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="flex items-center justify-center h-10 bg-[#e7ebf3] text-[#0e121b] text-sm font-bold px-2.5 rounded-xl">
      <span>{label}</span>
    </button>
  );
};

export default Button;
