import { ProjectView } from '../project/ProjectView.jsx'
import { RestaurantBistroExperience } from '../restaurant/RestaurantBistroExperience.jsx'
import { RestaurantFastFoodExperience } from '../restaurant/RestaurantFastFoodExperience.jsx'
import { RestaurantGastronomyExperience } from '../restaurant/RestaurantGastronomyExperience.jsx'

/** Même principe que les templates legacy : une expérience plein écran dédiée par restaurant. */
const RESTAURANT_EXPERIENCE = {
  'table-constance': RestaurantGastronomyExperience,
  'atelier-sept': RestaurantBistroExperience,
  'carre-rouge': RestaurantFastFoodExperience,
}

export function ProjectExperience({ site, onBack }) {
  const Comp = site?.id ? RESTAURANT_EXPERIENCE[site.id] : undefined
  if (Comp) return <Comp site={site} onBack={onBack} />
  return <ProjectView site={site} onBack={onBack} />
}
