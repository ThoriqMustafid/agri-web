import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Panduan from './components/Panduan'

function LandingPage({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Team />
      <FeedbackForm />
      <Footer darkMode={darkMode} />
    </>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/panduan" element={<Panduan />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App