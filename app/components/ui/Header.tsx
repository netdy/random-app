import Image from 'next/image';

export const DefaultHeader = () => {
    return (
        <header 
            className="bg-gradient-to-r from-red-200 to-red-400 text-white shadow-md fixed top-0 left-0 right-0 w-full z-50"
            style={{
                paddingTop: 'env(safe-area-inset-top)', 
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
                minHeight: 'calc(56px + env(safe-area-inset-top))', 
            }}
        >
            <div className="container mx-auto flex justify-between items-center py-2 px-4">
                <h1 className="font-bold">
                    <a href="/home">
                        <Image 
                            src="/logo.png"  
                            alt="Logo" 
                            width={70}  
                            height={70} 
                            className="rounded-full"
                        />
                    </a>
                </h1>
                <nav>
                    <a href="/home/netdy" className="text-xl hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};
