/**
 * Contenu structuré — Le Labo de Peau (mini-site piercing premium).
 */

export const LABO_PALETTE = {
  surgical: '#FAFAFA',
  anthracite: '#121212',
  gold: '#D4AF37',
}

/** Bar à bijoux — noms marketing + avantages (pas de jargon seul). */
export const LABO_MATERIALS = [
  {
    id: 'gold',
    title: "L'Or Éternel",
    tagline: 'Chaleur noble, tenue dans le temps',
    advantages: ['Ne noircit pas (entretien adapté)', 'Hypoallergénique (alliages sélectionnés)', 'Brillance durable'],
    note: 'Référence 14k / 18k — sertissage et poli bijouterie.',
  },
  {
    id: 'titanium',
    title: 'Le Titane de Grade Médical',
    tagline: 'Référence implant, léger et neutre',
    advantages: ['Ne noircit pas', 'Hypoallergénique', 'Résistant & anodisable'],
    note: 'Titane implant-grade — idéal cicatrisation et port 24/7.',
  },
  {
    id: 'crystal',
    title: 'Cristaux Étincelants',
    tagline: 'Éclat maîtrisé, pose sécurisée',
    advantages: ['Brillance durable', 'Sertis stables', 'Choix de teintes'],
    note: 'Pierres synthétiques certifiées — pas de compromis sur la fixation.',
  },
]

/**
 * Carte des actes — prix indicatifs, cicatrisation (semaines), confort 1–3.
 */
export const LABO_PIERCING_ACTS = [
  {
    id: 'oreilles',
    label: 'Oreilles',
    items: [
      { name: 'Lobes', price: '45€', healing: '8–12 sem.', comfort: 3 },
      { name: 'Helix', price: '52€', healing: '6–12 mois', comfort: 2 },
      { name: 'Conch', price: '58€', healing: '6–12 mois', comfort: 2 },
      { name: 'Tragus', price: '52€', healing: '3–9 mois', comfort: 2 },
      { name: 'Industrial', price: '68€', healing: '6–12 mois', comfort: 1 },
    ],
  },
  {
    id: 'visage',
    label: 'Visage',
    items: [
      { name: 'Septum', price: '55€', healing: '2–6 mois', comfort: 2 },
      { name: 'Nostril (nez)', price: '48€', healing: '2–4 mois', comfort: 3 },
      { name: 'Arcade', price: '52€', healing: '6–9 mois', comfort: 2 },
      { name: 'Labret (lèvre)', price: '52€', healing: '2–4 mois', comfort: 2 },
      { name: 'Labret vertical', price: '58€', healing: '3–6 mois', comfort: 2 },
    ],
  },
  {
    id: 'corps',
    label: 'Corps',
    items: [
      { name: 'Nombril', price: '55€', healing: '6–12 mois', comfort: 2 },
      { name: 'Micro-implants (dermaux)', price: 'sur devis', healing: 'variable', comfort: 2 },
    ],
  },
]

export const LABO_ZERO_RISK = [
  {
    title: 'Autoclave classe B',
    detail: 'Stérilisation traçable — cycles journalisés, contrôle d’incubation.',
  },
  {
    title: 'Usage unique',
    detail: 'Aiguilles et consommables scellés ouverts sous vos yeux — une pièce, un geste.',
  },
  {
    title: 'Champ stérile',
    detail: 'Désinfection en cascade, gants stériles par phase, refus si la peau présente une lésion.',
  },
]

export const LABO_AFTERCARE_DIGITAL = [
  {
    title: 'Nettoyage',
    body: 'Saline stérile ou solution recommandée — sans parfum, sans alcool sur le frais. Tapoter, ne pas frotter.',
  },
  {
    title: 'Ce qu’il faut éviter',
    body: 'Piscine / mer les premières semaines, sommeil sur la zone, bijoux non validés, retraits précoces.',
  },
  {
    title: 'Suivi',
    body: 'Rappel des signes d’alerte + contrôle J+7 offert — ligne directe si la zone réagit.',
  },
]
