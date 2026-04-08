import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import InfoItem from './InfoItem'

const fadeUp = (delay = 0) => ({
  variants: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  },
})

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const anim = (delay) => ({
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    ...fadeUp(delay),
  })

  return (
    <section ref={ref} id="contact" style={styles.section}>
      <div style={styles.glow} aria-hidden="true" />

      <motion.div style={styles.sectionLabel} {...anim(0)}>
        <span style={styles.labelLine} />
        <span style={styles.labelText}>07 — Contact</span>
        <span style={styles.labelLine} />
      </motion.div>

      <div style={styles.layout}>
        <div style={styles.left}>
          <motion.h2 style={styles.title} {...anim(0.1)}>
            Travaillons
            <br />
            <span style={styles.titleAccent}>ensemble.</span>
          </motion.h2>
          <motion.p style={styles.sub} {...anim(0.2)}>
            Vous avez un projet de construction, une expertise à réaliser ou besoin d'un contrôle technique ?
            Contactez-nous directement.
          </motion.p>

          <motion.div style={styles.infoList} {...anim(0.3)}>
            <InfoItem
              icon={Mail}
              label="Email"
              value="bcggc.sarl@gmail.com"
              href="mailto:bcggc.sarl@gmail.com"
            />
            <InfoItem
              icon={MapPin}
              label="Adresse"
              value="Inezgane, Résidence Chahrazad, 3ème étage"
            />
            <InfoItem icon={Phone} label="Disponibilité" value="Lun – Sam, 8h00 – 18h00" />
          </motion.div>
        </div>

        <motion.div style={styles.card} {...anim(0.25)}>
          <h3 style={styles.cardTitle}>Envoyer un message</h3>
          <p style={styles.cardSub}>Décrivez votre projet et nous vous répondrons sous 24h.</p>
          <a
            href="mailto:bcggc.sarl@gmail.com?subject=Demande de devis — BCGC S.A.R.L"
            style={styles.emailBtn}
          >
            <Mail size={16} />
            Écrire à bcggc.sarl@gmail.com
            <ArrowUpRight size={16} />
          </a>

          <div style={styles.divider} />

          <div style={styles.mapPlaceholder}>
            <MapPin size={28} color="#ff6b00" />
            <span style={styles.mapText}>Inezgane, Résidence Chahrazad</span>
            <span style={styles.mapSub}>3ème étage — Souss-Massa, Maroc</span>
          </div>
        </motion.div>
      </div>

      <motion.div style={styles.footer} {...anim(0.5)}>
        <span style={styles.footerText}>
          © {new Date().getFullYear()} BCGC S.A.R.L — Bureau de Contrôle Technique. Tous droits réservés.
        </span>
        <span style={styles.footerText}>My Ahmed EL Idrissi — Ingénieur Civil</span>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 5vw 60px',
    background: 'linear-gradient(160deg, #0f1419 0%, #1a1f26 100%)',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '500px',
    height: '500px',
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
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    maxWidth: '1100px',
    margin: '0 auto',
    alignItems: 'start',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(36px, 5vw, 60px)',
    fontWeight: 800,
    color: '#f0ede6',
    lineHeight: 1.1,
  },
  titleAccent: { color: '#ff6b00' },
  sub: {
    fontSize: '15px',
    color: '#888',
    lineHeight: 1.8,
    maxWidth: '420px',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '20px',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#f0ede6',
  },
  cardSub: {
    fontSize: '14px',
    color: '#888',
    lineHeight: 1.7,
  },
  emailBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 20px',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    textDecoration: 'none',
    justifyContent: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.06)',
  },
  mapPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    padding: '24px',
    background: 'rgba(201,168,76,0.04)',
    borderRadius: '12px',
    border: '1px dashed rgba(201,168,76,0.2)',
  },
  mapText: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#c8c5d0',
  },
  mapSub: {
    fontSize: '12px',
    color: '#666',
  },
  footer: {
    marginTop: '80px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    maxWidth: '1100px',
    margin: '80px auto 0',
  },
  footerText: {
    fontSize: '12px',
    color: '#444',
  },
}
