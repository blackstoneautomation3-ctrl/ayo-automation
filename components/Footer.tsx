import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react'

const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20your%20website%2Fapp%20or%20AI%20training%20services.'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Ayo' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/make-money-with-ai', label: 'AI Training' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services', label: 'Website Development' },
  { href: '/services', label: 'Mobile App Development' },
  { href: '/make-money-with-ai', label: 'AI Money-Making Training' },
  { href: '/services', label: 'Website Redesign' },
  { href: '/services', label: 'E-commerce Stores' },
  { href: '/services', label: 'Portfolio Websites' },
]

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Ayo<span className="gradient-text">Automation</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building premium websites, mobile apps, and teaching Nigerians how to earn real money using AI tools. Based in Lagos, serving clients across Nigeria & beyond.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-slate-400 hover:text-[#0EA5E9] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#8B5CF6] group-hover:bg-[#0EA5E9] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 hover:text-[#0EA5E9] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#8B5CF6] group-hover:bg-[#0EA5E9] transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-[#25D366] transition-colors group">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                    {/* WhatsApp SVG inline */}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                    <p className="text-sm font-medium text-white">08166494104</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@ayoautomation.com.ng" className="flex items-start gap-3 text-slate-400 hover:text-[#0EA5E9] transition-colors group">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center group-hover:bg-[#0EA5E9]/20 transition-colors shrink-0">
                    <Mail size={15} className="text-[#0EA5E9]" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-white">hello@ayoautomation.com.ng</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#8B5CF6]" />
                </span>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-white">Lagos, Nigeria 🇳🇬</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ayo Automation. All rights reserved. Made with ❤️ in Lagos, Nigeria.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-slate-500 text-sm">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
