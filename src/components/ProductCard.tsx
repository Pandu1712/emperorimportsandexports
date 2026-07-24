import { type Product } from "@/data/products";
import { ArrowRight, Leaf, Palmtree, Wheat, Sprout, Flame } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

// Icon resolver based on product ID
function getProductIcon(id: string) {
  switch (id) {
    case "turmeric-powder":
      return Leaf;
    case "coconuts":
      return Palmtree;
    case "non-basmati-rice":
      return Wheat;
    case "banana":
      return Sprout;
    case "elephant-foot-yam":
      return Sprout;
    case "green-chillies":
      return Flame;
    default:
      return Leaf;
  }
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const Icon = getProductIcon(product.id);

  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-[2.5rem] overflow-hidden border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.02)] md:hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] md:hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[440px]"
    >
      {/* Top Half: Curved Image with Floating Icon */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink">
        <div
          className="w-full h-full overflow-hidden"
          style={{ clipPath: "ellipse(120% 95% at 50% 0%)" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>

        {/* Floating White Icon Badge */}
        <div className="absolute top-5 left-5 h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
          <Icon size={20} className="text-[#b45309]" />
        </div>
      </div>

      {/* Bottom Half: Content details */}
      <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Quality Pill */}
          <span className="inline-flex items-center rounded-full bg-[#fdf8f2] border border-[#f5e3d1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b45309]">
            Premium Quality
          </span>

          {/* Title */}
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink leading-snug">
            {product.name}
          </h3>

          {/* Divider Line with Diamond Node */}
          <div className="flex items-center gap-1.5 mt-2.5 mb-4">
            <div className="h-[1px] w-14 bg-[#b45309]/30" />
            <span className="text-[#b45309]/70 text-[8px]">✦</span>
            <div className="h-[1px] w-6 bg-[#b45309]/10" />
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
            {product.tagline}
          </p>
        </div>

        {/* Footer: View Details text & circle button */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm font-bold text-[#b45309] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            <span>View details</span>
            <ArrowRight size={14} />
          </span>

          <div className="h-10 w-10 rounded-full border border-gold-soft/60 bg-[#fdf8f2]/30 flex items-center justify-center text-[#b45309] shadow-sm group-hover:bg-[#b45309] group-hover:text-white transition-all duration-300">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </button>
  );
}
