import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Ingénieur en Chef', href: '#chief-engineer' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      style={{
        ...styles.nav,
        background: scrolled ? 'rgba(15,20,25,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 0 rgba(255,107,0,0.2)' : 'none',
        borderBottomColor: scrolled ? 'rgba(255,107,0,0.2)' : 'transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.button 
        onClick={() => handleNav('#home')} 
        style={styles.logo}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span style={styles.logoAccent}>BCGC</span>
        <span style={styles.logoSub}>S.A.R.L</span>
      </motion.button>

      {/* Desktop links */}
      <ul style={styles.linkList}>
        {links.map((l, i) => (
          <motion.li 
            key={l.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <motion.button 
              onClick={() => handleNav(l.href)} 
              style={styles.link}
              whileHover={{ color: '#ff6b00', backgroundColor: 'rgba(255,107,0,0.1)' }}
            >
              {l.label}
            </motion.button>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a 
        href="mailto:bcggc.sarl@gmail.com" 
        style={styles.cta}
        whileHover={{ 
          backgroundColor: '#ff6b00', 
          color: '#0f1419',
          scale: 1.05,
          boxShadow: '0 0 20px rgba(255,107,0,0.4)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        Nous contacter
      </motion.a>

      {/* Mobile toggle */}
      <button style={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={22} color="#ff6b00" /> : <Menu size={22} color="#ff6b00" />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={styles.drawer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <motion.button 
                key={l.href} 
                onClick={() => handleNav(l.href)} 
                style={styles.drawerLink}
                whileHover={{ x: 4, color: '#ff6b00' }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    padding: '0 5vw',
    height: '70px',
    transition: 'background 0.3s, box-shadow 0.3s',
    borderBottom: '1px solid transparent',
  },
  logo: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
    marginRight: 'auto',
  },
  logoAccent: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '22px',
    fontWeight: 800,
    color: '#ff6b00',
    textShadow: '0 0 20px rgba(255,107,0,0.3)',
  },
  logoSub: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#666',
    letterSpacing: '2px',
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    gap: '8px',
    '@media(max-width:768px)': { display: 'none' },
  },
  link: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
    color: '#b0adb8',
    padding: '8px 14px',
    borderRadius: '6px',
    transition: 'color 0.2s',
    fontFamily: 'Inter, sans-serif',
  },
  cta: {
    marginLeft: '16px',
    padding: '8px 20px',
    borderRadius: '6px',
    background: 'transparent',
    border: '2px solid #ff6b00',
    color: '#ff6b00',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    position: 'relative',
    overflow: 'hidden',
  },
  burger: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '16px',
  },
  drawer: {
    position: 'absolute',
    top: '70px',
    left: 0, right: 0,
    background: 'rgba(15,20,25,0.98)',
    borderBottom: '2px solid rgba(255,107,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 5vw',
    gap: '4px',
  },
  drawerLink: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    color: '#c8c5d0',
    padding: '12px 0',
    textAlign: 'left',
    fontFamily: 'Inter, sans-serif',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
}
