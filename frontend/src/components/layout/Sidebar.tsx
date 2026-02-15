import { LayoutDashboard, HardDrive, Network, Settings, Box } from "lucide-react";

export function Sidebar() {
    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "#" },
        { icon: HardDrive, label: "Storage", href: "#" },
        { icon: Network, label: "Network", href: "#" },
        { icon: Box, label: "Applications", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
    ];

    return (
        <div className="w-64 bg-zinc-900 text-white h-screen flex flex-col border-r border-zinc-800">
            <div className="p-6 flex items-center gap-2 border-b border-zinc-800">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">N</div>
                <span className="text-lg font-bold tracking-tight">Nebula OS</span>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Admin</span>
                        <span className="text-xs text-zinc-500">System Administrator</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
