import { motion } from 'framer-motion'
import { cardVariants } from './servicesData'

const styles = {
  card: {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    cursor: 'default',
    transition: 'border-color 0.3s',
  },
  iconWrap: {
    width: '46px',
    height: '46px',
    borderRadius: '12px',
    background: 'rgba(201,168,76,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#f0ede6',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: '13px',
    color: '#888',
    lineHeight: 1.7,
    flex: 1,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '4px',
  },
  tag: {
    fontSize: '11px',
    color: '#ff6b00',
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.2)',
    padding: '3px 10px',
    borderRadius: '100px',
  },
}

export default function ServiceCard({ icon: Icon, title, desc, tags }) {
  return (
    <motion.div
      variants={cardVariants}
      style={styles.card}
      whileHover={{ y: -6, borderColor: 'rgba(201,168,76,0.5)' }}
      transition={{ duration: 0.25 }}
    >
      <div style={styles.iconWrap}>
        <Icon size={22} color="#ff6b00" />
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <div style={styles.tagRow}>
        {tags.map((t) => (
          <span key={t} style={styles.tag}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
