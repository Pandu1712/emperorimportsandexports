import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowRight, D as Flame, R as Award, b as Leaf, c as Sprout, n as Wheat, o as TreePalm } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-59KUy1Sd.js
var import_jsx_runtime = require_jsx_runtime();
function getProductIcon(id) {
	switch (id) {
		case "turmeric-powder": return Leaf;
		case "coconuts": return TreePalm;
		case "non-basmati-rice": return Wheat;
		case "banana": return Sprout;
		case "elephant-foot-yam": return Sprout;
		case "green-chillies": return Flame;
		case "drumsticks": return Sprout;
		case "jaggery-powder": return Award;
		default: return Leaf;
	}
}
function ProductCard({ product }) {
	const Icon = getProductIcon(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/products/$id",
		params: { id: product.id },
		className: "group text-left bg-white rounded-[2.5rem] overflow-hidden border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.02)] md:hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] md:hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[440px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full aspect-[4/3] overflow-hidden bg-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full h-full overflow-hidden",
				style: { clipPath: "ellipse(120% 95% at 50% 0%)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700",
					loading: "lazy"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-5 left-5 h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 20,
					className: "text-[#b45309]"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-7 md:p-8 flex-1 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center rounded-full bg-[#fdf8f2] border border-[#f5e3d1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b45309]",
					children: "Premium Quality"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-2xl font-bold tracking-tight text-ink leading-snug",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 mt-2.5 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-14 bg-[#b45309]/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#b45309]/70 text-[8px]",
							children: "✦"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-6 bg-[#b45309]/10" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground leading-relaxed mt-1",
					children: product.tagline
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-bold text-[#b45309] flex items-center gap-1.5 group-hover:gap-2.5 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-10 w-10 rounded-full border border-gold-soft/60 bg-[#fdf8f2]/30 flex items-center justify-center text-[#b45309] shadow-sm group-hover:bg-[#b45309] group-hover:text-white transition-all duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
				})]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
