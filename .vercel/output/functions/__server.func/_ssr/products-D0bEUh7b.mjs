import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./about--iXDearc.mjs";
import { n as ProductModal, r as products, t as ProductCard } from "./ProductCard-4RWISzu0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-D0bEUh7b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Our Range",
				title: "Products crafted for global markets",
				subtitle: "Click any product to see specifications, packaging and origin details."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						onClick: () => setSelected(p)
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
				product: selected,
				onClose: () => setSelected(null)
			})
		]
	});
}
//#endregion
export { ProductsPage as component };
