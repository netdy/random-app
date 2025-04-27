export const DefaultHeader = () => {
    return (
        <header className="bg-gradient-to-r from-red-500 to-primary p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                <a href="/home">Random</a>
            </h1>
            <nav className="space-x-4">
            <a href="/home/netdy" className="hover:underline">Contact</a>
            </nav>
        </div>
        </header>
    );
};
