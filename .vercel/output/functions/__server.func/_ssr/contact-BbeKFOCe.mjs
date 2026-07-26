import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as MapPin, g as MessageCircle, p as Phone, v as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BbeKFOCe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl md:text-3xl text-ink font-bold",
				children: "Get in Touch"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-8 grid lg:grid-cols-5 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: MapPin,
						title: "Office",
						body: "D. No 59A-5-18/2, 3rd Cross Road, New P&T Colony - II, Vijayawada - 520008, Andhra Pradesh, India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Phone,
						title: "Phone",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919010444415",
							className: "hover:text-gold-deep",
							children: "+91 90104 44415"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: MessageCircle,
						title: "WhatsApp",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919010444415",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-gold-deep",
							children: "Chat on WhatsApp"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Mail,
						title: "Email",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:info@emperorexports.com",
							className: "hover:text-gold-deep",
							children: "info@emperorexports.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-secondary/40 p-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-ink",
							children: "Business Credentials"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-muted-foreground space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Proprietor: G. Ganesh" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "GSTIN: 37AXQPG0694M1ZS" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "IEC: AXQPG0694M" })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					const formData = new FormData(e.currentTarget);
					const text = `*New Enquiry from Website*\n\n*Name:* ${formData.get("name") || ""}\n*Company:* ${formData.get("company") || ""}\n*Email:* ${formData.get("email") || ""}\n*Phone:* ${formData.get("phone") || ""}\n\n*Message:*\n${formData.get("message") || ""}`;
					const whatsappUrl = `https://wa.me/919010444415?text=${encodeURIComponent(text)}`;
					window.open(whatsappUrl, "_blank", "noopener,noreferrer");
					setSubmitted(true);
				},
				className: "lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl",
							children: "✉️"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl text-ink",
							children: "Thank You!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground text-sm",
							children: "We have received your enquiry. G. Ganesh or our team will email you within 24 hours."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							name: "name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company Name",
							name: "company",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email Address",
							name: "email",
							type: "email",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone Number",
							name: "phone",
							type: "tel",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message",
						name: "message",
						textarea: true,
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90",
						children: "Send Enquiry"
					})
				] })
			})]
		})]
	});
}
function ContactCard({ icon: Icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6 flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-widest text-gold-deep font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm text-ink",
			children: body
		})] })]
	});
}
function Field({ label, name, type = "text", required, textarea }) {
	const cls = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: textarea ? "block mt-4" : "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold-deep",
				children: "*"
			})]
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			required,
			rows: 5,
			className: cls
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: cls
		})]
	});
}
//#endregion
export { Contact as component };
