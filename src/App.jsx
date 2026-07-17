import Navbar from './navbar.jsx'
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import Events from './pages/events.jsx'
import About from './pages/about.jsx'
import SiteFooter from './siteFooter.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [isExitingLoader, setIsExitingLoader] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExitingLoader(true), 1650);
    const removeTimer = window.setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return(
    <div className="app-shell">
      {isLoading && (
        <div className={`site-loader ${isExitingLoader ? "is-exiting" : ""}`} role="status" aria-label="Loading website">
          <div className="site-loader-mark">
            <img src="/src/assets/sae-logo.png" alt="SAE VIT Logo" />
          </div>
          <div className="site-loader-track"><span /></div>
        </div>
      )}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
