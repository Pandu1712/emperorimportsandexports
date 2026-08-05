import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$9 } from "../_id-Dgjbkal6.mjs";
import { E as FileText, I as ArrowUp, _ as Mail, b as LayoutGrid, f as Phone, g as MapPin, t as X, w as Globe } from "../_libs/lucide-react.mjs";
import { n as Route$10 } from "./about-Q-c-KLA0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-vvw6dEFK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DB1b8fzb.css";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/export-process",
		label: "Export Process"
	},
	{
		to: "/certifications",
		label: "Certifications"
	},
	{
		to: "/markets",
		label: "Markets"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[#051f13] text-white/80 text-xs py-2.5 border-b border-white/10 hidden md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							size: 13,
							className: "text-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vizag, India" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@emperorexports.com",
						className: "flex items-center gap-2 hover:text-white transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: 13,
							className: "text-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "info@emperorexports.com" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+919010444415",
						className: "flex items-center gap-2 hover:text-white transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							size: 13,
							className: "text-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 90104 44415" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
						size: 13,
						className: "text-gold"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global Agri Export House" })]
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-final.png",
						alt: "Emperor Exports & Imports",
						className: "h-12 w-12 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-ink tracking-wide",
							children: "EMPEROR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.2em] text-gold-deep",
							children: "Exports & Imports"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						className: "text-sm font-medium text-foreground/80 hover:text-gold-deep transition-colors relative",
						activeProps: { className: "text-gold-deep" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/contact",
					className: "hidden lg:inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get a Quote" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					className: "lg:hidden p-2 text-ink",
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 24 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-3 space-y-1",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "block px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary",
					children: n.label
				}, n.to))
			})
		})]
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-white/80 mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-final.png",
						alt: "Emperor",
						className: "h-12 w-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-bold text-white",
						children: "EMPEROR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-gold",
						children: "Exports & Imports"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-white/60 leading-relaxed",
					children: "Sourcing India's finest agricultural produce and spices for markets across the globe."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4 text-sm uppercase tracking-widest",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: [
						["/about", "About Us"],
						["/products", "Products"],
						["/export-process", "Export Process"],
						["/certifications", "Certifications"],
						["/markets", "Markets"],
						["/blog", "Blog"]
					].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "hover:text-gold transition",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4 text-sm uppercase tracking-widest",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 16,
								className: "text-gold shrink-0 mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "D. No 59A-5-18/2, 3rd Cross Road, New P&T Colony - II, Vijayawada - 520008" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								className: "text-gold shrink-0 mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919010444415",
								children: "+91 90104 44415"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "text-gold shrink-0 mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@emperorexports.com",
								children: "info@emperorexports.com"
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4 text-sm uppercase tracking-widest",
					children: "Credentials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "GSTIN: 37AXQPG0694M1ZS" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IEC: AXQPG0694M" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Proprietor: G. Ganesh" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 py-6 text-center text-xs text-white/50",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Emperor Exports & Imports. All rights reserved."
			]
		})]
	});
}
function StickyButtons() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/919010444415?text=Hello%20Emperor%20Exports%2C%20I%27m%20interested%20in%20your%20products.",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex flex-col items-center justify-center h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					width: "24",
					height: "24",
					fill: "currentColor",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .01 5.36.01 11.99c0 2.11.55 4.17 1.6 5.98L0 24l6.17-1.62a11.94 11.94 0 0 0 5.82 1.5h.01c6.63 0 11.99-5.36 11.99-11.99 0-3.2-1.25-6.21-3.47-8.41zM12 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.66.96.98-3.56-.23-.37a9.8 9.8 0 0 1-1.5-5.24C2.22 6.6 6.6 2.22 12 2.22c2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0 1 21.78 12c0 5.4-4.38 9.79-9.78 9.79zm5.36-7.31c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.51-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.56-.34z" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-medium leading-none mt-1",
					children: "WhatsApp"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "tel:+919876543210",
				className: "flex flex-col items-center justify-center h-16 w-16 rounded-full bg-gradient-gold text-ink shadow-gold hover:scale-105 transition-transform",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					size: 22,
					className: "stroke-[2.5]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-bold leading-none mt-1 text-center",
					children: "Call Us"
				})]
			}),
			show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Scroll to top",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border text-ink shadow-soft hover:scale-105 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 20 })
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-gradient-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-ink",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold text-ink",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Emperor Exports & Imports — Premium Indian Agri Exporter" },
			{
				name: "description",
				content: "Emperor Exports & Imports supplies turmeric powder, coconuts, non-basmati rice, bananas, elephant foot yam and green chillies to global markets from Vijayawada, India."
			},
			{
				name: "keywords",
				content: "emperor exports, indian agri exporter, agricultural exports india, turmeric powder exporter, green chillies export, fresh coconuts supplier, non-basmati rice, banana exporter, vijayawada, srikakulam, ganesh imports exports, agricultural import export"
			},
			{
				name: "author",
				content: "Emperor Exports & Imports"
			},
			{
				name: "google-site-verification",
				content: "YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE"
			},
			{
				property: "og:title",
				content: "Emperor Exports & Imports"
			},
			{
				property: "og:description",
				content: "Premium Indian agricultural exports — spices, fresh produce and staples for global buyers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.emperorexportsandimports.com"
			},
			{
				property: "og:image",
				content: "https://www.emperorexportsandimports.com/logo-final.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Emperor Exports & Imports"
			},
			{
				name: "twitter:description",
				content: "Premium Indian agricultural exports for global buyers."
			},
			{
				name: "twitter:image",
				content: "https://www.emperorexportsandimports.com/logo-final.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo-final.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-HH7BGBEHTC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HH7BGBEHTC', { page_path: window.location.pathname });
            ` } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.gtag) window.gtag("config", "G-HH7BGBEHTC", { page_path: location.pathname });
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyButtons, {})
			]
		})
	});
}
var $$splitComponentImporter$7 = () => import("./routes-BQKPjKNi.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Emperor Exports & Imports — Premium Indian Agri Exporter" },
		{
			name: "description",
			content: "Turmeric, coconuts, rice, bananas, yam, green chillies, drumsticks, and jaggery powder exported worldwide from Vijayawada, India."
		},
		{
			name: "keywords",
			content: "agri export house, indian spices exporter, fresh vegetables supplier, buy non basmati rice india, ganesh imports exports, turmeric powder wholesale, fresh green chillies guntur, cavity banana export, elephant foot yam export india, moringa drumsticks exporter, organic jaggery powder wholesale"
		},
		{
			property: "og:title",
			content: "Emperor Exports & Imports"
		},
		{
			property: "og:description",
			content: "Premium Indian agricultural exports for global buyers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./blog-Czmm-mss.mjs");
var Route$6 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog & Insights — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Insights on Indian agri-exports, market trends, seasonality and buyer guides."
		},
		{
			name: "keywords",
			content: "agri export news, indian agriculture market trends, spice trading tips, turmeric health benefits, banana market insights, rice trade updates"
		},
		{
			property: "og:title",
			content: "Emperor Exports Blog"
		},
		{
			property: "og:description",
			content: "Perspectives on Indian agricultural trade."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/blog"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./certifications-CgqVyijx.mjs");
var Route$5 = createFileRoute("/certifications")({
	head: () => ({ meta: [
		{ title: "Certifications — Emperor Exports & Imports" },
		{
			name: "description",
			content: "IEC, GSTIN, FSSAI, APEDA and phytosanitary certifications backing Emperor Exports & Imports."
		},
		{
			name: "keywords",
			content: "IEC certification, APEDA registration, GSTIN, FSSAI licence, indian export credentials, phytosanitary certificate, agricultural certification india"
		},
		{
			property: "og:title",
			content: "Certifications & Compliance"
		},
		{
			property: "og:description",
			content: "Recognised exporter with all statutory Indian export credentials."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/certifications"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-Xf-opd5t.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Get in touch with Emperor Exports & Imports in Vijayawada. Call +91 90104 44415 or send an enquiry."
		},
		{
			name: "keywords",
			content: "contact emperor exports, phone number +91 90104 44415, email info@emperorexports.com, vijayawada office, srikakulam manufacturing unit, buy indian spices online"
		},
		{
			property: "og:title",
			content: "Contact Emperor Exports"
		},
		{
			property: "og:description",
			content: "Send us your requirement — we respond within 24 hours."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/contact"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./export-process-D8fnkTHr.mjs");
var Route$3 = createFileRoute("/export-process")({
	head: () => ({ meta: [
		{ title: "Export Process — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Step-by-step export process from farm sourcing to doorstep delivery of Indian agricultural produce."
		},
		{
			name: "keywords",
			content: "how to import spices from india, agri export process, agricultural logistics india, custom clearance india, export documentation india, door to door agricultural delivery"
		},
		{
			property: "og:title",
			content: "Our Export Process"
		},
		{
			property: "og:description",
			content: "Farm to port to your warehouse — how we ship."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/export-process"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./markets-B1pJKLRp.mjs");
var Route$2 = createFileRoute("/markets")({
	head: () => ({ meta: [
		{ title: "Markets We Serve — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Emperor Exports ships to importers across the Middle East, Southeast Asia, Europe, Africa and beyond."
		},
		{
			name: "keywords",
			content: "agricultural markets, export regions india, spice buyers middle east, coco import europe, food importers southeast asia, global agricultural network"
		},
		{
			property: "og:title",
			content: "Markets We Serve"
		},
		{
			property: "og:description",
			content: "Global reach across 25+ countries."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/markets"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-C7F03LXy.mjs");
var Route$1 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./products-kD-iozez.mjs");
var Route = createFileRoute("/products/")({
	head: () => ({ meta: [
		{ title: "Products — Emperor Exports & Imports" },
		{
			name: "description",
			content: "Explore our export catalogue: turmeric powder, coconuts, non-basmati rice, bananas, elephant foot yam, green chillies, drumsticks, and premium jaggery powder."
		},
		{
			name: "keywords",
			content: "turmeric powder, fresh coconuts, non-basmati rice, banana Cavendish, elephant foot yam, green chillies Guntur, moringa drumsticks, jaggery powder chemical free, indian spices wholesale"
		},
		{
			property: "og:title",
			content: "Our Products — Emperor Exports & Imports"
		},
		{
			property: "og:description",
			content: "Premium Indian spices, fresh produce and staples for global buyers."
		},
		{
			property: "og:url",
			content: "https://www.emperorexportsandimports.com/products"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var BlogRoute = Route$6.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$8
});
var CertificationsRoute = Route$5.update({
	id: "/certifications",
	path: "/certifications",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var ExportProcessRoute = Route$3.update({
	id: "/export-process",
	path: "/export-process",
	getParentRoute: () => Route$8
});
var MarketsRoute = Route$2.update({
	id: "/markets",
	path: "/markets",
	getParentRoute: () => Route$8
});
var ProductsRoute = Route$1.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$8
});
var ProductsIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var ProductsRouteChildren = {
	ProductsIdRoute: Route$9.update({
		id: "/$id",
		path: "/$id",
		getParentRoute: () => ProductsRoute
	}),
	ProductsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute,
	CertificationsRoute,
	ContactRoute,
	ExportProcessRoute,
	MarketsRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren)
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
