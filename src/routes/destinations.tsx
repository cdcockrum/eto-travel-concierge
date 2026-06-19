import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  destinations,
  getCurrentMonth,
  getFeaturedDestinations,
} from "@/lib/destinations";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Éto Travel Concierge" },
      { name: "description", content: "A curated library of destinations, from Kyoto to Iceland." },
    ],
  }),
  component: DestinationsLayout,
});

function DestinationsLayout() {
  const matchRoute = useMatchRoute();
  const isDetail = matchRoute({ to: "/destinations/$slug" });
  if (isDetail) return <Outlet />;
  return <DestinationsIndex />;
}

const REGIONS = ["All", "Asia", "Europe", "North America", "Central America", "Oceania"];

function DestinationsIndex() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string>("All");

  const currentMonth = getCurrentMonth();
  const featuredDestinations = getFeaturedDestinations();

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q.toLowerCase()) ||
        d.country.toLowerCase().includes(q.toLowerCase()) ||
        d.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()));

      const matchR = region === "All" || d.region === region;

      return matchQ && matchR;
    });
  }, [q, region]);

  return (
    <div className="container-editorial pt-12 pb-24 md:pt-20">
      <header className="max-w-3xl">
        <p className="eyebrow text-muted-foreground">Destination Library</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Where to next?</h1>
        <p className="mt-5 text-lg text-foreground/75">
          A curated catalogue of places researched, photographed, and shaped into
          itineraries travelers can actually use.
        </p>
        <p className="mt-4 text-xs italic text-muted-foreground">
          Sample recommendations for demonstration purposes. Final travel plans should be
          customized and verified before booking.
        </p>
      </header>

      <section className="mt-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-muted-foreground">Featured This Month</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              {currentMonth} Curated Picks
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Seasonally selected destinations based on timing, atmosphere, travel conditions,
            and the kind of experience they offer right now.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredDestinations.map((d) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className="group block rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="image-zoom relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="mt-4">
                <p className="eyebrow text-muted-foreground">{d.country}</p>
                <h3 className="mt-1 font-display text-2xl text-foreground transition-colors group-hover:text-forest">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>

                <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Best time:</span>{" "}
                    {d.bestTime}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Ideal length:</span>{" "}
                    {d.tripLength}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-muted-foreground">Browse the Library</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              All Destinations
            </h2>
          </div>

          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search destinations, countries, themes…"
              className="h-12 w-full rounded-full border border-input bg-background pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                region === r
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className="group block"
            >
              <div className="image-zoom relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <img
                  src={d.image}
                  alt={d.name}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">{d.country}</p>
                  <h2 className="mt-1 font-display text-2xl text-foreground transition-colors group-hover:text-forest">
                    {d.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
                </div>

                <div className="flex shrink-0 flex-wrap justify-end gap-1">
                  {d.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-20 text-center text-muted-foreground">
            No destinations match that search.
          </p>
        )}
      </section>
    </div>
  );
}
