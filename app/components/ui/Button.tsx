import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => (
    <button
        className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
        {...props}
    >
        {label}
    </button>
);
