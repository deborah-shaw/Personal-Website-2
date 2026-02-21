import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import HeadsInTheCloud from './pages/headsInTheCloud.jsx'
import UsGeographyQuiz from './pages/usGeographyQuiz.jsx'
import Cst300 from './pages/cst300.jsx'
import Cst338 from './pages/cst338.jsx'
import Cst363 from './pages/cst363.jsx'
import Cst311 from './pages/cst311.jsx'
import Cst336 from './pages/cst336.jsx'
import Cst462 from './pages/cst462.jsx'
import Cst383 from './pages/cst383.jsx'
import Cst489 from './pages/cst489.jsx'
import Cst499 from './pages/cst499.jsx'
import Cst334 from './pages/cst334.jsx'
import Contact from './pages/contact.jsx'


function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/headsInTheCloud" element={<HeadsInTheCloud/>} />
            <Route path="/usGeographyQuiz" element={<UsGeographyQuiz/>} />
            <Route path="/cst300" element={<Cst300/>} />
            <Route path="/cst338" element={<Cst338/>} />
            <Route path="/cst363" element={<Cst363/>} />
            <Route path="/cst311" element={<Cst311/>} />
            <Route path="/cst336" element={<Cst336/>} />
            <Route path="/cst462" element={<Cst462/>} />
            <Route path="/cst383" element={<Cst383/>} />
            <Route path="/cst489" element={<Cst489/>} />
            <Route path="/cst499" element={<Cst499/>} />
            <Route path="/cst334" element={<Cst334/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  )
}

export default App