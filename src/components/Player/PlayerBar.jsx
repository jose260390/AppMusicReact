export default function PlayerBar() {
  return (
    <div className="h-16 px-4 flex items-center justify-between bg-zinc-950 border-t border-zinc-800">
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-12 w-12 bg-zinc-800 rounded" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Now playing</p>
          <p className="truncate text-xs text-zinc-400">Artist</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      <div className="w-64 hidden md:block">
        <div className="h-1 bg-zinc-800 rounded">
          <div className="h-1 w-1/3 bg-zinc-200 rounded" />
        </div>
      </div>
    </div>
  );
}