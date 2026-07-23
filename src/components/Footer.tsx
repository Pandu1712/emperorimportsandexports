import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/emperor-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Emperor" className="h-12 w-12" />
            <div>
              <div className="font-display text-xl font-bold text-white">EMPEROR</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Exports & Imports</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Sourcing India's finest agricultural produce and spices for markets across the globe.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/products", "Products"],
              ["/export-process", "Export Process"],
              ["/certifications", "Certifications"],
              ["/markets", "Markets"],
              ["/blog", "Blog"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /><span>D. No 59A-5-18/2, 3rd Cross Road, New P&T Colony - II, Vijayawada - 520008</span></li>
            <li className="flex gap-3"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><a href="tel:+919010444415">+91 90104 44415</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-gold shrink-0 mt-0.5" /><a href="mailto:info@emperorexports.in">info@emperorexports.in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Credentials</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>GSTIN: 37AXQPG0694M1ZS</li>
            <li>IEC: AXQPG0694M</li>
            <li>Proprietor: G. Ganesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Emperor Exports & Imports. All rights reserved.
      </div>
    </footer>
  );
}
