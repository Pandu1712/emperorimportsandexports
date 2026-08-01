import { r as __toESM } from "../_runtime.mjs";
import { n as rice_default, r as turmeric_default, t as products } from "./products-DKyzeAFx.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as ArrowRight, E as Globe, F as Calendar, O as FileText, b as Leaf, n as Wheat, x as LayoutGrid, y as Lightbulb } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-8fQYLucH.mjs";
import { t as hero_export_default } from "./hero-export-Dq4a_cfn.mjs";
import { t as why_emperor_globe_default } from "./why-emperor-globe-Ccn7F-Fn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Czmm-mss.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "all",
		label: "All Posts",
		icon: LayoutGrid
	},
	{
		id: "spices",
		label: "Spices",
		icon: Leaf
	},
	{
		id: "grains",
		label: "Rice & Grains",
		icon: Wheat
	},
	{
		id: "markets",
		label: "Markets",
		icon: Globe
	},
	{
		id: "guide",
		label: "Export Guide",
		icon: FileText
	},
	{
		id: "insights",
		label: "Industry Insights",
		icon: Lightbulb
	}
];
var posts = [
	{
		id: "curcumin-turmeric",
		category: "spices",
		img: turmeric_default,
		t: "Why Curcumin Content Matters When Buying Turmeric",
		d: "A quick guide to grading turmeric powder for food, nutraceutical and cosmetic use.",
		date: "15 FEB 2026",
		categoryLabel: "Spices",
		icon: Leaf
	},
	{
		id: "rice-variety",
		category: "grains",
		img: rice_default,
		t: "Non-Basmati Rice: Choosing the Right Variety for Your Market",
		d: "IR64 vs Sona Masuri vs Ponni — how buyer preferences shape the shipment.",
		date: "10 JAN 2026",
		categoryLabel: "Rice & Grains",
		icon: Wheat
	},
	{
		id: "export-incoterms",
		category: "guide",
		img: hero_export_default,
		t: "FOB vs CIF vs DDP: Which Incoterms Fit Your Order?",
		d: "Understanding shipping responsibilities, risk transfers, and cost breakdowns for global buyers.",
		date: "28 DEC 2025",
		categoryLabel: "Export Guide",
		icon: FileText
	},
	{
		id: "global-trends-2026",
		category: "insights",
		img: why_emperor_globe_default,
		t: "Global Export Trends in 2026: Opportunities & Outlook",
		d: "Analyzing container freight adjustments, supply chain realignments, and high-growth markets.",
		date: "05 DEC 2025",
		categoryLabel: "Industry Insights",
		icon: Lightbulb
	}
];
function Blog() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const filteredPosts = posts.filter((p) => selectedCategory === "all" || p.category === selectedCategory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2.5rem] bg-[#fdfcf7] border border-[#f2e2d2] py-10 px-8 md:px-16 text-center shadow-[0_10px_35px_rgba(0,0,0,0.02)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-[3%] bottom-[5%] w-[25%] opacity-[0.08] pointer-events-none select-none hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 60",
								fill: "none",
								stroke: "#7c5625",
								strokeWidth: "0.8",
								className: "w-full h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 5,45 L 95,45 L 88,52 L 12,52 Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 15,45 L 15,20 L 35,20 L 35,45" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 40,45 L 40,25 L 60,25 L 60,45" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 65,45 L 65,15 L 80,15 L 80,45" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 72,15 L 72,5 L 76,5 L 76,15" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-[3%] top-[10%] w-[25%] opacity-[0.08] pointer-events-none select-none hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 100",
								fill: "none",
								stroke: "#7c5625",
								strokeWidth: "0.8",
								className: "w-full h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 80,95 Q 60,60 50,20 Q 70,30 90,60" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 50,20 Q 30,30 10,60 Q 40,60 50,20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 55,45 Q 75,40 85,15 Q 60,25 55,45" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 45,45 Q 25,40 15,15 Q 40,25 45,45" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-6 bg-[#b45309]/30" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold uppercase tracking-[0.3em] text-[#b45309]/80",
											children: "Knowledge That Connects"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-6 bg-[#b45309]/30" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 font-display text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight",
									children: [
										"Our ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#b45309]",
											children: "Blog"
										}),
										" & Insights"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto",
									children: "Expert insights, market updates, and best practices from the world of exports & imports."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2.5 items-center justify-start",
					children: categories.map((c) => {
						const Icon = c.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedCategory(c.id),
							className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${selectedCategory === c.id ? "bg-[#b45309] border-[#b45309] text-white shadow-md shadow-[#b45309]/10 scale-105" : "bg-white border-black/[0.05] text-[#7c5625] hover:bg-[#fdf8f2] hover:border-[#f5e3d1]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 13 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label })]
						}, c.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 lg:grid-cols-2",
					children: filteredPosts.map((p) => {
						const Icon = p.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative bg-[#fafafa]/60 backdrop-blur-sm rounded-[2.2rem] border border-black/[0.03] shadow-[0_12px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 min-h-[250px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full md:w-[42%] shrink-0 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.t,
									className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#b45309] shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 12 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.categoryLabel })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 md:py-6 md:pr-8 md:pl-0 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#b45309] font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2.5 font-display text-2xl font-bold text-ink leading-snug tracking-tight group-hover:text-[#b45309] transition-colors",
										children: p.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 mt-2.5 mb-3.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#b45309]/30" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#b45309]/70 text-[8px]",
												children: "✦"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-4 bg-[#b45309]/10" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: p.d
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-1.5 text-xs font-bold text-[#b45309] group-hover:gap-2.5 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read more" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
								})]
							})]
						}, p.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[#fdfcf7] border-t border-border/80 py-10 px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-6 bg-[#b45309]/30" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-[0.3em] text-[#b45309]/80",
										children: "Premium Sourcing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-6 bg-[#b45309]/30" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight",
								children: [
									"Explore Our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#b45309]",
										children: "Premium"
									}),
									" Export Range"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: "Straight from fertile Indian farms, processed to meet global standards. Click any item to request a custom quote."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
					})]
				})
			})
		]
	});
}
//#endregion
export { Blog as component };
