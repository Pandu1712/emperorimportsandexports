import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Emperor Exports & Imports" },
      { name: "description", content: "IEC, GSTIN, FSSAI, APEDA and phytosanitary certifications backing Emperor Exports & Imports." },
      { property: "og:title", content: "Certifications & Compliance" },
      { property: "og:description", content: "Recognised exporter with all statutory Indian export credentials." },
    ],
  }),
  component: Certifications,
});

const certs = [
  { t: "IEC Registration", d: "Importer Exporter Code AXQPG0694M issued by DGFT, Ministry of Commerce, Government of India." },
  { t: "GSTIN", d: "37AXQPG0694M1ZS — Andhra Pradesh state registration." },
  { t: "APEDA Registered", d: "Agricultural and Processed Food Products Export Development Authority membership for scheduled products." },
  { t: "FSSAI Compliant", d: "Food Safety and Standards Authority of India compliance for food-grade products." },
  { t: "Phytosanitary Certificate", d: "Issued per consignment by the Plant Quarantine authority — mandatory for fresh produce shipments." },
  { t: "Certificate of Origin", d: "Provided by APEDA or Chamber of Commerce as required by the destination country." },
];

function Certifications() {
  return (
    <>
      <PageHero eyebrow="Trust & Compliance" title="Every credential, every consignment." subtitle="We operate under all statutory certifications required for Indian agricultural exports." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c.t} className="rounded-2xl bg-card border border-border p-7 hover:border-gold transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
                <Award size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
