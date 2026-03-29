'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20reaching%20out%20from%20your%20website%20contact%20page.'

const services = [
  'Business Website',
  'E-commerce Store',
  'Portfolio Website',
  'Mobile App (Android/iOS)',
  'AI Money-Making Training',
  'Website Redesign / Maintenance',
  'Other',
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How quickly can you build my website?',
    a: 'Most business websites are delivered within 3–7 business days. E-commerce stores take 7–14 days. Mobile apps take 4–8 weeks depending on complexity.',
  },
  {
    q: 'How do I pay?',
    a: 'Nigerian bank transfer, Paystack, or any method convenient for you. I accept both Naira and USD payments.',
  },
  {
    q: 'What do I need to provide before we start?',
    a: 'Just your brand content (text, logo if you have one), colours you like, and examples of websites/apps you admire. I handle everything else.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes! All website projects include 30 days of free post-launch support. App projects include 60 days. Extended maintenance plans are also available.',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate an async submission (replace with real API call if needed)
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Contact</div>
          <h1 className="font-heading text-5xl sm:text-6xl font-800 text-white mb-6">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Together</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to start your project or join the AI training? Reach out via the form below, or jump straight into WhatsApp for a faster response.
          </p>
        </div>
      </section>

      {/* ─── Main contact section ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Left: info panel ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* WhatsApp — primary */}
              <div className="glass-card rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">WhatsApp (Fastest)</p>
                    <p className="text-slate-500 text-sm">Usually replies within 1–2 hours</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-5">
                  The quickest way to reach Ayo. Send a message and get a response fast — no waiting, no forms.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-heading font-semibold text-sm hover:bg-[#20C35A] transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp: 08166494104
                </a>
              </div>

              {/* Contact details */}
              <div className="glass-card rounded-2xl p-7 space-y-5">
                <h3 className="font-heading font-bold text-white mb-3">Other Ways to Reach Me</h3>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/15 flex items-center justify-center">
                    <Mail size={16} className="text-[#0EA5E9]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <a href="mailto:hello@ayoautomation.com.ng" className="text-white text-sm hover:text-[#0EA5E9] transition-colors">
                      hello@ayoautomation.com.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 flex items-center justify-center">
                    <MapPin size={16} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Location</p>
                    <p className="text-white text-sm">Lagos Island, Lagos, Nigeria 🇳🇬</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center">
                    <Clock size={16} className="text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Working Hours</p>
                    <p className="text-white text-sm">Mon – Sat: 8am – 8pm WAT</p>
                  </div>
                </div>
              </div>

              {/* Available tag */}
              <div className="px-5 py-4 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                <p className="text-[#10B981] text-sm font-medium">Currently available for new projects. Fast response guaranteed.</p>
              </div>
            </div>

            {/* ── Right: Contact form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success state */
                <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle size={40} className="text-[#10B981]" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-white mb-3">Message Sent! 🎉</h2>
                  <p className="text-slate-400 text-lg mb-6 max-w-sm">
                    Thanks for reaching out! Ayo will get back to you within <strong className="text-white">1–2 hours</strong> — usually faster.
                  </p>
                  <p className="text-slate-500 text-sm mb-8">
                    For the fastest response, send a WhatsApp message too:
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base"
                  >
                    💬 Also WhatsApp Ayo
                  </a>
                </div>
              ) : (
                /* Form */
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-slate-400 text-sm mb-8">Fill in the details below and Ayo will get back to you quickly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-400 mb-1.5 font-medium">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Chidi Okonkwo"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1.5 font-medium">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="chidi@example.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-400 mb-1.5 font-medium">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0801 234 5678"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-1.5 font-medium">Service Interested In *</label>
                        <select
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="form-input"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="" disabled>Choose a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-400 mb-1.5 font-medium">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell Ayo about your project — what you need, your timeline, and any details that would help..."
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-base py-4 justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={17} />
                          Send Message
                        </span>
                      )}
                    </button>

                    <p className="text-slate-500 text-xs text-center">
                      Or skip the form — <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">chat on WhatsApp directly</a> for a faster response.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label">FAQs</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card rounded-2xl p-7">
                <h3 className="font-heading font-bold text-white mb-3 text-lg">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-5">Have a question not answered here?</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              💬 Ask Ayo on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
