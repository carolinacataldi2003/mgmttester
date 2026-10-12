export type TripType = 'return' | 'oneway' | 'multicity';

export type CabinClass = 'Economy' | 'Premium Economy' | 'Business' | 'First / Suites';

export interface Airport {
  code: string;
  city: string;
  country: string;
  name: string;
  region: 'Asia' | 'Europe' | 'Americas' | 'Oceania' | 'Middle East';
}

export interface FlightSearchParams {
  origin: Airport;
  destination: Airport;
  departureDate: string;
  returnDate: string;
  tripType: TripType;
  adults: number;
  children: number;
  infants: number;
  cabinClass: CabinClass;
  isRedeemWithMiles: boolean;
  promoCode?: string;
}

export interface FareTier {
  name: string;
  priceSGD: number;
  milesEarned: number;
  baggageKg: number;
  seatSelection: 'Chargeable' | 'Standard Included' | 'Complimentary Forward/Extra Legroom';
  cancellation: 'Non-refundable' | 'Refund with fee' | 'Complimentary Refund';
  changeFee: 'Fee applies' | 'Free changes (fare diff may apply)';
  popular?: boolean;
}

export interface FlightResult {
  id: string;
  flightNumber: string;
  aircraft: string;
  origin: Airport;
  destination: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  operatedBy: string;
  fares: {
    economyLite?: FareTier;
    economyStandard?: FareTier;
    economyFlexi?: FareTier;
    premiumEconomy?: FareTier;
    businessFlexi?: FareTier;
    firstSuites?: FareTier;
  };
}

export interface SpecialOffer {
  id: string;
  city: string;
  country: string;
  airportCode: string;
  fromPriceSGD: number;
  cabin: string;
  travelPeriod: string;
  bookBy: string;
  image: string;
}

export interface BookingRecord {
  pnr: string;
  passengerName: string;
  flightNumber: string;
  route: string;
  date: string;
  cabinClass: string;
  seat: string;
  status: 'Confirmed' | 'Checked In' | 'Completed';
}
