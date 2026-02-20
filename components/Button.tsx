
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm whitespace-nowrap";
  const variants = {
    primary: "bg-[#F2CA61] text-black hover:bg-[#e0b950] shadow-lg",
    secondary: "bg-[#2E5670] text-white hover:bg-[#25465c]",
    outline: "border-2 border-[#2E5670] text-[#2E5670] hover:bg-[#2E5670] hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
