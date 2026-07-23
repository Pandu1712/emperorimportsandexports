import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/emperor-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/export-process", label: "Export Process" },
  { to: "/certifications", label: "Certifications" },
  { to: "/markets", label: "Markets" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Emperor Exports & Imports" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-ink tracking-wide">EMPEROR</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Exports & Imports</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-foreground/80 hover:text-gold-deep transition-colors relative"
              activeProps={{ className: "text-gold-deep" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition"
        >
          Get a Quote
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
