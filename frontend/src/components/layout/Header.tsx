export function Header() {
    return (
        <header className="h-16 border-b border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 flex items-center px-6 justify-between">
            <h1 className="text-xl font-semibold text-zinc-800 dark:text-gray-100">Dashboard</h1>
            <div className="flex items-center gap-4">
                {/* Placeholder for status indicators */}
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-zinc-500">System Healthy</span>
            </div>
        </header>
    );
}
