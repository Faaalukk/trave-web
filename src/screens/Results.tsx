import { Navigate, useParams } from 'react-router-dom';
import { PlaceCard } from '../components/Tiles';
import { useI18n } from '../lib/i18n';
import { filterPlaces, isFilterKind } from '../lib/filter';

export function Results() {
  const { kind = '', key = '' } = useParams();
  const { t, L, isEn } = useI18n();

  if (!isFilterKind(kind)) return <Navigate to="/hub" replace />;

  const places = filterPlaces({ kind, key });
  const subtitle = `${L(kind, key)} · ${places.length}${isEn ? ' places' : ' ที่'}`;

  return (
    <div className="page page-lg">
      <h1 className="page-title">{t.resultsTitle}</h1>
      <p style={{ margin: '0 0 24px', color: 'var(--color-accent-700)', fontWeight: 600 }}>
        {subtitle}
      </p>

      {places.length > 0 ? (
        <div className="grid-results">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <div className="empty">{t.noResults}</div>
      )}
    </div>
  );
}
