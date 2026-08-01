import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-farm.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Learn about Emperor Exports & Imports, a Vijayawada-based agri-export house led by proprietor G. Ganesh.",
      },
      { property: "og:title", content: "About Emperor Exports & Imports" },
      {
        property: "og:description",
        content: "A trusted Indian agri-export house rooted in Andhra Pradesh.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="animate-fade-in-up">
      <PageHero
        eyebrow="About Us"
        title="Rooted in India. Trusted worldwide."
        subtitle="Emperor Exports & Imports is a family-run agri-export house delivering premium Indian produce to buyers across the globe."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-14 items-center">
        <img
          src={aboutImg}
          alt="Indian farm"
          className="rounded-2xl shadow-soft"
          loading="lazy"
          width={1200}
          height={900}
        />
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
            Our Story
          </div>
          <h2 className="mt-2 font-display text-4xl text-ink">
            From soil to shore, we handle it all.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Emperor Exports & Imports was founded by G. Ganesh in Vijayawada, Andhra Pradesh — a
            region famed for its fertile deltas, spice belts and coastal ports. What began as
            direct-farm sourcing has grown into a complete export operation covering procurement,
            processing, packing, documentation and shipping.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Our strength lies in transparent partnerships: with farmers who trust our fair pricing,
            and with buyers who trust our consistency. Every container we ship carries decades of
            regional expertise.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Registered under IEC AXQPG0694M",
              "GSTIN 37AXQPG0694M1ZS",
              "Vijayawada-based operations",
              "Proprietor: G. Ganesh",
            ].map((l) => (
              <li key={l} className="flex items-center gap-2 text-ink">
                <CheckCircle2 size={16} className="text-gold-deep" /> {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-10 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              t: "Mission",
              d: "Deliver authentic Indian agricultural produce to global buyers with uncompromising quality, ethics, and reliability.",
            },
            {
              icon: Eye,
              t: "Vision",
              d: "To be the most trusted export partner for Indian spices and fresh produce across five continents.",
            },
            {
              icon: Heart,
              t: "Values",
              d: "Integrity in every transaction, respect for our farmers, and dedication to our buyers' success.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-hero text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
