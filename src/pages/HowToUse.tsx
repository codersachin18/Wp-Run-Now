import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'

const steps = [
  {
    n: 1, img: '/steps/1.png',
    title: 'Download & Install WP Run Now',
    desc: 'Download the WP Run Now installer for Windows. Run the setup file — it will install the app and on first launch automatically download PHP, MySQL, and Nginx for you. This is a one-time setup that takes 2–5 minutes.',
    cta: { label: 'Download Now', href: '/#download', icon: Download },
  },
  {
    n: 2, img: '/steps/2.png',
    title: 'Enter Your Website Name',
    desc: 'Click the + button in the sidebar to create a new site. Enter your site name — WP Run Now will automatically generate a .local domain for you (e.g. my-site.local). Click Continue to proceed.',
    cta: { label: 'Continue', href: '#', icon: ArrowRight },
  },
  {
    n: 3, img: '/steps/3.png',
    title: 'Choose Your Environment',
    desc: 'Select "Preferred" for the recommended setup (PHP 8.2, Nginx, MySQL 8.0) or choose "Custom" to pick your own PHP version and web server. Click Continue when ready.',
    cta: { label: 'Continue', href: '#', icon: ArrowRight },
  },
  {
    n: 4, img: '/steps/4.png',
    title: 'Set Up WordPress Credentials',
    desc: 'Enter your WordPress admin username, password, and email address. These will be your login credentials for the WordPress dashboard. Click "Add Site" to start the installation.',
    cta: { label: 'Add Site', href: '#', icon: ArrowRight },
  },
  {
    n: 5, img: '/steps/5.png',
    title: 'Wait While WordPress Installs',
    desc: 'WP Run Now will automatically download WordPress, create the database, configure Nginx, and install everything. During this process, Windows may ask for administrator permission — click Yes to allow it. This sets up your .local domain.',
    cta: null,
  },
  {
    n: 6, img: '/steps/6.png',
    title: 'Your Site Dashboard',
    desc: 'Once done, your site appears in the sidebar. You can see the site domain, PHP version, database info, and more. Click "Start site" to launch it, then click "WP Admin" to open the WordPress dashboard.',
    cta: { label: 'Open WP Admin', href: '#', icon: ArrowRight },
  },
  {
    n: 7, img: '/steps/7.png',
    title: 'Log In to WordPress',
    desc: 'Enter the WordPress username and password you set in Step 4. Click "Log In" to access your WordPress dashboard.',
    cta: null,
  },
  {
    n: 8, img: '/steps/8.png',
    title: "You're Ready!",
    desc: 'You can now install WordPress locally and start building. Install themes, plugins, create pages — everything works just like a live WordPress site, but running entirely on your computer.',
    cta: { label: 'Download WP Run Now', href: '/#download', icon: Download },
  },
]

export default function HowToUse() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Page header */}
      <section style={{
        paddingTop: 140, paddingBottom: 80, textAlign: 'center',
        background: 'linear-gradient(160deg,#faf5ff 0%,#f0f9ff 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 40, left: '30%', width: 320, height: 320, borderRadius: '50%', opacity: 0.2, filter: 'blur(80px)', background: 'radial-gradient(circle,#a78bfa,transparent)' }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 20, background: '#ede9fe', color: '#7c3aed' }}>
            Step-by-Step Guide
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 900, marginBottom: 20, color: '#1e1b4b', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            How to Use<br />
            <span style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea,#c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              WP Run Now
            </span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#6b7280' }}>
            Follow these simple steps to install and run WordPress locally on your Windows PC — no technical knowledge required.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section style={{ background: '#fff', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              style={{
                borderRadius: 24, overflow: 'hidden',
                border: '1.5px solid #ede9fe',
                background: i % 2 === 0 ? '#faf5ff' : '#fff',
                boxShadow: '0 4px 24px rgba(124,58,237,0.06)',
                display: 'grid',
                gridTemplateColumns: step.img ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
              }}
              className="step-card">
              {/* Image */}
              {step.img && (
                <div style={{ background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, minHeight: 280 }}>
                  <img src={step.img} alt={`Step ${step.n}`}
                    style={{ maxHeight: 260, width: '100%', objectFit: 'contain', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: 'linear-gradient(135deg,#7c3aed,#9333ea)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 15, fontWeight: 900,
                  }}>{step.n}</div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Step {step.n} of {steps.length}
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, marginBottom: 14, color: '#1e1b4b', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#6b7280', marginBottom: step.cta ? 24 : 0 }}>
                  {step.desc}
                </p>
                {step.cta && (
                  <div>
                    <a href={step.cta.href} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '10px 22px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                      textDecoration: 'none', transition: 'transform 0.15s',
                      background: step.cta.href.includes('download') ? 'linear-gradient(135deg,#7c3aed,#9333ea)' : '#ede9fe',
                      color: step.cta.href.includes('download') ? '#fff' : '#7c3aed',
                      boxShadow: step.cta.href.includes('download') ? '0 4px 16px rgba(124,58,237,0.3)' : 'none',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                      <step.cta.icon size={15} /> {step.cta.label}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 64, padding: '0 24px' }}>
          <h3 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12, color: '#1e1b4b', letterSpacing: '-0.02em' }}>Ready to get started?</h3>
          <p style={{ fontSize: 17, marginBottom: 32, color: '#6b7280' }}>Download WP Run Now for free and have WordPress running locally in minutes.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a href="/#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100,
              background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
            }}>
              <Download size={18} /> Download Free
            </a>
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100,
              background: '#fff', color: '#7c3aed', fontSize: 15, fontWeight: 600,
              textDecoration: 'none', border: '2px solid #ddd6fe',
            }}>
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
