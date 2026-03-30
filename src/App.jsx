import { Route, Routes } from 'react-router-dom'
import { GlobalViewportNoise } from './components/shell/GlobalViewportNoise.jsx'
import { MobileLuxTabBar } from './components/shell/MobileLuxTabBar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'

export default function App() {
  return (
    <>
      <GlobalViewportNoise />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <MobileLuxTabBar />
    </>
  )
}
