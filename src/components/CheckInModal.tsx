import React, { useState } from 'react';
import { X, CheckCircle, QrCode, Plane, Download, Check } from 'lucide-react';
import { MOCK_BOOKINGS } from '../data/airlineData';

interface CheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckInModal: React.FC<CheckInModalProps> = ({ isOpen, onClose }) => {
  const [pnr, setPnr] = useState('SQ89LK');
  const [lastName, setLastName] = useState('Cataldi');
  const [checkedIn, setCheckedIn] = useState(false);

  if (!isOpen) return null;

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="font-sia-sans font-extrabold text-base text-[#00205b]">
              Online Check-in
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-neutral-900 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!checkedIn ? (
          <form onSubmit={handleCheckIn} className="mt-4 space-y-4">
            <p className="text-xs text-neutral-600">
              Online check-in opens 48 hours and closes 1.5 hours prior to flight departure.
            </p>
            <div className="space-y-3">
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
              className="w-full py-3 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-xs rounded-xl transition"
            >
              Proceed to Check-in
            </button>
          </form>
        ) : (
          <div className="mt-4 space-y-4">
            {/* Boarding Pass Card */}
            <div className="bg-[#00205b] text-white rounded-2xl p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-3">
                <span className="font-sia-sans font-extrabold text-xs tracking-wider text-[#ba9653]">
                  SINGAPORE AIRLINES
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-600 px-2 py-0.5 rounded-full">
                  Checked In
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-black text-white block">SIN</span>
                  <span className="text-[11px] text-neutral-300">Singapore (T3)</span>
                </div>
                <Plane className="w-5 h-5 text-[#ba9653] rotate-90" />
                <div className="text-right">
                  <span className="text-2xl font-black text-white block">NRT</span>
                  <span className="text-[11px] text-neutral-300">Tokyo Narita (T1)</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/20 text-xs">
                <div>
                  <span className="text-[10px] text-neutral-400 block">Flight</span>
                  <span className="font-bold text-white">SQ 638</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">Gate / Boarding</span>
                  <span className="font-bold text-[#ba9653]">B4 · 07:40</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">Seat</span>
                  <span className="font-bold text-white">12K (Business)</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 block">Passenger</span>
                  <span className="font-bold text-xs">{lastName.toUpperCase()} / {pnr}</span>
                </div>
                <div className="bg-white p-1 rounded">
                  <QrCode className="w-9 h-9 text-black" />
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Mobile Boarding Pass saved to Apple Wallet / Google Pay!')}
              className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Add to Mobile Wallet</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
