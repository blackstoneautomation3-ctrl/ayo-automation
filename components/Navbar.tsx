'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'

// ─── Nav links ────────────────────────────────────────────────────────────────
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/make-money-with-ai', label: '💰 AI Training' },
  { href: '/contact', label: 'Contact' },
]

// ─── WhatsApp CTA link ────────────────────────────────────────────────────────
const WA_LINK =
  'https://wa.me/2348166494104?text=Hi%20Ayo%2C%20I%27m%20interested%20in%20your%20website%2Fapp%20or%20AI%20training%20services.'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Add background blur when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <>
      {/* ── Desktop / shared nav bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0F1E]/90 backdrop-blur-xl border-b border-white/5 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center group-hover:shadow-[0_0_16px_rgba(14,165,233,0.6)] transition-all duration-300">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-heading font-700 text-lg text-white leading-none">
              Ayo<span className="gradient-text">Automation</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body ${
                  pathname === link.href
                    ? 'text-[#0EA5E9] bg-[#0EA5E9]/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:block btn-primary text-sm py-2.5 px-5">
            Let&apos;s Talk →
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-[#0EA5E9]/50 transition-all duration-200"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-300"
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Ayo<span className="gradient-text">Automation</span>
          </span>
        </div>

        {/* Links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-heading font-semibold transition-all duration-200 ${
              pathname === link.href ? 'gradient-text' : 'text-slate-300 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 text-base"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </>
  )
}
