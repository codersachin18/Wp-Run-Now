import { GitBranch, MessageCircle, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#1e1b4b', color: 'rgba(255,255,255,0.6)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#7c3aed,#9333ea)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 900 }}>WP</div>
              <span style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>Run Now</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: 24, maxWidth: 300 }}>
              The fastest way to run WordPress locally. Free forever, no Docker required.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[GitBranch, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href={i === 2 ? 'mailto:code.multiversee@gmail.com' : '#'}
                  style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', textDecoration: 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}>
                  <Icon size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="/#features" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Features</a>
              <Link to="/how-to-use" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>How to Use</Link>
              <a href="/#download" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Download</a>
              <a href="/#faq" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>FAQ</a>
              <a href="/#contact" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Contact</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <p style={{ fontSize: 13 }}>© 2026 WP Run Now. All rights reserved.</p>
          <p style={{ fontSize: 13 }}>Made with ❤️ for WordPress developers</p>
        </div>
      </div>
    </footer>
  )
}

const linkStyle: React.CSSProperties = {
  fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.15s',
}
function hoverIn(e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.color = '#fff' }
function hoverOut(e: React.MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }
