import React from 'react';
import { ArrowRight, Sparkles, Shield, Wifi, Utensils, Tv, Heart, Award } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/airlineData';
import { SpecialOffer } from '../types/airline';

interface SiaExperienceSectionProps {
  onSelectOffer: (offer: SpecialOffer) => void;
  onOpenKrisFlyer: () => void;
}

export const SiaExperienceSection: React.FC<SiaExperienceSectionProps> = ({
  onSelectOffer,
  onOpenKrisFlyer,
}) => {
  return (
    <div className="bg-[#f6f7fb] py-16 px-4 sm:px-8 space-y-20">
      {/* Featured Fares Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ba9653] block mb-1">
              Curated Escapes
            </span>
            <h2 className="font-sia-serif text-2xl sm:text-4xl font-bold text-[#00205b]">
              Featured Fares from Singapore
            </h2>
            <p className="font-sia-sans text-xs sm:text-sm text-neutral-600 mt-1">
              Book special promotional fares to popular destinations worldwide.
            </p>
          </div>
          <a
            href="#all-deals"
            onClick={(e) => { e.preventDefault(); alert('Showing all 50+ global route offers from Singapore Changi.'); }}
            className="text-xs font-bold text-[#00205b] hover:text-[#ba9653] flex items-center gap-1 transition"
          >
            <span>View all deals & offers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Fares Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              onClick={() => onSelectOffer(offer)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200/80 overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-neutral-900">
                  <img
                    src={offer.image}
                    alt={offer.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#00205b]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {offer.cabin}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {offer.airportCode}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-sia-sans font-bold text-lg text-[#00205b] leading-snug">
                    {offer.city}
                  </h3>
                  <p className="text-xs text-neutral-500">{offer.country}</p>

                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-500 block">Fares starting from</span>
                    <span className="text-2xl font-extrabold text-[#00205b]">
                      SGD {offer.fromPriceSGD}
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">
                      Return · All-inclusive
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  className="w-full py-2 bg-neutral-100 group-hover:bg-[#00205b] group-hover:text-white text-[#00205b] font-bold text-xs rounded-xl transition"
                >
                  Book Flight
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Singapore Airlines Difference Showcase */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#ba9653] block mb-1">
            Uncompromising Excellence
          </span>
          <h2 className="font-sia-serif text-2xl sm:text-4xl font-bold text-[#00205b]">
            The Singapore Airlines Experience
          </h2>
          <p className="font-sia-sans text-xs sm:text-sm text-neutral-600 mt-2">
            Every touchpoint is crafted with obsessive attention to detail and authentic Asian hospitality.
          </p>
        </div>

        {/* 3 Large Showcase Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1: Iconic Cabin Crew */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/sia_cabin_crew_1791786418958.jpg"
                  alt="Singapore Airlines Cabin Crew in batik kebaya"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ba9653] mb-1">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>World&apos;s Best Cabin Crew</span>
                </div>
                <h3 className="font-sia-serif font-bold text-xl text-[#00205b] mb-2">
                  Gracious Hospitality in Sarong Kebaya
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Recognized worldwide as a symbol of intuitive service, our cabin crew are trained to anticipate your every travel requirement with warmth and discreet grace.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Suites & Business Class Dining */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/sia_business_cabin_1791786382349.jpg"
                  alt="Singapore Airlines First and Business Class Dining"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ba9653] mb-1">
                  <Utensils className="w-4 h-4" />
                  <span>Book the Cook Culinary Excellence</span>
                </div>
                <h3 className="font-sia-serif font-bold text-xl text-[#00205b] mb-2">
                  Fine Dining at 35,000 Feet
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Pre-order your main course from an extensive selection created by our International Culinary Panel of renowned master chefs, paired with vintage Grand Cru champagnes.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Singapore Changi Airport Jewel */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/sia_changi_jewel_1791786407134.jpg"
                  alt="Changi Airport Jewel Rain Vortex"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ba9653] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>World&apos;s #1 Hub Experience</span>
                </div>
                <h3 className="font-sia-serif font-bold text-xl text-[#00205b] mb-2">
                  Changi Airport & Jewel Oasis
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Seamless layovers through Singapore with the iconic indoor rain vortex waterfall, lush butterfly garden, swimming pool, and luxury SilverKris flagship lounges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pills Strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <Wifi className="w-6 h-6 text-[#00205b] shrink-0" />
            <div>
              <p className="font-bold text-xs text-[#00205b]">Unlimited Free Wi-Fi</p>
              <p className="text-[11px] text-neutral-500">For all KrisFlyer members in all cabins</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <Tv className="w-6 h-6 text-[#ba9653] shrink-0" />
            <div>
              <p className="font-bold text-xs text-[#00205b]">KrisWorld Entertainment</p>
              <p className="text-[11px] text-neutral-500">1,900+ movies, music, games & TV series</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#00205b] shrink-0" />
            <div>
              <p className="font-bold text-xs text-[#00205b]">Young & Modern Fleet</p>
              <p className="text-[11px] text-neutral-500">Airbus A350, Boeing 787-10 & 777-300ER</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center gap-3">
            <Award className="w-6 h-6 text-[#ba9653] shrink-0" />
            <div>
              <p className="font-bold text-xs text-[#00205b]">Star Alliance Network</p>
              <p className="text-[11px] text-neutral-500">Seamless connectivity to 1,200+ airports</p>
            </div>
          </div>
        </div>
      </section>

      {/* KrisFlyer Callout Banner */}
      <section className="max-w-7xl mx-auto bg-gradient-to-r from-[#00205b] via-[#0b1b3d] to-[#00205b] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ba9653]/30 border border-[#ba9653]/50 rounded-full text-xs font-bold text-[#d4af37]">
            <Award className="w-3.5 h-3.5" />
            <span>KrisFlyer Frequent Flyer Programme</span>
          </div>
          <h2 className="font-sia-serif text-3xl sm:text-4xl font-bold">
            Travel more, experience more rewards.
          </h2>
          <p className="font-sia-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Earn KrisFlyer miles whenever you fly with Singapore Airlines, Scoot, and Star Alliance carriers. Enjoy complimentary inflight Wi-Fi, priority boarding, and redeem miles for flights and shopping.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenKrisFlyer}
              className="px-6 py-3 bg-[#ba9653] hover:bg-[#a6823f] text-[#00205b] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition"
            >
              Join KrisFlyer for Free
            </button>
            <button
              onClick={onOpenKrisFlyer}
              className="px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-bold text-xs sm:text-sm rounded-xl transition"
            >
              Member Sign-in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
