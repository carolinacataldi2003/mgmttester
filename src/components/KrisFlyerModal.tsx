import React, { useState } from 'react';
import { X, Award, Shield, Wifi, Gift, Sparkles, Check } from 'lucide-react';

interface KrisFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KrisFlyerModal: React.FC<KrisFlyerModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [membershipNo, setMembershipNo] = useState('883 912 048');
  const [pin, setPin] = useState('••••••');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#ba9653]" />
            <h3 className="font-sia-sans font-extrabold text-base text-[#00205b]">
              KrisFlyer Membership Portal
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-neutral-900 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isLoggedIn ? (
          <div className="mt-4 space-y-5">
            {/* Digital KrisFlyer Membership Card */}
            <div className="bg-gradient-to-tr from-[#00205b] via-[#102a5c] to-[#ba9653] text-white rounded-2xl p-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] tracking-widest text-[#ba9653] font-bold uppercase block">
                    SINGAPORE AIRLINES
                  </span>
                  <span className="font-sia-serif text-lg font-bold">KrisFlyer Elite Gold</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ba9653] flex items-center justify-center text-[#00205b]">
                  <Award className="w-5 h-5 fill-current" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] text-neutral-300 block uppercase tracking-wider">
                  Available Miles Balance
                </span>
                <span className="text-3xl font-black text-white tracking-tight">
                  84,250 <span className="text-sm font-semibold text-[#ba9653]">miles</span>
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-3 text-xs">
                <div>
                  <span className="text-[10px] text-neutral-300 block">Member Name</span>
                  <span className="font-bold">CAROLINA CATALDI</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-300 block">KrisFlyer Number</span>
                  <span className="font-mono font-bold text-[#ba9653]">883 912 048</span>
                </div>
              </div>
            </div>

            {/* Elite Privileges */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Active Member Privileges
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#ba9653] shrink-0" />
                  <span className="font-semibold text-neutral-800">Unlimited Free Wi-Fi</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#ba9653] shrink-0" />
                  <span className="font-semibold text-neutral-800">Lounge Access (SilverKris)</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ba9653] shrink-0" />
                  <span className="font-semibold text-neutral-800">+20kg Extra Baggage</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#ba9653] shrink-0" />
                  <span className="font-semibold text-neutral-800">Priority Boarding & Check-in</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  alert('Redeem Miles portal: You can redeem 84,250 miles for Return flights to Tokyo or London!');
                  onClose();
                }}
                className="flex-1 py-3 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-bold text-xs rounded-xl shadow transition"
              >
                Redeem Flights with Miles
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="py-3 px-4 border border-neutral-300 hover:bg-neutral-100 rounded-xl text-xs font-bold text-neutral-700 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="mt-4 space-y-4"
          >
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                KrisFlyer Number or Email
              </label>
              <input
                type="text"
                required
                value={membershipNo}
                onChange={(e) => setMembershipNo(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                6-Digit Security PIN
              </label>
              <input
                type="password"
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-xs font-bold"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#00205b] hover:bg-[#0b1b3d] text-white font-extrabold text-xs rounded-xl transition"
            >
              Log in to KrisFlyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
