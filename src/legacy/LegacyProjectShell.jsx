import { BackButton } from '../components/mini/BackButton.jsx'
import { getLegacyTheme } from '../data/legacyPortfolioSource.js'
import BakeryClassic from './templates/bakery/BakeryClassic.jsx'
import BarberUrban from './templates/barber/BarberUrban.jsx'
import EventWedding from './templates/events/EventWedding.jsx'
import PhotoMinimalist from './templates/photography/PhotoMinimalist.jsx'
import ServiceWoodworker from './templates/services/ServiceWoodworker.jsx'
import TattooNoir from './templates/tattoo/TattooNoir.jsx'

const TEMPLATE_BY_SITE = {
  'pain-dore': BakeryClassic,
  'aiguille-noire': TattooNoir,
  'atelier-m': BarberUrban,
  'maison-lumiere': EventWedding,
  'studio-eclipse': PhotoMinimalist,
  'artisan-grain': ServiceWoodworker,
}

/**
 * Une page projet = un template copié depuis trstnportfolio (sitesConfig.componentKey).
 */
export function LegacyProjectShell({ site, onBack }) {
  const Comp = TEMPLATE_BY_SITE[site.id]
  const theme = getLegacyTheme(site.id)
  if (!Comp || !theme) return null

  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-black">
      <BackButton onClick={onBack} site={site} />
      <div className="pt-14">
        <Comp theme={theme} />
      </div>
    </div>
  )
}

