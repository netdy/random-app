export default function NetdyPage() {
    return (
        <main className="flex-1 container mx-auto p-4 flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Haloo 👋
                    </h1>
                    <p className="text-gray-700 text-lg">
                        My name is <span className="font-semibold text-indigo-600">Kamonchanok Kosulawath</span>.<br />
                        I&apos;m a software developer 🌱
                    </p>
                </div>

                <div className="pt-4 border-t">
                    <p className="text-gray-700">🔗 My GitHub:</p>
                    <a
                        href="https://github.com/netdy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        github.com/netdy
                    </a>
                </div>
        </main>
    )
}
