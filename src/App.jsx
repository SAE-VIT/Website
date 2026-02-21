import Navbar from './navbar.jsx'
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import { Route, Routes } from 'react-router-dom'

function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;