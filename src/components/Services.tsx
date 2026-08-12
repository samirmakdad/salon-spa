import React, { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2, X } from 'lucide-react'
import { SERVICES, ServiceCategory, TreatmentItem } from '../config/salon'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ServicesProps {
  onSelectTreatmentForBooking?: (category: ServiceCategory, treatment: TreatmentItem) => void
}

export const Services: React.FC<ServicesProps> = ({ onSelectTreatmentForBooking }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const [activeModalCategory, setActiveModalCategory] = useState<ServiceCategory | null>(null)

  const handleBookCategory = (category: ServiceCategory) => {
    if (category.treatments.length > 0 && onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking(category, category.treatments[0])
    }
    const bookingElement = document.getElementById('booking')
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookSpecificTreatment = (category: ServiceCategory, treatment: TreatmentItem) => {
    if (onSelectTreatmentForBooking) {
      onSelectTreatmentForBooking(category, treatment)
    }
    setActiveModalCategory(null)
    const bookingElement = document.getElementById('booking')
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" ref={ref} className="py-28 lg:py-36 bg-ivory text-brun relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nos prestations d&apos;exception
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brun font-light tracking-tight mb-6">
            Nos Univers & Services
          </h2>
          <p className="text-chocolat/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Chaque soin est pensé comme un rituel de beauté et d&apos;apaisement absolu. Parcourez nos catégories et choisissez votre moment dédié.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((cat, idx) => {
            return (
              <div
                key={cat.id}
                onClick={() => setActiveModalCategory(cat)}
                className={`group bg-white rounded-2xl border border-champagne/40 shadow-sm hover:shadow-xl hover:border-goldChampagne/50 transition-all duration-400 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Top Photography with Subtle Zoom on Hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-champagne/20">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brun/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Title Badge */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-ivory">
                    <span className="font-display text-2xl font-semibold tracking-wide">
                      {cat.category}
                    </span>
                    <span className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-brun/80 backdrop-blur-md border border-goldChampagne/30 text-champagne">
                      Dès {cat.startingPriceDh} DH
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-goldChampagne font-sans text-xs tracking-widest uppercase font-medium block mb-2">
                      {cat.subtitle}
                    </span>
                    <p className="text-chocolat/80 font-sans text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {/* "Découvrir" Button Action */}
                  <div className="pt-4 border-t border-champagne/30 flex items-center justify-between text-brun text-xs font-sans font-medium group-hover:text-goldChampagne transition-colors">
                    <span className="uppercase tracking-widest">Découvrir les soins</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Category Treatments Modal */}
      {activeModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brun/80 backdrop-blur-sm animate-fadeUp">
          <div className="bg-ivory rounded-3xl border border-champagne/50 shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-brun text-ivory flex items-center justify-between border-b border-champagne/20">
              <div>
                <span className="text-xs text-goldChampagne font-sans tracking-widest uppercase mb-1 block">
                  {activeModalCategory.subtitle}
                </span>
                <h3 className="font-display text-3xl font-light text-ivory">
                  {activeModalCategory.category}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalCategory(null)}
                className="w-9 h-9 rounded-full border border-champagne/30 text-champagne hover:bg-goldChampagne/20 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Treatments List */}
            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-champagne/30">
              {activeModalCategory.treatments.map((treatment) => (
                <div key={treatment.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-xl text-brun font-semibold">
                        {treatment.name}
                      </h4>
                      <span className="text-xs text-chocolat/70 font-sans font-normal bg-champagne/40 px-2.5 py-0.5 rounded-full">
                        {treatment.durationMin} min
                      </span>
                    </div>
                    <p className="text-xs text-chocolat/80 font-sans font-light mt-1">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 justify-between sm:justify-end shrink-0">
                    <span className="font-display text-xl font-bold text-brun">
                      {treatment.priceDh} <span className="text-xs font-sans font-normal text-chocolat">DH</span>
                    </span>
                    <button
                      onClick={() => handleBookSpecificTreatment(activeModalCategory, treatment)}
                      className="px-4 py-2 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase font-semibold tracking-wider hover:bg-champagne transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Réserver
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-champagne/30 border-t border-champagne/30 flex items-center justify-between text-xs font-sans text-chocolat">
              <span>Besoin d&apos;un conseil personnalisé ?</span>
              <button
                onClick={() => handleBookCategory(activeModalCategory)}
                className="text-brun font-semibold underline hover:text-goldChampagne transition-colors"
              >
                Réserver cette catégorie
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
