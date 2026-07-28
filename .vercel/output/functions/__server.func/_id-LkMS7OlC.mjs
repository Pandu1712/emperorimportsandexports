import { t as products } from "./_ssr/products-1CwmOwDG.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-LkMS7OlC.js
var $$splitComponentImporter = () => import("./_id-CWL29M5H.mjs");
var Route = createFileRoute("/products/$id")({
	loader: ({ params }) => {
		const product = products.find((p) => p.id === params.id);
		if (!product) throw notFound();
		return product;
	},
	head: ({ data }) => ({ meta: [{ title: `${data?.name || "Product Details"} — Emperor Exports & Imports` }, {
		name: "description",
		content: data?.description || "Explore product specifications, origin and packaging details."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
