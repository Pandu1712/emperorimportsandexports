import { useEffect } from "react";
import { X } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const waLink = `https://wa.me/919010444415?text=${encodeURIComponent(
    `Hello Emperor Exports, I'd like a quote for ${product.name}.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-background rounded-2xl shadow-gold max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-secondary"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="bg-ink aspect-square md:aspect-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep font-semibold">
              Premium Export Grade
            </div>
            <h3 className="mt-2 font-display text-3xl font-bold text-ink">{product.name}</h3>
            <p className="mt-1 text-muted-foreground italic">{product.tagline}</p>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">{product.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-secondary/50 px-3 py-2">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                  <div className="text-sm font-semibold text-ink">{s.value}</div>
                </div>
              ))}
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="font-semibold text-ink min-w-24">Packaging:</dt>
                <dd className="text-foreground/80">{product.packaging}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-ink min-w-24">Origin:</dt>
                <dd className="text-foreground/80">{product.origin}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold hover:opacity-90"
              >
                Request Quote
              </a>
              <a
                href="mailto:info@emperorexports.in"
                className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition"
              >
                Email Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
