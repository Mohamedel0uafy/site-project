import { motion } from 'framer-motion'

const style = {
  display: 'inline-block',
  padding: '6px 14px',
  borderRadius: '100px',
  border: '1px solid rgba(201,168,76,0.35)',
  fontSize: '12px',
  color: '#ff6b00',
  cursor: 'default',
  transition: 'background-color 0.2s, color 0.2s',
}

export default function Badge({ children }) {
  return (
    <motion.span
      style={style}
      whileHover={{ backgroundColor: '#ff6b00', color: '#0a0a0f' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  )
}
