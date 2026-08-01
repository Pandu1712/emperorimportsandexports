import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./about";
import {
  Calendar,
  ArrowRight,
  LayoutGrid,
  Leaf,
  Wheat,
  Globe,
  FileText,
  Lightbulb,
} from "lucide-react";
import turmeric from "@/assets/turmeric.png";
import rice from "@/assets/rice.png";
import heroImg from "@/assets/hero-export.jpg";
import whyEmperorGlobe from "@/assets/why-emperor-globe.png";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Emperor Exports & Imports" },
      {
        name: "description",
        content: "Insights on Indian agri-exports, market trends, seasonality and buyer guides.",
      },
      { property: "og:title", content: "Emperor Exports Blog" },
      { property: "og:description", content: "Perspectives on Indian agricultural trade." },
    ],
  }),
  component: Blog,
});

const categories = [
  { id: "all", label: "All Posts", icon: LayoutGrid },
  { id: "spices", label: "Spices", icon: Leaf },
  { id: "grains", label: "Rice & Grains", icon: Wheat },
  { id: "markets", label: "Markets", icon: Globe },
  { id: "guide", label: "Export Guide", icon: FileText },
  { id: "insights", label: "Industry Insights", icon: Lightbulb },
] as const;

const posts = [
  {
    id: "curcumin-turmeric",
    category: "spices",
    img: turmeric,
    t: "Why Curcumin Content Matters When Buying Turmeric",
    d: "A quick guide to grading turmeric powder for food, nutraceutical and cosmetic use.",
    date: "15 FEB 2026",
    categoryLabel: "Spices",
    icon: Leaf,
  },
  {
    id: "rice-variety",
    category: "grains",
    img: rice,
    t: "Non-Basmati Rice: Choosing the Right Variety for Your Market",
    d: "IR64 vs Sona Masuri vs Ponni — how buyer preferences shape the shipment.",
    date: "10 JAN 2026",
    categoryLabel: "Rice & Grains",
    icon: Wheat,
  },
  {
    id: "export-incoterms",
    category: "guide",
    img: heroImg,
    t: "FOB vs CIF vs DDP: Which Incoterms Fit Your Order?",
    d: "Understanding shipping responsibilities, risk transfers, and cost breakdowns for global buyers.",
    date: "28 DEC 2025",
    categoryLabel: "Export Guide",
    icon: FileText,
  },
  {
    id: "global-trends-2026",
    category: "insights",
    img: whyEmperorGlobe,
    t: "Global Export Trends in 2026: Opportunities & Outlook",
    d: "Analyzing container freight adjustments, supply chain realignments, and high-growth markets.",
    date: "05 DEC 2025",
    categoryLabel: "Industry Insights",
    icon: Lightbulb,
  },
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPosts = posts.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <div className="animate-fade-in-up">
      {/* Hero Banner Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#fdfcf7] border border-[#f2e2d2] py-10 px-8 md:px-16 text-center shadow-[0_10px_35px_rgba(0,0,0,0.02)]">
          {/* Background Cargo Ship Silhouette (left side) */}
          <div className="absolute left-[3%] bottom-[5%] w-[25%] opacity-[0.08] pointer-events-none select-none hidden md:block">
            <svg viewBox="0 0 100 60" fill="none" stroke="#7c5625" strokeWidth="0.8" className="w-full h-full">
              <path d="M 5,45 L 95,45 L 88,52 L 12,52 Z" />
              <path d="M 15,45 L 15,20 L 35,20 L 35,45" />
              <path d="M 40,45 L 40,25 L 60,25 L 60,45" />
              <path d="M 65,45 L 65,15 L 80,15 L 80,45" />
              <path d="M 72,15 L 72,5 L 76,5 L 76,15" />
            </svg>
          </div>

          {/* Background Plant Leaves Line Art (right side) */}
          <div className="absolute right-[3%] top-[10%] w-[25%] opacity-[0.08] pointer-events-none select-none hidden md:block">
            <svg viewBox="0 0 100 100" fill="none" stroke="#7c5625" strokeWidth="0.8" className="w-full h-full">
              <path d="M 80,95 Q 60,60 50,20 Q 70,30 90,60" />
              <path d="M 50,20 Q 30,30 10,60 Q 40,60 50,20" />
              <path d="M 55,45 Q 75,40 85,15 Q 60,25 55,45" />
              <path d="M 45,45 Q 25,40 15,15 Q 40,25 45,45" />
            </svg>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Subtitle / Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-6 bg-[#b45309]/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b45309]/80">
                Knowledge That Connects
              </span>
              <div className="h-[1px] w-6 bg-[#b45309]/30" />
            </div>

            {/* Title */}
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
              Our <span className="text-[#b45309]">Blog</span> & Insights
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Expert insights, market updates, and best practices from the world of exports & imports.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="flex flex-wrap gap-2.5 items-center justify-start">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#b45309] border-[#b45309] text-white shadow-md shadow-[#b45309]/10 scale-105"
                    : "bg-white border-black/[0.05] text-[#7c5625] hover:bg-[#fdf8f2] hover:border-[#f5e3d1]"
                }`}
              >
                <Icon size={13} />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredPosts.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="group relative bg-[#fafafa]/60 backdrop-blur-sm rounded-[2.2rem] border border-black/[0.03] shadow-[0_12px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 min-h-[250px]"
              >
                {/* Left Side: Image container with absolute category pill */}
                <div className="w-full md:w-[42%] shrink-0 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-ink">
                  <img
                    src={p.img}
                    alt={p.t}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#b45309] shadow-sm">
                    <Icon size={12} />
                    <span>{p.categoryLabel}</span>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="p-6 md:py-6 md:pr-8 md:pl-0 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#b45309] font-bold">
                      <Calendar size={12} />
                      <span>{p.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2.5 font-display text-2xl font-bold text-ink leading-snug tracking-tight group-hover:text-[#b45309] transition-colors">
                      {p.t}
                    </h3>

                    {/* Divider Line with Diamond Node */}
                    <div className="flex items-center gap-1.5 mt-2.5 mb-3.5">
                      <div className="h-[1px] w-12 bg-[#b45309]/30" />
                      <span className="text-[#b45309]/70 text-[8px]">✦</span>
                      <div className="h-[1px] w-4 bg-[#b45309]/10" />
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.d}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#b45309] group-hover:gap-2.5 transition-all">
                    <span>Read more</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>



      {/* Featured Products Section */}
      <section className="bg-[#fdfcf7] border-t border-border/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-6 bg-[#b45309]/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b45309]/80">
                Premium Sourcing
              </span>
              <div className="h-[1px] w-6 bg-[#b45309]/30" />
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Explore Our <span className="text-[#b45309]">Premium</span> Export Range
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Straight from fertile Indian farms, processed to meet global standards. Click any item to request a custom quote.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
