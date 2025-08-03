import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-12 w-12" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold">App Music</h1>
        <h2 className="text-2xl font-semibold text-purple-500">Lofi Player</h2>

        <div>
          <button
            className="px-4 py-2 rounded bg-zinc-200 text-zinc-900"
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count}
          </button>
        </div>

        <p className="text-sm text-zinc-400">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
