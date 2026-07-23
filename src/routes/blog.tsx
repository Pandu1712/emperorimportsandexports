import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";
import { Calendar, ArrowRight } from "lucide-react";
import turmeric from "@/assets/turmeric.jpg";
import rice from "@/assets/rice.jpg";
import chillies from "@/assets/chillies.jpg";
import coconuts from "@/assets/coconuts.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Emperor Exports & Imports" },
      { name: "description", content: "Insights on Indian agri-exports, market trends, seasonality and buyer guides." },
      { property: "og:title", content: "Emperor Exports Blog" },
      { property: "og:description", content: "Perspectives on Indian agricultural trade." },
    ],
  }),
  component: Blog,
});

const posts = [
  { img: turmeric, t: "Why Curcumin Content Matters When Buying Turmeric", d: "A quick guide to grading turmeric powder for food, nutraceutical and cosmetic use.", date: "Feb 2026" },
  { img: rice, t: "Non-Basmati Rice: Choosing the Right Variety for Your Market", d: "IR64 vs Sona Masuri vs Ponni — how buyer preferences shape the shipment.", date: "Jan 2026" },
  { img: chillies, t: "Guntur Green Chillies: Handling from Farm to Reefer", d: "The cold chain that keeps our chillies vibrant across continents.", date: "Dec 2025" },
  { img: coconuts, t: "Fresh vs Semi-Husked Coconuts: What Should You Order?", d: "Shelf life, kernel yield, and freight economics compared.", date: "Nov 2025" },
];

function Blog() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Perspectives from the export floor." subtitle="Notes on sourcing, seasonality, quality grading and shipping." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.t} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold transition-all">
              <div className="aspect-[16/9] overflow-hidden bg-ink">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1024} height={576} />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-deep font-semibold">
                  <Calendar size={12} /> {p.date}
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
