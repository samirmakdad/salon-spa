import React from 'react'
import { Sparkles, Award, ShieldCheck, Heart, UserCheck } from 'lucide-react'
import { WHY_US_FEATURES } from '../config/salon'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ICONS = [Award, ShieldCheck, Heart, UserCheck]

export const WhyUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="why-us" ref={ref} className="py-28 lg:py-36 bg-ivory text-brun relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            L&apos;Engagement Bold Beauty
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brun font-light tracking-tight mb-6">
            Pourquoi choisir notre salon ?
          </h2>
          <p className="text-chocolat/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Un savoir-faire artisanal combiné à une exigence de qualité sans compromis.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_FEATURES.map((feat, idx) => {
            const IconComp = ICONS[idx] || Sparkles

            return (
              <div
                key={feat.number}
                className={`bg-white rounded-2xl border border-champagne/40 p-8 shadow-sm hover:shadow-xl hover:border-goldChampagne/50 transition-all duration-400 transform hover:-translate-y-1 flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  {/* Top Row: Numeral + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display italic text-4xl font-light text-goldChampagne">
                      {feat.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-champagne/30 text-brun flex items-center justify-center border border-goldChampagne/30">
                      <IconComp className="w-5 h-5 text-goldChampagne" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl text-brun font-semibold mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-chocolat/80 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-champagne/30 flex items-center gap-2 text-[11px] text-goldChampagne font-sans font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-goldChampagne inline-block" />
                  Garantie d&apos;excellence
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
