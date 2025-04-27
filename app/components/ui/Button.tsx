import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "success";
}

export const Button = ({ label, onClick, variant = "primary", className = "", ...props }: ButtonProps) => {
    let variantClass = "";

    if (variant === "primary") {
        variantClass = "bg-primary text-white hover:bg-primary/80";
    } else if (variant === "secondary") {
        variantClass = "bg-gray-500 text-white hover:bg-gray-600";
    } else if (variant === "success") {
        variantClass = "bg-green-500 text-white hover:bg-green-600";
    }

    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 rounded-xl font-semibold transition-all ${variantClass} ${className}`}
        {...props}
        >
        {label}
        </button>
    );
};
