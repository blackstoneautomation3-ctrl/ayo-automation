import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe, Smartphone, Brain, Star, ArrowRight, CheckCircle,
  Zap, Shield, Clock, TrendingUp, Users, Award, ChevronRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ayo Automation – Websites, Mobile Apps & Make Money with AI in Lagos',
  description:
    'Premium website development, mobile app development, and AI money-making training in Lagos Nigeria. Fast delivery, clean code, real results. WhatsApp: 08166494104.',
}

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20your%20website%2Fapp%20or%20AI%20training%20services.'

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Business websites, e-commerce stores, portfolios, landing pages — built clean, fast, and fully responsive. Delivered in days, not months.',
    features: ['Mobile-responsive', 'SEO optimised', 'Fast loading', 'Post-launch support'],
    color: 'blue',
    href: '/services',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Custom Android & iOS apps built to solve real problems for your business or idea. Clean UI, great performance, reliable delivery.',
    features: ['Android & iOS', 'Custom design', 'API integration', 'Play Store deployment'],
    color: 'purple',
    href: '/services',
  },
  {
    icon: Brain,
    title: 'AI Money-Making Training',
    description:
      'Learn practical AI skills to build income streams — from content creation to freelancing with AI tools. Real strategies that work in Nigeria.',
    features: ['1-on-1 mentorship', 'Practical projects', 'Income strategies', 'Lifetime community'],
    color: 'neon',
    href: '/make-money-with-ai',
  },
]

const stats = [
  { number: '150+', label: 'Projects Delivered', icon: Award },
  { number: '98%', label: 'Client Satisfaction', icon: Star },
  { number: '3–7', label: 'Days Avg. Delivery', icon: Clock },
  { number: '50+', label: 'AI Students Trained', icon: Users },
]

const benefits = [
  { icon: Zap, text: 'Super-fast delivery — most sites ready in 3–7 days' },
  { icon: Shield, text: 'Affordable rates designed for Nigerian businesses' },
  { icon: TrendingUp, text: 'Clean, modern designs that convert visitors to customers' },
  { icon: CheckCircle, text: 'Full post-launch support — you\'re never left alone' },
  { icon: Globe, text: 'Local expertise + global quality standards' },
  { icon: Star, text: 'Transparent pricing, no hidden fees or surprises' },
]

const testimonials = [
  {
    name: 'Chukwuemeka Obi',
    role: 'CEO, FreshMart Lagos',
    text: 'Ayo built my e-commerce website in just 5 days. Sales went up 40% in the first month. Best investment I made for my business.',
    avatar: 'CO',
    rating: 5,
  },
  {
    name: 'Adaeze Nwosu',
    role: 'Fashion Brand Owner, Abuja',
    text: "I enrolled in the AI training and within 2 weeks I was already making ₦80k/month on the side using AI tools. Ayo's teaching style is so clear!",
    avatar: 'AN',
    rating: 5,
  },
  {
    name: 'Biodun Afolabi',
    role: 'Restaurant Owner, Lagos',
    text: 'My restaurant website looks so professional now. Customers tell me all the time how easy it is to find us and book tables online.',
    avatar: 'BA',
    rating: 5,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════ HERO ════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0EA5E9]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#22D3EE]/10 rounded-full blur-2xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-sm font-mono font-medium">Available for new projects · Lagos, Nigeria 🇳🇬</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-800 text-white leading-[1.08] mb-6 max-w-4xl mx-auto">
            Premium Websites,{' '}
            <span className="gradient-text">Apps & AI Skills</span>{' '}
            That Actually Deliver
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m <strong className="text-white">Ayo</strong> — a Lagos-based tech freelancer building stunning digital products and teaching Nigerians how to earn real money with AI tools.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 shadow-neon-blue">
              💬 Start Your Project Today
            </a>
            <Link href="/make-money-with-ai" className="btn-secondary text-base px-8 py-4">
              💰 Learn AI Income Skills →
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm">
            {['Fast Delivery', 'Affordable Rates', 'Clean Designs', 'Full Support', 'Real Results'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#0EA5E9]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
      </section>

      {/* ════════════════════════════ STATS ════════════════════════════ */}
      <section className="py-16 bg-[#0A0F1E] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ number, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#8B5CF6]/20 mb-3">
                  <Icon size={18} className="text-[#0EA5E9]" />
                </div>
                <div className="stat-number">{number}</div>
                <p className="text-slate-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SERVICES ════════════════════════════ */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">What I Do</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-800 text-white mb-4">
              Services Built for{' '}
              <span className="gradient-text">Your Growth</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Whether you need a stunning website, a powerful app, or AI income skills — I&apos;ve got you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description, features, color, href }) => {
              const colorMap: Record<string, string> = {
                blue: '#0EA5E9',
                purple: '#8B5CF6',
                neon: '#22D3EE',
              }
              const c = colorMap[color]
              return (
                <div key={title} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${c}18`, border: `1px solid ${c}30` }}
                  >
                    <Icon size={24} style={{ color: c }} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{description}</p>
                  <ul className="space-y-2 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={14} style={{ color: c }} className="shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm font-semibold font-heading transition-colors duration-200"
                    style={{ color: c }}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ WHY AYO ════════════════════════════ */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="section-label">Why Choose Me</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-800 text-white mb-6">
                Quality Work, Nigerian Prices,{' '}
                <span className="gradient-text">Real Results</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                I understand the Nigerian market. I know what your customers want, what prices make sense, and how to build digital solutions that actually grow businesses like yours.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#0EA5E9]" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-glow-purple opacity-30 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-white font-heading font-bold text-lg">
                    A
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">Ayo</p>
                    <p className="text-slate-400 text-sm">Full-Stack Developer & AI Trainer</p>
                  </div>
                  <div className="ml-auto">
                    <span className="flex items-center gap-1 text-[#25D366] text-sm font-mono">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      Online
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'React / Next.js', pct: 95 },
                    { label: 'Mobile Apps (React Native)', pct: 88 },
                    { label: 'AI Tools & Automation', pct: 92 },
                    { label: 'UI/UX Design', pct: 85 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{label}</span>
                        <span className="text-slate-500 font-mono">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: '5yrs', l: 'Experience' },
                    { n: '150+', l: 'Clients' },
                    { n: '100%', l: 'Remote' },
                  ].map(({ n, l }) => (
                    <div key={l} className="p-3 rounded-xl bg-[#1E293B]/50">
                      <p className="font-heading font-bold text-[#0EA5E9] text-lg">{n}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ TESTIMONIALS ════════════════════════════ */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Client Love</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-800 text-white mb-4">
              What Nigerians Are{' '}
              <span className="gradient-text">Saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, text, avatar, rating }) => (
              <div key={name} className="glass-card glass-card-hover rounded-2xl p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-white font-heading font-bold text-sm">
                    {avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ FINAL CTA ════════════════════════════ */}
      <section className="section-padding bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Ready to Start?</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-800 text-white mb-6">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Incredible Together</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a website, app, or AI skills — your next big move starts with one WhatsApp message.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 shadow-neon-blue">
              💬 WhatsApp Ayo Now
            </a>
            <Link href="/portfolio" className="btn-secondary text-base px-8 py-4">
              See My Work <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
