import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Clock, Calendar, Send } from 'lucide-react'

const info = [
  { icon: Mail,     label: 'Email',         value: 'code.multiversee@gmail.com',                 color: '#7c3aed' },
  { icon: Clock,    label: 'Response Time',  value: 'Within 24–48 hours during business days',    color: '#10b981' },
  { icon: Calendar, label: 'Availability',   value: 'Monday to Friday, 9:00 AM – 6:00 PM (IST)', color: '#3b82f6' },
]

const inputBase: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: 10,
  border: '1.5px solid #e5e7eb', background: '#fafafa',
  fontSize: 14, outline: 'none', fontFamily: 'inherit',
  color: '#1e1b4b', transition: 'border-color 0.15s, box-shadow 0.15s',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.target.style.borderColor = '#7c3aed'
    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.target.style.borderColor = '#e5e7eb'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" ref={ref} style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 16, background: '#ede9fe', color: '#7c3aed' }}>
            Get In Touch
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16, color: '#1e1b4b', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Have Questions?<br />We'd Love to Hear
          </h2>
          <p style={{ fontSize: 17, maxWidth: 560, margin: '0 auto', color: '#6b7280', lineHeight: 1.6 }}>
            Have questions or want to discuss a project? Drop us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}
          className="grid-cols-1 lg:grid-cols-2">
          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {info.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', borderRadius: 16, border: '1px solid #f3f4f6', background: '#fafafa' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${item.color}15` }}>
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: '#1e1b4b' }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 32px', textAlign: 'center', background: '#fafafa', borderRadius: 20, border: '1px solid #f3f4f6' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Send size={28} style={{ color: '#10b981' }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 8, color: '#1e1b4b' }}>Message Sent!</h3>
                <p style={{ color: '#6b7280', fontSize: 14 }}>We'll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Full Name</label>
                    <input required style={inputBase} placeholder="John Doe"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Email Address</label>
                    <input required type="email" style={inputBase} placeholder="john@example.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Subject</label>
                  <input required style={inputBase} placeholder="How can we help?"
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Message</label>
                  <textarea required rows={5} style={{ ...inputBase, resize: 'none' }} placeholder="Tell us more..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={focusStyle as any} onBlur={blurStyle as any} />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '14px 24px', borderRadius: 12, border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg,#7c3aed,#9333ea)', color: '#fff',
                    fontWeight: 600, fontSize: 15, fontFamily: 'inherit',
                    boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
                  }}>
                  <Send size={16} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
