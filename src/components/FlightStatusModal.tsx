import React, { useState } from 'react';
import { X, Clock, Search, Plane, CheckCircle2 } from 'lucide-react';

interface FlightStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlightStatusModal: React.FC<FlightStatusModalProps> = ({ isOpen, onClose }) => {
  const [flightNo, setFlightNo] = useState('SQ 638');
  const [statusResult, setStatusResult] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#00205b]" />
            <h3 className="font-sia-sans font-extrabold text-base text-[#00205b]">
              Flight Status Tracker
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-neutral-900 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatusResult(true);
          }}
          className="mt-4 space-y-3"
        >
          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">
              Flight Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value.toUpperCase())}
                placeholder="e.g. SQ 638 or SQ 322"
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-xs font-bold uppercase text-[#00205b]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-[#00205b] hover:bg-[#0b1b3d] text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Check Live Status</span>
          </button>
        </form>

        {statusResult && (
          <div className="mt-5 p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">Flight</span>
                <span className="font-black text-lg text-[#00205b]">{flightNo}</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>On Time</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs pt-2 border-t border-neutral-200">
              <div>
                <span className="text-[10px] text-neutral-500 block">Departure</span>
                <span className="font-bold text-neutral-900 block">Singapore (SIN)</span>
                <span className="text-neutral-600">Terminal 3 · Gate B4</span>
                <span className="font-extrabold text-[#00205b] block mt-0.5">08:20 SGT</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 block">Arrival</span>
                <span className="font-bold text-neutral-900 block">Tokyo Narita (NRT)</span>
                <span className="text-neutral-600">Terminal 1 · Gate 32</span>
                <span className="font-extrabold text-[#00205b] block mt-0.5">16:05 JST</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-neutral-200 text-[11px] text-neutral-600 space-y-1">
              <div className="flex justify-between">
                <span>Aircraft:</span>
                <strong className="text-neutral-900">Airbus A350-900 (9V-SMG)</strong>
              </div>
              <div className="flex justify-between">
                <span>Cruising Altitude:</span>
                <strong className="text-neutral-900">39,000 ft</strong>
              </div>
              <div className="flex justify-between">
                <span>Baggage Carousel:</span>
                <strong className="text-neutral-900">Belt 4 (Terminal 1)</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
