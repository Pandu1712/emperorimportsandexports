import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { useState, useEffect } from "react";
import {
  Building2,
  Castle,
  Compass,
  Trees,
  Building,
  Mountain,
  ArrowRight,
} from "lucide-react";

// Import custom generated regional illustrations
import middleEastImg from "@/assets/middle-east-market.png";
import southeastAsiaImg from "@/assets/southeast-asia-market.png";
import europeImg from "@/assets/europe-market.png";
import africaImg from "@/assets/africa-market.png";
import americasImg from "@/assets/americas-market.png";
import asiaPacificImg from "@/assets/asia-pacific-market.png";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Markets We Serve — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Emperor Exports ships to importers across the Middle East, Southeast Asia, Europe, Africa and beyond.",
      },
      {
        name: "keywords",
        content: "agricultural markets, export regions india, spice buyers middle east, coco import europe, food importers southeast asia, global agricultural network"
      },
      { property: "og:title", content: "Markets We Serve" },
      { property: "og:description", content: "Global reach across 25+ countries." },
      { property: "og:url", content: "https://emperorexports.com/markets" },
    ],
  }),
  component: Markets,
});

const regions = [
  {
    name: "Middle East",
    icon: Building2,
    image: middleEastImg,
    countries: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain"],
    theme: {
      iconBg: "bg-[#7c5625]",
      iconColor: "text-white",
      labelColor: "text-[#7c5625]",
      dividerGradient: "from-[#b48a52] to-transparent",
      starColor: "text-[#b48a52]",
      pillClass: "border-amber-500/15 bg-amber-500/[0.02] text-amber-900/80 hover:bg-amber-500/[0.06] hover:border-amber-500/30 hover:text-amber-950",
      btnGradient: "from-[#b48a52] to-[#7c5625] shadow-[#b48a52]/20",
    },
  },
  {
    name: "Southeast Asia",
    icon: Castle,
    image: southeastAsiaImg,
    countries: ["Malaysia", "Singapore", "Indonesia", "Vietnam", "Thailand", "Philippines"],
    theme: {
      iconBg: "bg-[#1d4c38]",
      iconColor: "text-white",
      labelColor: "text-[#1d4c38]",
      dividerGradient: "from-[#418563] to-transparent",
      starColor: "text-[#418563]",
      pillClass: "border-emerald-500/15 bg-emerald-500/[0.02] text-emerald-900/80 hover:bg-emerald-500/[0.06] hover:border-emerald-500/30 hover:text-emerald-950",
      btnGradient: "from-[#418563] to-[#1d4c38] shadow-[#418563]/20",
    },
  },
  {
    name: "Europe",
    icon: Compass,
    image: europeImg,
    countries: ["United Kingdom", "Germany", "Netherlands", "France", "Italy", "Spain"],
    theme: {
      iconBg: "bg-[#1a365d]",
      iconColor: "text-white",
      labelColor: "text-[#1a365d]",
      dividerGradient: "from-[#426a8c] to-transparent",
      starColor: "text-[#426a8c]",
      pillClass: "border-blue-500/15 bg-blue-500/[0.02] text-blue-900/80 hover:bg-blue-500/[0.06] hover:border-blue-500/30 hover:text-blue-950",
      btnGradient: "from-[#426a8c] to-[#1a365d] shadow-[#426a8c]/20",
    },
  },
  {
    name: "Africa",
    icon: Trees,
    image: africaImg,
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt", "Tanzania", "Ghana"],
    theme: {
      iconBg: "bg-[#854d0e]",
      iconColor: "text-white",
      labelColor: "text-[#854d0e]",
      dividerGradient: "from-[#ca8a04] to-transparent",
      starColor: "text-[#ca8a04]",
      pillClass: "border-amber-600/15 bg-amber-600/[0.02] text-amber-950/80 hover:bg-amber-600/[0.06] hover:border-amber-600/30 hover:text-amber-950",
      btnGradient: "from-[#ca8a04] to-[#854d0e] shadow-[#ca8a04]/20",
    },
  },
  {
    name: "Americas",
    icon: Building,
    image: americasImg,
    countries: ["USA", "Canada", "Brazil"],
    theme: {
      iconBg: "bg-[#581c87]",
      iconColor: "text-white",
      labelColor: "text-[#581c87]",
      dividerGradient: "from-[#a855f7] to-transparent",
      starColor: "text-[#a855f7]",
      pillClass: "border-purple-500/15 bg-purple-500/[0.02] text-purple-900/80 hover:bg-purple-500/[0.06] hover:border-purple-500/30 hover:text-purple-950",
      btnGradient: "from-[#a855f7] to-[#581c87] shadow-[#a855f7]/20",
    },
  },
  {
    name: "Asia-Pacific",
    icon: Mountain,
    image: asiaPacificImg,
    countries: ["Australia", "New Zealand", "Japan", "South Korea"],
    theme: {
      iconBg: "bg-[#115e59]",
      iconColor: "text-white",
      labelColor: "text-[#115e59]",
      dividerGradient: "from-[#0d9488] to-transparent",
      starColor: "text-[#0d9488]",
      pillClass: "border-teal-500/15 bg-teal-500/[0.02] text-teal-900/80 hover:bg-teal-500/[0.06] hover:border-teal-500/30 hover:text-teal-950",
      btnGradient: "from-[#0d9488] to-[#115e59] shadow-[#0d9488]/20",
    },
  },
];

function Markets() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger staggered card entry animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-fade-in-up">
      <PageHero
        eyebrow="Global Reach"
        title="Serving 25+ markets worldwide."
        subtitle="From regional distributors to national supermarket chains, our containers reach ports across six major global regions."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {regions.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.name}
                className={`group relative overflow-hidden bg-[#fafafa]/80 backdrop-blur-sm rounded-[2.5rem] border border-black/[0.03] shadow-[0_15px_45px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col justify-between min-h-[380px] ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Background Illustration Bleeding off right-bottom */}
                <div className="absolute -right-8 -bottom-8 w-[58%] h-[72%] pointer-events-none select-none opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1">
                  <img
                    src={r.image}
                    alt={`${r.name} illustration`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                  <div>
                    {/* Header: Rounded Icon and Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`h-11 w-11 rounded-2xl ${r.theme.iconBg} ${r.theme.iconColor} flex items-center justify-center shadow-sm`}
                      >
                        <Icon size={20} />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${r.theme.labelColor}`}>
                        {r.name}
                      </span>
                    </div>

                    {/* Regional Title */}
                    <h3 className="font-display text-3xl font-extrabold text-ink leading-tight">
                      {r.name}
                    </h3>

                    {/* Divider Line with Diamond Node */}
                    <div className="flex items-center gap-1.5 mt-2.5 mb-5">
                      <div className={`h-[1.5px] w-12 bg-gradient-to-r ${r.theme.dividerGradient}`} />
                      <span className={`${r.theme.starColor} text-[8px]`}>✦</span>
                      <div className={`h-[1px] w-4 bg-gradient-to-r ${r.theme.dividerGradient} opacity-50`} />
                    </div>

                    {/* Pills (smaller padding & text to fit perfectly without overlap) */}
                    <div className="flex flex-wrap gap-2 max-w-[62%]">
                      {r.countries.map((c) => (
                        <span
                          key={c}
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-300 ${r.theme.pillClass}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-8 flex justify-end">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${r.theme.btnGradient} transition-all duration-300 shadow-md group-hover:scale-110`}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
