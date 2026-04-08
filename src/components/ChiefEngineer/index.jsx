import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { engineer, fadeUp, fadeLeft, fadeRight } from './engineerData'
import StatCard from './StatCard'
import Badge from './Badge'
import CertCard from './CertCard'
import AchievementItem from './AchievementItem'

export default function ChiefEngineer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={styles.section} id="chief-engineer">
      <div style={styles.bgAccent} aria-hidden="true" />

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        style={styles.sectionLabel}
      >
        <span style={styles.labelLine} />
        <span style={styles.labelText}>06 — Fondateur & Ingénieur en Chef</span>
        <span style={styles.labelLine} />
      </motion.div>

      <div style={styles.splitLayout}>
        {/* Left: Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeLeft}
          style={styles.leftCol}
        >
          <motion.div
            style={styles.statsGrid}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {engineer.stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeRight}
          style={styles.rightCol}
        >
          <div>
            <h2 style={styles.name}>{engineer.name}</h2>
            <p style={styles.title}>{engineer.title}</p>
            <p style={styles.bureau}>{engineer.bureau}</p>
            <div style={styles.contactRow}>
              <a href={`mailto:${engineer.email}`} style={styles.contactLink}>
                ✉ {engineer.email}
              </a>
              <span style={styles.contactSep}>·</span>
              <span style={styles.contactInfo}>📍 {engineer.location}</span>
            </div>
          </div>

          <p style={styles.bio}>{engineer.bio}</p>

          <motion.blockquote
            style={styles.quoteBlock}
            whileHover={{ borderLeftColor: '#ff6b00' }}
          >
            <Quote size={20} color="#ff6b00" style={{ marginBottom: 8 }} />
            <p style={styles.quoteText}>{engineer.quote}</p>
          </motion.blockquote>

          <div>
            <h3 style={styles.subHeading}>Réalisations clés</h3>
            <motion.ul
              style={styles.achievementList}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {engineer.achievements.map((a, i) => (
                <AchievementItem key={i} {...a} index={i} />
              ))}
            </motion.ul>
          </div>

          <div>
            <h3 style={styles.subHeading}>Diplômes & Certifications</h3>
            <motion.div
              style={styles.certGrid}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {engineer.certifications.map((c, i) => (
                <CertCard key={i} {...c} index={i} />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 style={styles.subHeading}>Domaines d'expertise</h3>
            <div style={styles.badgeRow}>
              {engineer.expertise.map((e) => (
                <Badge key={e}>{e}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 5vw',
    background: 'linear-gradient(160deg, #1a1f26 0%, #0f1419 60%, #0f0d08 100%)',
    overflow: 'hidden',
  },
  bgAccent: {
    position: 'absolute',
    top: '-200px',
    right: '-200px',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  sectionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '64px',
    justifyContent: 'center',
  },
  labelLine: {
    flex: 1,
    maxWidth: '120px',
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
  splitLayout: {
    display: 'grid',
    gridTemplateColumns: 'minmax(280px, 420px) 1fr',
    gap: '80px',
    alignItems: 'start',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  photoWrapper: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'visible',
  },
  photoAccentBorder: {
    position: 'absolute',
    inset: '-4px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #ff6b00 0%, transparent 60%)',
    zIndex: 0,
  },
  photo: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    aspectRatio: '4/5',
    objectFit: 'cover',
    borderRadius: '16px',
    display: 'block',
    filter: 'grayscale(15%)',
  },
  expBadge: {
    position: 'absolute',
    bottom: '-20px',
    right: '-20px',
    zIndex: 2,
    background: '#ff6b00',
    borderRadius: '12px',
    padding: '14px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
  },
  expBadgeValue: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#0f1419',
    lineHeight: 1,
  },
  expBadgeLabel: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#0f1419',
    textAlign: 'center',
    marginTop: '4px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '12px',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(32px, 4vw, 52px)',
    fontWeight: 800,
    color: '#f0ede6',
    lineHeight: 1.1,
    marginBottom: '8px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#ff6b00',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  bureau: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#888',
    marginTop: '6px',
    letterSpacing: '0.5px',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '10px',
  },
  contactLink: {
    fontSize: '13px',
    color: '#ff6b00',
    textDecoration: 'none',
    borderBottom: '1px dashed rgba(201,168,76,0.4)',
    paddingBottom: '1px',
  },
  contactSep: {
    color: '#444',
  },
  contactInfo: {
    fontSize: '13px',
    color: '#888',
  },
  bio: {
    fontSize: '15px',
    color: '#b0adb8',
    lineHeight: 1.8,
    borderLeft: '3px solid rgba(201,168,76,0.3)',
    paddingLeft: '20px',
  },
  quoteBlock: {
    background: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderLeft: '4px solid rgba(201,168,76,0.4)',
    borderRadius: '0 12px 12px 0',
    padding: '24px 28px',
    transition: 'border-left-color 0.3s',
  },
  quoteText: {
    fontSize: '15px',
    fontStyle: 'italic',
    color: '#d4d0c8',
    lineHeight: 1.7,
  },
  subHeading: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: '#ff6b00',
    marginBottom: '16px',
  },
  achievementList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  certGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
}
