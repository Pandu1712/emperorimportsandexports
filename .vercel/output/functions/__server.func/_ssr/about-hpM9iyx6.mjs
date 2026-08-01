import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleCheck, D as Eye, s as Target, x as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-hpM9iyx6.js
var import_jsx_runtime = require_jsx_runtime();
var about_farm_default = "/assets/about-farm-BPTBIXND.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "About Us",
				title: "Rooted in India. Trusted worldwide.",
				subtitle: "Emperor Exports & Imports is a family-run agri-export house delivering premium Indian produce to buyers across the globe."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_farm_default,
					alt: "Indian farm",
					className: "rounded-2xl shadow-soft",
					loading: "lazy",
					width: 1200,
					height: 900
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl text-ink",
						children: "From soil to shore, we handle it all."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-foreground/70 leading-relaxed",
						children: "Emperor Exports & Imports was founded by G. Ganesh in Vijayawada, Andhra Pradesh — a region famed for its fertile deltas, spice belts and coastal ports. What began as direct-farm sourcing has grown into a complete export operation covering procurement, processing, packing, documentation and shipping."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/70 leading-relaxed",
						children: "Our strength lies in transparent partnerships: with farmers who trust our fair pricing, and with buyers who trust our consistency. Every container we ship carries decades of regional expertise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2 text-sm",
						children: [
							"Registered under IEC AXQPG0694M",
							"GSTIN 37AXQPG0694M1ZS",
							"Vijayawada-based operations",
							"Proprietor: G. Ganesh"
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									size: 16,
									className: "text-gold-deep"
								}),
								" ",
								l
							]
						}, l))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-10 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6",
					children: [
						{
							icon: Target,
							t: "Mission",
							d: "Deliver authentic Indian agricultural produce to global buyers with uncompromising quality, ethics, and reliability."
						},
						{
							icon: Eye,
							t: "Vision",
							d: "To be the most trusted export partner for Indian spices and fresh produce across five continents."
						},
						{
							icon: Heart,
							t: "Values",
							d: "Integrity in every transaction, respect for our farmers, and dedication to our buyers' success."
						}
					].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl text-ink",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: d
							})
						]
					}, t))
				})
			})
		]
	});
}
function PageHero({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-5xl md:text-6xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl mx-auto text-white/70",
					children: subtitle
				})
			]
		})
	});
}
//#endregion
export { PageHero, About as component };
