import React, { useState, useEffect } from 'react'
import { Sparkles, Menu, X, Phone, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { PHONE, SALON_NAME, ADDRESS } from '../config/salon'

// Build a Google Maps URL from the salon address
const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

// TikTok SVG icon (not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
  </svg>
)

// Instagram SVG icon (lucide's has a slightly different design; use inline for consistency)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Nos services', href: '#services' },
    { name: 'Produits', href: '#products' },
    { name: 'Sauna & Spa', href: '#sauna-spa' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  // Shared style for icon links (Instagram, TikTok, Maps)
  const iconLinkClass = (scrolled: boolean) =>
    `w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
      scrolled
        ? 'border-champagne/60 text-chocolat hover:border-goldChampagne hover:text-goldChampagne hover:bg-champagne/20'
        : 'border-ivory/30 text-ivory/80 hover:border-goldChampagne hover:text-goldChampagne hover:bg-brun/40'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Announcement Bar */}
      <div className={`bg-brun text-ivory text-xs py-2 px-4 border-b border-champagne/10 transition-all duration-300 ${isScrolled ? 'hidden md:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-sans font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-goldChampagne" />
              Espace 100% Privatif & Réservé aux Femmes — Casablanca
            </span>
            <span className="hidden sm:inline-block text-champagne/30">•</span>
            <span className="hidden sm:flex items-center gap-1.5 font-light">
              <Clock className="w-3.5 h-3.5 text-goldChampagne" />
              Lun – Sam: 09h30 – 20h00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-champagne hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-goldChampagne" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 lg:px-8 py-4 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-champagne/30 shadow-sm py-3'
            : 'bg-gradient-to-b from-brun/80 via-brun/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-goldChampagne/60 bg-brun flex items-center justify-center text-goldChampagne font-display text-lg font-bold shadow-sm group-hover:border-goldChampagne group-hover:scale-105 transition-all duration-300">
              BB
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl sm:text-2xl tracking-wide font-medium leading-none transition-colors ${isScrolled ? 'text-brun' : 'text-ivory'}`}>
                {SALON_NAME}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-goldChampagne uppercase font-sans font-normal mt-0.5">
                Casablanca
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase font-normal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-goldChampagne after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-chocolat hover:text-goldChampagne' : 'text-ivory/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Social icons + Maps + Réserver CTA */}
          <div className="hidden md:flex items-center gap-3">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Bold Beauty Lounge"
              className={iconLinkClass(isScrolled)}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok Bold Beauty Lounge"
              className={iconLinkClass(isScrolled)}
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>

            {/* Google Maps Location */}
            <a
              href={GMAPS_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`Nous trouver sur Google Maps — ${ADDRESS}`}
              title={ADDRESS}
              className={iconLinkClass(isScrolled)}
            >
              <MapPin className="w-4 h-4" />
            </a>

            {/* Divider */}
            <div className={`w-px h-5 mx-1 ${isScrolled ? 'bg-champagne/60' : 'bg-ivory/20'}`} />

            {/* Réserver CTA */}
            <a
              href="#booking"
              className="px-6 py-2.5 rounded-full bg-goldChampagne text-brun font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Réserver
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors focus:outline-none ${isScrolled ? 'text-brun' : 'text-ivory'}`}
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-goldChampagne" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brun/98 text-ivory border-b border-champagne/20 shadow-2xl py-6 px-6 backdrop-blur-xl animate-fadeUp">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ivory text-base font-display tracking-wider py-2 border-b border-champagne/10 hover:text-goldChampagne transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile: Social & Maps icons row */}
              <div className="flex items-center gap-3 py-3 border-b border-champagne/10">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-champagne/30 text-ivory/80 hover:border-goldChampagne hover:text-goldChampagne transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-champagne/30 text-ivory/80 hover:border-goldChampagne hover:text-goldChampagne transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GMAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir sur Google Maps — ${ADDRESS}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-champagne/30 text-ivory/80 hover:border-goldChampagne hover:text-goldChampagne transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MapPin className="w-4 h-4" />
                </a>

                <span className="text-xs text-ivory/60 font-sans ml-1">
                  Nous trouver
                </span>
              </div>

              {/* Mobile: Réserver CTA */}
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 text-center py-3 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase tracking-widest font-semibold shadow-lg hover:bg-champagne transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Réserver maintenant
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
