import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: '01', title: 'Download & Install', desc: 'Download WP Run Now for Windows. The installer sets up everything automatically including PHP, MySQL, and Nginx.' },
  { n: '02', title: 'Create a New Site', desc: 'Click the + button, enter your site name, choose your environment, and hit Add Site.' },
  { n: '03', title: 'WordPress Installs', desc: 'WP Run Now automatically downloads WordPress, creates the database, and configures everything.' },
  { n: '04', title: 'Open & Develop', desc: 'Click WP Admin to log in, or Open Site to view it. Your .local domain is ready instantly.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 16, background: '#ede9fe', color: '#7c3aed' }}>
            Simple Workflow
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Up and Running<br />in 4 Steps
          </h2>
          <p style={{ fontSize: 18, maxWidth: 560, margin: '0 auto 32px', color: '#6b7280', lineHeight: 1.6 }}>
            No terminal commands, no config files, no Docker. Just a clean GUI that does it all.
          </p>
          <Link to="/how-to-use" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 100,
            background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff',
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
          }}>
            Full Step-by-Step Guide <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ position: 'relative', padding: '28px 24px', borderRadius: 16, border: '1.5px solid #ede9fe', background: i % 2 === 0 ? '#faf5ff' : '#fff' }}>
              <div style={{ fontSize: 48, fontWeight: 900, marginBottom: 16, lineHeight: 1, background: 'linear-gradient(135deg,#ddd6fe,#c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {s.n}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#1e1b4b' }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
