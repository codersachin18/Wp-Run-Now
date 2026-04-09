import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Globe, Database, Terminal, RefreshCw, Download, Layers } from 'lucide-react'

const features = [
  { icon: Zap,       title: 'One-Click Install',    desc: 'Create a fully working WordPress site in minutes with zero manual configuration.', color: '#f59e0b' },
  { icon: Shield,    title: 'Auto SSL',              desc: 'Self-signed SSL certificates generated automatically for every site.', color: '#10b981' },
  { icon: Globe,     title: '.local Domains',        desc: 'Access sites via clean .local domains like mysite.local — no port numbers.', color: '#3b82f6' },
  { icon: Database,  title: 'MySQL Bundled',         desc: 'MySQL 8.0 bundled and managed automatically. No separate installation.', color: '#8b5cf6' },
  { icon: Terminal,  title: 'WP-CLI Built-in',       desc: 'Full WP-CLI access for every site. Run commands from the app shell.', color: '#ec4899' },
  { icon: RefreshCw, title: 'PHP Version Switch',    desc: 'Switch PHP versions per site without any server reconfiguration.', color: '#06b6d4' },
  { icon: Download,  title: 'Site Backup',           desc: 'Download a complete backup of files and database with one click.', color: '#f97316' },
  { icon: Layers,    title: 'Multiple Sites',        desc: 'Run multiple WordPress sites simultaneously, each fully isolated.', color: '#7c3aed' },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} style={{ background: '#f9fafb', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 16, background: '#ede9fe', color: '#7c3aed' }}>
            Everything You Need
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Powerful Features,<br />Simple Interface
          </h2>
          <p style={{ fontSize: 18, maxWidth: 560, margin: '0 auto', color: '#6b7280', lineHeight: 1.6 }}>
            Everything LocalWP has, and more — built for developers who want speed without complexity.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ background: '#fff', borderRadius: 16, padding: '24px', border: '1px solid #f3f4f6', cursor: 'default', transition: 'transform 0.2s, box-shadow 0.2s' }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(124,58,237,0.1)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: `${f.color}18` }}>
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: '#1e1b4b' }}>{f.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6b7280' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
