import type { Metadata } from 'next'
import { Globe, Smartphone, Brain, ExternalLink, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio – Websites, Apps & AI Projects by Ayo Automation Lagos',
  description:
    'Explore Ayo Automation\'s portfolio of business websites, e-commerce stores, mobile apps, and AI-powered projects built for Nigerian clients.',
}

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20love%20a%20similar%20project!'

// ─── Portfolio data ────────────────────────────────────────────────────────────
const websiteProjects = [
  {
    title: 'FreshMart Lagos',
    category: 'E-commerce Store',
    description: 'A full-featured online grocery store for a Lagos supermarket chain. Features product catalogue, Paystack integration, delivery scheduling, and order tracking. Sales increased 40% in month 1.',
    tags: ['Next.js', 'Tailwind CSS', 'Paystack', 'PostgreSQL'],
    color: '#0EA5E9',
    result: '+40% sales in month 1',
    imgBg: 'from-[#0EA5E9]/20 to-[#1E293B]',
    emoji: '🛒',
  },
  {
    title: 'Adaeze Fashion House',
    category: 'Portfolio & E-shop',
    description: 'Stunning fashion portfolio and online boutique for a Lagos-based fashion designer. Instagram-connected gallery, lookbook, and WhatsApp ordering. Featured in Lagos fashion blogs.',
    tags: ['React', 'Framer Motion', 'Cloudinary', 'WhatsApp API'],
    color: '#EC4899',
    result: '300+ monthly orders via site',
    imgBg: 'from-[#EC4899]/20 to-[#1E293B]',
    emoji: '👗',
  },
  {
    title: 'Sunrise Academy Abuja',
    category: 'School Website',
    description: 'Complete school website with admissions portal, online fee payment (Flutterwave), student results portal, and news blog. Parents can track their children\'s academic progress online.',
    tags: ['Next.js', 'Flutterwave', 'MySQL', 'Admin Dashboard'],
    color: '#10B981',
    result: '80% reduction in admin workload',
    imgBg: 'from-[#10B981]/20 to-[#1E293B]',
    emoji: '🎓',
  },
  {
    title: 'Dr. Emeka Dental Clinic',
    category: 'Healthcare Website',
    description: 'Professional clinic website with online appointment booking, service listings, team profiles, and patient testimonials. Integrated with Google Calendar for scheduling.',
    tags: ['Next.js', 'Calendly API', 'Tailwind', 'SEO'],
    color: '#8B5CF6',
    result: '2× appointment bookings',
    imgBg: 'from-[#8B5CF6]/20 to-[#1E293B]',
    emoji: '🦷',
  },
  {
    title: 'Lagos Property Hub',
    category: 'Real Estate Platform',
    description: 'Property listing and search platform for a Lagos real estate firm. Supports advanced filtering by location, price, type. Landlords can list properties directly with photo uploads.',
    tags: ['React', 'Node.js', 'Cloudinary', 'Mapbox'],
    color: '#F59E0B',
    result: '500+ properties listed',
    imgBg: 'from-[#F59E0B]/20 to-[#1E293B]',
    emoji: '🏠',
  },
  {
    title: 'Chef Tunde\'s Kitchen',
    category: 'Restaurant Website',
    description: 'Vibrant restaurant website with online menu, table reservation system, and food delivery integration. The new site alone drove 60% more table bookings in 2 months.',
    tags: ['Next.js', 'Tailwind', 'Reservation API', 'SEO'],
    color: '#EF4444',
    result: '+60% table reservations',
    imgBg: 'from-[#EF4444]/20 to-[#1E293B]',
    emoji: '🍽️',
  },
]

const appProjects = [
  {
    title: 'PayEasy Wallet App',
    category: 'Fintech Mobile App',
    description: 'A peer-to-peer money transfer app built for a Nigerian fintech startup. Features biometric login, send/receive money, transaction history, and real-time notifications. Launched on Play Store.',
    tags: ['React Native', 'Node.js', 'Paystack', 'Firebase'],
    color: '#0EA5E9',
    result: '2,000+ downloads in 3 months',
    emoji: '💸',
    platform: 'Android & iOS',
  },
  {
    title: 'FarmTrack Nigeria',
    category: 'AgriTech Mobile App',
    description: 'Farm management app for Nigerian farmers to track crop cycles, expenses, harvest records, and weather forecasts. Features offline mode for areas with poor connectivity.',
    tags: ['React Native', 'SQLite', 'Weather API', 'Offline First'],
    color: '#10B981',
    result: '500+ farmers using daily',
    emoji: '🌾',
    platform: 'Android',
  },
  {
    title: 'SchoolConnect App',
    category: 'EdTech Mobile App',
    description: 'Parent-teacher communication app for a private school chain. Parents get instant notifications for results, fees, events, and can message teachers directly. Reduced parent calls to admin by 70%.',
    tags: ['React Native', 'Firebase', 'Push Notifications', 'Chat'],
    color: '#8B5CF6',
    result: '70% fewer admin calls',
    emoji: '📚',
    platform: 'Android & iOS',
  },
]

const aiProjects = [
  {
    title: 'AI Content Factory',
    category: 'Student Success Story',
    student: 'Chioma, 26 – Content Creator, Port Harcourt',
    description: 'After the AI training, Chioma built a content creation business using ChatGPT and Canva AI. She now produces content for 12 brands monthly, earning ₦180,000/month — all from her phone.',
    income: '₦180,000/month',
    emoji: '✍️',
    color: '#22D3EE',
  },
  {
    title: 'AI Freelancing Empire',
    category: 'Student Success Story',
    student: 'Seun, 31 – Freelancer, Lagos',
    description: 'Seun was a graphic designer struggling to find clients. After the AI mentorship, he learned to use AI tools to 5× his output and land international clients on Fiverr. Now earns in USD.',
    income: '$800–$1,200/month',
    emoji: '🎨',
    color: '#8B5CF6',
  },
  {
    title: 'AI YouTube & Blog Empire',
    category: 'Student Success Story',
    student: 'Taiwo, 24 – Student, Ibadan',
    description: 'Taiwo used AI writing and video tools to start a YouTube channel and blog about Nigerian food. In 6 months, he hit monetisation and now earns passive income while still in school.',
    income: '₦95,000/month passive',
    emoji: '📺',
    color: '#F59E0B',
  },
]

// ─── Category tabs ─────────────────────────────────────────────────────────────
function SectionHeader({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="text-center mb-14">
      <div className="section-label">{label}</div>
      <h2 className="font-heading text-4xl font-800 text-white mb-4">{title}</h2>
      <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Portfolio</div>
          <h1 className="font-heading text-5xl sm:text-6xl font-800 text-white mb-6">
            Real Work, <span className="gradient-text">Real Results</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            A showcase of websites, mobile apps, and AI success stories built for Nigerian entrepreneurs, businesses, and individuals just like you.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Globe, label: 'Websites & E-commerce' },
              { icon: Smartphone, label: 'Mobile Apps' },
              { icon: Brain, label: 'AI Success Stories' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/10 text-slate-300 text-sm">
                <Icon size={14} className="text-[#0EA5E9]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Websites ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Websites & E-commerce"
            title={<>Business Websites That <span className="gradient-text">Convert & Grow</span></>}
            subtitle="Each website was built to solve a specific business problem — and the results speak for themselves."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {websiteProjects.map(({ title, category, description, tags, color, result, imgBg, emoji }) => (
              <div key={title} className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${imgBg} flex items-center justify-center relative`}>
                  <span className="text-6xl">{emoji}</span>
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                      style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}
                    >
                      {category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

                  {/* Result highlight */}
                  <div
                    className="px-3 py-2 rounded-lg text-sm font-semibold mb-4"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}
                  >
                    📈 {result}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((t) => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold font-heading transition-colors duration-200 mt-auto"
                    style={{ color }}
                  >
                    I want something like this <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Apps ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Mobile Apps"
            title={<>Apps That Solve <span className="gradient-text">Real Nigerian Problems</span></>}
            subtitle="Cross-platform apps built for Android and iOS, designed for the Nigerian context and user."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {appProjects.map(({ title, category, description, tags, color, result, emoji, platform }) => (
              <div key={title} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col">
                <div className="text-5xl mb-5">{emoji}</div>
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-mono mb-3 w-fit"
                  style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
                >
                  {platform}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-500 mb-3">{category}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

                <div
                  className="px-3 py-2 rounded-lg text-sm font-semibold mb-5"
                  style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}
                >
                  🚀 {result}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27d%20love%20an%20app%20like%20${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold font-heading"
                  style={{ color }}
                >
                  Build something similar →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI Success Stories ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="AI Training Results"
            title={<>Real Nigerians, <span className="gradient-text">Real AI Income</span></>}
            subtitle="These are students who went through the AI training programme and built real income streams using AI tools."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {aiProjects.map(({ title, student, description, income, emoji, color }) => (
              <div key={title} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col">
                <div className="text-5xl mb-5">{emoji}</div>

                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-5 flex-1">&ldquo;{description}&rdquo;</p>

                <div
                  className="px-4 py-3 rounded-xl text-center mb-5"
                  style={{ background: `${color}12`, border: `1px solid ${color}30` }}
                >
                  <p className="text-xs text-slate-500 mb-1">Monthly Earnings</p>
                  <p className="font-heading font-bold text-xl" style={{ color }}>{income}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${color}, #8B5CF6)` }}
                  >
                    {student.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold font-heading">{student.split(' – ')[0]}</p>
                    <p className="text-slate-500 text-xs">{student.split(' – ')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-slate-400 text-lg mb-6">Ready to write your own success story?</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
              💬 Start Your Journey — WhatsApp Ayo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
