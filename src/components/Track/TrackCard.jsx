import TrackCard from './TrackCard.jsx';

const MOCK = [
  { id: '1', title: 'Midnight Coffee', artist: 'Lofi Collective' },
  { id: '2', title: 'Window Rain', artist: 'Soft Beats' },
  { id: '3', title: 'Late Night Study', artist: 'Chill Tapes' },
];

export default function TrackList() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-3">Trending lofi</h2>
      <div className="space-y-1">
        {MOCK.map(t => (
          <TrackCard key={t.id} title={t.title} artist={t.artist} />
        ))}
      </div>
    </section>
  );
}