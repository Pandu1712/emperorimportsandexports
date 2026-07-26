import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about--iXDearc.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./about-IEgM5Ms9.mjs");
var Route = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Learn about Emperor Exports & Imports, a Vijayawada-based agri-export house led by proprietor G. Ganesh."
		},
		{
			property: "og:title",
			content: "About Emperor Exports & Imports"
		},
		{
			property: "og:description",
			content: "A trusted Indian agri-export house rooted in Andhra Pradesh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function PageHero({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center",
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
export { Route as n, PageHero as t };
