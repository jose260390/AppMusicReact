import TrackCard from './TrackCard.jsx';
import { tracks } from '../../data/tracks.js';

export default function TrackList() {
  return (
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
  );
}