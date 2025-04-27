'use client';
import { useState } from "react";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { Button } from "../../components/ui/Button";

export default function RandomNamePage() {
    const [nameInput, setNameInput] = useState("");
    const [names, setNames] = useState<string[]>([]);
    const [randomName, setRandomName] = useState<string | null>(null);

    const handleAddName = () => {
        if (nameInput.trim() !== "") {
            setNames(prev => [...prev, nameInput.trim()]);
            setNameInput("");
        }
    };

    const handleDeleteName = (indexToDelete: number) => {
        setNames(prev => {
            const updated = prev.filter((_, index) => index !== indexToDelete);
            if (updated.length === 0) {
                setRandomName(null);
            }
            return updated;
        });
    };

    const handleRandomName = () => {
        if (names.length >= 2) {
            const randomIndex = Math.floor(Math.random() * names.length);
            setRandomName(names[randomIndex]);
        }
    };

    const breadcrumbItems = [
        { label: "Homepage", href: "/home" },
    ];

    return (
        <main className="flex-1 container mx-auto p-4 flex flex-col gap-6">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-2xl font-bold text-gray-700">Random Name Picker</h1>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddName();
                        }
                    }}
                    placeholder="Enter a name"
                    className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
                />
                <Button
                    label="+"
                    onClick={handleAddName}
                    variant="secondary"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {names.map((name, index) => (
                    <div key={index} className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full gap-2">
                        <span>{name}</span>
                        <button
                            onClick={() => handleDeleteName(index)}
                            className="text-red-500 hover:text-red-700 font-bold"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {names.length >= 2 && (
                <Button
                    label="Random"
                    onClick={handleRandomName}
                    className="bg-red-400 text-white font-semibold py-2 px-6 rounded-xl transition-all"
                />
            )}

            {randomName && (
                <div className="text-3xl font-bold text-center text-primary">
                    🎉 {randomName} 🎉
                </div>
            )}
        </main>
    );
}
