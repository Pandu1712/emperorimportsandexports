import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Markets We Serve — Emperor Exports & Imports" },
      {
        name: "description",
        content:
          "Emperor Exports ships to importers across the Middle East, Southeast Asia, Europe, Africa and beyond.",
      },
      { property: "og:title", content: "Markets We Serve" },
      { property: "og:description", content: "Global reach across 25+ countries." },
    ],
  }),
  component: Markets,
});

const regions = [
  { r: "Middle East", c: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain"] },
  {
    r: "Southeast Asia",
    c: ["Malaysia", "Singapore", "Indonesia", "Vietnam", "Thailand", "Philippines"],
  },
  { r: "Europe", c: ["United Kingdom", "Germany", "Netherlands", "France", "Italy", "Spain"] },
  { r: "Africa", c: ["South Africa", "Kenya", "Nigeria", "Egypt", "Tanzania", "Ghana"] },
  { r: "Americas", c: ["USA", "Canada", "Brazil"] },
  { r: "Asia-Pacific", c: ["Australia", "New Zealand", "Japan", "South Korea"] },
];

function Markets() {
  return (
    <>
      <PageHero
        eyebrow="Global Reach"
        title="Serving 25+ markets worldwide."
        subtitle="From regional distributors to national supermarket chains, our containers reach ports across six regions."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r.r} className="rounded-2xl bg-card border border-border p-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold">
                Region
              </div>
              <h3 className="mt-2 font-display text-2xl text-ink">{r.r}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {r.c.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-ink"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
