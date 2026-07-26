import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) {
      throw notFound();
    }
    return product;
  },
  head: ({ data }) => ({
    meta: [
      { title: `${data?.name || "Product Details"} — Emperor Exports & Imports` },
      {
        name: "description",
        content: data?.description || "Explore product specifications, origin and packaging details.",
      },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();

  const waLink = `https://wa.me/919010444415?text=${encodeURIComponent(
    `Hello Emperor Exports, I'd like a quote for ${product.name}.`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in-up">
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:opacity-85 transition mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Products</span>
      </Link>

      {/* Product Detail Card */}
      <div className="bg-white rounded-3xl border border-border/80 shadow-[0_15px_50px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Product Image Column */}
          <div className="bg-ink aspect-square lg:aspect-auto min-h-[300px] lg:min-h-[600px] relative">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
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
    </div>
  );
}
