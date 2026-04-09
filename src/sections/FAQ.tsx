import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Is WP Run Now really free?', a: 'Yes, completely free forever. No subscriptions, no premium tiers, no hidden fees. Download and use it as much as you want.' },
  { q: 'Do I need Docker or WSL?', a: 'No. WP Run Now bundles PHP, MySQL, and Nginx directly inside the app. You just install it and everything works out of the box.' },
  { q: 'What Windows versions are supported?', a: 'WP Run Now supports Windows 10 and Windows 11 (64-bit). It requires about 500MB of disk space for the bundled server stack.' },
  { q: 'Can I run multiple sites at the same time?', a: 'Yes! You can create and run as many WordPress sites as you want simultaneously. Each site gets its own isolated environment.' },
  { q: 'How do .local domains work?', a: 'When you create a site, WP Run Now automatically adds an entry to your Windows hosts file (requires a one-time admin permission) so your site is accessible at yoursite.local.' },
  { q: 'Can I use it for client work?', a: 'Absolutely. WP Run Now is perfect for developing client sites locally before deploying to production. You can export your site files and database anytime.' },
  { q: 'What PHP versions are supported?', a: 'Currently PHP 8.2 is bundled. PHP version switching per site is on the roadmap for upcoming releases.' },
  { q: 'Is my data safe?', a: 'All your site files and databases are stored locally on your machine. Nothing is sent to any server.' },
]

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      style={{ borderBottom: '1px solid #f3f4f6' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
      }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: '#1e1b4b', lineHeight: 1.4 }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={18} style={{ color: '#7c3aed' }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}>
            <p style={{ paddingBottom: 20, fontSize: 14, lineHeight: 1.7, color: '#6b7280' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} style={{ background: '#f9fafb', padding: '100px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 16, background: '#ede9fe', color: '#7c3aed' }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Frequently Asked<br />Questions
          </h2>
          <p style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.6 }}>
            Everything you need to know about WP Run Now.
          </p>
        </motion.div>

        {/* Accordion */}
        <div style={{ background: '#fff', borderRadius: 20, padding: '8px 32px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6' }}>
          {faqs.map((f, i) => <Item key={f.q} q={f.q} a={f.a} i={i} />)}
        </div>
      </div>
    </section>
  )
}
