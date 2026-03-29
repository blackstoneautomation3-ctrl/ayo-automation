import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MapPin, Code, Brain, Smartphone, Globe, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ayo – Website Developer & AI Trainer in Lagos Nigeria',
  description:
    'Learn about Ayo, a Lagos-based full-stack developer and AI trainer helping Nigerian businesses and individuals thrive digitally. 5+ years experience, 150+ projects.',
}

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%20just%20read%20your%20About%20page%20and%20I%27d%20love%20to%20work%20with%20you!'

const skills = [
  { category: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Firebase'] },
  { category: 'Mobile', items: ['React Native', 'Android', 'iOS', 'Expo'] },
  { category: 'AI & Automation', items: ['ChatGPT / Claude', 'Make.com', 'n8n', 'Zapier'] },
]

const milestones = [
  { year: '2019', event: 'Started freelancing from a Lagos cybercafé with zero clients' },
  { year: '2020', event: 'Landed first paid website project — ₦45,000. Biggest day of my life!' },
  { year: '2021', event: 'Scaled to 30+ clients, hired first assistant, moved to dedicated workspace' },
  { year: '2022', event: 'Expanded into mobile app development. Built 15+ apps in one year' },
  { year: '2023', event: 'Discovered the power of AI tools. Started teaching others how to earn with AI' },
  { year: '2024', event: 'Launched Ayo Automation — combining web dev, apps, and AI training under one brand' },
  { year: '2025+', event: 'On a mission to help 1,000 Nigerians build tech-powered income streams' },
]

const values = [
  { icon: Star, title: 'Quality First', desc: 'Every project gets my full attention. I do not cut corners.' },
  { icon: CheckCircle, title: 'Transparency', desc: 'Clear pricing, honest timelines, no hidden charges.' },
  { icon: Globe, title: 'Local Understanding', desc: 'I understand Nigerian businesses, markets, and customer behaviour.' },
  { icon: Brain, title: 'Continuous Learning', desc: 'AI and tech evolve fast. I stay ahead so you benefit from the latest.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="section-label">About Me</div>
              <h1 className="font-heading text-5xl sm:text-6xl font-800 text-white mb-6 leading-tight">
                Hey, I&apos;m <span className="gradient-text">Ayo</span> 👋
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                A passionate full-stack developer, mobile app builder, and AI educator based in{' '}
                <span className="text-[#0EA5E9] font-semibold">Lagos, Nigeria</span>. I started Ayo Automation because I believe every Nigerian business deserves a powerful digital presence — and every ambitious Nigerian deserves to know how to make money with AI.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                From a Lagos cybercafé to working with 150+ clients across Nigeria, Ghana, and the UK, my journey proves that talent, consistency, and the right skills can take you anywhere.
              </p>
              <div className="flex items-center gap-3 mb-8 text-slate-400">
                <MapPin size={16} className="text-[#0EA5E9]" />
                <span className="text-sm">Lagos Island, Lagos, Nigeria 🇳🇬</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  💬 Let&apos;s Work Together
                </a>
                <Link href="/portfolio" className="btn-secondary">
                  See My Portfolio <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Avatar / card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-glow-blue opacity-20 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative glass-card rounded-3xl p-8 gradient-border">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-white font-heading font-800 text-5xl mb-6 mx-auto shadow-neon-blue">
                  A
                </div>
                <h2 className="font-heading text-2xl font-bold text-white text-center mb-1">Ayo</h2>
                <p className="text-slate-400 text-sm text-center mb-6">Full-Stack Developer & AI Trainer</p>

                <div className="space-y-3">
                  {[
                    { label: 'Location', value: 'Lagos, Nigeria 🇳🇬' },
                    { label: 'Experience', value: '5+ Years' },
                    { label: 'Projects', value: '150+ Delivered' },
                    { label: 'Availability', value: 'Open for work ✅' },
                    { label: 'Response Time', value: 'Within 2 hours' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-slate-500 text-sm">{label}</span>
                      <span className="text-white text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── My Story ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">My Journey</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              From Zero to <span className="gradient-text">150+ Clients</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real stories from the streets of Lagos to building a thriving tech business — nothing was handed to me.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#0EA5E9] via-[#8B5CF6] to-transparent" />

            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-8 items-start pl-16 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full border-2 border-[#0EA5E9] bg-[#0A0F1E] flex items-center justify-center shrink-0">
                    <span className="font-mono text-[#0EA5E9] text-xs font-bold">{year.slice(2)}</span>
                  </div>
                  <div className="glass-card rounded-xl p-5 flex-1 glass-card-hover">
                    <span className="tag mb-2 inline-block">{year}</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Technical Skills</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              What I <span className="gradient-text">Build With</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ category, items }) => (
              <div key={category} className="glass-card glass-card-hover rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                    {category === 'Frontend' && <Code size={15} className="text-[#0EA5E9]" />}
                    {category === 'Backend' && <Globe size={15} className="text-[#8B5CF6]" />}
                    {category === 'Mobile' && <Smartphone size={15} className="text-[#22D3EE]" />}
                    {category === 'AI & Automation' && <Brain size={15} className="text-[#F59E0B]" />}
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle size={12} className="text-[#0EA5E9] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">My Values</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              What Drives <span className="gradient-text">Everything I Do</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card glass-card-hover rounded-2xl p-7 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0EA5E9]/15 to-[#8B5CF6]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[#0EA5E9]" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-800 text-white mb-6">
            Ready to Build with Me?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Whether it&apos;s your first website or your tenth app — I&apos;m here to make it exceptional.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            💬 Message Ayo on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
