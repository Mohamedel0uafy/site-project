import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services, containerVariants, headingVariants } from './servicesData'
import ServiceCard from './ServiceCard'

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="services" style={styles.section}>
      <div style={styles.bgAccent} aria-hidden="true" />

      <motion.div
        style={styles.heading}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={headingVariants}
      >
        <div style={styles.sectionLabel}>
          <span style={styles.labelLine} />
          <span style={styles.labelText}>05 — Nos Services</span>
          <span style={styles.labelLine} />
        </div>
        <h2 style={styles.title}>Ce que nous faisons</h2>
        <p style={styles.subtitle}>
          De la conception à la réception, BCGC S.A.R.L vous accompagne à chaque étape avec rigueur et
          expertise.
        </p>
      </motion.div>

      <motion.div
        style={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>

      <motion.div
        style={styles.ctaWrap}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p style={styles.ctaText}>Un projet en cours ? Parlons-en.</p>
        <a href="mailto:bcggc.sarl@gmail.com" style={styles.ctaBtn}>
          Demander un devis gratuit
        </a>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 5vw',
    background: 'linear-gradient(180deg, #0f1419 0%, #1a1f26 50%, #0f1419 100%)',
    overflow: 'hidden',
  },
  bgAccent: {
    position: 'absolute',
    bottom: '-200px',
    left: '-200px',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
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
    height: '1px',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  ctaWrap: {
    textAlign: 'center',
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  ctaText: {
    fontSize: '18px',
    color: '#b0adb8',
    fontWeight: 500,
  },
  ctaBtn: {
    padding: '14px 36px',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%)',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
  },
}
