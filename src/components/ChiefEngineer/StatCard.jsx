import { motion } from 'framer-motion'
import { fadeUp } from './engineerData'

const styles = {
  statCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'default',
    transition: 'border-color 0.2s',
  },
  statValue: {
    fontSize: '26px',
    fontWeight: 800,
    color: '#ff6b00',
    fontFamily: "'Playfair Display', serif",
  },
  statLabel: {
    fontSize: '11px',
    color: '#888',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
}

export default function StatCard({ value, label, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      style={styles.statCard}
      whileHover={{ scale: 1.05, borderColor: '#ff6b00' }}
    >
      <span style={styles.statValue}>{value}</span>
      <span style={styles.statLabel}>{label}</span>
    </motion.div>
  )
}
