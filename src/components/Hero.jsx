import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ShieldCheck, Award, HardHat, Building2 } from 'lucide-react'

const trustPills = [
  { icon: ShieldCheck, text: 'Contrôle Technique Agréé' },
  { icon: Award, text: '18+ ans d\'expérience' },
  { icon: HardHat, text: '240+ projets supervisés' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollToServices = () =>
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={ref} id="home" style={styles.section}>
      {/* Blueprint grid background */}
      <motion.div 
        style={{ ...styles.bgGrid, y }} 
        aria-hidden="true"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Construction stripe accent */}
      <div style={styles.stripeAccent} aria-hidden="true" />

      {/* Orange glows */}
      <div style={styles.glow} aria-hidden="true" />
      <motion.div 
        style={styles.glowSecondary} 
        aria-hidden="true"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Building icon watermark */}
      <motion.div
        style={styles.buildingWatermark}
        animate={{
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Building2 size={400} color="#ff6b00" />
      </motion.div>

      <motion.div style={{ ...styles.content, opacity }}>
        {/* Eyebrow with construction theme */}
        <motion.p 
          {...fadeUp(0.1)} 
          style={styles.eyebrow}
          whileHover={{ scale: 1.05 }}
        >
          <HardHat size={14} style={{ marginRight: 6 }} />
          Bureau de Contrôle Technique
        </motion.p>

        {/* Headline with industrial styling */}
        <motion.h1 {...fadeUp(0.25)} style={styles.headline}>
          BCGC <span style={styles.headlineAccent}>S.A.R.L</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.4)} style={styles.sub}>
          Expertise structurelle, contrôle technique et conformité normative
          <br />
          pour vos projets de construction au Maroc.
        </motion.p>

        {/* Trust pills with stagger */}
        <motion.div {...fadeUp(0.55)} style={styles.pills}>
          {trustPills.map(({ icon: Icon, text }, i) => (
            <motion.span 
              key={text} 
              style={styles.pill}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,0,0.6)', backgroundColor: 'rgba(255,107,0,0.1)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <Icon size={14} color="#ff6b00" />
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs with construction styling */}
        <motion.div {...fadeUp(0.7)} style={styles.ctaRow}>
          <motion.button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            style={styles.ctaPrimary}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(255,107,0,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Nos Services
          </motion.button>
          <motion.a 
            href="mailto:bcggc.sarl@gmail.com" 
            style={styles.ctaSecondary}
            whileHover={{ 
              scale: 1.05, 
              background: 'rgba(255,107,0,0.1)',
              borderColor: '#ff6b00'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Demander un devis
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.button
          onClick={scrollToServices}
          style={styles.scrollHint}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.1, borderColor: '#ff6b00' }}
          aria-label="Défiler vers le bas"
        >
          <ArrowDown size={20} color="#ff6b00" />
        </motion.button>
      </motion.div>

      {/* Bottom fade */}
      <div style={styles.bottomFade} aria-hidden="true" />
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: '#0f1419',
  },
  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,107,0,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,107,0,0.06) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 0,
  },
  stripeAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    background: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(255,107,0,0.02) 20px,
      rgba(255,107,0,0.02) 40px
    )`,
    zIndex: 0,
    pointerEvents: 'none',
  },
  glow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '700px',
    height: '500px',
    background: 'radial-gradient(ellipse, rgba(255,107,0,0.15) 0%, transparent 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  glowSecondary: {
    position: 'absolute',
    top: '40%',
    right: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  buildingWatermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '120px 5vw 80px',
    maxWidth: '860px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '28px',
  },
  eyebrow: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#ff6b00',
    background: 'rgba(255,107,0,0.1)',
    border: '2px solid rgba(255,107,0,0.3)',
    padding: '8px 20px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 20px rgba(255,107,0,0.2)',
  },
  headline: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(52px, 10vw, 110px)',
    fontWeight: 800,
    lineHeight: 1,
    color: '#f0ede6',
    letterSpacing: '-2px',
    textShadow: '0 0 40px rgba(255,107,0,0.2)',
  },
  headlineAccent: {
    color: '#ff6b00',
    textShadow: '0 0 30px rgba(255,107,0,0.5)',
  },
  sub: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#999',
    lineHeight: 1.8,
    maxWidth: '560px',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  pill: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#b0adb8',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,107,0,0.2)',
    padding: '6px 14px',
    borderRadius: '4px',
    transition: 'all 0.3s',
  },
  ctaRow: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaPrimary: {
    padding: '14px 32px',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%)',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  ctaSecondary: {
    padding: '14px 32px',
    borderRadius: '4px',
    background: 'transparent',
    border: '2px solid rgba(255,107,0,0.5)',
    color: '#ff6b00',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  scrollHint: {
    background: 'none',
    border: '2px solid rgba(255,107,0,0.3)',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginTop: '12px',
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: '200px',
    background: 'linear-gradient(to bottom, transparent, #0f1419)',
    zIndex: 1,
    pointerEvents: 'none',
  },
}
