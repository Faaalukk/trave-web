import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  CameraIcon,
  ClockIcon,
  MountainIcon,
  PinIcon,
  UsersIcon,
  WalletIcon,
} from '../components/Icons';
import { useI18n } from '../lib/i18n';
import type { Copy } from '../data/copy';

interface Category {
  slug: string;
  title: keyof Copy;
  desc: keyof Copy;
  icon: ReactNode;
}

const CATEGORIES: Category[] = [
  { slug: 'location', title: 'catLocation', desc: 'catLocationDesc', icon: <PinIcon /> },
  { slug: 'type', title: 'catType', desc: 'catTypeDesc', icon: <MountainIcon /> },
  { slug: 'activity', title: 'catActivity', desc: 'catActivityDesc', icon: <CameraIcon /> },
  { slug: 'budget', title: 'catBudget', desc: 'catBudgetDesc', icon: <WalletIcon /> },
  { slug: 'audience', title: 'catAudience', desc: 'catAudienceDesc', icon: <UsersIcon /> },
  { slug: 'duration', title: 'catDuration', desc: 'catDurationDesc', icon: <ClockIcon /> },
];

export function Hub() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="page page-md">
      <h1 style={{ fontSize: 32, margin: '0 0 6px' }}>{t.hubTitle}</h1>
      <p className="page-sub">{t.hubSub}</p>

      <div className="grid-cards">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            className="cat-card"
            onClick={() => navigate(`/browse/${cat.slug}`)}
          >
            <div className="cat-card-icon">{cat.icon}</div>
            <h3>{t[cat.title]}</h3>
            <p>{t[cat.desc]}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
