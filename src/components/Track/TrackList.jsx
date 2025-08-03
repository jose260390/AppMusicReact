export default function TrackCard({ title = 'Track', artist = 'Artist' }) {
  return (
    <div className="grid grid-cols-[56px_1fr_auto] gap-3 items-center p-2 rounded hover:bg-zinc-900">
      <div className="h-14 w-14 rounded bg-zinc-800" />
      <div className="min-w-0">
        <p className="truncate font-medium">{title}</p>
        <p className="truncate text-sm text-zinc-400">{artist}</p>
      </div>
      <span className="text-sm text-zinc-400">3:12</span>
    </div>
  );
}