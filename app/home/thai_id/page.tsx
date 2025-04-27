'use client';
import { useState } from "react";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { Button } from "../../components/ui/Button";

export default function RandomThaiIdPage() {
    const [thaiId, setThaiId] = useState<string>('0-0000-00000-00-0');

    const generateThaiId = () => {
        const digits = [];
        for (let i = 0; i < 12; i++) {
            digits.push(Math.floor(Math.random() * 10));
        }

        let sum = 0;
        for (let i = 0; i < 12; i++) {
            sum += digits[i] * (13 - i);
        }
        const lastDigit = (11 - (sum % 11)) % 10;
        digits.push(lastDigit);
        const id = `${digits.slice(0, 1).join('')}-${digits.slice(1, 5).join('')}-${digits.slice(5, 10).join('')}-${digits.slice(10, 12).join('')}-${digits[12]}`;
        setThaiId(id);
    };

    const handleSave = () => {
        if (thaiId) {
            const formattedId = thaiId.replace(/-/g, '');
            navigator.clipboard.writeText(formattedId);
        }
    };

    const breadcrumbItems = [
        { label: "Homepage", href: "/home" },
      ];

    return (
            <main className="flex-1 container mx-auto p-4 flex flex-col gap-6">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl font-bold text-gray-700 ">Random Thai ID Generator</h1>
                {thaiId && (
                    <div className="text-3xl font-mono text-primary bg-white p-4 rounded-lg shadow-md">
                        {thaiId}
                    </div>
                )}

                <div className="flex gap-4">
                    <Button
                        label="Generate Thai ID"
                        onClick={generateThaiId}
                        variant="secondary"
                    />

                    {thaiId && (
                        <Button
                            label="Save"
                            onClick={handleSave}
                            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl transition-all"
                        />
                    )}
                </div>
            </main>
    );
}
