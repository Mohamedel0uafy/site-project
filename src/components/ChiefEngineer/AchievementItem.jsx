import { motion } from 'framer-motion'
import { fadeUp } from './engineerData'

const styles = {
  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '14px',
    color: '#c8c5d0',
    lineHeight: 1.5,
  },
  achievementIcon: {
    background: 'rgba(201,168,76,0.1)',
    borderRadius: '8px',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
}

export default function AchievementItem({ icon: Icon, text, index }) {
  return (
    <motion.li variants={fadeUp} custom={index} style={styles.achievementItem}>
      <span style={styles.achievementIcon}>
        <Icon size={16} color="#ff6b00" />
      </span>
      <span>{text}</span>
    </motion.li>
  )
}
