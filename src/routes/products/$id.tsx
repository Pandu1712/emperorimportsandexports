import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) {
      throw notFound();
    }
    return product;
  },
  head: ({ loaderData }) => {
    const name = loaderData?.name || "Product Details";
    const desc = loaderData?.description || "Explore product specifications, origin and packaging details.";
    const origin = loaderData?.origin || "India";
    return {
      meta: [
        { title: `${name} — Emperor Exports & Imports` },
        {
          name: "description",
          content: desc,
        },
        {
          name: "keywords",
          content: `${name}, premium ${name}, buy ${name} wholesale, dynamic agri export, indian ${name} exporter, ${origin} agricultural products, specifications of ${name}`
        },
        { property: "og:title", content: `${name} — Emperor Exports & Imports` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `https://www.emperorexportsandimports.com/products/${loaderData?.id || ""}` },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const otherProducts = products.filter((p) => p.id !== product.id);
  const [activeImage, setActiveImage] = useState(product.image);

  useEffect(() => {
    setActiveImage(product.image);
  }, [product.image]);

  const waLink = `https://wa.me/919010444415?text=${encodeURIComponent(
    `Hello Emperor Exports, I'd like a quote for ${product.name}.`
  )}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.emperorexportsandimports.com${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Emperor Exports & Imports"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Contact for quote",
      "availability": "https://schema.org/InStock",
      "url": `https://www.emperorexportsandimports.com/products/${product.id}`
    },
    "additionalProperty": product.specs.map(s => ({
      "@type": "PropertyValue",
      "name": s.label,
      "value": s.value
    })),
    "countryOfOrigin": {
      "@type": "Country",
      "name": product.origin
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10 animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:opacity-85 transition mb-4 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Products</span>
      </Link>

      {/* Product Detail Card */}
      <div className="bg-white rounded-3xl border border-border/80 shadow-[0_15px_50px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Product Image Column */}
          <div className="bg-ink flex flex-col justify-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/40 min-h-[380px] lg:min-h-[600px]">
            {/* Active Image Container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md bg-stone-100 flex-1 min-h-[280px] lg:min-h-[400px]">
              <img
                src={activeImage}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                loading="eager"
                key={activeImage}
              />
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {product.gallery.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative h-20 w-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === imgUrl
                        ? "border-[#b45309] shadow-md scale-105"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} gallery image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Column */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Premium Badge */}
              <span className="inline-flex items-center rounded-full bg-[#fdf8f2] border border-[#f5e3d1] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b45309]">
                Premium Export Grade
              </span>

              {/* Title & Tagline */}
              <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground italic font-medium">
                {product.tagline}
              </p>

              {/* Divider Line with Diamond Node */}
              <div className="flex items-center gap-1.5 mt-4 mb-6">
                <div className="h-[1px] w-20 bg-[#b45309]/30" />
                <span className="text-[#b45309]/70 text-[10px]">✦</span>
                <div className="h-[1px] w-8 bg-[#b45309]/10" />
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-foreground/80">
                {product.description}
              </p>

              {/* Specifications Section */}
              <h2 className="mt-8 font-display text-2xl font-bold text-ink">
                Specifications
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-[#fafafa]/50 p-4 shadow-sm"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {s.label}
                    </div>
                    <div className="mt-1 text-base font-bold text-ink">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Extra Details */}
              <dl className="mt-8 border-t border-border/80 pt-6 space-y-3.5 text-sm">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink min-w-28 uppercase tracking-wider text-[11px] text-[#b45309]">
                    Packaging
                  </dt>
                  <dd className="text-foreground/85 mt-1 sm:mt-0 flex-1 leading-relaxed">
                    {product.packaging}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink min-w-28 uppercase tracking-wider text-[11px] text-[#b45309]">
                    Origin
                  </dt>
                  <dd className="text-foreground/85 mt-1 sm:mt-0 flex-1 leading-relaxed">
                    {product.origin}
                  </dd>
                </div>
              </dl>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 border-t border-border/80 pt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-ink shadow-gold hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
              >
                <MessageCircle size={18} />
                <span>Request Quote via WhatsApp</span>
              </a>
              <a
                href="mailto:info@emperorexports.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-8 py-4 text-sm font-bold text-ink hover:bg-ink hover:text-white transition w-full sm:w-auto text-center"
              >
                <Mail size={18} />
                <span>Email Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="mt-10 border-t border-border/80 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 bg-[#b45309]/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b45309]/80">
              Discover More
            </span>
            <div className="h-[1px] w-6 bg-[#b45309]/30" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink leading-tight">
            Other Premium Products
          </h2>
          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
            Browse our other premium-grade export offerings from local Indian farms.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
