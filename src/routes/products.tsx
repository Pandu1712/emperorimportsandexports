import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, type Product } from "@/data/products";
import { ProductModal } from "@/components/ProductModal";
import { PageHero } from "./about";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Explore our export catalogue: turmeric powder, coconuts, non-basmati rice, bananas, elephant foot yam and green chillies.",
      },
      { property: "og:title", content: "Our Products — Emperor Exports & Imports" },
      {
        property: "og:description",
        content: "Premium Indian spices, fresh produce and staples for global buyers.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <div className="animate-fade-in-up">
      <PageHero
        eyebrow="Our Range"
        title="Products crafted for global markets"
        subtitle="Click any product to see specifications, packaging and origin details."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </section>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
