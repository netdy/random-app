import Image from 'next/image';

export const DefaultHeader = () => {
    return (
        <header className="bg-gradient-to-r from-red-200 to-red-400 px-4 py-2 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                <a href="/home">
                    <Image 
                        src="/logo.png"  
                        alt="Logo" 
                        width={70}  
                        height={70} 
                    />
                </a>
            </h1>
            <nav className="space-x-4">
            <a href="/home/netdy" className="hover:underline">Contact</a>
            </nav>
        </div>
        </header>
    );
};
