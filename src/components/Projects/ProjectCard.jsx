import { motion } from 'framer-motion'
import { MapPin, Calendar, Ruler, Building2, Home, Construction, Factory } from 'lucide-react'
import { projectVariants } from './projectsData'

const iconMap = {
  Building2,
  Home,
  Construction,
  Factory,
}

const styles = {
  card: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,107,0,0.15)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    position: 'relative',
  },
  imageWrap: {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    background: '#1a1f26',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(30%) brightness(0.8)',
    transition: 'transform 0.5s, filter 0.5s',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent 40%, rgba(15,20,25,0.9) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '20px',
  },
  category: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ff6b00',
    background: 'rgba(255,107,0,0.15)',
    border: '1px solid rgba(255,107,0,0.3)',
    padding: '4px 12px',
    borderRadius: '3px',
    display: 'inline-block',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
  },
  iconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    background: 'rgba(255,107,0,0.1)',
    border: '1px solid rgba(255,107,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  titleWrap: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#f0ede6',
    marginBottom: '4px',
    lineHeight: 1.3,
  },
  location: {
    fontSize: '13px',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  description: {
    fontSize: '14px',
    color: '#999',
    lineHeight: 1.7,
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statLabel: {
    fontSize: '10px',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  statValue: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#ff6b00',
  },
  services: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  serviceTag: {
    fontSize: '11px',
    color: '#aaa',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '4px 10px',
    borderRadius: '3px',
  },
}

export default function ProjectCard({ project, index }) {
  const { title, location, category, iconName, image, description, stats, services } = project
  const Icon = iconMap[iconName] || Building2

  return (
    <motion.div
      variants={projectVariants}
      custom={index}
      style={styles.card}
      whileHover={{
        y: -8,
        borderColor: 'rgba(255,107,0,0.4)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={styles.imageWrap}>
        <motion.img
          src={image}
          alt={title}
          style={styles.image}
          whileHover={{ scale: 1.1, filter: 'grayscale(0%) brightness(1)' }}
          transition={{ duration: 0.5 }}
        />
        <div style={styles.overlay}>
          <span style={styles.category}>{category}</span>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.titleWrap}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.location}>
              <MapPin size={12} />
              {location}
            </p>
          </div>
          <div style={styles.iconWrap}>
            <Icon size={20} color="#ff6b00" />
          </div>
        </div>

        <p style={styles.description}>{description}</p>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statLabel}>
              <Ruler size={10} style={{ display: 'inline', marginRight: 2 }} />
              {Object.keys(stats)[0]}
            </span>
            <span style={styles.statValue}>{Object.values(stats)[0]}</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statLabel}>
              <Calendar size={10} style={{ display: 'inline', marginRight: 2 }} />
              {Object.keys(stats)[1]}
            </span>
            <span style={styles.statValue}>{Object.values(stats)[1]}</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statLabel}>Type</span>
            <span style={styles.statValue}>{Object.values(stats)[2]}</span>
          </div>
        </div>

        <div style={styles.services}>
          {services.map((service) => (
            <span key={service} style={styles.serviceTag}>
              {service}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
