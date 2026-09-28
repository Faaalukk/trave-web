import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { OptionTile } from '../components/Tiles';
import { useI18n } from '../lib/i18n';
import {
  ACTIVITY_KEYS,
  AUDIENCE_KEYS,
  BUDGET_KEYS,
  DURATION_KEYS,
  TYPE_KEYS,
} from '../data/taxonomy';
import type { Copy } from '../data/copy';
import type { FilterKind } from '../data/types';

/** The plain category screens: one grid of options, each jumping to results. */
const CATEGORIES: Record<string, { kind: FilterKind; keys: string[]; title: keyof Copy }> = {
  type: { kind: 'type', keys: TYPE_KEYS, title: 'catType' },
  activity: { kind: 'activity', keys: ACTIVITY_KEYS, title: 'catActivity' },
  budget: { kind: 'budget', keys: BUDGET_KEYS, title: 'catBudget' },
  audience: { kind: 'audience', keys: AUDIENCE_KEYS, title: 'catAudience' },
  duration: { kind: 'duration', keys: DURATION_KEYS, title: 'catDuration' },
};

export function Category() {
  const { category = '' } = useParams();
  const navigate = useNavigate();
  const { t, L, imgLabel } = useI18n();

  const config = CATEGORIES[category];
  if (!config) return <Navigate to="/hub" replace />;

  return (
    <div className="page page-md">
      <h1 className="page-title">{t[config.title]}</h1>
      <p className="page-sub">{t.pickToSee}</p>

      <div className="grid-tiles">
        {config.keys.map((key) => (
          <OptionTile
            key={key}
            seed={`opt-${config.kind}-${key}`}
            label={L(config.kind, key)}
            imgLabel={imgLabel(config.kind, key)}
            onClick={() => navigate(`/results/${config.kind}/${key}`)}
          />
        ))}
      </div>
    </div>
  );
}
