export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <input
        placeholder="Search tracks"
        className="w-full max-w-md bg-zinc-900 text-zinc-200 rounded px-3 py-2 outline-none"
      />
      <button className="ml-3 text-sm px-3 py-2 rounded bg-zinc-200 text-zinc-900">
        Sign in
      </button>
    </div>
  );
}