import { useRef, useState, useEffect } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

function App() {
  const [mousePosition, setMousePosition] = useState({x: 0,y: 0})

  const [mouseActive, setMouseActive] = useState(false)

  const mouseTimer = useRef(null)

  const handleMouseMove = (event) => {setMousePosition({x: event.clientX,y: event.clientY})

    setMouseActive(true)

    clearTimeout(mouseTimer.current)

    mouseTimer.current = setTimeout(() => {setMouseActive(false)}, 500) }

  const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const clock = setInterval(() => {setCurrentTime(new Date())}, 1000)
      return () => clearInterval(clock)}, [])

  return (
    <BrowserRouter>
      <div className={`portfolio ${mouseActive ? 'mouse-active' : ''}`}
        onMouseMove={handleMouseMove}
        style={{'--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px`}}
      >
        <nav className="navbar">
          <h2>Netipalli Sanjay</h2>

      <div className="navbar-clock">
        <span className="clock-time">
          {currentTime.toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true})}
        </span>
        <span className="clock-date">
          {currentTime.toLocaleDateString('en-IN', {day: '2-digit', month: 'short', year: 'numeric'})}
        </span>
      </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/certifications" element={<Certifications />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App