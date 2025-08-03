export default function Sidebar() {
  return (
    <nav className="h-full p-4 space-y-4 text-zinc-200">
      <h1 className="text-xl font-semibold">Lofi Player</h1>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Library</a></li>
        <li><a href="#" className="hover:underline">Playlists</a></li>
      </ul>
    </nav>
  );
}