import { Airport, FlightResult, SpecialOffer, BookingRecord } from '../types/airline';

export const AIRPORTS: Airport[] = [
  { code: 'SIN', city: 'Singapore', country: 'Singapore', name: 'Singapore Changi Airport', region: 'Asia' },
  { code: 'NRT', city: 'Tokyo', country: 'Japan', name: 'Narita International Airport', region: 'Asia' },
  { code: 'HND', city: 'Tokyo (Haneda)', country: 'Japan', name: 'Tokyo Haneda Airport', region: 'Asia' },
  { code: 'LHR', city: 'London', country: 'United Kingdom', name: 'London Heathrow Airport', region: 'Europe' },
  { code: 'SYD', city: 'Sydney', country: 'Australia', name: 'Sydney Kingsford Smith Airport', region: 'Oceania' },
  { code: 'MEL', city: 'Melbourne', country: 'Australia', name: 'Melbourne Tullamarine Airport', region: 'Oceania' },
  { code: 'DPS', city: 'Denpasar (Bali)', country: 'Indonesia', name: 'I Gusti Ngurah Rai International Airport', region: 'Asia' },
  { code: 'JFK', city: 'New York', country: 'United States', name: 'John F. Kennedy International Airport', region: 'Americas' },
  { code: 'CDG', city: 'Paris', country: 'France', name: 'Paris Charles de Gaulle Airport', region: 'Europe' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', name: 'Frankfurt Airport', region: 'Europe' },
  { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', name: 'Dubai International Airport', region: 'Middle East' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand', name: 'Suvarnabhumi Airport', region: 'Asia' },
  { code: 'ICN', city: 'Seoul', country: 'South Korea', name: 'Incheon International Airport', region: 'Asia' },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'tokyo-deal',
    city: 'Tokyo',
    country: 'Japan',
    airportCode: 'NRT',
    fromPriceSGD: 648,
    cabin: 'Economy Class',
    travelPeriod: 'Selected dates until 31 Mar 2027',
    bookBy: '28 Oct 2026',
    image: '/src/assets/images/sia_aircraft_sky_1791786369315.jpg',
  },
  {
    id: 'london-deal',
    city: 'London',
    country: 'United Kingdom',
    airportCode: 'LHR',
    fromPriceSGD: 1188,
    cabin: 'Economy Class',
    travelPeriod: 'Selected dates until 30 Jun 2027',
    bookBy: '31 Oct 2026',
    image: '/src/assets/images/sia_business_cabin_1791786382349.jpg',
  },
  {
    id: 'sydney-deal',
    city: 'Sydney',
    country: 'Australia',
    airportCode: 'SYD',
    fromPriceSGD: 840,
    cabin: 'Economy Class',
    travelPeriod: 'Selected dates until 15 Dec 2026',
    bookBy: '24 Oct 2026',
    image: '/src/assets/images/sia_changi_jewel_1791786407134.jpg',
  },
  {
    id: 'bali-deal',
    city: 'Denpasar (Bali)',
    country: 'Indonesia',
    airportCode: 'DPS',
    fromPriceSGD: 298,
    cabin: 'Economy Class',
    travelPeriod: 'Selected dates until 28 Feb 2027',
    bookBy: '15 Nov 2026',
    image: '/src/assets/images/sia_cabin_crew_1791786418958.jpg',
  },
];

export const SAMPLE_FLIGHT_RESULTS: FlightResult[] = [
  {
    id: 'sq-638',
    flightNumber: 'SQ 638',
    aircraft: 'Airbus A350-900',
    origin: AIRPORTS[0], // SIN
    destination: AIRPORTS[1], // NRT
    departureTime: '08:20',
    arrivalTime: '16:05',
    duration: '6h 45m',
    stops: 'Non-stop',
    operatedBy: 'Singapore Airlines',
    fares: {
      economyLite: {
        name: 'Economy Lite',
        priceSGD: 648,
        milesEarned: 2450,
        baggageKg: 25,
        seatSelection: 'Chargeable',
        cancellation: 'Non-refundable',
        changeFee: 'Fee applies'
      },
      economyStandard: {
        name: 'Economy Standard',
        priceSGD: 780,
        milesEarned: 3500,
        baggageKg: 30,
        seatSelection: 'Standard Included',
        cancellation: 'Refund with fee',
        changeFee: 'Free changes (fare diff may apply)',
        popular: true
      },
      economyFlexi: {
        name: 'Economy Flexi',
        priceSGD: 940,
        milesEarned: 4900,
        baggageKg: 35,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Complimentary Refund',
        changeFee: 'Free changes (fare diff may apply)'
      },
      premiumEconomy: {
        name: 'Premium Economy',
        priceSGD: 1420,
        milesEarned: 6100,
        baggageKg: 35,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Refund with fee',
        changeFee: 'Free changes (fare diff may apply)'
      },
      businessFlexi: {
        name: 'Business Class',
        priceSGD: 3680,
        milesEarned: 8750,
        baggageKg: 40,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Complimentary Refund',
        changeFee: 'Free changes (fare diff may apply)'
      }
    }
  },
  {
    id: 'sq-12',
    flightNumber: 'SQ 12',
    aircraft: 'Boeing 777-300ER',
    origin: AIRPORTS[0], // SIN
    destination: AIRPORTS[1], // NRT
    departureTime: '09:25',
    arrivalTime: '17:30',
    duration: '7h 05m',
    stops: 'Non-stop',
    operatedBy: 'Singapore Airlines',
    fares: {
      economyLite: {
        name: 'Economy Lite',
        priceSGD: 690,
        milesEarned: 2450,
        baggageKg: 25,
        seatSelection: 'Chargeable',
        cancellation: 'Non-refundable',
        changeFee: 'Fee applies'
      },
      economyStandard: {
        name: 'Economy Standard',
        priceSGD: 820,
        milesEarned: 3500,
        baggageKg: 30,
        seatSelection: 'Standard Included',
        cancellation: 'Refund with fee',
        changeFee: 'Free changes (fare diff may apply)',
        popular: true
      },
      economyFlexi: {
        name: 'Economy Flexi',
        priceSGD: 980,
        milesEarned: 4900,
        baggageKg: 35,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Complimentary Refund',
        changeFee: 'Free changes (fare diff may apply)'
      },
      premiumEconomy: {
        name: 'Premium Economy',
        priceSGD: 1540,
        milesEarned: 6100,
        baggageKg: 35,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Refund with fee',
        changeFee: 'Free changes (fare diff may apply)'
      },
      businessFlexi: {
        name: 'Business Class',
        priceSGD: 3950,
        milesEarned: 8750,
        baggageKg: 40,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Complimentary Refund',
        changeFee: 'Free changes (fare diff may apply)'
      }
    }
  },
  {
    id: 'sq-636',
    flightNumber: 'SQ 636',
    aircraft: 'Airbus A350-900',
    origin: AIRPORTS[0], // SIN
    destination: AIRPORTS[1], // NRT
    departureTime: '22:45',
    arrivalTime: '06:20 (+1d)',
    duration: '6h 35m',
    stops: 'Non-stop',
    operatedBy: 'Singapore Airlines',
    fares: {
      economyLite: {
        name: 'Economy Lite',
        priceSGD: 610,
        milesEarned: 2450,
        baggageKg: 25,
        seatSelection: 'Chargeable',
        cancellation: 'Non-refundable',
        changeFee: 'Fee applies'
      },
      economyStandard: {
        name: 'Economy Standard',
        priceSGD: 740,
        milesEarned: 3500,
        baggageKg: 30,
        seatSelection: 'Standard Included',
        cancellation: 'Refund with fee',
        changeFee: 'Free changes (fare diff may apply)'
      },
      businessFlexi: {
        name: 'Business Class',
        priceSGD: 3450,
        milesEarned: 8750,
        baggageKg: 40,
        seatSelection: 'Complimentary Forward/Extra Legroom',
        cancellation: 'Complimentary Refund',
        changeFee: 'Free changes (fare diff may apply)'
      }
    }
  }
];

export const MOCK_BOOKINGS: BookingRecord[] = [
  {
    pnr: 'SQ89LK',
    passengerName: 'Cataldi / Carolina Ms',
    flightNumber: 'SQ 638',
    route: 'Singapore (SIN) → Tokyo (NRT)',
    date: '24 Oct 2026',
    cabinClass: 'Business Class',
    seat: '12K',
    status: 'Confirmed'
  },
  {
    pnr: 'KF721A',
    passengerName: 'Cataldi / Carolina Ms',
    flightNumber: 'SQ 322',
    route: 'Singapore (SIN) → London (LHR)',
    date: '18 Nov 2026',
    cabinClass: 'Premium Economy',
    seat: '31A',
    status: 'Confirmed'
  }
];
