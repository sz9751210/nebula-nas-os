import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

function App() {
  return (
    <div className="flex bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Widget Placeholders */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 mb-2">CPU Usage</h3>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">12%</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Memory</h3>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">3.4 GB / 16 GB</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Network</h3>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">↓ 1.2 MB/s</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
