import { motion } from 'framer-motion'
import { fadeUp } from './engineerData'

const styles = {
  certCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '10px',
    padding: '14px',
  },
  certLabel: {
    fontSize: '12px',
    color: '#b0adb8',
    lineHeight: 1.5,
  },
}

export default function CertCard({ icon: Icon, label, index }) {
  return (
    <motion.div variants={fadeUp} custom={index} style={styles.certCard}>
      <Icon size={18} color="#ff6b00" style={{ flexShrink: 0, marginTop: 2 }} />
      <span style={styles.certLabel}>{label}</span>
    </motion.div>
  )
}
