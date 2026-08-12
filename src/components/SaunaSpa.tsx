import React from 'react'
import { Sparkles, Check, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const SaunaSpa: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  const highlights = [
    { title: 'Sauna Finlandais Privatif', desc: 'Bain de chaleur sèche aux essences naturelles d\'eucalyptus pour éliminer les toxines.' },
    { title: 'Spa & Hammam Beldi', desc: 'Rituel purifiant au savon noir, gommage à la kessa et enveloppement au ghassoul aromatique.' },
    { title: 'Relaxation & Lounge', desc: 'Espace de détente intime avec infusions apaisantes et ambiance feutrée.' },
    { title: 'Massages & Rituels du Monde', desc: 'Protocols sculptants et pierres chaudes exécutés par nos thérapeutes spécialisées.' },
    { title: 'Expérience Bien-être Holistique', desc: 'Formules combinées sur-mesure adaptées à vos besoins de régénération corporelle.' },
  ]

  return (
    <section id="sauna-spa" ref={ref} className="py-28 lg:py-36 bg-brun text-ivory relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-goldChampagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split-Screen Layout: IMAGE | TEXTE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE COLUMN */}
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[4/3] sm:aspect-[14/10] rounded-3xl overflow-hidden shadow-2xl border border-goldChampagne/30 group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Espace Sauna & Spa Bold Beauty Lounge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brun/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brun/75 backdrop-blur-md border border-goldChampagne/30 flex items-center justify-between text-xs font-sans">
                <span className="text-champagne font-medium uppercase tracking-wider">Espace Privatif Féminin</span>
                <span className="text-goldChampagne font-semibold">Casablanca — Anfa</span>
              </div>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Sérénité & Hydrothérapie
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory font-light tracking-tight leading-[1.12] mb-6">
              Un espace dédié à votre bien-être
            </h2>

            <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed mb-8">
              Poussez les portes de notre espace bien-être où le temps s&apos;arrête. Entre la chaleur bienfaisante du sauna finlandais et les effluves d&apos;eau de rose de notre spa traditionnel, vivez une évasion d&apos;exception.
            </p>

            {/* List of Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-goldChampagne/20 text-goldChampagne flex items-center justify-center shrink-0 mt-0.5 border border-goldChampagne/40">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-semibold text-champagne">{item.title}</h3>
                    <p className="text-xs text-ivory/70 font-sans font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#booking"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-goldChampagne text-brun font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-champagne transition-all duration-300 shadow-xl"
              >
                <span>Découvrir l&apos;espace bien-être</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
