export const SALON_NAME = 'Bold Beauty Lounge'
export const TAGLINE = 'Coiffure, Beauté, Sauna & Spa — Espace Réservé aux Femmes'
export const CITY = 'Casablanca'
export const ADDRESS = '14 Rue Aïn Aouda, Quartier Anfa, Casablanca'
export const PHONE = '+212 655 641 096'
export const EMAIL = 'contact@boldbeautylounge.ma'
export const WHATSAPP_NUMBER = '212655641096'

export interface TreatmentItem {
  id: string
  name: string
  durationMin: number
  priceDh: number
  description: string
}

export interface ServiceCategory {
  id: string
  category: string
  subtitle: string
  description: string
  startingPriceDh: number
  image: string
  treatments: TreatmentItem[]
}

export interface ProductItem {
  id: string
  name: string
  category: string
  priceDh: number
  originalPriceDh?: number
  image: string
  badge?: string
  description: string
}

export const HOURS = [
  { day: 'Lundi', hours: '09:30 – 20:00', open: true },
  { day: 'Mardi', hours: '09:30 – 20:00', open: true },
  { day: 'Mercredi', hours: '09:30 – 20:00', open: true },
  { day: 'Jeudi', hours: '09:30 – 20:00', open: true },
  { day: 'Vendredi', hours: '09:30 – 20:00', open: true },
  { day: 'Samedi', hours: '09:30 – 20:00', open: true },
  { day: 'Dimanche', hours: 'Fermé', open: false },
]

export const SERVICES: ServiceCategory[] = [
  {
    id: 'coiffure',
    category: 'Coiffure',
    subtitle: 'Haute Coiffure & Coloration',
    description: 'Diagnostic personnalisé, coupes créatives, balayages sur-mesure et soins profonds à la kératine.',
    startingPriceDh: 250,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'c1', name: 'Brushing Couture & Modelage', durationMin: 45, priceDh: 250, description: 'Shampooing traitant, soin rituel et brushing structuré sur mesure.' },
      { id: 'c2', name: 'Coupe & Styling Signature', durationMin: 60, priceDh: 450, description: 'Diagnostic personnalisé, coupe créative et mise en forme.' },
      { id: 'c3', name: 'Soin Botox Capillaire Organique', durationMin: 90, priceDh: 1200, description: 'Régénération profonde à l\'acide hyaluronique et kératine.' },
      { id: 'c4', name: 'Balayage Sur-Mesure & Ombré', durationMin: 150, priceDh: 1800, description: 'Éclaircissement naturel fondu avec patine révélatrice de brillance.' },
    ],
  },
  {
    id: 'soins-beaute',
    category: 'Soins beauté',
    subtitle: 'Visage & Esthétique',
    description: 'Protocols dermo-esthétiques d\'exception, nettoyages profonds et soins anti-âge d\'avant-garde.',
    startingPriceDh: 400,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'sb1', name: 'Hydra-Facial Éclat Suprême', durationMin: 75, priceDh: 900, description: 'Nettoyage profond, extraction des impuretés et infusion de sérums vitaminés.' },
      { id: 'sb2', name: 'Soin Anti-Âge Lifting Kobido', durationMin: 75, priceDh: 850, description: 'Massage facial japonais ancestral pour stimuler le collagène.' },
      { id: 'sb3', name: 'Manucure & Vernis Semi-Permanent', durationMin: 60, priceDh: 400, description: 'Soin minutieux des ongles et cuticules longue tenue.' },
    ],
  },
  {
    id: 'sauna',
    category: 'Sauna',
    subtitle: 'Chaleur Purifiante & Détox',
    description: 'Séance de sauna finlandais en espace privatif pour éliminer les toxines et stimuler la circulation.',
    startingPriceDh: 300,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'sa1', name: 'Séance Sauna Privative (45 min)', durationMin: 45, priceDh: 300, description: 'Accès exclusif au sauna sec avec infusions d\'huiles essentielles d\'eucalyptus.' },
      { id: 'sa2', name: 'Rituel Sauna & Gommage Solaire', durationMin: 75, priceDh: 550, description: 'Sauna suivi d\'un gommage aux sels marins et huiles aromatiques.' },
    ],
  },
  {
    id: 'spa',
    category: 'Spa',
    subtitle: 'Hammam Beldi & Hydrothérapie',
    description: 'Immersion luxueuse dans un cadre apaisant au savon noir, gommage kessa et masque au ghassoul.',
    startingPriceDh: 350,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'sp1', name: 'Hammam Beldi Traditionnel', durationMin: 60, priceDh: 350, description: 'Bain de vapeur aromatique, gommage au savon noir et eau de fleur d\'oranger.' },
      { id: 'sp2', name: 'Hammam Royal au Ghassoul & Roses', durationMin: 90, priceDh: 650, description: 'Rituel complet avec enveloppement au ghassoul aux 7 plantes et masque capillaire.' },
      { id: 'sp3', name: 'Head Spa Japonais & Hydrothérapie', durationMin: 75, priceDh: 850, description: 'Cascade d\'eau tiède, massage crânien et soin cuir chevelu.' },
    ],
  },
  {
    id: 'massage',
    category: 'Massage',
    subtitle: 'Massages du Monde & Détente',
    description: 'Manœuvres envolées, pierres chaudes et huiles précieuses pour dénouer les tensions corporelles.',
    startingPriceDh: 500,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'm1', name: 'Massage Sculptant aux Huiles Chaudes', durationMin: 60, priceDh: 500, description: 'Manœuvres fluides et enveloppantes à l\'huile d\'argan pure aromatisée.' },
      { id: 'm2', name: 'Massage Deep Tissue & Décontracturant', durationMin: 60, priceDh: 600, description: 'Pression profonde ciblée sur les zones de tension musculaire.' },
      { id: 'm3', name: 'Massage aux Pierres Chaudes de Volcan', durationMin: 75, priceDh: 750, description: 'Chaleur réconfortante des pierres volcaniques pour une détente absolue.' },
    ],
  },
  {
    id: 'bien-etre',
    category: 'Bien-être',
    subtitle: 'Soins Minceur & Drainage',
    description: 'Méthode Renata França, madero-thérapie et soins enveloppants pour affiner et tonifier la silhouette.',
    startingPriceDh: 600,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    treatments: [
      { id: 'be1', name: 'Drainage Lymphatique Méthode Renata', durationMin: 60, priceDh: 650, description: 'Pression ferme et rythme rapide pour dégonfler le corps et relancer la circulation.' },
      { id: 'be2', name: 'Remodelage Madero-Thérapie', durationMin: 60, priceDh: 600, description: 'Massage avec ustensiles en bois précieux pour casser les capitons.' },
    ],
  },
]

export const PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'Élixir d\'Argan Pur Bio & Fleur d\'Oranger',
    category: 'Soin Corps & Cheveux',
    priceDh: 380,
    originalPriceDh: 450,
    image: 'https://images.unsplash.com/photo-1608248597263-00079e9658b4?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
    description: 'Huile d\'argan pressée à froid infusée aux essences naturelles de fleur d\'oranger marocaine.',
  },
  {
    id: 'p2',
    name: 'Sérum Sublimateur Kératine & Or 24K',
    category: 'Soin Capillaire Premium',
    priceDh: 520,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    badge: 'Nouveau',
    description: 'Sérum régénérant intense pour protéger, sceller les pointes et offrir un éclat miroir.',
  },
  {
    id: 'p3',
    name: 'Masque Purifiant Ghassoul & 7 Plantes',
    category: 'Rituel Spa & Visage',
    priceDh: 290,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Argile minérale marocaine enrichie en plantes botaniques apaisantes.',
  },
  {
    id: 'p4',
    name: 'Beurre de Karité & Huile de Rose Sauvage',
    category: 'Hydratation Intense',
    priceDh: 340,
    originalPriceDh: 400,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    badge: 'Coup de Cœur',
    description: 'Baume corporel onctueux réconfortant pour peaux sèches et délicates.',
  },
]

export const FEATURED_OFFER = {
  title: 'Coffret Rituel « Nos Essentiels Beauté »',
  subtitle: 'L\'expérience Spa & Beauté à domicile',
  description: 'Un coffret d\'exception réunissant l\'Élixir d\'Argan Bio, le Masque au Ghassoul et la bougie parfumée ambre & rose. Offrez-vous un rituel holistique réparateur.',
  priceDh: 890,
  originalPriceDh: 1150,
  image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
  benefits: [
    'Élixir d\'Argan Bio 100ml',
    'Masque Ghassoul Purifiant 200g',
    'Bougie Parfumée Ambre & Rose',
    'Gant Kessa de Soie Traditionnel',
  ],
}

export const WHY_US_FEATURES = [
  {
    number: '01',
    title: 'Expertise',
    description: 'Des professionnels passionnés et expérimentés.',
  },
  {
    number: '02',
    title: 'Qualité',
    description: 'Des produits sélectionnés avec soin.',
  },
  {
    number: '03',
    title: 'Bien-être',
    description: 'Une expérience pensée pour votre détente.',
  },
  {
    number: '04',
    title: 'Service personnalisé',
    description: 'Une attention particulière pour chaque cliente.',
  },
]

export const REVIEWS = [
  {
    id: '1',
    name: 'Sofia B.',
    service: 'Hammam Royal & Head Spa',
    rating: 5,
    quote: 'Une véritable oasis de sérénité au cœur de Casablanca. L\'accueil est d\'une délicatesse rare, et le spa est tout simplement magique !',
  },
  {
    id: '2',
    name: 'Kenza M.',
    service: 'Brushing Couture & Onglerie',
    rating: 5,
    quote: 'Le souci du détail et le professionnalisme de l\'équipe m\'ont conquise. La manucure est d\'une précision absolue.',
  },
  {
    id: '3',
    name: 'Leïla T.',
    service: 'Hydra-Facial & Sauna',
    rating: 5,
    quote: 'Ma peau revit ! Le salon est d\'une propreté exemplaire et l\'ambiance réservée aux femmes permet de déconnecter totalement.',
  },
  {
    id: '4',
    name: 'Ghita K.',
    service: 'Soin Kératine & Massage',
    rating: 5,
    quote: 'Mes cheveux n\'ont jamais été aussi doux et brillants. La réservation via WhatsApp est ultra simple. Je recommande à 100% !',
  },
]
