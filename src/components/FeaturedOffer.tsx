import React from 'react'
import { Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react'
import { FEATURED_OFFER, WHATSAPP_NUMBER } from '../config/salon'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const FeaturedOffer: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour, je souhaite commander l'offre spéciale : ${FEATURED_OFFER.title} au prix de ${FEATURED_OFFER.priceDh} DH.`
  )}`

  return (
    <section ref={ref} className="py-24 bg-blush/40 text-brun relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className={`bg-white border border-goldChampagne/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-champagne/40">
                <img
                  src={FEATURED_OFFER.image}
                  alt={FEATURED_OFFER.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-brun text-champagne text-xs font-sans uppercase tracking-widest font-semibold border border-goldChampagne/30">
                  Offre Limitée — Coffret Prestige
                </div>
              </div>
            </div>

            {/* Right Product Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Soin d&apos;Exception & Rituel Spa
              </div>

              <h2 className="font-display text-4xl sm:text-5xl text-brun font-light tracking-tight">
                {FEATURED_OFFER.title}
              </h2>

              <p className="text-chocolat/85 text-sm sm:text-base font-sans font-light leading-relaxed">
                {FEATURED_OFFER.description}
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                {FEATURED_OFFER.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-sans text-brun font-medium">
                    <CheckCircle2 className="w-4 h-4 text-goldChampagne shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Price & Order Action */}
              <div className="pt-6 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-brun">
                    {FEATURED_OFFER.priceDh} <span className="text-sm font-sans font-normal text-chocolat">DH</span>
                  </span>
                  <span className="text-sm font-sans text-chocolat/50 line-through">
                    {FEATURED_OFFER.originalPriceDh} DH
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Commander le coffret</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
