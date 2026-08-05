import { t as products } from "./_ssr/products-DKyzeAFx.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-Dgjbkal6.js
var $$splitComponentImporter = () => import("./_id-CWXN5E2x.mjs");
var Route = createFileRoute("/products/$id")({
	loader: ({ params }) => {
		const product = products.find((p) => p.id === params.id);
		if (!product) throw notFound();
		return product;
	},
	head: ({ loaderData }) => {
		const name = loaderData?.name || "Product Details";
		const desc = loaderData?.description || "Explore product specifications, origin and packaging details.";
		const origin = loaderData?.origin || "India";
		return { meta: [
			{ title: `${name} — Emperor Exports & Imports` },
			{
				name: "description",
				content: desc
			},
			{
				name: "keywords",
				content: `${name}, premium ${name}, buy ${name} wholesale, dynamic agri export, indian ${name} exporter, ${origin} agricultural products, specifications of ${name}`
			},
			{
				property: "og:title",
				content: `${name} — Emperor Exports & Imports`
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:type",
				content: "product"
			},
			{
				property: "og:url",
				content: `https://www.emperorexportsandimports.com/products/${loaderData?.id || ""}`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
