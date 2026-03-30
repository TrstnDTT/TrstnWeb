import { BarBasqueExperience } from '../bar/BarBasqueExperience.jsx'
import { BarCoastalBrasserieExperience } from '../bar/BarCoastalBrasserieExperience.jsx'
import { BarCraftTaproomExperience } from '../bar/BarCraftTaproomExperience.jsx'
import { BarSpeakeasyExperience } from '../bar/BarSpeakeasyExperience.jsx'
import { ProjectView } from '../project/ProjectView.jsx'
import { InfluencesExperience } from '../restaurant/InfluencesExperience.jsx'
import { RestaurantBistroExperience } from '../restaurant/RestaurantBistroExperience.jsx'
import { Atelier1920Experience } from '../tattoo/Atelier1920Experience.jsx'
import { LeLaboDePeauExperience } from '../tattoo/LeLaboDePeauExperience.jsx'
import { NeoInkStudioExperience } from '../tattoo/NeoInkStudioExperience.jsx'
import { RestaurantFastFoodExperience } from '../restaurant/RestaurantFastFoodExperience.jsx'
import { RestaurantGastronomyExperience } from '../restaurant/RestaurantGastronomyExperience.jsx'

/** Même principe que les templates legacy : une expérience plein écran dédiée par restaurant / bar. */
const RESTAURANT_EXPERIENCE = {
  'table-constance': RestaurantGastronomyExperience,
  'atelier-sept': RestaurantBistroExperience,
  'carre-rouge': RestaurantFastFoodExperience,
  influences: InfluencesExperience,
}

const BAR_EXPERIENCE = {
  'velvet-room': BarSpeakeasyExperience,
  'zinc-bleu': BarCraftTaproomExperience,
  'nuit-jour': BarCoastalBrasserieExperience,
  'bar-basque': BarBasqueExperience,
}

const TATTOO_EXPERIENCE = {
  'atelier-1920': Atelier1920Experience,
  'neo-ink-studio': NeoInkStudioExperience,
  'le-labo-de-peau': LeLaboDePeauExperience,
}

export function ProjectExperience({ site, onBack }) {
  const id = site?.id
  const BarShell = id ? BAR_EXPERIENCE[id] : undefined
  if (BarShell) return <BarShell site={site} onBack={onBack} />
  const RestaurantShell = id ? RESTAURANT_EXPERIENCE[id] : undefined
  if (RestaurantShell) return <RestaurantShell site={site} onBack={onBack} />
  const TattooShell = id ? TATTOO_EXPERIENCE[id] : undefined
  if (TattooShell) return <TattooShell site={site} onBack={onBack} />
  return <ProjectView site={site} onBack={onBack} />
}
