import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from './projectsData'
import ProjectCard from './ProjectCard'

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="projects" style={styles.section}>
      {/* Blueprint grid background */}
      <div style={styles.blueprintGrid} aria-hidden="true" />
      
      {/* Construction stripe accent */}
      <div style={styles.stripeAccent} aria-hidden="true" />

      <motion.div
        style={styles.heading}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={headingVariants}
      >
        <div style={styles.sectionLabel}>
          <span style={styles.labelLine} />
          <span style={styles.labelText}>04 — Projets Réalisés</span>
          <span style={styles.labelLine} />
        </div>
        <h2 style={styles.title}>Notre Portfolio</h2>
        <p style={styles.subtitle}>
          Des projets d'envergure menés avec rigueur et expertise, de la conception à la réception.
        </p>
      </motion.div>

      <motion.div
        style={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 5vw',
    background: '#0f1419',
    overflow: 'hidden',
  },
  blueprintGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
  },
  stripeAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `repeating-linear-gradient(
      90deg,
      #ff6b00,
      #ff6b00 20px,
      transparent 20px,
      transparent 40px
    )`,
    opacity: 0.3,
  },
  heading: {
    textAlign: 'center',
    marginBottom: '64px',
    maxWidth: '640px',
    margin: '0 auto 64px',
  },
  sectionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  labelLine: {
    flex: 1,
    maxWidth: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #ff6b00)',
  },
  labelText: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#ff6b00',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 800,
    color: '#f0ede6',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#888',
    lineHeight: 1.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
}
