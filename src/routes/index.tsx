import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Globe,
  Clock,
  ShieldCheck,
  Ship,
  Truck,
  Package,
  Users,
  Play,
  FileText,
  Leaf,
} from "lucide-react";
import heroImg from "@/assets/hero-export.jpg";
import { products, type Product } from "@/data/products";
import { ProductModal } from "@/components/ProductModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emperor Exports & Imports — Premium Indian Agri Exporter" },
      {
        name: "description",
        content:
          "Turmeric, coconuts, rice, bananas, yam and green chillies exported worldwide from Vijayawada, India.",
      },
      { property: "og:title", content: "Emperor Exports & Imports" },
      {
        property: "og:description",
        content: "Premium Indian agricultural exports for global buyers.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#021008] text-white">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Global export"
          className="absolute inset-0 h-full w-full object-cover opacity-35 object-right-bottom animate-fade-in"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021008] via-[#021008]/90 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-36 md:pt-32 md:pb-44">
          <div className="max-w-4xl">
            {/* Subtitle */}
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-medium">
              <span>—</span>
              <Globe size={14} className="text-gold" />
              <span>Global Agri Export House</span>
              <span>—</span>
            </span>

            {/* Heading */}
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-wide">
              From Indian Soil <br />
              to the <span className="text-gradient-gold">World's Table.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              Emperor Exports & Imports sources, processes and ships premium Indian spices, fruits
              and staples to importers, distributors and food manufacturers worldwide.
            </p>

            {/* 4 Feature Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-gold">
                  <Leaf size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Premium Quality</h4>
                  <p className="text-xs text-white/50 mt-1 leading-normal">
                    Carefully sourced & quality assured
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-gold">
                  <Globe size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Global Reach</h4>
                  <p className="text-xs text-white/50 mt-1 leading-normal">
                    Trusted by clients worldwide
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Timely Delivery</h4>
                  <p className="text-xs text-white/50 mt-1 leading-normal">
                    On-time shipments you can rely on
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-gold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Ethical Sourcing</h4>
                  <p className="text-xs text-white/50 mt-1 leading-normal">
                    Sustainable & responsible trade
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/products"
                className="inline-flex items-center gap-4 rounded-full bg-gradient-gold pl-7 pr-2 py-2 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition"
              >
                <span>Explore Our Products</span>
                <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-ink">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <button
                onClick={() => alert("Watch Our Story")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white hover:text-gold transition"
              >
                <Play size={20} className="fill-none text-white hover:text-gold" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner (Stats & Certs) */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[2px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white text-ink rounded-t-3xl shadow-lg border-t border-x border-border py-6 px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Stats - Col span 8 */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {/* Stat 1 */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gold">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">
                      +50
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Countries Exported
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gold">
                    <Package size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">
                      1000+
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Product Varieties
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gold">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">
                      500+
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Happy Global Clients
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gold">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-ink leading-tight">
                      100%
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Quality Commitment
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications - Col span 4 */}
              <div className="lg:col-span-4 flex flex-wrap items-center justify-center lg:justify-end gap-3 lg:border-l lg:border-border lg:pl-6">
                {/* FSSAI */}
                <svg
                  width="65"
                  height="26"
                  viewBox="0 0 100 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect
                    width="100"
                    height="40"
                    rx="8"
                    fill="#eafaf1"
                    stroke="#00b050"
                    strokeWidth="1.5"
                  />
                  <text
                    x="12"
                    y="27"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="22"
                    fontWeight="900"
                    fill="#00b050"
                    letterSpacing="-0.5"
                  >
                    fssai
                  </text>
                  <path
                    d="M70 12 C74 9, 82 9, 85 14 C88 19, 85 27, 78 30 C72 32, 70 30, 70 30 C70 30, 67 24, 70 12 Z"
                    fill="#00b050"
                    opacity="0.8"
                  />
                  <path d="M74 24 L82 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="85" cy="28" r="3" fill="#e2a400" />
                </svg>

                {/* APEDA */}
                <svg
                  width="65"
                  height="26"
                  viewBox="0 0 100 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect
                    width="100"
                    height="40"
                    rx="8"
                    fill="#f0faf4"
                    stroke="#056839"
                    strokeWidth="1.5"
                  />
                  <text
                    x="35"
                    y="25"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="14"
                    fontWeight="800"
                    fill="#056839"
                    letterSpacing="0.5"
                  >
                    APEDA
                  </text>
                  <g
                    transform="translate(10, 8)"
                    stroke="#056839"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 24 C12 14, 16 10, 16 6 M12 24 C12 14, 8 10, 8 6" />
                    <path d="M12 24 L12 4" strokeWidth="2" />
                    <circle cx="16" cy="9" r="1.5" fill="#056839" />
                    <circle cx="8" cy="9" r="1.5" fill="#056839" />
                    <circle cx="17" cy="13" r="1.5" fill="#056839" />
                    <circle cx="7" cy="13" r="1.5" fill="#056839" />
                  </g>
                </svg>

                {/* ISO */}
                <svg
                  width="65"
                  height="26"
                  viewBox="0 0 100 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect
                    width="100"
                    height="40"
                    rx="8"
                    fill="#f0f4fa"
                    stroke="#0f4c81"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="12"
                    stroke="#0f4c81"
                    strokeWidth="1"
                    strokeDasharray="2 1"
                    opacity="0.3"
                  />
                  <text
                    x="40"
                    y="20"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="13"
                    fontWeight="800"
                    fill="#0f4c81"
                  >
                    ISO
                  </text>
                  <text
                    x="40"
                    y="32"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    fill="#4b5563"
                  >
                    9001:2015
                  </text>
                </svg>

                {/* GMP */}
                <svg
                  width="65"
                  height="26"
                  viewBox="0 0 100 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect
                    width="100"
                    height="40"
                    rx="8"
                    fill="#eefbf7"
                    stroke="#0d9488"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="22"
                    cy="20"
                    r="11"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="1.5"
                    strokeDasharray="3 1"
                  />
                  <text
                    x="22"
                    y="23"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="10"
                    fontWeight="900"
                    fill="#0d9488"
                    textAnchor="middle"
                  >
                    GMP
                  </text>
                  <text
                    x="43"
                    y="19"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="10"
                    fontWeight="800"
                    fill="#0d9488"
                  >
                    GMP
                  </text>
                  <text
                    x="43"
                    y="29"
                    fontFamily="'Inter', system-ui, sans-serif"
                    fontSize="8"
                    fontWeight="600"
                    fill="#4b5563"
                  >
                    PRACTICE
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
              Who We Are
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              A trusted name in Indian agri-export.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Founded and led by proprietor G. Ganesh, Emperor Exports & Imports operates from
              Vijayawada, Andhra Pradesh — the heart of India's spice and produce belt. We build
              long-term relationships with growers, processors and shipping partners to deliver
              consistent quality at competitive terms.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Leaf, t: "Farm-direct sourcing" },
                { icon: ShieldCheck, t: "Compliant & certified" },
                { icon: Ship, t: "Reliable logistics" },
                { icon: Globe, t: "Worldwide reach" },
              ].map(({ icon: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-ink">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-ink">{t}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:gap-3 transition-all"
            >
              Learn about us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Export operations"
              className="relative rounded-2xl shadow-soft"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary/40 py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
                Our Range
              </div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl text-ink">Premium Products</h2>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-gold-deep inline-flex items-center gap-2"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                    View details{" "}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
            Why Emperor
          </div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-ink">
            Built on trust. Delivered with precision.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              t: "Grade-A Quality",
              d: "Every consignment passes multi-stage inspection before dispatch.",
            },
            {
              icon: Truck,
              t: "Door-to-Door",
              d: "FOB, CIF, and DDP terms with reliable freight partners.",
            },
            {
              icon: ShieldCheck,
              t: "Compliance-First",
              d: "GSTIN, IEC, FSSAI and APEDA registered exporter.",
            },
            {
              icon: Globe,
              t: "25+ Markets",
              d: "Trusted by importers across Middle East, Asia, EU and Africa.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card p-7 hover:border-gold transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl">Ready to import from India?</h2>
            <p className="mt-4 text-white/70">
              Send us your requirement — we'll get back with product samples, specs and pricing
              within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold"
            >
              Start an enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
