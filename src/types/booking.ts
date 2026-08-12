import { ServiceCategory, TreatmentItem } from '../config/salon'

export type Step = 'service' | 'datetime' | 'details' | 'recap'

export interface BookingState {
  step: Step
  selectedCategory: ServiceCategory | null
  selectedTreatment: TreatmentItem | null
  date: string
  time: string
  name: string
  phone: string
  note: string
  isConfirmed: boolean
  phoneError: string | null
}

export type BookingAction =
  | { type: 'SET_STEP'; payload: Step }
  | { type: 'SELECT_CATEGORY'; payload: ServiceCategory }
  | { type: 'SELECT_TREATMENT'; payload: TreatmentItem }
  | { type: 'SET_DATE'; payload: string }
  | { type: 'SET_TIME'; payload: string }
  | { type: 'SET_CLIENT_DETAILS'; payload: { name?: string; phone?: string; note?: string } }
  | { type: 'SET_PHONE_ERROR'; payload: string | null }
  | { type: 'CONFIRM_BOOKING' }
  | { type: 'RESET_BOOKING' }
