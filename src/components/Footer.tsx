import React from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, ShieldCheck, Heart } from 'lucide-react'
import { SALON_NAME, ADDRESS, PHONE, EMAIL, HOURS, SERVICES } from '../config/salon'

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brun text-ivory border-t border-champagne/20 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-champagne/15">
          
          {/* Brand Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-goldChampagne/60 bg-chocolat flex items-center justify-center text-goldChampagne font-display text-xl font-bold">
                BB
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-ivory tracking-wide">
                  {SALON_NAME}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-goldChampagne uppercase font-sans">
                  Casablanca — Anfa
                </span>
              </div>
            </div>

            <p className="text-ivory/75 font-sans text-xs sm:text-sm font-light leading-relaxed">
              Un sanctuaire de beauté, coiffure, sauna & spa d&apos;exception exclusivement réservé aux femmes à Casablanca.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-goldChampagne/30 bg-chocolat/60 text-champagne text-xs font-sans">
              <ShieldCheck className="w-4 h-4 text-goldChampagne" />
              <span>Espace 100% Féminin & Intime</span>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xl text-champagne font-medium tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-ivory/80">
              <li>
                <a href="#" className="hover:text-goldChampagne transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldChampagne transition-colors">Nos services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-goldChampagne transition-colors">Produits</a>
              </li>
              <li>
                <a href="#sauna-spa" className="hover:text-goldChampagne transition-colors">Sauna & Spa</a>
              </li>
              <li>
                <a href="#about" className="hover:text-goldChampagne transition-colors">À propos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-goldChampagne transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services List (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xl text-champagne font-medium tracking-wide">
              Nos Univers
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-ivory/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-goldChampagne transition-colors">
                    {s.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-display text-xl text-champagne font-medium tracking-wide mb-3">
                Coordonnées
              </h4>
              <div className="space-y-2.5 text-xs font-sans text-ivory/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-goldChampagne shrink-0 mt-0.5" />
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-goldChampagne shrink-0" />
                  <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="hover:text-goldChampagne transition-colors">
                    {PHONE} (Tél & WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-goldChampagne shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-goldChampagne transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg text-champagne font-medium tracking-wide mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-goldChampagne" />
                Horaires d&apos;ouverture
              </h4>
              <div className="bg-chocolat/60 border border-champagne/20 rounded-xl p-3 text-xs font-sans space-y-1">
                {HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-0.5">
                    <span className="text-ivory/80">{item.day}</span>
                    <span className={item.open ? 'text-goldChampagne font-medium' : 'text-rose-300 font-semibold'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-champagne/30 text-champagne hover:bg-goldChampagne hover:text-brun transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Mention */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/50">
          <p>© 2026 — Tous droits réservés. {SALON_NAME} Casablanca.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Conçu avec <Heart className="w-3.5 h-3.5 text-goldChampagne fill-goldChampagne" /> pour la beauté marocaine
          </p>
        </div>

      </div>
    </footer>
  )
}
