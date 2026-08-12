import React from 'react'
import { Sparkles } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const CallToAction: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-brun text-ivory relative overflow-hidden">
      {/* Background Decorative Mesh / Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-goldChampagne/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`space-y-8 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-goldChampagne/30 bg-brun/60 text-goldChampagne text-xs tracking-[0.2em] uppercase font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            Réservation Privilégiée
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-ivory tracking-tight leading-[1.1]">
            Offrez-vous un moment <br className="hidden sm:inline" />
            <span className="italic text-goldChampagne font-normal">rien qu&apos;à vous.</span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-ivory/80 font-sans font-light leading-relaxed">
            Réservez votre prochaine expérience beauté et bien-être dans notre lounge privatif à Casablanca.
          </p>

          <div className="pt-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-goldChampagne text-brun font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-champagne hover:shadow-[0_0_25px_rgba(232,216,195,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Réserver maintenant</span>
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
