// components/ui/Toast.tsx
import { useEffect } from "react";

interface ToastProps {
    message: string;
    onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [message, onClose]);

    return (
        <div className="fixed top-4 right-4 p-4 bg-pink-200 text-white rounded-lg shadow-lg">
            {message}
        </div>
    );
};
