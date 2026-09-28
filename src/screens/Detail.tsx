import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ImageSlot } from '../components/ImageSlot';
import { MapIcon, PhoneIcon, StarIcon } from '../components/Icons';
import { useI18n } from '../lib/i18n';
import { nearbyPlaces } from '../lib/filter';
import { getPlace } from '../data/places';

export function Detail() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { t, L, placeName, placeDesc, placePrice } = useI18n();

  const place = getPlace(id);
  if (!place) return <Navigate to="/hub" replace />;

  const nearby = nearbyPlaces(place);

  return (
    <div className="page page-lg" style={{ maxWidth: 1000 }}>
      <div className="detail-hero">
        <ImageSlot seed={`hero-${place.id}`} label={placeName(place)} />
      </div>

      <div className="detail-gallery">
        {[0, 1, 2, 3].map((i) => (
          <ImageSlot key={i} seed={`${place.id}-g${i}`} label={t.gallery} rounded />
        ))}
      </div>

      <div className="detail-head">
        <div>
          <h1>{placeName(place)}</h1>
          <div style={{ color: 'var(--color-neutral-700)', fontSize: 14 }}>
            {L('province', place.province)}
          </div>
        </div>
        <div className="detail-rating">
          <StarIcon size={16} fill="var(--color-accent)" />
          <span style={{ fontWeight: 700 }}>{place.rating}</span>
          <span style={{ fontSize: 12, color: 'var(--color-neutral-700)' }}>
            ({place.reviews.toLocaleString()} {t.reviewsSuffix})
          </span>
        </div>
      </div>

      <div className="detail-tags">
        <span className="tag tag-accent">{L('type', place.type)}</span>
        {place.activities.map((activity) => (
          <span key={activity} className="tag tag-accent-2">
            {L('activity', activity)}
          </span>
        ))}
      </div>

      <p className="detail-desc">{placeDesc(place)}</p>

      <div className="fact-grid">
        <div className="fact">
          <div className="fact-label">{t.priceLabel}</div>
          <div className="fact-value">{placePrice(place)}</div>
        </div>
        <div className="fact">
          <div className="fact-label">{t.hoursLabel}</div>
          <div className="fact-value">{place.hours}</div>
        </div>
        <div className="fact">
          <div className="fact-label">{t.durationLabel}</div>
          <div className="fact-value">{L('duration', place.duration)}</div>
        </div>
      </div>

      <div className="map-note">
        <span style={{ color: 'var(--color-accent)', display: 'flex' }}>
          <MapIcon />
        </span>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 2 }}>{t.mapLabel}</div>
          <div style={{ fontSize: 13, color: 'var(--color-neutral-700)' }}>
            {L('province', place.province)} · {L('region', place.region)}
          </div>
        </div>
      </div>

      {nearby.length > 0 ? (
        <>
          <h3 style={{ margin: '0 0 16px' }}>{t.nearbyLabel}</h3>
          <div className="nearby-grid">
            {nearby.map((other) => (
              <button
                key={other.id}
                className="nearby-card"
                onClick={() => navigate(`/place/${other.id}`)}
              >
                <div className="nearby-media">
                  <ImageSlot seed={`nb-${other.id}`} label={placeName(other)} />
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{placeName(other)}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-neutral-700)' }}>
                    {L('province', other.province)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : null}

      <button className="btn-primary">
        <PhoneIcon />
        {t.contactBtn}
      </button>
    </div>
  );
}
