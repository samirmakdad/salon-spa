import React from 'react'
import { Sparkles, ShoppingBag, ExternalLink } from 'lucide-react'
import { PRODUCTS, WHATSAPP_NUMBER, ProductItem } from '../config/salon'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const Products: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  const buildProductWhatsAppUrl = (product: ProductItem) => {
    const message =
      `Bonjour Bold Beauty Lounge,\n\n` +
      `Je souhaite commander le produit suivant :\n` +
      `📦 *Produit:* ${product.name}\n` +
      `🏷️ *Catégorie:* ${product.category}\n` +
      `💰 *Prix:* ${product.priceDh} DH\n\n` +
      `Merci de me donner les détails de livraison / retrait en salon.`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="products" ref={ref} className="py-28 lg:py-36 bg-ivory text-brun relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Boutique & Soins à Domicile
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brun font-light tracking-tight mb-6">
            Nos Produits Signature
          </h2>
          <p className="text-chocolat/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Prolongez l&apos;expérience du salon chez vous avec notre gamme exclusive d&apos;huiles botaniques, sérums et soins rituels marocains.
          </p>
        </div>

        {/* Products Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              className={`group bg-white rounded-2xl border border-champagne/40 shadow-sm hover:shadow-xl hover:border-goldChampagne/50 transition-all duration-400 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Product Image Box */}
              <div className="relative aspect-square overflow-hidden bg-champagne/10">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Badge if present */}
                {prod.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brun/85 text-champagne text-[10px] uppercase font-sans tracking-widest font-semibold border border-goldChampagne/30">
                    {prod.badge}
                  </span>
                )}
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-goldChampagne font-sans text-[11px] tracking-widest uppercase font-medium block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="font-display text-xl text-brun font-semibold mb-2 group-hover:text-goldChampagne transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-chocolat/75 font-sans text-xs font-light leading-relaxed line-clamp-2 mb-4">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne/30 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-brun">
                      {prod.priceDh} <span className="text-xs font-sans font-normal text-chocolat">DH</span>
                    </span>
                    {prod.originalPriceDh && (
                      <span className="text-xs font-sans text-chocolat/50 line-through">
                        {prod.originalPriceDh} DH
                      </span>
                    )}
                  </div>

                  {/* Order via WhatsApp Button */}
                  <a
                    href={buildProductWhatsAppUrl(prod)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-champagne/40 text-brun hover:bg-goldChampagne hover:text-brun transition-all duration-300 flex items-center justify-center shadow-sm"
                    title="Commander sur WhatsApp"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je souhaite consulter votre catalogue complet de produits.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-goldChampagne text-brun font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-goldChampagne hover:text-brun transition-all duration-300"
          >
            <span>Voir tous les produits sur WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
