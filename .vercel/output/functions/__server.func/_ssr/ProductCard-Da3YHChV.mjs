import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as ArrowRight, D as Flame, b as Leaf, c as Sprout, n as Wheat, o as TreePalm, t as X } from "../_libs/lucide-react.mjs";
import { i as turmeric_default, n as coconuts_default, r as rice_default, t as chillies_default } from "./coconuts-D9RXxadM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-Da3YHChV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		id: "turmeric-powder",
		name: "Turmeric Powder",
		tagline: "Golden spice, laboratory tested",
		image: turmeric_default,
		description: "Stone-ground turmeric powder from the finger and bulb varieties of Andhra Pradesh. High curcumin content, vivid golden colour, and a warm, earthy aroma ideal for culinary, nutraceutical, and cosmetic industries.",
		specs: [
			{
				label: "Curcumin",
				value: "3% – 5%"
			},
			{
				label: "Moisture",
				value: "< 10%"
			},
			{
				label: "Colour",
				value: "Deep golden yellow"
			},
			{
				label: "Shelf life",
				value: "18 months"
			}
		],
		packaging: "25 kg / 50 kg PP bags, 1 kg retail pouches, custom private label available.",
		origin: "Andhra Pradesh, India"
	},
	{
		id: "coconuts",
		name: "Coconuts (Fresh & Semi-Husked)",
		tagline: "Tropical freshness, harvest to hold",
		image: coconuts_default,
		description: "Hand-selected mature coconuts, available fresh whole or semi-husked for extended shelf life. Sweet water content, thick kernel, and consistent size grading for wholesale and retail buyers.",
		specs: [
			{
				label: "Grades",
				value: "Small / Medium / Large"
			},
			{
				label: "Weight",
				value: "400g – 1kg per piece"
			},
			{
				label: "Type",
				value: "Fresh, Semi-husked"
			},
			{
				label: "Shelf life",
				value: "30 – 60 days"
			}
		],
		packaging: "Ventilated cartons or mesh bags, palletised for 20ft / 40ft reefer containers.",
		origin: "Coastal Andhra Pradesh & Tamil Nadu"
	},
	{
		id: "non-basmati-rice",
		name: "Non-Basmati Rice",
		tagline: "Everyday staple, export grade",
		image: rice_default,
		description: "Sortex-cleaned non-basmati rice in long, medium, and short grain varieties. Ideal for daily consumption markets, food service, and government tenders. Custom polish and moisture levels available.",
		specs: [
			{
				label: "Varieties",
				value: "IR64, Sona Masuri, Ponni, Swarna"
			},
			{
				label: "Broken",
				value: "5% / 25% / 100%"
			},
			{
				label: "Moisture",
				value: "≤ 14%"
			},
			{
				label: "Purity",
				value: "99%"
			}
		],
		packaging: "10 kg / 25 kg / 50 kg PP / jute / non-woven bags with private labelling.",
		origin: "Andhra Pradesh & Telangana"
	},
	{
		id: "banana",
		name: "Banana",
		tagline: "Farm-fresh, container-ready",
		image: "/assets/banana-Bk-38Auy.jpg",
		description: "Fresh green Cavendish and hill banana varieties, hand-cut and packed at optimal maturity for long-haul shipping. Uniform colour, size, and ripening curve for retail chains and wholesale importers.",
		specs: [
			{
				label: "Variety",
				value: "Cavendish (G9), Robusta"
			},
			{
				label: "Maturity",
				value: "75% – 80%"
			},
			{
				label: "Length",
				value: "18 – 22 cm"
			},
			{
				label: "Brix",
				value: "20 – 22"
			}
		],
		packaging: "13.5 kg telescopic cartons, pre-cooled and shipped in reefer containers at 13.5°C.",
		origin: "Andhra Pradesh & Tamil Nadu"
	},
	{
		id: "elephant-foot-yam",
		name: "Elephant Foot Yam",
		tagline: "Nutrient-dense root vegetable",
		image: "/assets/yam-CAH-Hj18.jpg",
		description: "Freshly harvested elephant foot yam (Amorphophallus paeoniifolius), known locally as Suran or Jimikand. Prized for its firm texture, mild flavour, and dietary fibre. Cleaned, graded, and cured for export.",
		specs: [
			{
				label: "Size",
				value: "1 – 5 kg per tuber"
			},
			{
				label: "Grade",
				value: "A / B / C"
			},
			{
				label: "Curing",
				value: "Yes"
			},
			{
				label: "Shelf life",
				value: "3 – 4 weeks"
			}
		],
		packaging: "Mesh bags or ventilated cartons, palletised for reefer or ambient shipping.",
		origin: "Andhra Pradesh & Odisha"
	},
	{
		id: "green-chillies",
		name: "Green Chillies",
		tagline: "Vibrant, pungent, farm-picked",
		image: chillies_default,
		description: "Hand-picked fresh green chillies with high pungency and glossy skin. Sorted for uniform length and colour, ideal for fresh markets, sauce manufacturers, and food processors.",
		specs: [
			{
				label: "Varieties",
				value: "G4, LCA-334, Byadgi"
			},
			{
				label: "Length",
				value: "6 – 12 cm"
			},
			{
				label: "SHU",
				value: "30,000 – 50,000"
			},
			{
				label: "Shelf life",
				value: "10 – 15 days chilled"
			}
		],
		packaging: "5 kg / 10 kg ventilated cartons, pre-cooled reefer shipping at 8 – 10°C.",
		origin: "Guntur, Andhra Pradesh"
	}
];
function ProductModal({ product, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!product) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [product, onClose]);
	if (!product) return null;
	const waLink = `https://wa.me/919010444415?text=${encodeURIComponent(`Hello Emperor Exports, I'd like a quote for ${product.name}.`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 animate-in fade-in",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative bg-background rounded-2xl shadow-gold max-w-4xl w-full max-h-[90vh] overflow-y-auto",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-secondary",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-ink aspect-square md:aspect-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "w-full h-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-gold-deep font-semibold",
							children: "Premium Export Grade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl font-bold text-ink",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground italic",
							children: product.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-foreground/80",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-3",
							children: product.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-secondary/50 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-ink",
									children: s.value
								})]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold text-ink min-w-24",
									children: "Packaging:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground/80",
									children: product.packaging
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold text-ink min-w-24",
									children: "Origin:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground/80",
									children: product.origin
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold hover:opacity-90",
								children: "Request Quote"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@emperorexports.in",
								className: "inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition",
								children: "Email Enquiry"
							})]
						})
					]
				})]
			})]
		})
	});
}
function getProductIcon(id) {
	switch (id) {
		case "turmeric-powder": return Leaf;
		case "coconuts": return TreePalm;
		case "non-basmati-rice": return Wheat;
		case "banana": return Sprout;
		case "elephant-foot-yam": return Sprout;
		case "green-chillies": return Flame;
		default: return Leaf;
	}
}
function ProductCard({ product, onClick }) {
	const Icon = getProductIcon(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "group text-left bg-white rounded-[2.5rem] overflow-hidden border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[440px]",
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
export { ProductModal as n, products as r, ProductCard as t };
