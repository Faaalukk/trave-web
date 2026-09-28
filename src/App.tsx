import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import heroImage from './assets/hero-erawan.webp';
import { Header } from './components/Header';
import { Landing } from './screens/Landing';
import { Hub } from './screens/Hub';
import { Category } from './screens/Category';
import { Location } from './screens/Location';
import { Provinces } from './screens/Provinces';
import { Results } from './screens/Results';
import { Detail } from './screens/Detail';
import './styles/app.css';

/** Each screen is its own page — start it at the top, like a page load. */
function ScrollToTop() {
  const { pathname } = useLocation();
  // Block body, not a concise arrow: an effect may only return a cleanup
  // function, and `window.scrollTo`'s return value is not one.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <div className="app-bg" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>

      <div className="app-shell">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/browse/location" element={<Location />} />
          <Route path="/browse/location/:region" element={<Provinces />} />
          <Route path="/browse/:category" element={<Category />} />
          <Route path="/results/:kind/:key" element={<Results />} />
          <Route path="/place/:id" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
