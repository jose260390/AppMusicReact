// src/components/Player/PlayerBar.jsx
export default function PlayerBar() {
  return (
    <div className="h-16 px-4 flex items-center justify-between bg-zinc-950 border-t border-zinc-800">
      {/* Left: current track */}
      <div className="flex items-center gap-3 min-w-0">
        <img
          src="/covers/cover1.jpg"
          alt="Now playing cover"
          className="h-12 w-12 rounded object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Midnight Coffee</p>
          <p className="truncate text-xs text-zinc-400">Lofi Collective</p>
        </div>
      </div>

      {/* Center: controls */}
      <div className="flex items-center gap-4 text-lg">
        {['⏮', '▶', '⏭'].map((icon, i) => (
          <button
            key={i}
            className="transition-transform duration-150 hover:scale-110 hover:text-purple-400 focus:outline-none focus:scale-110 active:scale-95"
            aria-label={
              icon === '▶' ? 'Play/Pause' : icon === '⏮' ? 'Previous' : 'Next'
            }
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Right: progress (hidden on mobile) */}
      <div className="w-64 hidden md:block">
        <div className="h-1 bg-zinc-800 rounded overflow-hidden">
          <div
            className="h-full w-1/3 bg-zinc-200 transition-all duration-300"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={33}
          />
        </div>
        <div className="mt-1 flex justify-between text-[11px] text-zinc-400">
          <span>1:02</span>
          <span>3:12</span>
        </div>
      </div>
    </div>
  );
}