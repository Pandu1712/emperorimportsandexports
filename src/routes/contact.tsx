import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./about";
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
      { property: "og:title", content: "Contact Emperor Exports" },
      {
        property: "og:description",
        content: "Send us your requirement — we respond within 24 hours.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's start a shipment."
        subtitle="Send your requirement, and we'll reply within 24 hours with specs and pricing."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-5 gap-10">
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
              <a href="mailto:info@emperorexports.in" className="hover:text-gold-deep">
                info@emperorexports.in
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
            setSubmitted(true);
          }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-soft"
        >
          {submitted ? (
            <div className="text-center py-14">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-ink font-bold text-xl shadow-gold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">Thank you!</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Your enquiry has been received. We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl text-ink">Send an enquiry</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Country" name="country" />
                <Field label="Product of interest" name="product" />
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
    </>
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
