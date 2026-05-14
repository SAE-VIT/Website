import Navbar from './navbar.jsx'
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import Events from './pages/events.jsx'
import About from './pages/about.jsx'
import SiteFooter from './siteFooter.jsx'
import { Route, Routes } from 'react-router-dom'

function App(){
  return(
    <div className="app-shell">
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
