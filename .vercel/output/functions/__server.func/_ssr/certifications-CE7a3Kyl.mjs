import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { F as Award } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./about-Ct7hbvAS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certifications-CE7a3Kyl.js
var import_jsx_runtime = require_jsx_runtime();
var certs = [
	{
		t: "IEC Registration",
		d: "Importer Exporter Code AXQPG0694M issued by DGFT, Ministry of Commerce, Government of India."
	},
	{
		t: "GSTIN",
		d: "37AXQPG0694M1ZS — Andhra Pradesh state registration."
	},
	{
		t: "APEDA Registered",
		d: "Agricultural and Processed Food Products Export Development Authority membership for scheduled products."
	},
	{
		t: "FSSAI Compliant",
		d: "Food Safety and Standards Authority of India compliance for food-grade products."
	},
	{
		t: "Phytosanitary Certificate",
		d: "Issued per consignment by the Plant Quarantine authority — mandatory for fresh produce shipments."
	},
	{
		t: "Certificate of Origin",
		d: "Provided by APEDA or Chamber of Commerce as required by the destination country."
	}
];
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Trust & Compliance",
			title: "Every credential, every consignment.",
			subtitle: "We operate under all statutory certifications required for Indian agricultural exports."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: certs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card border border-border p-7 hover:border-gold transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl text-ink",
							children: c.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: c.d
						})
					]
				}, c.t))
			})
		})]
	});
}
//#endregion
export { Certifications as component };
