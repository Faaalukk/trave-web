import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThailandMap } from '../components/ThailandMap';
import { useI18n } from '../lib/i18n';
import { TRANSIT_KEYS } from '../data/taxonomy';

type Mode = 'region' | 'transit';

/** Location has two ways in: tap a region on the map, or pick a transit line. */
export function Location() {
  const navigate = useNavigate();
  const { t, L } = useI18n();
  const [mode, setMode] = useState<Mode>('region');

  return (
    <div className="page page-sm">
      <h1 className="page-title">{t.catLocation}</h1>
      <p style={{ margin: '0 0 20px', color: 'var(--color-neutral-700)' }}>
        {t.pickRegionOrTransit}
      </p>

      <div className="seg">
        <button aria-pressed={mode === 'region'} onClick={() => setMode('region')}>
          {t.modeRegion}
        </button>
        <button aria-pressed={mode === 'transit'} onClick={() => setMode('transit')}>
          {t.modeTransit}
        </button>
      </div>

      {mode === 'region' ? (
        <>
          <div className="map-frame">
            <ThailandMap onSelect={(region) => navigate(`/browse/location/${region}`)} />
          </div>
          <p className="map-hint">{t.tapMapHint}</p>
        </>
      ) : (
        <>
          <p style={{ fontSize: 12, color: 'var(--color-neutral-700)', margin: '0 0 14px' }}>
            {t.transitNote}
          </p>
          <div className="transit-list">
            {TRANSIT_KEYS.map((key) => (
              <button
                key={key}
                className="chip"
                onClick={() => navigate(`/results/transit/${key}`)}
              >
                {L('transit', key)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
