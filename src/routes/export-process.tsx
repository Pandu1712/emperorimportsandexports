import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { Sprout, PackageCheck, FileText, Ship, Truck, Handshake } from "lucide-react";

export const Route = createFileRoute("/export-process")({
  head: () => ({
    meta: [
      { title: "Export Process — Emperor Exports & Imports" },
      { name: "description", content: "Step-by-step export process from farm sourcing to doorstep delivery of Indian agricultural produce." },
      { property: "og:title", content: "Our Export Process" },
      { property: "og:description", content: "Farm to port to your warehouse — how we ship." },
    ],
  }),
  component: ExportProcess,
});

const steps = [
  { icon: Sprout, t: "Sourcing", d: "Direct procurement from trusted farmers and cooperatives across Andhra Pradesh, Tamil Nadu and Telangana." },
  { icon: PackageCheck, t: "Quality Check", d: "Multi-stage inspection — visual grading, moisture, sortex cleaning, and lab tests where applicable." },
  { icon: FileText, t: "Documentation", d: "Invoice, packing list, phytosanitary certificate, certificate of origin, and buyer-specific paperwork." },
  { icon: Truck, t: "Packing & Loading", d: "Export-grade packing, palletisation, and stuffing at ICD or CFS with photographic proof." },
  { icon: Ship, t: "Shipping", d: "FOB / CIF / DDP terms via reliable freight forwarders across major shipping lines." },
  { icon: Handshake, t: "Delivery & Support", d: "Real-time tracking, port clearance assistance, and after-shipment support until you sign off." },
];

function ExportProcess() {
  return (
    <>
      <PageHero eyebrow="How We Work" title="Farm to shore, six clear steps." subtitle="Transparent, documented, and buyer-first — from the moment you enquire to the moment your container clears customs." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ol className="relative border-l-2 border-gold/30 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-2 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.t} className="mb-10 md:mb-0 pl-8 md:pl-0 relative">
              <div className="md:hidden absolute -left-[13px] top-1 h-6 w-6 rounded-full bg-gradient-gold flex items-center justify-center text-xs font-bold text-ink">
                {i + 1}
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 md:p-8 h-full">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
                    <s.icon size={22} />
                  </div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold-deep font-semibold">Step {i + 1}</div>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
