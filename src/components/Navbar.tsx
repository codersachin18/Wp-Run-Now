import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const navLinks = [
    { label: 'Home',       href: '/#home' },
    { label: 'Features',   href: '/#features' },
    { label: 'How to Use', href: '/how-to-use', isRoute: true },
    { label: 'Contact',    href: '/#contact' },
  ]

  const linkStyle = (active = false): React.CSSProperties => ({
    fontSize: 14, fontWeight: 500, textDecoration: 'none',
    color: active ? '#7c3aed' : '#6b7280', transition: 'color 0.15s',
  })

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#7c3aed,#9333ea)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 900 }}>WP</div>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#1e1b4b' }}>Run Now</span>
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {navLinks.map(l => (
              l.isRoute ? (
                <Link key={l.label} to={l.href}
                  style={linkStyle(location.pathname === '/how-to-use')}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = location.pathname === '/how-to-use' ? '#7c3aed' : '#6b7280')}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} style={linkStyle()}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
                  {l.label}
                </a>
              )
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href="https://github.com/codersachin18/Wp-Run-Now/releases/download/v1.0.0/WpRunNow-Setup-0.0.0.exe" download style={{
            padding: '10px 22px', borderRadius: 100,
            background: 'linear-gradient(135deg,#7c3aed,#9333ea)',
            color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
          }}>
            Download Free
          </a>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            {open ? <X size={22} color="#1e1b4b" /> : <Menu size={22} color="#1e1b4b" />}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div style={{ background: '#fff', borderTop: '1px solid #f3f4f6', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navLinks.map(l => (
            l.isRoute ? (
              <Link key={l.label} to={l.href} onClick={() => setOpen(false)}
                style={{ fontSize: 15, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ fontSize: 15, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>
                {l.label}
              </a>
            )
          ))}
          <a href="https://github.com/codersachin18/Wp-Run-Now/releases/download/v1.0.0/WpRunNow-Setup-0.0.0.exe" download style={{ padding: '12px 20px', borderRadius: 100, background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
            Download Free
          </a>
        </div>
      )}
    </header>
  )
}
