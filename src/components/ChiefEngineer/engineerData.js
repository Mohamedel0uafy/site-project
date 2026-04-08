import { Award, ShieldCheck, BookOpen, Layers, HardHat, BarChart2, CheckCircle2 } from 'lucide-react'

export const engineer = {
  name: 'My Ahmed EL Idrissi',
  bureau: 'BCGC S.A.R.L — Bureau de Contrôle Technique',
  title: 'Ingénieur Civil — Expert en Contrôle Technique & Structures',
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  experience: 18,
  email: 'bcggc.sarl@gmail.com',
  location: 'Inezgane, Résidence Chahrazad, 3ème étage',
  quote:
    '"La sécurité d\'une structure ne se négocie pas. Chaque calcul, chaque plan, chaque visite de chantier porte la responsabilité de vies humaines."',
  bio: `Fondateur et directeur technique de BCGC S.A.R.L, My Ahmed EL Idrissi a consacré 18 ans à la maîtrise du béton armé, de l'analyse structurelle et du contrôle technique de bâtiments complexes. Il a supervisé des projets allant des infrastructures publiques aux tours résidentielles R+12, en passant par des ouvrages d'art en zones sismiques. Son approche combine rigueur normative (RPA 99, DTR, Eurocode) et pragmatisme terrain.`,
  stats: [
    { value: '18+', label: "Années d'expérience" },
    { value: '240+', label: 'Projets supervisés' },
    { value: '12', label: 'Wilayas couvertes' },
    { value: '0', label: 'Sinistres structurels' },
  ],
  certifications: [
    { icon: BookOpen, label: "Ingénieur d'État — Génie Civil (ENP Alger)" },
    { icon: ShieldCheck, label: 'Contrôleur Technique Agréé — CTC National' },
    { icon: Award, label: 'Certification Eurocode 2 & 8 — Structures Sismiques' },
    { icon: Award, label: 'Formation BIM Management — Autodesk AEC' },
  ],
  expertise: [
    'Plans de coffrage & ferraillage',
    'Béton armé & précontraint',
    'Analyse sismique (RPA 99 v2003)',
    'Contrôle technique de bâtiments',
    'Calcul des fondations profondes',
    'Conformité DTR & Eurocode',
    'Suivi et réception de chantier',
    'Expertise post-sinistre',
  ],
  achievements: [
    { icon: HardHat, text: 'Supervision de 3 tours R+12 à Alger Centre sans réserve CTC' },
    { icon: Layers, text: "Conception structurelle d'un pont mixte acier-béton sur l'oued Harrach" },
    { icon: BarChart2, text: 'Audit technique de 40+ bâtiments post-séisme (Boumerdès 2003)' },
    { icon: CheckCircle2, text: "Zéro sinistre structurel sur l'ensemble des projets livrés" },
  ],
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
