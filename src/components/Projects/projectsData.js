export const projects = [
  {
    id: 1,
    title: 'Tours Résidentielles R+12',
    location: 'Alger Centre',
    category: 'Résidentiel',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description: 'Supervision complète de 3 tours résidentielles avec contrôle technique sans réserve CTC.',
    stats: { surface: '12,000 m²', duration: '24 mois', type: 'R+12' },
    services: ['Contrôle technique', 'Plans de ferraillage', 'Suivi de chantier'],
  },
  {
    id: 2,
    title: 'Pont Mixte Acier-Béton',
    location: 'Oued Harrach',
    category: 'Infrastructure',
    iconName: 'Construction',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    description: 'Conception structurelle complète d\'un ouvrage d\'art en zone sismique.',
    stats: { portée: '45 m', duration: '18 mois', type: 'Pont mixte' },
    services: ['Analyse structurelle', 'Calcul sismique', 'Plans d\'exécution'],
  },
  {
    id: 3,
    title: 'Complexe Commercial',
    location: 'Oran',
    category: 'Commercial',
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Audit technique et mise en conformité d\'un centre commercial de grande envergure.',
    stats: { surface: '8,500 m²', duration: '12 mois', type: 'R+3' },
    services: ['Audit technique', 'Conformité DTR', 'Expertise post-sinistre'],
  },
  {
    id: 4,
    title: 'Résidence Chahrazad',
    location: 'Inezgane',
    category: 'Résidentiel',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    description: 'Contrôle technique complet et suivi de réception pour résidence moderne.',
    stats: { surface: '4,200 m²', duration: '16 mois', type: 'R+6' },
    services: ['Contrôle technique', 'Réception de chantier', 'Plans de coffrage'],
  },
]

export const projectVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
