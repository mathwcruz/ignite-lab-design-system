import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div className="py-4 px-3 h-12 flex items-center gap-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
);

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
);

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => (
  <input
    {...props}
    className="bg-transparent flex-1 text-gray-100 text-xs font-sans placeholder:text-gray-400 outline-none"
  />
);

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
