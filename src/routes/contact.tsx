import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Get in touch with Emperor Exports & Imports in Vijayawada. Call +91 90104 44415 or send an enquiry.",
      },
      {
        name: "keywords",
        content: "contact emperor exports, phone number +91 90104 44415, email info@emperorexports.com, vijayawada office, srikakulam manufacturing unit, buy indian spices online"
      },
      { property: "og:title", content: "Contact Emperor Exports" },
      {
        property: "og:description",
        content: "Send us your requirement — we respond within 24 hours.",
      },
      { property: "og:url", content: "https://emperorexports.com/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <h1 className="font-display text-2xl md:text-3xl text-ink font-bold">Get in Touch</h1>
      </div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 pt-8 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <ContactCard
            icon={MapPin}
            title="Office"
            body="D. No 59A-5-18/2, 3rd Cross Road, New P&T Colony - II, Vijayawada - 520008, Andhra Pradesh, India"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            body={
              <a href="tel:+919010444415" className="hover:text-gold-deep">
                +91 90104 44415
              </a>
            }
          />
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            body={
              <a
                href="https://wa.me/919010444415"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-deep"
              >
                Chat on WhatsApp
              </a>
            }
          />
          <ContactCard
            icon={Mail}
            title="Email"
            body={
              <a href="mailto:info@emperorexports.com" className="hover:text-gold-deep">
                info@emperorexports.com
              </a>
            }
          />
          <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-sm">
            <div className="font-semibold text-ink">Business Credentials</div>
            <div className="mt-2 text-muted-foreground space-y-1">
              <div>Proprietor: G. Ganesh</div>
              <div>GSTIN: 37AXQPG0694M1ZS</div>
              <div>IEC: AXQPG0694M</div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name") || "";
            const company = formData.get("company") || "";
            const email = formData.get("email") || "";
            const phone = formData.get("phone") || "";
            const message = formData.get("message") || "";

            const text = `*New Enquiry from Website*\n\n` +
              `*Name:* ${name}\n` +
              `*Company:* ${company}\n` +
              `*Email:* ${email}\n` +
              `*Phone:* ${phone}\n\n` +
              `*Message:*\n${message}`;

            const whatsappUrl = `https://wa.me/919010444415?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            setSubmitted(true);
          }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-4xl">✉️</div>
              <h3 className="mt-4 font-display text-2xl text-ink">Thank You!</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                We have received your enquiry. G. Ganesh or our team will email you within 24
                hours.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company Name" name="company" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <Field label="Message" name="message" textarea required />
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold hover:opacity-90"
              >
                Send Enquiry
              </button>
            </>
          )}
        </form>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-display text-xl md:text-2xl text-ink font-bold mb-6">
          Manufacturing Unit
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold-deep font-semibold">
                Office Location
              </div>
              <div className="mt-1 font-semibold text-ink text-base">
                Marwadi University Office
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                First Floor, Radha, Krishna Nagar Colony, Visakha B Colony, Srikakulam - 532001, AP, India
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold-deep font-semibold">
                Factory Address
              </div>
              <div className="mt-1 font-semibold text-ink text-base">
                Manufacturing Unit
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Ground Floor (Below the Office), Srikakulam - 532001, AP, India
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-2 md:p-3 shadow-sm overflow-hidden h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.9969750847004!2d83.89941215515135!3d18.301746518742135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c152784b6cf51%3A0xae006aec2b000adb!2sMARWADI%20UNIVERSITY%20OFFICE%20SRIKAKULAM!5e0!3m2!1sen!2sin!4v1785841106932!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0.75rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manufacturing Unit Location"
          />
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Mail;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center text-ink shadow-gold">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold-deep font-semibold">
          {title}
        </div>
        <div className="mt-1 text-sm text-ink">{body}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold";
  return (
    <label className={textarea ? "block mt-4" : "block"}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-gold-deep">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
