import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Globe2, Leaf, ShieldCheck, Ship, Truck } from "lucide-react";
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
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          src={heroImg}
          alt="Global export"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Global Agri Export House
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              From Indian Soil <br /> to the{" "}
              <span className="text-gradient-gold">World's Table.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Emperor Exports & Imports sources, processes and ships premium Indian spices, fruits
              and staples to importers, distributors and food manufacturers worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-ink/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              ["6+", "Product lines"],
              ["25+", "Export markets"],
              ["100%", "Quality assured"],
              ["24/7", "Client support"],
            ].map(([k, v]) => (
              <div key={v} className="px-4 py-6 text-center">
                <div className="font-display text-3xl text-gold">{k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{v}</div>
              </div>
            ))}
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
                { icon: Globe2, t: "Worldwide reach" },
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
              icon: Globe2,
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
