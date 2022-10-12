import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
    {...props}
      className={`py-3 px-4 bg-cyan-500 rounded text-sm w-full transition-colors focus:ring-2 ring-gray-100 hover:bg-cyan-300 font-semibold text-black ${className}`}
    >
      {children}
    </button>
  );
};
