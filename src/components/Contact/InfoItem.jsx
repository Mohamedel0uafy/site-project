const styles = {
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
  },
  infoIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'rgba(201,168,76,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#555',
    marginBottom: '3px',
  },
  infoValue: {
    fontSize: '14px',
    color: '#c8c5d0',
  },
  infoValueLink: {
    fontSize: '14px',
    color: '#ff6b00',
    textDecoration: 'none',
    borderBottom: '1px dashed rgba(201,168,76,0.4)',
  },
}

export default function InfoItem({ icon: Icon, label, value, href }) {
  return (
    <div style={styles.infoItem}>
      <div style={styles.infoIcon}>
        <Icon size={16} color="#ff6b00" />
      </div>
      <div>
        <p style={styles.infoLabel}>{label}</p>
        {href ? (
          <a href={href} style={styles.infoValueLink}>
            {value}
          </a>
        ) : (
          <p style={styles.infoValue}>{value}</p>
        )}
      </div>
    </div>
  )
}
