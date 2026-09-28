import { useNavigate } from 'react-router-dom';
import { ImageSlot } from './ImageSlot';
import { StarIcon } from './Icons';
import { useI18n } from '../lib/i18n';
import type { Place } from '../data/types';

interface OptionTileProps {
  seed: string;
  label: string;
  imgLabel?: string;
  onClick: () => void;
}

/** One choice inside a category grid — a picture over its label. */
export function OptionTile({ seed, label, imgLabel, onClick }: OptionTileProps) {
  return (
    <button className="tile" onClick={onClick}>
      <div className="tile-media">
        <ImageSlot seed={seed} label={imgLabel ?? label} />
      </div>
      <div className="tile-label">{label}</div>
    </button>
  );
}

export function PlaceCard({ place }: { place: Place }) {
  const navigate = useNavigate();
  const { t, L, placeName, placeDesc } = useI18n();

  return (
    <button className="place-card" onClick={() => navigate(`/place/${place.id}`)}>
      <div className="place-card-media">
        <ImageSlot seed={`card-${place.id}`} label={placeName(place)} />
      </div>
      <div className="place-card-body">
        <div className="tags">
          <span className="tag tag-accent">{L('type', place.type)}</span>
          <span className="tag tag-accent-2">{L('budget', place.budget)}</span>
        </div>
        <h4>{placeName(place)}</h4>
        <div className="place-card-meta">{L('province', place.province)}</div>
        <p className="place-card-desc">{placeDesc(place)}</p>
        <div className="rating">
          <StarIcon />
          {place.rating} · {place.reviews.toLocaleString()} {t.reviewsSuffix}
        </div>
      </div>
    </button>
  );
}
