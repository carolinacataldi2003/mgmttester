import React, { useState } from 'react';
import {
  ArrowLeft,
  Plane,
  Clock,
  Luggage,
  Award,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  Calendar,
  Sparkles,
  Wifi
} from 'lucide-react';
import { FareTier, FlightResult, FlightSearchParams } from '../types/airline';
import { SAMPLE_FLIGHT_RESULTS } from '../data/airlineData';

interface FlightResultsViewProps {
  searchParams: FlightSearchParams;
  onBackToSearch: () => void;
  onBookingComplete: (flight: FlightResult, fare: FareTier) => void;
}

export const FlightResultsView: React.FC<FlightResultsViewProps> = ({
  searchParams,
  onBackToSearch,
  onBookingComplete,
}) => {
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(null);
  const [selectedFare, setSelectedFare] = useState<FareTier | null>(null);
  const [expandedFlightId, setExpandedFlightId] = useState<string | null>(SAMPLE_FLIGHT_RESULTS[0].id);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Passenger form state
  const [title, setTitle] = useState('Ms');
  const [firstName, setFirstName] = useState('Carolina');
  const [lastName, setLastName] = useState('Cataldi');
  const [passportNumber, setPassportNumber] = useState('E84920194');
  const [mealPreference, setMealPreference] = useState('Book the Cook - Singapore Chicken Rice');

  const handleSelectFare = (flight: FlightResult, fare: FareTier) => {
    setSelectedFlight(flight);
    setSelectedFare(fare);
    setIsConfirmationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f8] pb-24">
      {/* Top Search Summary Strip */}
      <div className="bg-[#00205b] text-white py-4 px-4 sm:px-8 border-b border-[#0b1b3d]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSearch}
              className="p-1.5 hover:bg-white/10 rounded-lg transition text-white flex items-center gap-1 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Modify Search</span>
            </button>
            <div className="h-4 w-px bg-white/30 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold">
                <span>{searchParams.origin.city} ({searchParams.origin.code})</span>
                <span className="text-[#ba9653]">→</span>
                <span>{searchParams.destination.city} ({searchParams.destination.code})</span>
              </div>
              <p className="text-xs text-neutral-300">
                {searchParams.departureDate} · {searchParams.adults} Adult{searchParams.adults > 1 ? 's' : ''} · {searchParams.cabinClass}
                {searchParams.isRedeemWithMiles && <span className="text-[#ba9653] font-bold ml-2">· KrisFlyer Redemption</span>}
              </p>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs text-neutral-300">All prices shown in</span>
            <span className="text-sm font-extrabold text-[#ba9653] ml-1.5">SGD</span>
          </div>
        </div>
      </div>

      {/* Date Ribbon / Low Fare Strip */}
      <div className="bg-white border-b border-neutral-200 py-2.5 px-4 sm:px-8 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto gap-2 text-xs font-semibold">
          {[
            { date: 'Thu, 22 Oct', price: 680 },
            { date: 'Fri, 23 Oct', price: 660 },
            { date: 'Sat, 24 Oct (Selected)', price: 648, active: true },
            { date: 'Sun, 25 Oct', price: 695 },
            { date: 'Mon, 26 Oct', price: 630 },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`px-3 py-2 rounded-xl text-center cursor-pointer transition shrink-0 ${
                item.active
                  ? 'bg-[#00205b] text-white shadow-xs'
                  : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700'
              }`}
            >
              <div className="text-[11px] opacity-80">{item.date}</div>
              <div className="font-extrabold text-xs text-[#ba9653] mt-0.5">
                {searchParams.isRedeemWithMiles ? `${(item.price * 40).toLocaleString()} miles` : `From SGD ${item.price}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flight Results Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6 space-y-5">
        <div className="flex items-center justify-between text-xs text-neutral-600 font-semibold">
          <span>{SAMPLE_FLIGHT_RESULTS.length} Direct Flights Available</span>
          <span>Operated by Singapore Airlines</span>
        </div>

        {SAMPLE_FLIGHT_RESULTS.map((flight) => {
          const isExpanded = expandedFlightId === flight.id;

          return (
            <div
              key={flight.id}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition"
            >
              {/* Flight Header Strip */}
              <div className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-100">
                {/* Flight Route and Timings */}
                <div className="flex items-center gap-6">
                  {/* Departure */}
                  <div>
                    <span className="text-2xl font-extrabold text-[#00205b] block">
                      {flight.departureTime}
                    </span>
                    <span className="text-xs font-bold text-neutral-600">
                      {flight.origin.code}
                    </span>
                  </div>

                  {/* Flight Duration Bar */}
                  <div className="flex flex-col items-center px-2">
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {flight.duration}
                    </span>
                    <div className="flex items-center gap-1 w-24 my-1">
                      <div className="h-0.5 bg-neutral-300 flex-1" />
                      <Plane className="w-3.5 h-3.5 text-[#00205b] rotate-90" />
                      <div className="h-0.5 bg-neutral-300 flex-1" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">
                      {flight.stops}
                    </span>
                  </div>

                  {/* Arrival */}
                  <div>
                    <span className="text-2xl font-extrabold text-[#00205b] block">
                      {flight.arrivalTime}
                    </span>
                    <span className="text-xs font-bold text-neutral-600">
                      {flight.destination.code}
                    </span>
                  </div>
                </div>

                {/* Aircraft & Amenities */}
                <div className="flex items-center gap-4 text-xs text-neutral-600 font-medium border-t lg:border-t-0 pt-2 lg:pt-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-neutral-900">{flight.flightNumber}</span>
                    <span>·</span>
                    <span>{flight.aircraft}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-neutral-500">
                    <span className="flex items-center gap-1" title="Complimentary Wi-Fi for KrisFlyer">
                      <Wifi className="w-3.5 h-3.5 text-neutral-600" />
                      <span>Free Wi-Fi</span>
                    </span>
                    <span className="flex items-center gap-1" title="KrisWorld Inflight Entertainment">
                      <Sparkles className="w-3.5 h-3.5 text-[#ba9653]" />
                      <span>KrisWorld IFE</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setExpandedFlightId(isExpanded ? null : flight.id)}
                    className="ml-auto text-xs font-bold text-[#00205b] hover:text-[#ba9653] flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Hide Fares' : 'View Fares'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Fare Columns Grid */}
              {isExpanded && (
                <div className="p-5 bg-neutral-50/70 border-t border-neutral-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Economy Lite */}
                    {flight.fares.economyLite && (
                      <div className="bg-white border border-neutral-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#00205b] transition">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                            Economy
                          </span>
                          <h4 className="text-base font-extrabold text-[#00205b]">
                            {flight.fares.economyLite.name}
                          </h4>
                          <div className="my-3">
                            <span className="text-2xl font-extrabold text-[#00205b]">
                              SGD {flight.fares.economyLite.priceSGD}
                            </span>
                            <span className="text-xs text-neutral-500 block">per passenger</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-neutral-600 mb-4">
                            <li className="flex items-center gap-1.5">
                              <Luggage className="w-3.5 h-3.5 text-neutral-400" />
                              <span>{flight.fares.economyLite.baggageKg}kg Baggage</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-neutral-400" />
                              <span>{flight.fares.economyLite.milesEarned.toLocaleString()} KrisFlyer Miles</span>
                            </li>
                            <li className="text-[11px] text-neutral-500">
                              Seat: {flight.fares.economyLite.seatSelection}
                            </li>
                          </ul>
                        </div>
                        <button
                          onClick={() => handleSelectFare(flight, flight.fares.economyLite!)}
                          className="w-full py-2 bg-neutral-900 hover:bg-[#00205b] text-white font-bold text-xs rounded-lg transition"
                        >
                          Select Lite
                        </button>
                      </div>
                    )}

                    {/* Economy Standard (Popular) */}
                    {flight.fares.economyStandard && (
                      <div className="bg-white border-2 border-[#ba9653] rounded-xl p-4 flex flex-col justify-between shadow-xs relative">
                        <span className="absolute -top-3 left-4 bg-[#ba9653] text-[#00205b] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#ba9653] block">
                            Economy
                          </span>
                          <h4 className="text-base font-extrabold text-[#00205b]">
                            {flight.fares.economyStandard.name}
                          </h4>
                          <div className="my-3">
                            <span className="text-2xl font-extrabold text-[#00205b]">
                              SGD {flight.fares.economyStandard.priceSGD}
                            </span>
                            <span className="text-xs text-neutral-500 block">per passenger</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-neutral-700 mb-4 font-medium">
                            <li className="flex items-center gap-1.5">
                              <Luggage className="w-3.5 h-3.5 text-[#ba9653]" />
                              <span>{flight.fares.economyStandard.baggageKg}kg Baggage</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-[#ba9653]" />
                              <span>{flight.fares.economyStandard.milesEarned.toLocaleString()} KrisFlyer Miles</span>
                            </li>
                            <li className="flex items-center gap-1.5 text-emerald-700">
                              <Check className="w-3.5 h-3.5" />
                              <span>Standard Seat Included</span>
                            </li>
                          </ul>
                        </div>
                        <button
                          onClick={() => handleSelectFare(flight, flight.fares.economyStandard!)}
                          className="w-full py-2 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-xs rounded-lg transition"
                        >
                          Select Standard
                        </button>
                      </div>
                    )}

                    {/* Economy Flexi */}
                    {flight.fares.economyFlexi && (
                      <div className="bg-white border border-neutral-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#00205b] transition">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                            Economy
                          </span>
                          <h4 className="text-base font-extrabold text-[#00205b]">
                            {flight.fares.economyFlexi.name}
                          </h4>
                          <div className="my-3">
                            <span className="text-2xl font-extrabold text-[#00205b]">
                              SGD {flight.fares.economyFlexi.priceSGD}
                            </span>
                            <span className="text-xs text-neutral-500 block">per passenger</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-neutral-600 mb-4">
                            <li className="flex items-center gap-1.5">
                              <Luggage className="w-3.5 h-3.5 text-neutral-400" />
                              <span>{flight.fares.economyFlexi.baggageKg}kg Baggage</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-neutral-400" />
                              <span>{flight.fares.economyFlexi.milesEarned.toLocaleString()} Miles</span>
                            </li>
                            <li className="text-[11px] text-emerald-700 font-semibold">
                              ✓ Free cancellation & refund
                            </li>
                          </ul>
                        </div>
                        <button
                          onClick={() => handleSelectFare(flight, flight.fares.economyFlexi!)}
                          className="w-full py-2 bg-neutral-900 hover:bg-[#00205b] text-white font-bold text-xs rounded-lg transition"
                        >
                          Select Flexi
                        </button>
                      </div>
                    )}

                    {/* Business Class */}
                    {flight.fares.businessFlexi && (
                      <div className="bg-[#00205b] text-white rounded-xl p-4 flex flex-col justify-between shadow-md">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#ba9653] block">
                            Luxury Cabin
                          </span>
                          <h4 className="text-base font-extrabold text-white">
                            Business Class
                          </h4>
                          <div className="my-3">
                            <span className="text-2xl font-extrabold text-[#ba9653]">
                              SGD {flight.fares.businessFlexi.priceSGD}
                            </span>
                            <span className="text-xs text-neutral-300 block">Lie-flat bed & Lounge</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-neutral-200 mb-4">
                            <li className="flex items-center gap-1.5">
                              <Luggage className="w-3.5 h-3.5 text-[#ba9653]" />
                              <span>40kg Priority Baggage</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-[#ba9653]" />
                              <span>SilverKris Lounge Access</span>
                            </li>
                            <li className="flex items-center gap-1.5 text-[#ba9653]">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Book the Cook Gourmet Dining</span>
                            </li>
                          </ul>
                        </div>
                        <button
                          onClick={() => handleSelectFare(flight, flight.fares.businessFlexi!)}
                          className="w-full py-2 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-xs rounded-lg transition"
                        >
                          Select Business
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Booking Passenger & Confirmation Modal */}
      {isConfirmationOpen && selectedFlight && selectedFare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsConfirmationOpen(false)}
          />
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <h3 className="font-sia-sans font-extrabold text-lg text-[#00205b] mb-1">
              Complete Your Flight Booking
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Singapore Airlines Flight {selectedFlight.flightNumber} · {selectedFare.name}
            </p>

            {/* Flight Summary Card */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 mb-5">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-1">
                <span>{selectedFlight.origin.city} ({selectedFlight.origin.code}) → {selectedFlight.destination.city} ({selectedFlight.destination.code})</span>
                <span className="text-[#00205b]">SGD {selectedFare.priceSGD}</span>
              </div>
              <div className="text-[11px] text-neutral-500 flex items-center gap-3">
                <span>Dep: {selectedFlight.departureTime}</span>
                <span>Arr: {selectedFlight.arrivalTime}</span>
                <span>Aircraft: {selectedFlight.aircraft}</span>
              </div>
            </div>

            {/* Passenger Form */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Passenger Details
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 mb-1">Title</label>
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold"
                  >
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 mb-1">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 mb-1">Passport Number</label>
                <input
                  type="text"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                  Complimentary Dining Selection (Book the Cook)
                </label>
                <select
                  value={mealPreference}
                  onChange={(e) => setMealPreference(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-medium"
                >
                  <option>Book the Cook - Singapore Hainanese Chicken Rice</option>
                  <option>Book the Cook - Boston Lobster Thermidor with Buttered Asparagus</option>
                  <option>Book the Cook - Seared Wagyu Beef Sirloin with Truffle Jus</option>
                  <option>Standard International Inflight Dining Menu</option>
                  <option>Vegetarian / Asian Vegan Meal</option>
                </select>
              </div>

              <div className="pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsConfirmationOpen(false);
                    onBookingComplete(selectedFlight, selectedFare);
                  }}
                  className="w-full py-3.5 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-sm rounded-xl shadow-lg transition"
                >
                  Confirm Reservation & Continue (SGD {selectedFare.priceSGD})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
