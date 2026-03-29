import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe, Smartphone, Brain, Palette, ShoppingCart, User,
  RefreshCw, CheckCircle, ArrowRight, Zap, Clock, Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services – Website Development, Mobile Apps & AI Training Lagos',
  description:
    'Explore Ayo Automation\'s full range of services: business websites, e-commerce, portfolios, mobile apps, AI training and mentorship. All at Nigerian-friendly rates.',
}

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20one%20of%20your%20services.%20Can%20we%20talk?'

const mainServices = [
  {
    icon: Globe,
    title: 'Business Website Development',
    tagline: 'Your business deserves a premium online presence',
    description:
      'I build fast, modern, conversion-focused websites for businesses of every size — from sole traders in Lagos to growing SMEs. Every site is mobile-first, SEO-ready, and designed to turn visitors into customers.',
    features: [
      'Custom homepage & inner pages',
      'Mobile-responsive design',
      'Contact forms & WhatsApp integration',
      'Google Analytics setup',
      'SEO-optimised structure',
      'Fast loading (under 3 seconds)',
      'CMS integration (if needed)',
      '30-day post-launch support',
    ],
    accent: '#0EA5E9',
    badge: 'Most Popular',
    
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Store Development',
    tagline: 'Sell anything online — 24/7, automatically',
    description:
      'Full-featured online stores with product listings, cart, secure payments (Paystack/Flutterwave), order management, and admin dashboard. Perfect for fashion, food, beauty, electronics, and more.',
    features: [
      'Product catalogue & categories',
      'Paystack & Flutterwave integration',
      'Shopping cart & checkout flow',
      'Order management dashboard',
      'Customer accounts & wishlists',
      'Inventory tracking',
      'Sales analytics',
      'WhatsApp order notifications',
    ],
    accent: '#22D3EE',
    badge: 'High ROI',
    
  },
  {
    icon: User,
    title: 'Portfolio & Personal Brand Websites',
    tagline: 'Stand out. Get hired. Get clients.',
    description:
      "A stunning portfolio that showcases your work, personality, and skills. Perfect for designers, photographers, developers, content creators, and professionals who want to attract clients online.",
    features: [
      'Beautiful portfolio grid/masonry',
      'About me & bio section',
      'Skills & experience display',
      'Testimonials showcase',
      'Contact form & social links',
      'Blog section (optional)',
      'Download CV/resume button',
      'Professional domain setup help',
    ],
    accent: '#8B5CF6',
    badge: 'For Creatives',
    
  },
  {
    icon: Smartphone,
    title: 'Custom Mobile App Development',
    tagline: 'Turn your idea into a real app people love',
    description:
      'Cross-platform Android & iOS apps built with React Native. From concept to Play Store deployment, I handle everything — design, code, testing, and launch.',
    features: [
      'Android & iOS (single codebase)',
      'Custom UI/UX design',
      'User authentication',
      'API & database integration',
      'Push notifications',
      'Offline support',
      'Play Store / App Store submission',
      '60-day post-launch support',
    ],
    accent: '#F59E0B',
    badge: 'For Startups',
    
  },
  {
    icon: Brain,
    title: 'AI Money-Making Training & Mentorship',
    tagline: 'Learn to earn with AI — practical, proven, profitable',
    description:
      'A hands-on training programme teaching Nigerians how to leverage AI tools to build real income streams — content creation, freelancing, automation, and more. 1-on-1 or group sessions available.',
    features: [
      'Practical AI tools masterclass',
      'Freelancing with AI strategies',
      'Content creation automation',
      'Building AI-powered side hustles',
      '1-on-1 mentorship sessions',
      'Private WhatsApp community',
      'Weekly Q&A sessions',
      'Lifetime access to updates',
    ],
    accent: '#10B981',
    badge: 'Transform Your Income',
    
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign & Maintenance',
    tagline: 'Breathe new life into your existing website',
    description:
      'Is your current website outdated, slow, or not converting? I redesign it with a fresh, modern look while keeping what works and fixing what doesn\'t. Also available for ongoing maintenance.',
    features: [
      'Full visual redesign',
      'Speed optimisation',
      'Mobile responsiveness fix',
      'Content update & restructuring',
      'SEO audit & improvements',
      'Security hardening',
      'Hosting migration help',
      'Monthly maintenance plans',
    ],
    accent: '#EC4899',
    badge: 'Upgrade Now',
    
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We chat on WhatsApp or a call to understand your goals, budget, and timeline.' },
  { step: '02', title: 'Proposal & Quote', desc: 'I send you a clear, detailed proposal with scope, timeline, and price. No surprises.' },
  { step: '03', title: 'Design & Build', desc: 'I get to work. You see progress updates and can give feedback at every stage.' },
  { step: '04', title: 'Launch & Support', desc: 'Your project goes live. I stay available for support, tweaks, and questions.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Services</div>
          <h1 className="font-heading text-5xl sm:text-6xl font-800 text-white mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Win Online</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            From your first business website to a money-making AI side hustle — I offer end-to-end digital services designed for Nigerian entrepreneurs and individuals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {['Fast Turnaround', 'Transparent Pricing', 'Nigerian Payments Accepted', 'Post-Launch Support'].map((t) => (
              <span key={t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8">
                <CheckCircle size={13} className="text-[#0EA5E9]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service cards ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {mainServices.map(({ icon: Icon, title, tagline, description, features, accent, badge, price }) => (
              <div key={title} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col relative overflow-hidden">
                {/* Badge */}
                {badge && (
                  <div
                    className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
                  >
                    {badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
                >
                  <Icon size={24} style={{ color: accent }} />
                </div>

                <h2 className="font-heading text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-sm font-mono mb-3" style={{ color: accent }}>{tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={13} style={{ color: accent }} className="shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-white/8">
                  <span className="font-heading font-bold text-white">{price}</span>
                  <a
                    href={`https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold font-heading transition-colors duration-200"
                    style={{ color: accent }}
                  >
                    Get started <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">How It Works</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              Simple 4-Step <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#8B5CF6]/20 border border-[#0EA5E9]/30 flex items-center justify-center mx-auto mb-5">
                  <span className="font-mono font-bold text-[#0EA5E9] text-lg">{step}</span>
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why me ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center gradient-border">
            <div className="section-label">Why Ayo Automation</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-6">
              The Smarter Choice for{' '}
              <span className="gradient-text">Nigerian Businesses</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              {[
                { icon: Zap, title: 'Lightning Fast', desc: 'Most websites delivered in 3–7 days. Apps in 2–6 weeks.' },
                { icon: Shield, title: 'Trusted & Reliable', desc: '150+ projects completed. 98% client satisfaction rate.' },
                { icon: Clock, title: 'Always Available', desc: 'WhatsApp support during and after your project. You\'re never alone.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/15 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#0EA5E9]" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
                💬 Start Your Project on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
