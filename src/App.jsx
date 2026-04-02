import { Route, Routes } from 'react-router-dom'
import { GlobalViewportNoise } from './components/shell/GlobalViewportNoise.jsx'
import { MobileLuxTabBar } from './components/shell/MobileLuxTabBar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import CheveuxCoReservationPage from './pages/CheveuxCoReservationPage.jsx'
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx'
import TattooBookingPage from './pages/TattooBookingPage.jsx'
import ChaiModerneCartePage from './pages/ChaiModerneCartePage.jsx'

export default function App() {
  return (
    <>
      <GlobalViewportNoise />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/portfolio/cheveux-co/reservation" element={<CheveuxCoReservationPage />} />
        <Route path="/portfolio/:siteId/reservation" element={<TattooBookingPage />} />
        <Route path="/portfolio/zinc-des-amis/carte" element={<ChaiModerneCartePage />} />
      </Routes>
      <MobileLuxTabBar />
    </>
  )
}
