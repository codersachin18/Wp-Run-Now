import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, CheckCircle2, Monitor } from 'lucide-react'

const perks = [
  'No Docker or WSL required',
  'Bundled PHP 8.2, MySQL 8.0, Nginx',
  'Automatic .local domain setup',
  'One-click WordPress install',
  'Free forever, no account needed',
  'Windows 10/11 x64 supported',
]

export default function DownloadSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="download" ref={ref} style={{
      background: 'linear-gradient(160deg,#1e1b4b 0%,#2d1b69 60%,#1e1b4b 100%)',
      padding: '100px 24px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', opacity: 0.1, filter: 'blur(80px)', background: 'radial-gradient(circle,#a78bfa,transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 320, height: 320, borderRadius: '50%', opacity: 0.1, filter: 'blur(80px)', background: 'radial-gradient(circle,#818cf8,transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
        className="grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 24, background: 'rgba(167,139,250,0.15)', color: '#c4b5fd', border: '1px solid rgba(167,139,250,0.3)' }}>
            <Monitor size={14} /> Windows Desktop App
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Download<br />WP Run Now
          </h2>
          <p style={{ fontSize: 17, color: '#c4b5fd', marginBottom: 32, lineHeight: 1.7 }}>
            Free forever. No account required. Just download, install, and start building WordPress sites locally in minutes.
          </p>
          <a href="https://github.com/yourusername/wp-run-now/releases/download/v1.0.0/WpRunNow-Setup-0.0.0.exe" download style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100,
            background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff',
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(124,58,237,0.5)',
          }}>
            <Download size={18} /> Download for Windows
          </a>
          <p style={{ color: '#7c6fcd', fontSize: 13, marginTop: 16 }}>v1.0.0 · Windows 10/11 x64 · ~150 MB</p>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <div style={{ borderRadius: 20, padding: 32, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 24 }}>What's included</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {perks.map((p, i) => (
                <motion.div key={p}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle2 size={18} style={{ color: '#a78bfa', flexShrink: 0 }} />
                  <span style={{ color: '#c4b5fd', fontSize: 14 }}>{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
