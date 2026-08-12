import React, { useReducer, useEffect } from 'react'
import {
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RotateCcw,
} from 'lucide-react'
import { SERVICES, ServiceCategory, TreatmentItem } from '../config/salon'
import { BookingState, BookingAction, Step } from '../types/booking'
import { buildBookingWhatsAppUrl, validateMoroccanPhone } from '../utils/whatsapp'
import { useScrollReveal } from '../hooks/useScrollReveal'

const initialBookingState: BookingState = {
  step: 'service',
  selectedCategory: SERVICES[0],
  selectedTreatment: SERVICES[0].treatments[0],
  date: new Date().toISOString().split('T')[0],
  time: '10:00',
  name: '',
  phone: '',
  note: '',
  isConfirmed: false,
  phoneError: null,
}

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload }
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
        selectedTreatment: action.payload.treatments[0] || null,
      }
    case 'SELECT_TREATMENT':
      return { ...state, selectedTreatment: action.payload }
    case 'SET_DATE':
      return { ...state, date: action.payload }
    case 'SET_TIME':
      return { ...state, time: action.payload }
    case 'SET_CLIENT_DETAILS':
      return { ...state, ...action.payload }
    case 'SET_PHONE_ERROR':
      return { ...state, phoneError: action.payload }
    case 'CONFIRM_BOOKING':
      return { ...state, isConfirmed: true }
    case 'RESET_BOOKING':
      return { ...initialBookingState }
    default:
      return state
  }
}

interface BookingProps {
  preselectedCategory?: ServiceCategory | null
  preselectedTreatment?: TreatmentItem | null
}

export const Booking: React.FC<BookingProps> = ({
  preselectedCategory,
  preselectedTreatment,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState)

  useEffect(() => {
    if (preselectedCategory) {
      dispatch({ type: 'SELECT_CATEGORY', payload: preselectedCategory })
    }
    if (preselectedTreatment) {
      dispatch({ type: 'SELECT_TREATMENT', payload: preselectedTreatment })
    }
  }, [preselectedCategory, preselectedTreatment])

  const timeSlots = [
    '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
    '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
    '18:30', '19:00', '19:30'
  ]

  const getProgressPercentage = () => {
    switch (state.step) {
      case 'service': return 25
      case 'datetime': return 50
      case 'details': return 75
      case 'recap': return 100
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value
    if (!selected) return
    const dateObj = new Date(selected + 'T00:00:00')
    if (dateObj.getDay() === 0) { // Sunday closed
      alert('Le salon est fermé le Dimanche. Veuillez sélectionner un jour du Lundi au Samedi.')
      return
    }
    dispatch({ type: 'SET_DATE', payload: selected })
  }

  const handleDetailsNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (!state.name.trim()) {
      alert('Veuillez renseigner votre nom complet.')
      return
    }
    if (!validateMoroccanPhone(state.phone)) {
      dispatch({
        type: 'SET_PHONE_ERROR',
        payload: 'Veuillez saisir un numéro marocain valide (ex: 0655641096 ou +212655641096).',
      })
      return
    }
    dispatch({ type: 'SET_PHONE_ERROR', payload: null })
    dispatch({ type: 'SET_STEP', payload: 'recap' })
  }

  const handleWhatsAppConfirm = () => {
    if (!state.selectedTreatment) return

    const whatsappUrl = buildBookingWhatsAppUrl({
      name: state.name,
      phone: state.phone,
      service: state.selectedTreatment.name,
      categoryName: state.selectedCategory?.category,
      priceDh: state.selectedTreatment.priceDh,
      date: state.date,
      time: state.time,
      note: state.note,
    })

    window.open(whatsappUrl, '_blank')
    dispatch({ type: 'CONFIRM_BOOKING' })
  }

  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" ref={ref} className="py-28 lg:py-36 bg-ivory text-brun relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-goldChampagne font-sans text-xs tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Réservation Simple & Instantanée
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-brun tracking-tight mb-4">
            Réservez votre séance
          </h2>
          <p className="text-chocolat/80 text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Une interface fluide en 5 étapes pour préparer votre rendez-vous. La confirmation finale s&apos;effectue directement sur WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`bg-white border border-champagne/40 rounded-3xl shadow-xl overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Gold Progress Line */}
          <div className="w-full bg-champagne/20 h-1.5 relative">
            <div
              className="bg-goldChampagne h-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>

          {/* Steps Navigation Bar */}
          <div className="px-6 py-4 border-b border-champagne/20 bg-brun text-ivory flex items-center justify-between overflow-x-auto">
            {[
              { id: 'service', label: '1. Choisir le service' },
              { id: 'datetime', label: '2. Date & Heure' },
              { id: 'details', label: '3. Mes informations' },
              { id: 'recap', label: '4. Confirmer' },
            ].map((stepItem, index) => {
              const stepKeys: Step[] = ['service', 'datetime', 'details', 'recap']
              const currentIndex = stepKeys.indexOf(state.step)
              const isActive = state.step === stepItem.id
              const isPassed = currentIndex > index

              return (
                <button
                  key={stepItem.id}
                  disabled={!isPassed && !isActive}
                  onClick={() => dispatch({ type: 'SET_STEP', payload: stepItem.id as Step })}
                  className={`text-xs font-sans tracking-wider uppercase flex items-center gap-2 py-1.5 px-3.5 rounded-full transition-all shrink-0 ${
                    isActive
                      ? 'bg-goldChampagne text-brun font-semibold shadow'
                      : isPassed
                      ? 'text-champagne hover:text-white cursor-pointer'
                      : 'text-ivory/40 cursor-not-allowed'
                  }`}
                >
                  {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-goldChampagne" />}
                  <span>{stepItem.label}</span>
                </button>
              )
            })}
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10 min-h-[400px] flex flex-col justify-between">
            
            {/* STEP 1: SERVICE */}
            {state.step === 'service' && (
              <div className="animate-fadeUp space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-brun font-semibold mb-2">
                    Étape 1 : Choisir le service
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolat/80 font-sans font-light">
                    Sélectionnez la catégorie puis le soin désiré.
                  </p>
                </div>

                {/* Categories Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {SERVICES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => dispatch({ type: 'SELECT_CATEGORY', payload: cat })}
                      className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider font-medium shrink-0 transition-all border ${
                        state.selectedCategory?.id === cat.id
                          ? 'bg-brun text-ivory border-brun shadow-sm'
                          : 'bg-ivory text-chocolat border-champagne/40 hover:border-goldChampagne hover:text-brun'
                      }`}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>

                {/* Treatments Radio List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {state.selectedCategory?.treatments.map((treatment) => {
                    const isSelected = state.selectedTreatment?.id === treatment.id
                    return (
                      <div
                        key={treatment.id}
                        onClick={() => dispatch({ type: 'SELECT_TREATMENT', payload: treatment })}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-blush/30 border-goldChampagne ring-1 ring-goldChampagne/50 shadow-md'
                            : 'bg-ivory/60 border-champagne/30 hover:border-goldChampagne/40 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="font-display text-lg font-semibold text-brun">
                              {treatment.name}
                            </h4>
                            <span className="text-brun font-display text-lg font-bold shrink-0">
                              {treatment.priceDh} DH
                            </span>
                          </div>
                          <p className="text-xs text-chocolat/80 font-sans font-light line-clamp-2 mb-4">
                            {treatment.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs font-sans text-chocolat/70 pt-2 border-t border-champagne/20">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-goldChampagne" />
                            {treatment.durationMin} min
                          </span>
                          <span className={`text-[11px] font-medium uppercase ${isSelected ? 'text-brun font-bold' : 'text-goldChampagne'}`}>
                            {isSelected ? 'Sélectionné ✓' : 'Sélectionner'}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    disabled={!state.selectedTreatment}
                    onClick={() => dispatch({ type: 'SET_STEP', payload: 'datetime' })}
                    className="px-8 py-3.5 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
                  >
                    <span>Suivant : Date & Heure</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {state.step === 'datetime' && (
              <div className="animate-fadeUp space-y-8">
                <div>
                  <h3 className="font-display text-2xl text-brun font-semibold mb-2">
                    Étape 2 : Choisir la date et l&apos;heure
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolat/80 font-sans font-light">
                    Ouvert du Lundi au Samedi de 09h30 à 20h00 (Fermé le Dimanche).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Date Input */}
                  <div className="bg-ivory p-6 rounded-2xl border border-champagne/40 space-y-4">
                    <label className="block font-display text-lg text-brun font-semibold flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-goldChampagne" />
                      Date de votre visite
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={state.date}
                      onChange={handleDateChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne/40 bg-white text-brun font-sans text-base focus:outline-none focus:ring-2 focus:ring-goldChampagne"
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="bg-ivory p-6 rounded-2xl border border-champagne/40 space-y-4">
                    <label className="block font-display text-lg text-brun font-semibold flex items-center gap-2">
                      <Clock className="w-5 h-5 text-goldChampagne" />
                      Créneau disponible
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-52 overflow-y-auto pr-1">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => dispatch({ type: 'SET_TIME', payload: slot })}
                          className={`py-2 rounded-xl text-xs font-sans font-medium transition-all border ${
                            state.time === slot
                              ? 'bg-brun text-ivory border-brun font-semibold shadow-sm'
                              : 'bg-white text-chocolat border-champagne/30 hover:border-goldChampagne'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    onClick={() => dispatch({ type: 'SET_STEP', payload: 'service' })}
                    className="px-6 py-3 rounded-full border border-champagne text-brun font-sans text-xs uppercase tracking-wider font-medium hover:bg-champagne/20 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Retour</span>
                  </button>

                  <button
                    onClick={() => dispatch({ type: 'SET_STEP', payload: 'details' })}
                    className="px-8 py-3.5 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne transition-colors flex items-center gap-2 shadow-md"
                  >
                    <span>Suivant : Vos informations</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DETAILS */}
            {state.step === 'details' && (
              <form onSubmit={handleDetailsNext} className="animate-fadeUp space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-brun font-semibold mb-2">
                    Étape 3 : Renseigner vos informations
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolat/80 font-sans font-light">
                    Informations nécessaires pour la confirmation de votre créneau.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-medium text-brun mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-goldChampagne" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Myriam Benani"
                      value={state.name}
                      onChange={(e) => dispatch({ type: 'SET_CLIENT_DETAILS', payload: { name: e.target.value } })}
                      className="w-full px-4 py-3.5 rounded-xl border border-champagne/40 bg-white text-brun font-sans text-base focus:outline-none focus:ring-2 focus:ring-goldChampagne"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-medium text-brun mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-goldChampagne" />
                      Téléphone (Numéro marocain) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 06 55 64 10 96 ou +212655641096"
                      value={state.phone}
                      onChange={(e) => {
                        dispatch({ type: 'SET_CLIENT_DETAILS', payload: { phone: e.target.value } })
                        if (state.phoneError) dispatch({ type: 'SET_PHONE_ERROR', payload: null })
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-white text-brun font-sans text-base focus:outline-none focus:ring-2 ${
                        state.phoneError ? 'border-red-500 focus:ring-red-400' : 'border-champagne/40 focus:ring-goldChampagne'
                      }`}
                    />
                    {state.phoneError && (
                      <p className="text-xs text-red-600 font-sans mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {state.phoneError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-medium text-brun mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-goldChampagne" />
                      Note ou préférences (Optionnel)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Demandes particulières, allergies..."
                      value={state.note}
                      onChange={(e) => dispatch({ type: 'SET_CLIENT_DETAILS', payload: { note: e.target.value } })}
                      className="w-full px-4 py-3 rounded-xl border border-champagne/40 bg-white text-brun font-sans text-sm focus:outline-none focus:ring-2 focus:ring-goldChampagne"
                    />
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'SET_STEP', payload: 'datetime' })}
                    className="px-6 py-3 rounded-full border border-champagne text-brun font-sans text-xs uppercase tracking-wider font-medium hover:bg-champagne/20 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Retour</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-goldChampagne text-brun font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne transition-colors flex items-center gap-2 shadow-md"
                  >
                    <span>Vérifier le récapitulatif</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: CONFIRMATION */}
            {state.step === 'recap' && (
              <div className="animate-fadeUp space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-brun font-semibold mb-2">
                    Étape 4 : Confirmer ma réservation
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolat/80 font-sans font-light">
                    Veuillez valider le récapitulatif. Le bouton final ouvrira votre application WhatsApp avec le message pré-rempli.
                  </p>
                </div>

                {!state.isConfirmed ? (
                  <div className="bg-ivory p-6 rounded-2xl border border-champagne/40 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                      <div className="p-3.5 rounded-xl bg-white border border-champagne/30">
                        <span className="text-goldChampagne uppercase tracking-wider font-semibold block mb-1">Prestation</span>
                        <p className="font-display text-lg font-semibold text-brun">
                          {state.selectedTreatment?.name}
                        </p>
                        <p className="text-chocolat/70">
                          Catégorie: {state.selectedCategory?.category} • {state.selectedTreatment?.durationMin} min
                        </p>
                        <p className="text-brun font-bold text-base mt-1">
                          {state.selectedTreatment?.priceDh} DH
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-champagne/30">
                        <span className="text-goldChampagne uppercase tracking-wider font-semibold block mb-1">Date & Heure</span>
                        <p className="font-display text-lg font-semibold text-brun">
                          {new Date(state.date + 'T00:00:00').toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                        <p className="text-chocolat/80 font-medium text-sm mt-1">
                          Heure : {state.time}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-champagne/30">
                        <span className="text-goldChampagne uppercase tracking-wider font-semibold block mb-1">Cliente</span>
                        <p className="font-medium text-sm text-brun">
                          {state.name}
                        </p>
                        <p className="text-chocolat/70">
                          {state.phone}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-champagne/30">
                        <span className="text-goldChampagne uppercase tracking-wider font-semibold block mb-1">Note</span>
                        <p className="text-chocolat/80 italic">
                          {state.note || 'Aucune note particulière'}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-champagne/30">
                      <button
                        onClick={() => dispatch({ type: 'SET_STEP', payload: 'details' })}
                        className="px-6 py-3 rounded-full border border-champagne text-brun font-sans text-xs uppercase tracking-wider font-medium hover:bg-champagne/20 transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Modifier</span>
                      </button>

                      {/* Final WhatsApp Action Button: "Confirmer ma réservation" */}
                      <button
                        onClick={handleWhatsAppConfirm}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-800 text-white font-sans text-xs tracking-widest uppercase font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                      >
                        <span>Confirmer ma réservation</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-fadeUp">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-display text-3xl font-semibold text-emerald-950">
                      Demande prête !
                    </h4>
                    <p className="text-sm font-sans text-emerald-900 max-w-md mx-auto">
                      Votre application WhatsApp s&apos;est ouverte avec votre message rédigé. Appuyez sur Envoyer pour valider votre créneau avec notre équipe.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => dispatch({ type: 'RESET_BOOKING' })}
                        className="px-6 py-3 rounded-full bg-brun text-ivory font-sans text-xs uppercase tracking-wider font-semibold hover:bg-chocolat transition-colors inline-flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Autre réservation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
