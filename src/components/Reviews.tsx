import React from 'react'
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS } from '../config/salon'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })
  const trackRef = React.useRef<HTMLDivElement>(null)

  const scrollTrack = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="reviews" ref={ref} className="py-28 lg:py-36 bg-blush/30 text-brun relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Témoignages & Avis
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brun font-light tracking-tight">
              Nos clientes parlent de leur expérience
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scrollTrack('left')}
              className="w-11 h-11 rounded-full border border-champagne text-brun hover:bg-brun hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTrack('right')}
              className="w-11 h-11 rounded-full border border-champagne text-brun hover:bg-brun hover:text-ivory transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={trackRef}
          className={`flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] bg-white border border-champagne/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-goldChampagne mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-goldChampagne text-goldChampagne" />
                  ))}
                </div>

                {/* Commentaire */}
                <p className="font-display text-lg text-chocolat italic font-normal leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Nom & Service */}
              <div className="pt-4 border-t border-champagne/30 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base font-semibold text-brun">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-goldChampagne font-sans font-medium">
                    {rev.service}
                  </p>
                </div>
                <Quote className="w-6 h-6 text-champagne/60 fill-champagne/20" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
