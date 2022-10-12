import { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  children: ReactNode;
  maxWidth?: number;
}

export const Button = ({ children, maxWidth }: ButtonProps) => {
  return (
    <button
      className={`py-4 px-3 bg-cyan-500 rounded text-sm w-full transition-colors focus:ring-2 ring-gray-100 hover:bg-cyan-300 font-semibold text-black ${
        typeof maxWidth === 'number' ? `max-w-[${String(maxWidth)}px]` : null
      }`}
    >
      {children}
    </button>
  );
};
