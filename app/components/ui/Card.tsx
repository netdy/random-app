import Link from "next/link";

export type CardProps = {
    label: string;
    linkTo?: string;
};

export const Card = ({ label, linkTo }: CardProps) => {
    const className = "bg-primary shadow-lg rounded-2xl px-6 py-10 flex items-center justify-center text-xl font-semibold text-gray-700 hover:shadow-xl transition-all hover:scale-105";

    if (linkTo) {
        return (
            <Link href={linkTo} className={`block ${className}`}>
                {label}
            </Link>
        );
    }

    return (
        <div className={className}>
            {label}
        </div>
    );
};
