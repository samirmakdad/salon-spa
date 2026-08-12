import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { SaunaSpa } from './components/SaunaSpa'
import { Products } from './components/Products'
import { FeaturedOffer } from './components/FeaturedOffer'
import { WhyUs } from './components/WhyUs'
import { Reviews } from './components/Reviews'
import { Booking } from './components/Booking'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { ServiceCategory, TreatmentItem } from './config/salon'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null)

  const handleSelectTreatmentForBooking = (category: ServiceCategory, treatment: TreatmentItem) => {
    setSelectedCategory(category)
    setSelectedTreatment(treatment)
  }

  return (
    <div className="min-h-screen bg-ivory text-brun selection:bg-goldChampagne/30 selection:text-brun font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services onSelectTreatmentForBooking={handleSelectTreatmentForBooking} />
        <SaunaSpa />
        <Products />
        <FeaturedOffer />
        <WhyUs />
        <Reviews />
        <Booking
          preselectedCategory={selectedCategory}
          preselectedTreatment={selectedTreatment}
        />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
