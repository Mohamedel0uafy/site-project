import { ShieldCheck, FileText, HardHat, Layers, BarChart2, Search, Ruler, AlertTriangle } from 'lucide-react'

export const services = [
  {
    icon: ShieldCheck,
    title: 'Contrôle Technique de Bâtiments',
    desc: 'Vérification de la conformité structurelle et réglementaire de vos ouvrages selon les normes DTR, RPA 99 et Eurocode.',
    tags: ['DTR', 'RPA 99', 'Eurocode'],
  },
  {
    icon: FileText,
    title: 'Plans de Coffrage & Ferraillage',
    desc: "Élaboration et vérification des plans d'exécution béton armé, notes de calcul et détails de ferraillage.",
    tags: ['Béton armé', "Plans d'exécution", 'Notes de calcul'],
  },
  {
    icon: Layers,
    title: 'Analyse Structurelle',
    desc: 'Modélisation et calcul des structures (portiques, voiles, fondations) avec logiciels certifiés.',
    tags: ['Robot Structural', 'SAP2000', 'Fondations'],
  },
  {
    icon: HardHat,
    title: 'Suivi & Réception de Chantier',
    desc: 'Visites périodiques, levée de réserves, procès-verbaux de réception et rapports de conformité.',
    tags: ['Visites terrain', 'PV de réception', 'Rapports'],
  },
  {
    icon: BarChart2,
    title: 'Expertise Post-Sinistre',
    desc: 'Diagnostic structurel après sinistre (séisme, affaissement, fissuration) et préconisations de confortement.',
    tags: ['Diagnostic', 'Fissuration', 'Confortement'],
  },
  {
    icon: Search,
    title: 'Audit Technique de Bâtiments',
    desc: "Évaluation complète de l'état d'un bâtiment existant : structure, enveloppe, conformité réglementaire.",
    tags: ['Audit', 'État existant', 'Conformité'],
  },
  {
    icon: Ruler,
    title: 'Études Géotechniques',
    desc: 'Interprétation des rapports de sol, dimensionnement des fondations et recommandations techniques.',
    tags: ['Géotechnique', 'Fondations', 'Rapport de sol'],
  },
  {
    icon: AlertTriangle,
    title: 'Sécurité & Prévention',
    desc: 'Évaluation des risques structurels, plans de prévention et mise en conformité sécurité chantier.',
    tags: ['Sécurité', 'Risques', 'Prévention'],
  },
]

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
