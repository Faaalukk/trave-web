import { useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '../lib/i18n';

/** Where "back" goes, per screen. Landing and hub are roots, so they show none. */
function useBackLink() {
  const { pathname } = useLocation();
  const { t } = useI18n();

  if (pathname === '/' || pathname === '/hub') return null;
  if (/^\/browse\/location\/[^/]+$/.test(pathname))
    return { label: t.backToMap, to: '/browse/location' };
  if (pathname.startsWith('/results')) return { label: t.backToResultsChoice, to: '/hub' };
  if (pathname.startsWith('/place')) return { label: t.backToResults, to: -1 as const };
  return { label: t.backToHub, to: '/hub' };
}

export function Header() {
  const navigate = useNavigate();
  const { t, lang, setLang } = useI18n();
  const back = useBackLink();

  return (
    <header className="nav">
      <button className="nav-brand" onClick={() => navigate('/')}>
        {t.brand}
      </button>

      {back ? (
        <button
          className="nav-back"
          onClick={() => (typeof back.to === 'number' ? navigate(back.to) : navigate(back.to))}
        >
          {back.label}
        </button>
      ) : null}

      <div className="nav-lang">
        <button aria-pressed={lang === 'th'} onClick={() => setLang('th')}>
          TH
        </button>
        <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
          EN
        </button>
      </div>
    </header>
  );
}
