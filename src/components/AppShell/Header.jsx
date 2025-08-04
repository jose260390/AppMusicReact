export default function Header({ onMenuClick }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
      <div className="flex items-center gap-3 w-full">
        {/* Mobile menu */}
        <button
          className="md:hidden text-2xl p-2 -m-2 rounded hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>    
      </div>
      {}
    </div>
  );
}