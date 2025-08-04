// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/AppShell/Sidebar.jsx';
import Header from './components/AppShell/Header.jsx';
import PlayerBar from './components/Player/PlayerBar.jsx';
import TrackList from './components/Track/TrackList.jsx';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-dvh bg-zinc-950 text-zinc-100 grid grid-rows-[auto_1fr_auto] md:grid-cols-[260px_1fr] md:grid-rows-[auto_1fr]">
      {/* Sidebar mobile (overlay) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-64 h-full bg-zinc-900 p-4 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      {/* Sidebar desktop */}
      <aside className="hidden md:block bg-zinc-900">
        <Sidebar />
      </aside>

      {/* Header */}
      <header className="col-start-1 md:col-start-2 sticky top-0 z-10 bg-zinc-950/70 backdrop-blur border-b border-zinc-800">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
      </header>

      {/* Main content */}
      <main className="p-4 md:col-start-2">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold mb-3">Trending lofi</h2>
          <TrackList />
        </section>
      </main>
      
      {/* Player (sticky bottom on mobile, full width on desktop) */}
      <footer className="md:col-span-2 sticky bottom-0">
        <PlayerBar />
      </footer>
    </div>
  );
}