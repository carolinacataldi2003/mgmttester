import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const SiaFooter: React.FC = () => {
  return (
    <footer className="bg-[#0b1b3d] text-white pt-14 pb-12 px-4 sm:px-8 border-t border-[#1a2d54]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top 4 Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-sia-sans font-extrabold text-sm text-[#ba9653] uppercase tracking-wider mb-4">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#about" className="hover:text-white transition">About Singapore Airlines</a></li>
              <li><a href="#investor" className="hover:text-white transition">Investor Relations</a></li>
              <li><a href="#sustainability" className="hover:text-white transition">Sustainability & ESG</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers at SIA</a></li>
              <li><a href="#cargo" className="hover:text-white transition">SIA Cargo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sia-sans font-extrabold text-sm text-[#ba9653] uppercase tracking-wider mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#contact" className="hover:text-white transition">24/7 Contact Us</a></li>
              <li><a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a></li>
              <li><a href="#travel-advisory" className="hover:text-white transition">Travel Advisories</a></li>
              <li><a href="#baggage" className="hover:text-white transition">Baggage Guidelines</a></li>
              <li><a href="#accessibility" className="hover:text-white transition">Special Assistance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sia-sans font-extrabold text-sm text-[#ba9653] uppercase tracking-wider mb-4">
              Loyalty & Partners
            </h4>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#krisflyer" className="hover:text-white transition">KrisFlyer Loyalty</a></li>
              <li><a href="#pps" className="hover:text-white transition">The PPS Club</a></li>
              <li><a href="#star-alliance" className="hover:text-white transition">Star Alliance Network</a></li>
              <li><a href="#krisplus" className="hover:text-white transition">Kris+ Lifestyle App</a></li>
              <li><a href="#krispay" className="hover:text-white transition">KrisShop Luxury Duty-Free</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sia-sans font-extrabold text-sm text-[#ba9653] uppercase tracking-wider mb-4">
              Legal & Notices
            </h4>
            <ul className="space-y-2.5 text-neutral-300">
              <li><a href="#terms" className="hover:text-white transition">Conditions of Carriage</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#cookies" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#customer-commitment" className="hover:text-white transition">Customer Commitment</a></li>
              <li><a href="#tarmac-delay" className="hover:text-white transition">Tarmac Delay Contingency</a></li>
            </ul>
          </div>
        </div>

        {/* Brand Bar and Star Alliance */}
        <div className="pt-8 border-t border-[#1a2d54] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#ba9653] flex items-center justify-center text-[#00205b] font-black">
              ★
            </div>
            <div>
              <span className="font-sia-sans font-bold text-xs tracking-wider text-white block">
                STAR ALLIANCE MEMBER
              </span>
              <span className="text-[10px] text-neutral-400">
                The way the Earth connects
              </span>
            </div>
          </div>

          <div className="text-center md:text-right text-xs text-neutral-400">
            <p>© 2026 Singapore Airlines. All Rights Reserved. Singapore Co. Reg. No. 197200078R</p>
            <p className="text-[10px] text-neutral-500 mt-1">
              Photos & service trademarks property of Singapore Airlines.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
