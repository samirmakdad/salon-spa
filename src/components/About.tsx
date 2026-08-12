import React from 'react'
import { Sparkles, Shield, Heart, Award } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  const stat1 = useCountUp(10, 1800, isVisible)
  const stat2 = useCountUp(120, 2200, isVisible)
  const stat3 = useCountUp(10, 1800, isVisible)

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-blush/20 text-brun relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nude/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          
          {/* Visual Block: Spa Photography + Monogram Overlay */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Spa photography */}
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85"
                alt="Ambiance salon Bold Beauty Lounge Casablanca"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brun/80 via-brun/20 to-transparent" />

              {/* Thin inner frame */}
              <div className="absolute inset-5 border border-goldChampagne/30 rounded-2xl pointer-events-none" />

              {/* Central Monogram */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-goldChampagne/70 bg-brun/80 backdrop-blur-md flex items-center justify-center text-goldChampagne font-display text-3xl font-bold shadow-2xl mb-3 group-hover:scale-110 transition-transform duration-500">
                  BB
                </div>
                <p className="text-champagne font-sans text-xs tracking-[0.25em] uppercase font-light">
                  Casablanca — Anfa
                </p>
              </div>
            </div>

            {/* Floating Accent Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white border border-goldChampagne/30 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3 max-w-[210px]">
              <div className="w-10 h-10 rounded-full bg-champagne/40 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-goldChampagne" />
              </div>
              <div>
                <p className="font-display text-base text-brun font-semibold leading-tight">100% Féminin</p>
                <p className="text-xs text-chocolat/70 font-sans">Intimité garantie</p>
              </div>
            </div>
          </div>

          {/* Copy & Stats Column */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              L&apos;Esprit de la Maison
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brun font-light tracking-tight leading-[1.12] mb-6">
              L&apos;élégance sur mesure au service de la femme moderne.
            </h2>

            <p className="text-chocolat/90 text-base sm:text-lg font-sans font-light leading-relaxed mb-5">
              Né au cœur du quartier Anfa à Casablanca, <strong className="font-medium text-brun">Bold Beauty Lounge</strong> redéfinit le concept du salon de beauté haut de gamme. Pensé comme un écrin de quiétude chaleureux et privatif, notre lounge offre aux femmes une parenthèse enchantée loin du tumulte urbain.
            </p>

            <p className="text-chocolat/75 text-sm sm:text-base font-sans font-light leading-relaxed mb-10">
              De l&apos;art ancestral du Hammam aux rituels avant-gardistes de Head Spa japonais, de coiffure créative et de dermo-esthétique, chaque geste est exécuté par des praticiennes passionnées avec des produits d&apos;exception soigneusement sélectionnés.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-champagne/40 shadow-sm">
                <Heart className="w-5 h-5 text-goldChampagne shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-brun font-normal">Soins holistiques & sur mesure</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-champagne/40 shadow-sm">
                <Award className="w-5 h-5 text-goldChampagne shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-brun font-normal">Produits certifiés premium</span>
              </div>
            </div>

            {/* 3 Scroll-Triggered Stat Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-champagne/40">
              <div className="flex flex-col">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-brun">
                  {stat1}
                </div>
                <div className="text-xs sm:text-sm text-chocolat/70 font-sans tracking-wide mt-1">
                  Univers de soins
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-brun">
                  {stat2}+
                </div>
                <div className="text-xs sm:text-sm text-chocolat/70 font-sans tracking-wide mt-1">
                  Prestations exclusives
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-brun">
                  {stat3}
                </div>
                <div className="text-xs sm:text-sm text-chocolat/70 font-sans tracking-wide mt-1">
                  Spécialistes d&apos;élite
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
