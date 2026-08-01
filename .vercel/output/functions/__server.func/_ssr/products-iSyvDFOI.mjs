import { t as products } from "./products-DKyzeAFx.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ProductCard } from "./ProductCard-8fQYLucH.mjs";
import { t as PageHero } from "./about-B655kjj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-iSyvDFOI.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Range",
			title: "Products crafted for global markets",
			subtitle: "Click any product to see specifications, packaging and origin details."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		})]
	});
}
//#endregion
export { ProductsPage as component };
