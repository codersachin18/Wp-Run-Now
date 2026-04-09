import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      paddingTop: 100, paddingBottom: 80, padding: '100px 24px 80px',
      background: 'linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #fdf4ff 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Blobs */}
      <div style={{ position: 'absolute', top: 80, left: '20%', width: 400, height: 400, borderRadius: '50%', opacity: 0.2, filter: 'blur(80px)', pointerEvents: 'none', background: 'radial-gradient(circle,#a78bfa,transparent)' }} />
      <div style={{ position: 'absolute', bottom: 80, right: '20%', width: 320, height: 320, borderRadius: '50%', opacity: 0.15, filter: 'blur(80px)', pointerEvents: 'none', background: 'radial-gradient(circle,#818cf8,transparent)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 28, background: '#ede9fe', color: '#7c3aed', border: '1px solid #ddd6fe' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7c3aed', display: 'inline-block' }} />
          Free & Open Source — No Docker Required
        </motion.div>

        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, color: '#1e1b4b', letterSpacing: '-0.03em' }}>
          Run WordPress<br />
          <span style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea,#c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Locally. Instantly.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(16px, 2vw, 19px)', maxWidth: 640, margin: '0 auto 48px', lineHeight: 1.7, color: '#6b7280' }}>
          WP Run Now is a free desktop app that lets you create, manage, and run WordPress sites locally — no Docker, no complex setup. Just install and go.
        </motion.p>

        {/* Hero image */}
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative', maxWidth: 1000, margin: '0 auto 48px' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 32px 80px rgba(124,58,237,0.2), 0 8px 32px rgba(0,0,0,0.1)' }}>
            <img src="/header.png" alt="WP Run Now App" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -32, left: '50%', transform: 'translateX(-50%)', width: '70%', height: 60, filter: 'blur(50px)', opacity: 0.25, borderRadius: '50%', background: 'linear-gradient(90deg,#7c3aed,#9333ea)' }} />
        </motion.div>

        {/* CTAs — below image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://github.com/yourusername/wp-run-now/releases/download/v1.0.0/WpRunNow-Setup-0.0.0.exe" download style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100,
            background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff',
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(124,58,237,0.4)', transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,58,237,0.4)' }}>
            <Download size={18} /> Download Free
          </a>
          <Link to="/how-to-use" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100,
            background: '#fff', color: '#7c3aed', fontSize: 15, fontWeight: 600,
            textDecoration: 'none', border: '2px solid #ddd6fe', transition: 'transform 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            How to Use <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
