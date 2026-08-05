import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";
import { PageHero } from "../about";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Explore our export catalogue: turmeric powder, coconuts, non-basmati rice, bananas, elephant foot yam, green chillies, drumsticks, and premium jaggery powder.",
      },
      {
        name: "keywords",
        content: "turmeric powder, fresh coconuts, non-basmati rice, banana Cavendish, elephant foot yam, green chillies Guntur, moringa drumsticks, jaggery powder chemical free, indian spices wholesale"
      },
      { property: "og:title", content: "Our Products — Emperor Exports & Imports" },
      {
        property: "og:description",
        content: "Premium Indian spices, fresh produce and staples for global buyers.",
      },
      { property: "og:url", content: "https://emperorexports.com/products" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHero
        eyebrow="Our Range"
        title="Products crafted for global markets"
        subtitle="Click any product to see specifications, packaging and origin details."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
