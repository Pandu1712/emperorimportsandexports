import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, type Product } from "@/data/products";
import { ProductModal } from "@/components/ProductModal";
import { PageHero } from "./about";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Emperor Exports & Imports" },
      { name: "description", content: "Explore our export catalogue: turmeric powder, coconuts, non-basmati rice, bananas, elephant foot yam and green chillies." },
      { property: "og:title", content: "Our Products — Emperor Exports & Imports" },
      { property: "og:description", content: "Premium Indian spices, fresh produce and staples for global buyers." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <>
      <PageHero eyebrow="Our Range" title="Products crafted for global markets" subtitle="Click any product to see specifications, packaging and origin details." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1024} height={768} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                  View details <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
