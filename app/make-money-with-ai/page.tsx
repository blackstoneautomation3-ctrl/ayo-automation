import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Star, Zap, Users, BookOpen, Video, MessageCircle, Trophy, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Make Money with AI in Nigeria – AI Training & Mentorship | Ayo Automation',
  description:
    'Learn practical AI skills to earn money online in Nigeria. AI content creation, freelancing, automation side hustles. 1-on-1 mentorship by Ayo Automation Lagos.',
}

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20the%20Make%20Money%20with%20AI%20training.%20Please%20tell%20me%20more!'

const modules = [
  {
    number: '01',
    title: 'AI Foundations for Income',
    desc: 'Understand the AI tools that are actually making people money: ChatGPT, Claude, Gemini, Midjourney, and more. Learn which ones to focus on as a Nigerian.',
    duration: '1 Week',
    color: '#0EA5E9',
  },
  {
    number: '02',
    title: 'Content Creation with AI',
    desc: 'Build a content machine: blog posts, social media content, YouTube scripts, email newsletters — all generated at speed with AI. Learn to sell content services to brands.',
    duration: '1.5 Weeks',
    color: '#8B5CF6',
  },
  {
    number: '03',
    title: 'AI Freelancing Mastery',
    desc: 'How to land clients on Fiverr, Upwork, and Nigerian platforms offering AI-powered services. Create gigs, write proposals, and deliver results that get 5-star reviews.',
    duration: '1.5 Weeks',
    color: '#22D3EE',
  },
  {
    number: '04',
    title: 'AI Automation Side Hustles',
    desc: 'Build automated income streams: newsletters, AI-generated social media accounts, content agencies, and tools people pay for. This is where passive income starts.',
    duration: '1 Week',
    color: '#10B981',
  },
  {
    number: '05',
    title: 'Selling & Scaling Your AI Business',
    desc: 'How to find clients in Nigeria and internationally. Pricing strategies, invoicing in Naira and USD, portfolio building, and scaling to ₦500k/month.',
    duration: '1 Week',
    color: '#F59E0B',
  },
]

const whatYouGet = [
  { icon: Video, text: '6 weeks of live / recorded training sessions' },
  { icon: MessageCircle, text: 'Private WhatsApp group with Ayo & other students' },
  { icon: BookOpen, text: 'Written guides, templates, and prompt libraries' },
  { icon: Users, text: 'Weekly group Q&A calls with Ayo' },
  { icon: Trophy, text: 'Certificate of completion' },
  { icon: Zap, text: 'Lifetime access to future updates & new modules' },
]

const whoIsThisFor = [
  'Unemployed graduates looking for digital income',
  'Students who want to earn while in school',
  'Side hustlers wanting to add AI skills',
  'Content creators ready to scale with AI',
  'Freelancers wanting to offer higher-value services',
  'Anyone tired of living paycheck to paycheck',
  '9-5 workers who want financial freedom',
  'Business owners who want to automate tasks',
]

const successStories = [
  {
    name: 'Chioma O.',
    city: 'Port Harcourt',
    photo: 'C',
    earned: '₦180,000/month',
    story: 'I was unemployed for 8 months before Ayo\'s training. Two weeks in, I landed my first content client. Six months later, I\'m managing 12 brands and earning more than my former boss.',
    skill: 'AI Content Creation',
  },
  {
    name: 'Seun A.',
    city: 'Lagos',
    photo: 'S',
    earned: '$950/month',
    story: 'The Fiverr strategy Ayo taught changed everything. I was doing local design jobs for peanuts. Now I use AI to deliver faster, charge more, and my clients are mostly abroad.',
    skill: 'AI Freelancing',
  },
  {
    name: 'Amaka N.',
    city: 'Enugu',
    photo: 'A',
    earned: '₦120,000/month',
    story: 'I thought AI was for tech people only. Ayo showed me I was wrong. I now run an AI-powered social media management service from my bedroom. Zero tech background required!',
    skill: 'AI Social Media',
  },
  {
    name: 'Taiwo B.',
    city: 'Ibadan',
    photo: 'T',
    earned: '₦95,000/month',
    story: 'I\'m still in 300 level but I\'m making more than most of my lecturers 😂. My AI YouTube and blog about Nigerian culture is now monetised and growing every month.',
    skill: 'AI Content + YouTube',
  },
]

const plans = [
  {
    name: 'Self-Paced',
    period: 'one-time',
    description: 'Perfect for self-motivated learners who can study at their own pace.',
    features: [
      'Full 6-week course recordings',
      'Written guides & templates',
      'Prompt library access',
      'WhatsApp community access',
      'Certificate of completion',
    ],
    accent: '#0EA5E9',
    popular: false,
    cta: 'Enrol Now',
  },
  {
    name: 'Mentorship Pro',
    period: 'one-time',
    description: 'Get direct access to Ayo with weekly 1-on-1 sessions and hands-on guidance.',
    features: [
      'Everything in Self-Paced',
      '4 x 1-on-1 sessions with Ayo (1hr each)',
      'Personal income plan review',
      'Portfolio & gig review',
      'Priority WhatsApp support',
      'Referral bonus programme',
      'Access to advanced modules',
    ],
    accent: '#8B5CF6',
    popular: true,
    cta: 'Join Mentorship Pro',
  },
  {
    name: 'Group Cohort',
    period: 'per cohort',
    description: 'Live cohort experience with Ayo and a group of motivated Nigerian students.',
    features: [
      'Everything in Self-Paced',
      'Weekly group live sessions',
      'Group assignments & projects',
      'Peer accountability pairs',
      'Guest speakers & case studies',
      'Graduation showcase',
    ],
    accent: '#22D3EE',
    popular: false,
    cta: 'Join Next Cohort',
  },
]

export default function MakeMoneyWithAIPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-24 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 mb-8">
            <span className="text-xl">💰</span>
            <span className="text-[#F59E0B] text-sm font-mono font-medium">Practical AI Income Training · Lagos, Nigeria</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-800 text-white mb-6 leading-tight">
            Learn to Make Real Money{' '}
            <span className="gradient-text-gold">with AI Tools</span>{' '}
            in Nigeria
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Not theory. Not YouTube hype. Practical, hands-on training that shows you exactly how to use AI to build income streams — content creation, freelancing, automation and more. <strong className="text-white">From ₦25,000.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4 shadow-neon-blue">
              💬 Enrol via WhatsApp Now
            </a>
            <a href="#curriculum" className="btn-secondary text-base px-8 py-4">
              See the Curriculum ↓
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            {[
              '✅ 50+ Students Trained',
              '⭐ 4.9/5 Average Rating',
              '🇳🇬 Naira Payments Accepted',
              '📱 WhatsApp Support Included',
              '🎓 Certificate on Completion',
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What you'll learn / Curriculum ─── */}
      <section id="curriculum" className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Curriculum</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              6 Weeks to <span className="gradient-text">AI Income Mastery</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every module is practical, action-focused, and designed for the Nigerian context. No fluff.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {modules.map(({ number, title, desc, duration, color }) => (
              <div key={number} className="glass-card glass-card-hover rounded-2xl p-7 flex gap-6 items-start">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-mono font-bold text-xl"
                  style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
                >
                  {number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-white text-lg">{title}</h3>
                    <span className="tag text-xs">{duration}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What you get ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">What&apos;s Included</div>
              <h2 className="font-heading text-4xl font-800 text-white mb-6">
                Everything You Need to{' '}
                <span className="gradient-text">Succeed</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                This isn&apos;t just videos you watch and forget. You get tools, community, hands-on practice, and direct access to someone who&apos;s already doing it.
              </p>
              <div className="space-y-4">
                {whatYouGet.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#8B5CF6]" />
                    </div>
                    <p className="text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-heading font-bold text-white text-xl mb-6">This Training Is For You If...</h3>
              <ul className="space-y-3">
                {whoIsThisFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25">
                <p className="text-[#10B981] text-sm font-semibold text-center">
                  ✅ No tech background required. Zero to income in 6 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Success stories ─── */}
      <section className="section-padding bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Student Results</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              Real Students, <span className="gradient-text">Real Earnings</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map(({ name, city, photo, earned, story, skill }) => (
              <div key={name} className="glass-card glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">&ldquo;{story}&rdquo;</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-white font-heading font-bold">
                      {photo}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm">{name}</p>
                      <p className="text-slate-500 text-xs">{city} · {skill}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Now earning</p>
                    <p className="font-heading font-bold text-[#10B981]">{earned}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="section-padding bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Pricing</div>
            <h2 className="font-heading text-4xl font-800 text-white mb-4">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              All plans come with Naira payment options and a 7-day satisfaction guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map(({ name, price, period, description, features, accent, popular, cta }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 flex flex-col relative ${popular ? 'gradient-border' : 'glass-card'}`}
                style={popular ? { background: 'rgba(15,23,42,0.9)', boxShadow: `0 0 40px ${accent}25` } : {}}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-1">{name}</h3>
                  <p className="text-slate-500 text-sm mb-5">{description}</p>
                  
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle size={14} style={{ color: accent }} className="shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27d%20like%20to%20enrol%20in%20the%20${encodeURIComponent(name)}%20AI%20training%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={popular ? 'btn-primary text-center justify-center' : 'btn-secondary text-center justify-center'}
                >
                  {cta} <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-10">
            Not sure which plan? <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Chat with Ayo on WhatsApp</a> — he&apos;ll recommend the best fit.
          </p>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="section-padding bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-800 text-white mb-6">
            Your AI Income Journey{' '}
            <span className="gradient-text">Starts Today</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Every day you wait is money left on the table. The AI wave is happening now — the question is whether you&apos;ll ride it or watch others do it.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-5 shadow-neon-blue">
            💬 Enrol Now — WhatsApp Ayo
          </a>
          <p className="text-slate-500 text-sm mt-5">
            Spots are limited. Next cohort starting soon. 🔥
          </p>
        </div>
      </section>
    </>
  )
}
