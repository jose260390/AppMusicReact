import TrackCard from './TrackCard.jsx';
import { tracks } from '../../data/tracks.js';

export default function TrackList() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-3">Trending lofi</h2>
      <div className="space-y-1">
        {tracks.map((t) => (
          <TrackCard
            key={t.id}
            cover={t.cover}
            title={t.title}
            artist={t.artist}
            duration={t.duration}
          />
        ))}
      </div>
    </section>
  );
}