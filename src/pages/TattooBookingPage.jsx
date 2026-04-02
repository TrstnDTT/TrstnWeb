import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HeritageBookingPage from './booking/HeritageBookingPage.jsx'
import BrutalismBookingPage from './booking/BrutalismBookingPage.jsx'
import OrEtPeauBookingPage from './booking/OrEtPeauBookingPage.jsx'
import BarConceptBookingPage from './booking/BarConceptBookingPage.jsx'

const TATTOO_IDS = new Set(['atelier-1920', 'neo-ink-studio', 'le-labo-de-peau'])
const BAR_BOOKING_IDS = new Set(['neon-shaker', 'zinc-des-amis'])

/**
 * Réservation plein écran — tattoo / piercing / bars concepts.
 */
export default function TattooBookingPage() {
  const { siteId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!siteId || (!TATTOO_IDS.has(siteId) && !BAR_BOOKING_IDS.has(siteId))) {
      navigate('/portfolio', { replace: true })
    }
  }, [siteId, navigate])

  if (!siteId || (!TATTOO_IDS.has(siteId) && !BAR_BOOKING_IDS.has(siteId))) return null

  if (BAR_BOOKING_IDS.has(siteId)) return <BarConceptBookingPage />

  if (siteId === 'atelier-1920') return <HeritageBookingPage />
  if (siteId === 'neo-ink-studio') return <BrutalismBookingPage />
  return <OrEtPeauBookingPage />
}
