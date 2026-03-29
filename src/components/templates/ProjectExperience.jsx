import { BarCoastalBrasserieExperience } from '../bar/BarCoastalBrasserieExperience.jsx'
import { BarCraftTaproomExperience } from '../bar/BarCraftTaproomExperience.jsx'
import { BarSpeakeasyExperience } from '../bar/BarSpeakeasyExperience.jsx'
import { ProjectView } from '../project/ProjectView.jsx'
import { RestaurantBistroExperience } from '../restaurant/RestaurantBistroExperience.jsx'
import { RestaurantFastFoodExperience } from '../restaurant/RestaurantFastFoodExperience.jsx'
import { RestaurantGastronomyExperience } from '../restaurant/RestaurantGastronomyExperience.jsx'

/** Même principe que les templates legacy : une expérience plein écran dédiée par restaurant / bar. */
const RESTAURANT_EXPERIENCE = {
  'table-constance': RestaurantGastronomyExperience,
  'atelier-sept': RestaurantBistroExperience,
  'carre-rouge': RestaurantFastFoodExperience,
}

const BAR_EXPERIENCE = {
  'velvet-room': BarSpeakeasyExperience,
  'zinc-bleu': BarCraftTaproomExperience,
  'nuit-jour': BarCoastalBrasserieExperience,
}

export function ProjectExperience({ site, onBack }) {
  const id = site?.id
  const BarShell = id ? BAR_EXPERIENCE[id] : undefined
  if (BarShell) return <BarShell site={site} onBack={onBack} />
  const RestaurantShell = id ? RESTAURANT_EXPERIENCE[id] : undefined
  if (RestaurantShell) return <RestaurantShell site={site} onBack={onBack} />
  return <ProjectView site={site} onBack={onBack} />
}
