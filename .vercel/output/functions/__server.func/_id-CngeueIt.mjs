import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_id-BMmw19El.mjs";
import { H as ArrowLeft, g as MessageCircle, v as Mail } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CngeueIt.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetailPage() {
	const product = Route.useLoaderData();
	const waLink = `https://wa.me/919010444415?text=${encodeURIComponent(`Hello Emperor Exports, I'd like a quote for ${product.name}.`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products",
			className: "inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:opacity-85 transition mb-8 group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				size: 16,
				className: "group-hover:-translate-x-1 transition-transform"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Products" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-white rounded-3xl border border-border/80 shadow-[0_15px_50px_rgba(0,0,0,0.02)] overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-ink aspect-square lg:aspect-auto min-h-[300px] lg:min-h-[600px] relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "absolute inset-0 h-full w-full object-cover",
						loading: "eager"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:p-12 lg:p-16 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full bg-[#fdf8f2] border border-[#f5e3d1] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b45309]",
							children: "Premium Export Grade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl md:text-5xl font-bold text-ink leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg text-muted-foreground italic font-medium",
							children: product.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 mt-4 mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-20 bg-[#b45309]/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#b45309]/70 text-[10px]",
									children: "✦"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-8 bg-[#b45309]/10" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-foreground/80",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 font-display text-2xl font-bold text-ink",
							children: "Specifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-4",
							children: product.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-[#fafafa]/50 p-4 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-base font-bold text-ink",
									children: s.value
								})]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 border-t border-border/80 pt-6 space-y-3.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-bold text-ink min-w-28 uppercase tracking-wider text-[11px] text-[#b45309]",
									children: "Packaging"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground/85 mt-1 sm:mt-0 flex-1 leading-relaxed",
									children: product.packaging
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-bold text-ink min-w-28 uppercase tracking-wider text-[11px] text-[#b45309]",
									children: "Origin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground/85 mt-1 sm:mt-0 flex-1 leading-relaxed",
									children: product.origin
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col sm:flex-row gap-4 border-t border-border/80 pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-ink shadow-gold hover:opacity-90 transition-opacity w-full sm:w-auto text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Request Quote via WhatsApp" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:info@emperorexports.com",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-ink px-8 py-4 text-sm font-bold text-ink hover:bg-ink hover:text-white transition w-full sm:w-auto text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email Enquiry" })]
						})]
					})]
				})]
			})
		})]
	});
}
//#endregion
export { ProductDetailPage as component };
