import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as ArrowRight, F as Calendar } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./about--iXDearc.mjs";
import { i as turmeric_default, n as coconuts_default, r as rice_default, t as chillies_default } from "./coconuts-D9RXxadM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-D89dAdkt.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		img: turmeric_default,
		t: "Why Curcumin Content Matters When Buying Turmeric",
		d: "A quick guide to grading turmeric powder for food, nutraceutical and cosmetic use.",
		date: "Feb 2026"
	},
	{
		img: rice_default,
		t: "Non-Basmati Rice: Choosing the Right Variety for Your Market",
		d: "IR64 vs Sona Masuri vs Ponni — how buyer preferences shape the shipment.",
		date: "Jan 2026"
	},
	{
		img: chillies_default,
		t: "Guntur Green Chillies: Handling from Farm to Reefer",
		d: "The cold chain that keeps our chillies vibrant across continents.",
		date: "Dec 2025"
	},
	{
		img: coconuts_default,
		t: "Fresh vs Semi-Husked Coconuts: What Should You Order?",
		d: "Shelf life, kernel yield, and freight economics compared.",
		date: "Nov 2025"
	}
];
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Insights",
			title: "Perspectives from the export floor.",
			subtitle: "Notes on sourcing, seasonality, quality grading and shipping."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/9] overflow-hidden bg-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.t,
							className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500",
							loading: "lazy",
							width: 1024,
							height: 576
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs uppercase tracking-widest text-gold-deep font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
									" ",
									p.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl text-ink",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: p.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep",
								children: [
									"Read more",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 14,
										className: "group-hover:translate-x-1 transition"
									})
								]
							})
						]
					})]
				}, p.t))
			})
		})]
	});
}
//#endregion
export { Blog as component };
