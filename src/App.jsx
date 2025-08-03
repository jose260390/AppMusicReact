import Sidebar from './components/AppShell/Sidebar.jsx';
import Header from './components/AppShell/Header.jsx';
import PlayerBar from './components/Player/PlayerBar.jsx';
import TrackList from './components/Track/TrackList.jsx';

export default function App() {
  return (
    <div className="h-dvh grid grid-rows-[auto_1fr_auto] md:grid-cols-[260px_1fr] md:grid-rows-[auto_1fr] bg-zinc-950 text-zinc-100">
      {/* Sidebar (hidden on mobile) */}
      <aside className="hidden md:block bg-zinc-900">
        <Sidebar />
      </aside>

      {/* Header */}
      <header className="col-start-1 md:col-start-2 sticky top-0 z-10 bg-zinc-950/70 backdrop-blur">
        <Header />
      </header>

      {/* Main */}
      <main className="p-4 md:col-start-2">
        <TrackList />
      </main>

      {/* Player */}
      <footer className="md:col-span-2">
        <PlayerBar />
      </footer>
    </div>
  );
}