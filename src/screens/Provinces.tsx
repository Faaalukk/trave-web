import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { OptionTile } from '../components/Tiles';
import { useI18n } from '../lib/i18n';
import { PROVINCES_BY_REGION } from '../data/taxonomy';
import type { RegionKey } from '../data/types';

/** Provinces inside one region, plus a shortcut to the region as a whole. */
export function Provinces() {
  const { region = '' } = useParams();
  const navigate = useNavigate();
  const { t, L } = useI18n();

  const provinces = PROVINCES_BY_REGION[region as RegionKey];
  if (!provinces) return <Navigate to="/browse/location" replace />;

  return (
    <div className="page page-md">
      <h1 className="page-title">{L('region', region)}</h1>
      <p style={{ margin: '0 0 20px', color: 'var(--color-neutral-700)' }}>{t.pickToSee}</p>

      <button className="chip" onClick={() => navigate(`/results/region/${region}`)}>
        {t.seeWholeRegion}
      </button>

      <div className="grid-tiles" style={{ marginTop: 20 }}>
        {provinces.map((province) => (
          <OptionTile
            key={province}
            seed={`opt-province-${province}`}
            label={L('province', province)}
            onClick={() => navigate(`/results/province/${province}`)}
          />
        ))}
      </div>
    </div>
  );
}
