import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-erawan.webp';
import { SearchIcon, SparkleIcon, WandIcon } from '../components/Icons';
import { useI18n } from '../lib/i18n';

export function Landing() {
  const navigate = useNavigate();
  const { t, isEn } = useI18n();

  return (
    <div className="hero">
      <img src={heroImage} alt={isEn ? 'Erawan Waterfall, Kanchanaburi' : 'น้ำตกเอราวัณ กาญจนบุรี'} />
      <div className="hero-scrim" />
      <div className="hero-inner">
        <div className="hero-badge">
          <SparkleIcon />
          {t.brand}
        </div>
        <h1 className="hero-title">{t.landingTitle}</h1>
        <p className="hero-sub">{t.landingSub}</p>

        <div className="hero-choices">
          <button className="choice" onClick={() => navigate('/hub')}>
            <div className="choice-icon">
              <SearchIcon />
            </div>
            <h3>{t.selfTitle}</h3>
            <p>{t.selfDesc}</p>
          </button>

          <div className="choice choice-soon" aria-disabled="true">
            <span className="badge-soon">{t.recoBadge}</span>
            <div className="choice-icon choice-icon-2">
              <WandIcon />
            </div>
            <h3>{t.recoTitle}</h3>
            <p>{t.recoDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
