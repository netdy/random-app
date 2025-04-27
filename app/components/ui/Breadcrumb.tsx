'use client';
import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className="text-sm font-medium">
        <ol className="flex space-x-2">
            {items.map((item, index) => (
            <li key={index} className="flex items-center">
                <Link href={item.href}>
                {item.label}
                </Link>
                {index < items.length - 1 && (
                <span className="mx-2 text-gray-500">/</span>
                )}
            </li>
            ))}
        </ol>
        </nav>
    );
};
