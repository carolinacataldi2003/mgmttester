import React, { useState, useEffect } from 'react';
import { SiaHeader } from './components/SiaHeader';
import { SiaHeroBooking } from './components/SiaHeroBooking';
import { SiaExperienceSection } from './components/SiaExperienceSection';
import { FlightResultsView } from './components/FlightResultsView';
import { ManageBookingModal } from './components/ManageBookingModal';
import { CheckInModal } from './components/CheckInModal';
import { FlightStatusModal } from './components/FlightStatusModal';
import { KrisFlyerModal } from './components/KrisFlyerModal';
import { SiaFooter } from './components/SiaFooter';
import { FareTier, FlightResult, FlightSearchParams, SpecialOffer } from './types/airline';
import { AIRPORTS } from './data/airlineData';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results'>('home');
  const [activeNavTab, setActiveNavTab] = useState('book');

  // Active search params
  const [searchParams, setSearchParams] = useState<FlightSearchParams>({
    origin: AIRPORTS[0], // SIN
    destination: AIRPORTS[1], // NRT
    departureDate: '2026-10-24',
    returnDate: '2026-10-31',
    tripType: 'return',
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: 'Economy',
    isRedeemWithMiles: false,
  });

  // Modals state
  const [isManageBookingOpen, setIsManageBookingOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isFlightStatusOpen, setIsFlightStatusOpen] = useState(false);
  const [isKrisFlyerOpen, setIsKrisFlyerOpen] = useState(false);

  // Booking confirmed alert
  const [confirmedBooking, setConfirmedBooking] = useState<{
    flight: FlightResult;
    fare: FareTier;
  } | null>(null);

  // Listen to hash changes if user navigated with hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('manage')) {
        setIsManageBookingOpen(true);
      } else if (hash.includes('checkin')) {
        setIsCheckInOpen(true);
      } else if (hash.includes('status')) {
        setIsFlightStatusOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSearchFlights = (params: FlightSearchParams) => {
    setSearchParams(params);
    setCurrentView('results');
    window.location.hash = '/book/flightresults';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOffer = (offer: SpecialOffer) => {
    const destAirport = AIRPORTS.find(a => a.code === offer.airportCode) || AIRPORTS[1];
    setSearchParams({
      ...searchParams,
      origin: AIRPORTS[0], // SIN
      destination: destAirport,
      departureDate: '2026-11-14',
      returnDate: '2026-11-21',
      tripType: 'return',
      cabinClass: 'Economy',
    });
    setCurrentView('results');
    window.location.hash = '/book/flightresults';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (flight: FlightResult, fare: FareTier) => {
    setConfirmedBooking({ flight, fare });
    setCurrentView('home');
    window.location.hash = '/book/bookflight';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col font-sia-sans selection:bg-[#ba9653] selection:text-[#00205b]">
      {/* Singapore Airlines Header */}
      <SiaHeader
        onOpenKrisFlyer={() => setIsKrisFlyerOpen(true)}
        onSelectNavTab={(tab) => {
          setActiveNavTab(tab);
          if (tab === 'book') {
            setCurrentView('home');
            window.location.hash = '/book/bookflight';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (tab === 'offers' || tab === 'experience') {
            setCurrentView('home');
            window.scrollTo({ top: 600, behavior: 'smooth' });
          }
        }}
        activeNavTab={activeNavTab}
      />

      {/* Booking Success Banner Toast */}
      {confirmedBooking && (
        <div className="bg-emerald-900 text-white px-4 py-3 border-b border-emerald-800 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-xs sm:text-sm">
                  Reservation Confirmed! Flight {confirmedBooking.flight.flightNumber} ({confirmedBooking.flight.origin.code} → {confirmedBooking.flight.destination.code})
                </p>
                <p className="text-[11px] text-emerald-200">
                  Booking Reference: <strong>SQ94MK</strong> · E-ticket sent to carolina.cataldi2003@gmail.com
                </p>
              </div>
            </div>
            <button
              onClick={() => setConfirmedBooking(null)}
              className="p-1 text-emerald-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main View: Booking Homepage OR Flight Results */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* Hero Section & Booking Widget (#/book/bookflight) */}
            <SiaHeroBooking
              onSearchFlights={handleSearchFlights}
              onOpenManageBooking={() => setIsManageBookingOpen(true)}
              onOpenCheckIn={() => setIsCheckInOpen(true)}
              onOpenFlightStatus={() => setIsFlightStatusOpen(true)}
              onOpenKrisFlyer={() => setIsKrisFlyerOpen(true)}
            />

            {/* Fares & Inflight Experience Section */}
            <SiaExperienceSection
              onSelectOffer={handleSelectOffer}
              onOpenKrisFlyer={() => setIsKrisFlyerOpen(true)}
            />
          </>
        ) : (
          /* Flight Results & Cabin Selection Flow */
          <FlightResultsView
            searchParams={searchParams}
            onBackToSearch={() => {
              setCurrentView('home');
              window.location.hash = '/book/bookflight';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookingComplete={handleBookingComplete}
          />
        )}
      </main>

      {/* Singapore Airlines Footer */}
      <SiaFooter />

      {/* Global Modals */}
      <ManageBookingModal
        isOpen={isManageBookingOpen}
        onClose={() => setIsManageBookingOpen(false)}
      />

      <CheckInModal
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
      />

      <FlightStatusModal
        isOpen={isFlightStatusOpen}
        onClose={() => setIsFlightStatusOpen(false)}
      />

      <KrisFlyerModal
        isOpen={isKrisFlyerOpen}
        onClose={() => setIsKrisFlyerOpen(false)}
      />
    </div>
  );
}
