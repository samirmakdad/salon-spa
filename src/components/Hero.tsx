import React from 'react'
import { Sparkles, ArrowDown } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background High-End Spa Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=85"
          alt="Bold Beauty Lounge Spa & Salon Casablanca"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Soft Luxury Overlay (Chocolat / Dark Nude Vignette) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brun/85 via-brun/65 to-brun/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        
        {/* Badge: "Une expérience beauté pensée pour vous" */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-goldChampagne/40 bg-brun/70 backdrop-blur-md text-champagne text-xs tracking-[0.2em] uppercase font-sans mb-8 animate-fadeUp">
          <Sparkles className="w-3.5 h-3.5 text-goldChampagne" />
          Une expérience beauté pensée pour vous
        </div>

        {/* Strong Title: "Votre moment de beauté commence ici" */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-ivory tracking-tight leading-[1.08] font-light mb-6 animate-fadeUp [animation-delay:150ms]">
          Votre moment de beauté <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-champagne via-nude to-goldChampagne">
            commence ici.
          </span>
        </h1>

        {/* Subtitle: "Coiffure, beauté, sauna & spa à Casablanca" */}
        <p className="max-w-2xl text-base sm:text-xl text-ivory/85 font-sans font-light leading-relaxed mb-10 animate-fadeUp [animation-delay:300ms]">
          Coiffure, beauté, sauna & spa à Casablanca — Un sanctuaire d&apos;exception exclusivement réservé aux femmes.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto animate-fadeUp [animation-delay:450ms]">
          {/* Primary CTA: "Réserver maintenant" */}
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-goldChampagne text-brun font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-champagne hover:shadow-[0_0_25px_rgba(232,216,195,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-3"
          >
            <span>Réserver maintenant</span>
            <Sparkles className="w-4 h-4" />
          </a>

          {/* Secondary CTA: "Découvrir nos services" */}
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-champagne/40 text-ivory font-sans text-xs tracking-[0.2em] uppercase font-medium hover:border-goldChampagne hover:bg-goldChampagne/10 transition-all duration-300 text-center"
          >
            Découvrir nos services
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-champagne/70 hover:text-goldChampagne transition-colors duration-300 text-xs font-sans tracking-widest uppercase animate-fadeUp [animation-delay:600ms]"
        aria-label="Faire défiler vers le bas"
      >
        <span className="text-[10px] tracking-[0.25em]">Découvrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  )
}
