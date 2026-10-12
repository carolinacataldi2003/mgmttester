import React, { useState } from 'react';
import { X, Search, FileText, CheckCircle2, Luggage, Utensils, Plane, Download } from 'lucide-react';
import { MOCK_BOOKINGS } from '../data/airlineData';
import { BookingRecord } from '../types/airline';

interface ManageBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManageBookingModal: React.FC<ManageBookingModalProps> = ({ isOpen, onClose }) => {
  const [pnr, setPnr] = useState('SQ89LK');
  const [lastName, setLastName] = useState('Cataldi');
  const [foundBooking, setFoundBooking] = useState<BookingRecord | null>(MOCK_BOOKINGS[0]);
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const match = MOCK_BOOKINGS.find(
      b => b.pnr.toUpperCase() === pnr.trim().toUpperCase()
    );
    setFoundBooking(match || null);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00205b]" />
            <h3 className="font-sia-sans font-extrabold text-base text-[#00205b]">
              Manage Booking
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-neutral-900 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lookup form */}
        <form onSubmit={handleSearch} className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                Booking Reference (PNR)
              </label>
              <input
                type="text"
                value={pnr}
                onChange={(e) => setPnr(e.target.value.toUpperCase())}
                placeholder="e.g. SQ89LK"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold uppercase tracking-wider text-[#00205b]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                Last / Family Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="e.g. Cataldi"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-xs font-bold text-neutral-800"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-[#00205b] hover:bg-[#0b1b3d] text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Retrieve Itinerary</span>
          </button>
        </form>

        {/* Retrieved booking details */}
        {hasSearched && foundBooking && (
          <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Reference: {foundBooking.pnr}
                </span>
                <p className="font-sia-sans font-extrabold text-sm text-[#00205b]">
                  {foundBooking.passengerName}
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                {foundBooking.status}
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between font-bold text-neutral-800">
                <span>{foundBooking.route}</span>
                <span className="text-[#00205b]">{foundBooking.flightNumber}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-500 text-[11px]">
                <span>Date: {foundBooking.date}</span>
                <span>Seat: <strong className="text-neutral-900">{foundBooking.seat}</strong> ({foundBooking.cabinClass})</span>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => alert(`Seat for ${foundBooking.flightNumber} updated to Window Seat 11A.`)}
                className="p-2 bg-white border border-neutral-300 rounded-lg text-xs font-bold text-[#00205b] hover:bg-neutral-100 transition flex items-center gap-1.5 justify-center"
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Change Seat</span>
              </button>
              <button
                type="button"
                onClick={() => alert('Book the Cook menu opened: Lobster Thermidor selected.')}
                className="p-2 bg-white border border-neutral-300 rounded-lg text-xs font-bold text-[#00205b] hover:bg-neutral-100 transition flex items-center gap-1.5 justify-center"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Special Meals</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => alert(`Electronic Ticket Receipt downloaded for PNR ${foundBooking.pnr}`)}
              className="w-full py-2 bg-neutral-200 hover:bg-neutral-300 rounded-lg text-xs font-bold text-neutral-800 transition flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download e-Ticket PDF</span>
            </button>
          </div>
        )}

        {hasSearched && !foundBooking && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center text-xs text-amber-800">
            No booking found matching reference &ldquo;{pnr}&rdquo;. Please verify your booking reference or try sample PNR <strong>SQ89LK</strong>.
          </div>
        )}
      </div>
    </div>
  );
};
