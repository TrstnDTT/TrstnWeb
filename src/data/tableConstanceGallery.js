/**
 * Galerie « La salle » — imports Vite pour URLs stables en dev & production
 * (les fichiers dans `public/` peuvent être absents du dépôt ou mal servis).
 */
import dining from '../assets/table-constance/DiningHallViewRestaurant.webp'
import dish from '../assets/table-constance/Dish.webp'
import outside from '../assets/table-constance/OutsideViewNightime.jpg'
import panorama from '../assets/table-constance/Vu_panoramique.jpg'

export const TABLE_CONSTANCE_GALLERY = [
  { caption: 'Salle : nappes ivoire, lumière tamisée', src: dining },
  { caption: 'Assiette saison — précision du dressage', src: dish },
  { caption: 'Façade en soirée', src: outside },
  { caption: 'Vue panoramique sur la salle', src: panorama },
]
