import React, { useState } from 'react';
import {
  Plane,
  Building,
  Award,
  Calendar,
  Users,
  ArrowRightLeft,
  Search,
  Tag,
  CheckCircle,
  FileText,
  Clock,
  ChevronDown
} from 'lucide-react';
import { Airport, CabinClass, FlightSearchParams, TripType } from '../types/airline';
import { AIRPORTS } from '../data/airlineData';

interface SiaHeroBookingProps {
  onSearchFlights: (params: FlightSearchParams) => void;
  onOpenManageBooking: () => void;
  onOpenCheckIn: () => void;
  onOpenFlightStatus: () => void;
  onOpenKrisFlyer: () => void;
}

export const SiaHeroBooking: React.FC<SiaHeroBookingProps> = ({
  onSearchFlights,
  onOpenManageBooking,
  onOpenCheckIn,
  onOpenFlightStatus,
  onOpenKrisFlyer,
}) => {
  // Booking tab
  const [activeTab, setActiveTab] = useState<'flight' | 'hotel' | 'redeem' | 'manage' | 'checkin' | 'status'>('flight');

  // Search parameters
  const [tripType, setTripType] = useState<TripType>('return');
  const [origin, setOrigin] = useState<Airport>(AIRPORTS[0]); // SIN
  const [destination, setDestination] = useState<Airport>(AIRPORTS[1]); // NRT
  const [departureDate, setDepartureDate] = useState('2026-10-24');
  const [returnDate, setReturnDate] = useState('2026-10-31');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState<CabinClass>('Economy');
  const [isRedeemWithMiles, setIsRedeemWithMiles] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  // Dropdown toggles
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showOriginModal, setShowOriginModal] = useState(false);
  const [showDestModal, setShowDestModal] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const handleSwapAirports = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchFlights({
      origin,
      destination,
      departureDate,
      returnDate,
      tripType,
      adults,
      children,
      infants,
      cabinClass,
      isRedeemWithMiles: isRedeemWithMiles || activeTab === 'redeem',
      promoCode: promoCode.trim() || undefined,
    });
  };

  return (
    <div className="relative">
      {/* Background Hero Banner */}
      <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden bg-[#00205b]">
        <img
          src="/src/assets/images/sia_aircraft_sky_1791786369315.jpg"
          alt="Singapore Airlines Airbus A350 flying through golden sunset"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Navy Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00205b] via-[#00205b]/40 to-transparent" />

        {/* Hero Title and Subtitle */}
        <div className="absolute top-10 sm:top-14 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-8 text-white">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase mb-2 border border-white/20">
            Welcome Aboard Singapore Airlines
          </div>
          <h1 className="font-sia-serif text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            World-class journeys, made effortless.
          </h1>
          <p className="font-sia-sans text-sm sm:text-base text-neutral-200 mt-2 max-w-xl drop-shadow">
            Experience our signature hospitality to over 130 destinations across the globe.
          </p>
        </div>
      </div>

      {/* Booking Engine Card Widget (Overlaps the Hero) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 -mt-44 sm:-mt-52 relative z-30 pb-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden">
          {/* Top Service Tabs */}
          <div className="flex border-b border-neutral-200 bg-neutral-50/90 overflow-x-auto text-xs sm:text-sm font-semibold">
            <button
              onClick={() => { setActiveTab('flight'); setIsRedeemWithMiles(false); }}
              className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap transition cursor-pointer border-b-2 ${
                activeTab === 'flight'
                  ? 'border-[#00205b] text-[#00205b] bg-white font-bold'
                  : 'border-transparent text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <Plane className="w-4 h-4 text-[#ba9653]" />
              <span>Book Flight</span>
            </button>

            <button
              onClick={() => { setActiveTab('redeem'); setIsRedeemWithMiles(true); }}
              className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap transition cursor-pointer border-b-2 ${
                activeTab === 'redeem'
                  ? 'border-[#00205b] text-[#00205b] bg-white font-bold'
                  : 'border-transparent text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <Award className="w-4 h-4 text-[#ba9653]" />
              <span>Redeem with Miles</span>
            </button>

            <button
              onClick={() => { setActiveTab('manage'); onOpenManageBooking(); }}
              className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap transition cursor-pointer border-b-2 ${
                activeTab === 'manage'
                  ? 'border-[#00205b] text-[#00205b] bg-white font-bold'
                  : 'border-transparent text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <FileText className="w-4 h-4 text-[#ba9653]" />
              <span>Manage Booking</span>
            </button>

            <button
              onClick={() => { setActiveTab('checkin'); onOpenCheckIn(); }}
              className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap transition cursor-pointer border-b-2 ${
                activeTab === 'checkin'
                  ? 'border-[#00205b] text-[#00205b] bg-white font-bold'
                  : 'border-transparent text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <CheckCircle className="w-4 h-4 text-[#ba9653]" />
              <span>Check-in</span>
            </button>

            <button
              onClick={() => { setActiveTab('status'); onOpenFlightStatus(); }}
              className={`flex items-center gap-2 px-5 py-4 whitespace-nowrap transition cursor-pointer border-b-2 ${
                activeTab === 'status'
                  ? 'border-[#00205b] text-[#00205b] bg-white font-bold'
                  : 'border-transparent text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <Clock className="w-4 h-4 text-[#ba9653]" />
              <span>Flight Status</span>
            </button>
          </div>

          {/* Form Content Area */}
          <form onSubmit={handleSearchSubmit} className="p-5 sm:p-7 space-y-5">
            {/* Trip Type Selector & KrisFlyer Miles Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-neutral-800">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'return'}
                    onChange={() => setTripType('return')}
                    className="accent-[#00205b] w-4 h-4 cursor-pointer"
                  />
                  <span>Return</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'oneway'}
                    onChange={() => setTripType('oneway')}
                    className="accent-[#00205b] w-4 h-4 cursor-pointer"
                  />
                  <span>One-way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === 'multicity'}
                    onChange={() => setTripType('multicity')}
                    className="accent-[#00205b] w-4 h-4 cursor-pointer"
                  />
                  <span>Multi-city</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="redeemMiles"
                  checked={isRedeemWithMiles || activeTab === 'redeem'}
                  onChange={(e) => setIsRedeemWithMiles(e.target.checked)}
                  className="accent-[#ba9653] w-4 h-4 rounded cursor-pointer"
                />
                <label htmlFor="redeemMiles" className="cursor-pointer text-[#ba9653] font-bold">
                  Redeem with KrisFlyer miles
                </label>
              </div>
            </div>

            {/* Flight Route and Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              {/* Origin / From Field (4 cols) */}
              <div className="lg:col-span-3 relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  From
                </label>
                <button
                  type="button"
                  onClick={() => setShowOriginModal(true)}
                  className="w-full h-15 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-300 rounded-xl px-3.5 flex items-center justify-between text-left transition"
                >
                  <div className="truncate pr-2">
                    <span className="text-xl font-extrabold text-[#00205b] block leading-tight">
                      {origin.code}
                    </span>
                    <span className="text-xs text-neutral-600 truncate block">
                      {origin.city}, {origin.country}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                </button>
              </div>

              {/* Swap Button (1 col or floating) */}
              <div className="flex items-center justify-center -my-2 lg:my-0 lg:col-span-1">
                <button
                  type="button"
                  onClick={handleSwapAirports}
                  aria-label="Swap Origin and Destination"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-300 shadow-sm flex items-center justify-center hover:bg-neutral-100 text-neutral-700 hover:text-[#00205b] transition active:rotate-180"
                  title="Swap airports"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Destination / To Field (4 cols) */}
              <div className="lg:col-span-3 relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  To
                </label>
                <button
                  type="button"
                  onClick={() => setShowDestModal(true)}
                  className="w-full h-15 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-300 rounded-xl px-3.5 flex items-center justify-between text-left transition"
                >
                  <div className="truncate pr-2">
                    <span className="text-xl font-extrabold text-[#00205b] block leading-tight">
                      {destination.code}
                    </span>
                    <span className="text-xs text-neutral-600 truncate block">
                      {destination.city}, {destination.country}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                </button>
              </div>

              {/* Departure & Return Dates (3 cols) */}
              <div className="lg:col-span-3">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  {tripType === 'return' ? 'Departure & Return Dates' : 'Departure Date'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full h-15 bg-neutral-50 border border-neutral-300 rounded-xl px-2.5 text-xs font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#00205b]"
                    />
                  </div>
                  {tripType === 'return' ? (
                    <div className="relative">
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full h-15 bg-neutral-50 border border-neutral-300 rounded-xl px-2.5 text-xs font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#00205b]"
                      />
                    </div>
                  ) : (
                    <div className="h-15 bg-neutral-100/60 border border-dashed border-neutral-300 rounded-xl flex items-center justify-center text-xs text-neutral-400 font-medium">
                      One way only
                    </div>
                  )}
                </div>
              </div>

              {/* Passengers and Cabin Class (2 cols) */}
              <div className="lg:col-span-2 relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Passengers & Cabin
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassengerModal(!showPassengerModal)}
                  className="w-full h-15 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-300 rounded-xl px-3 flex items-center justify-between text-left transition"
                >
                  <div className="truncate pr-1">
                    <span className="text-xs font-bold text-neutral-900 block truncate">
                      {adults + children + infants} Passenger{adults + children + infants > 1 ? 's' : ''}
                    </span>
                    <span className="text-[11px] text-[#ba9653] font-bold truncate block">
                      {cabinClass}
                    </span>
                  </div>
                  <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                </button>

                {/* Passenger Selector Flyout */}
                {showPassengerModal && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 z-40 space-y-3 animate-in fade-in duration-100">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                      <div>
                        <p className="text-xs font-bold text-neutral-900">Adults</p>
                        <p className="text-[10px] text-neutral-500">12+ years</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(Math.min(9, adults + 1))}
                          className="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                      <div>
                        <p className="text-xs font-bold text-neutral-900">Children</p>
                        <p className="text-[10px] text-neutral-500">2-11 years</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(Math.min(6, children + 1))}
                          className="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Cabin Class Selection */}
                    <div className="pt-1">
                      <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                        Cabin Class
                      </p>
                      <select
                        value={cabinClass}
                        onChange={(e) => setCabinClass(e.target.value as CabinClass)}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#00205b]"
                      >
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business Class</option>
                        <option value="First / Suites">First Class / Suites</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowPassengerModal(false)}
                      className="w-full py-1.5 bg-[#00205b] text-white text-xs font-bold rounded-lg hover:bg-[#0b1b3d] transition"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row: Promo Code & Search Flights CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Tag className="w-4 h-4 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Promo code (optional)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-xs font-semibold uppercase text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#00205b] w-full sm:w-48"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-sm sm:text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Search className="w-5 h-5 text-[#00205b]" />
                <span>Search Flights</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Airport Selection Modal (Origin or Destination) */}
      {(showOriginModal || showDestModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => { setShowOriginModal(false); setShowDestModal(false); }}
          />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[80vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
            <h3 className="font-sia-sans font-bold text-base text-[#00205b] mb-3">
              Select {showOriginModal ? 'Departure' : 'Destination'} Airport
            </h3>
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, country, or 3-letter IATA code..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full bg-neutral-100 rounded-xl py-2 pl-9 pr-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00205b]"
              />
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-neutral-100 pr-1">
              {AIRPORTS.filter(a =>
                a.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
                a.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
                a.country.toLowerCase().includes(searchFilter.toLowerCase())
              ).map((airport) => (
                <div
                  key={airport.code}
                  onClick={() => {
                    if (showOriginModal) setOrigin(airport);
                    else setDestination(airport);
                    setShowOriginModal(false);
                    setShowDestModal(false);
                    setSearchFilter('');
                  }}
                  className="py-3 px-2 flex items-center justify-between hover:bg-neutral-50 rounded-lg cursor-pointer transition"
                >
                  <div>
                    <span className="font-bold text-sm text-[#00205b]">{airport.city}</span>
                    <span className="text-xs text-neutral-500 ml-1.5">({airport.country})</span>
                    <p className="text-[11px] text-neutral-400">{airport.name}</p>
                  </div>
                  <span className="text-sm font-extrabold text-[#ba9653] bg-neutral-100 px-2 py-1 rounded">
                    {airport.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
