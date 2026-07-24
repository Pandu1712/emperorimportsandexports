import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Globe, E as Handshake, N as Clock, T as Headphones, V as ArrowRight, c as Sprout, k as FileText, l as Ship, m as Package, u as Shield, z as Award } from "../_libs/lucide-react.mjs";
import { t as hero_export_default } from "./hero-export-Dq4a_cfn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-process-CFlmCuah.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: Sprout,
		t: "Sourcing",
		d: "Direct procurement from trusted farmers and cooperatives across Andhra Pradesh, Tamil Nadu and Telangana."
	},
	{
		icon: Award,
		t: "Quality Check",
		d: "Multi-stage inspection — visual grading, moisture, sortex cleaning, and lab tests where applicable."
	},
	{
		icon: FileText,
		t: "Documentation",
		d: "Invoice, packing list, phytosanitary certificate, certificate of origin, and buyer-specific paperwork."
	},
	{
		icon: Package,
		t: "Packing & Loading",
		d: "Export-grade packing, palletisation, and stuffing at ICD or CFS with photographic proof."
	},
	{
		icon: Ship,
		t: "Shipping",
		d: "FOB / CIF / DDP terms via reliable freight forwarders across major shipping lines."
	},
	{
		icon: Handshake,
		t: "Delivery & Support",
		d: "Real-time tracking, port clearance assistance, and after-shipment support until you sign off."
	}
];
var pillars = [
	{
		icon: Shield,
		t: "Buyer-First Approach",
		d: "Your requirements, our priority."
	},
	{
		icon: Globe,
		t: "Global Standards",
		d: "Quality, compliance & reliability."
	},
	{
		icon: Clock,
		t: "On-Time Delivery",
		d: "Committed to your timelines."
	},
	{
		icon: Headphones,
		t: "End-to-End Support",
		d: "We're with you, every step."
	}
];
function ExportProcess() {
	const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setIsLoaded(true), 50);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-[#021d10] text-white py-24 px-8 md:px-16 text-center rounded-b-[2.5rem] z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_export_default,
						alt: "Port terminal logistics background",
						className: "absolute inset-0 h-full w-full object-cover opacity-85 pointer-events-none select-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#021d10]/20 via-[#021d10]/95 to-[#021d10]/25 pointer-events-none select-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-8 bg-[#b45309]/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-[0.3em] text-gold-soft",
										children: "How We Work"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-8 bg-[#b45309]/50" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight",
								children: ["Farm to shore, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#b45309]",
									children: "six clear steps."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed",
								children: "Transparent, documented, and buyer-first — from the moment you enquire to the moment your container clears customs."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none hidden lg:block z-0 px-8 py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-0 w-full h-full",
							viewBox: "0 0 100 100",
							preserveAspectRatio: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M 90,26 C 99,26 99,50 90,50 L 10,50 C 1,50 1,74 10,74",
								fill: "none",
								stroke: "#b45309",
								strokeWidth: "1",
								strokeDasharray: "4 4",
								className: "opacity-25"
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-14",
					children: steps.map((s, idx) => {
						const Icon = s.icon;
						const stepNum = `0${idx + 1}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group relative bg-white rounded-[2rem] border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 p-8 flex items-start gap-5 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`,
							style: { animationDelay: `${idx * 100}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-8 w-8 rounded-full border border-[#f5e3d1] bg-[#fdf8f2] flex items-center justify-center text-xs font-bold text-[#b45309] shrink-0",
									children: stepNum
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-11 w-11 rounded-xl bg-[#b45309] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-bold tracking-tight text-ink leading-snug",
										children: s.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: s.d
									})]
								}),
								idx !== 2 && idx !== 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden lg:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-[#b45309] text-white items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })
								})
							]
						}, s.t);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[2rem] border border-[#f2e2d2] bg-[#fdfaf5]/70 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
					children: pillars.map((p) => {
						const Icon = p.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-full bg-white border border-[#f5e3d1] flex items-center justify-center text-[#b45309] shadow-sm shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-base font-bold text-ink leading-snug",
								children: p.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: p.d
							})] })]
						}, p.t);
					})
				})
			})
		]
	});
}
//#endregion
export { ExportProcess as component };
