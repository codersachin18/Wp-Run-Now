import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '100%', label: 'Free Forever', desc: 'No subscriptions or fees' },
  { value: '< 5min', label: 'Setup Time', desc: 'From install to WordPress' },
  { value: '0', label: 'Docker Needed', desc: 'Bundled PHP, MySQL & Nginx' },
  { value: '∞', label: 'Local Sites', desc: 'Create unlimited sites' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg,#7c3aed,#6d28d9)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, color: '#fff', marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#c4b5fd', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 13, color: '#a78bfa' }}>{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
