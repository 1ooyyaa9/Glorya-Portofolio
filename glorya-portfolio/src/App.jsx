import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Loader from './components/Loader.jsx'
import Spotlight from './components/Spotlight.jsx'
import NetworkBackground from './components/NetworkBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Learning from './pages/Learning.jsx'
import Experience from './pages/Experience.jsx'
import Certificates from './pages/Certificates.jsx'
import Contact from './pages/Contact.jsx'

const PAGES = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  learning: Learning,
  experience: Experience,
  certificates: Certificates,
  contact: Contact,
}

export default function App() {
  const [page, setPage] = useState('home')

  const handleSetPage = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const PageComponent = PAGES[page] ?? Home

  return (
    <ThemeProvider>
      <Loader />
      <Spotlight />
      <NetworkBackground />
      <Navbar page={page} setPage={handleSetPage} />
      <main className="relative z-[1]">
        <PageComponent key={page} setPage={handleSetPage} />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
