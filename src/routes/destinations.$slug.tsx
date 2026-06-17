import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, CloudSun, Clock, MapPin, Hotel as HotelIcon, Leaf, Quote } from "lucide-react";
import { getDestination, destinations, type Destination, type Hotel } from "@/lib/destinations";
import { SampleDisclaimer } from "@/components/sample-disclaimer";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }): Destination => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return dest;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Éto Travel Concierge` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.name} — Éto Travel` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <h1 className="font-display text-4xl">Destination not found</h1>
      <Link to="/destinations" className="mt-6 inline-block text-sm underline">
        Back to destinations
      </Link>
    </div>
  ),
  component: DestinationDetail,
});

const TIER_ORDER: Hotel["tier"][] = ["Budget", "Mid-Range", "Boutique", "Luxury"];

function DestinationDetail() {
  const d = Route.useLoaderData();
  const related = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <article>
      {/* HERO */}
      <section className="relative -mt-16 h-[80vh] min-h-[600px] w-full overflow-hidden md:-mt-20">
        <img
          src={d.image}
          alt={d.name}
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-editorial pb-16">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-3 w-3" /> Destinations
            </Link>
            <p className="eyebrow mt-6 text-white/70">{d.country} · {d.region}</p>
            <h1 className="mt-3 font-display text-6xl text-white md:text-8xl">{d.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">{d.tagline}</p>
          </div>
        </div>
      </section>

      {/* META STRIP */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container-editorial grid grid-cols-1 gap-6 py-8 md:grid-cols-4">
          <Meta icon={Calendar} label="Best time to visit" value={d.bestTime} />
          <Meta icon={Clock} label="Ideal trip length" value={d.tripLength} />
          <Meta icon={CloudSun} label="Climate" value={d.climate} />
          <Meta icon={MapPin} label="Region" value={d.region} />
        </div>
      </section>

      {/* OVERVIEW + WHY */}
      <section className="container-editorial py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] md:gap-24">
          <div>
            <p className="eyebrow text-muted-foreground">Overview</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A place worth knowing.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground/80">{d.overview}</p>
            <div className="mt-10 rounded-2xl border-l-2 border-forest bg-secondary/40 p-7">
              <div className="flex items-center gap-2">
                <Quote className="h-4 w-4 text-forest" strokeWidth={1.5} />
                <p className="eyebrow text-forest-deep">Why I recommend this</p>
              </div>
              <p className="mt-4 font-display text-xl leading-snug text-foreground/90 md:text-2xl">
                {d.whyRecommend}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                — Christopher, lead advisor
              </p>
            </div>
            <SampleDisclaimer className="mt-6" />
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">Where to Stay</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">Recommended neighborhoods.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-4">
            {d.neighborhoods.map((n) => (
              <div key={n.name} className="bg-background p-7">
                <h3 className="font-display text-xl">{n.name}</h3>
                <p className="mt-3 text-sm text-foreground/75">{n.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section className="container-editorial py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-muted-foreground">Hotels</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Stays by category.</h2>
          </div>
          <HotelIcon className="h-6 w-6 text-forest" strokeWidth={1.5} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIER_ORDER.map((tier) => {
            const hotel = d.hotels.find((h) => h.tier === tier);
            if (!hotel) return null;
            return (
              <div key={tier} className="rounded-2xl border border-border bg-card p-6">
                <p className="eyebrow text-sandstone-deep">{tier}</p>
                <h3 className="mt-3 font-display text-xl">{hotel.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {hotel.neighborhood}
                </p>
                <p className="mt-4 text-sm text-foreground/75">{hotel.note}</p>
              </div>
            );
          })}
        </div>
        <SampleDisclaimer className="mt-8" />
      </section>

      {/* GRID OF LISTS */}
      <section className="container-editorial pb-20">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          <Block title="Top Attractions" items={d.attractions} />
          <Block title="Hidden Gems" items={d.hiddenGems} />
          <Block title="Food Recommendations" items={d.food} />
          <Block title="Coffee Recommendations" items={d.coffee} />
          <Block title="Photography Spots" items={d.photography} />
          <Block title="Cultural Etiquette" items={d.etiquette} />
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="border-y border-border bg-forest-deep py-20 text-cream">
        <div className="container-editorial grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <Leaf className="h-7 w-7 text-cream/80" strokeWidth={1.4} />
            <p className="eyebrow mt-4 text-cream/60">Travel Responsibly</p>
            <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
              Sustainability notes.
            </h2>
            <p className="mt-5 text-sm text-cream/70">{d.culture}</p>
          </div>
          <ul className="space-y-4">
            {d.sustainability.map((s) => (
              <li key={s} className="flex gap-3 text-base text-cream/85">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cream/60" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="container-editorial py-20 md:py-28">
        <p className="eyebrow text-muted-foreground">A Suggested Itinerary</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">3 days, considered.</h2>
        <SampleDisclaimer className="mt-6 max-w-xl" />
        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl bg-border">
          {d.itinerary.map((it) => (
            <li key={it.day} className="grid grid-cols-1 gap-6 bg-background p-8 md:grid-cols-[100px_220px_1fr] md:gap-8 md:p-10">
              <div className="font-display text-4xl text-sandstone-deep md:text-5xl">
                0{it.day}
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground md:text-2xl">{it.title}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Lodging
                </p>
                <p className="text-sm text-foreground/75">{it.lodging}</p>
              </div>
              <div className="space-y-3 text-sm text-foreground/80">
                <DayRow label="Morning" value={it.morning} />
                <DayRow label="Afternoon" value={it.afternoon} />
                <DayRow label="Evening" value={it.evening} />
                <DayRow label="Dining" value={it.dining} />
                <DayRow label="Transport" value={it.transport} />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/planner"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Plan a {d.name} trip
          </Link>
          <Link
            to="/itinerary"
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
          >
            Open in Itinerary Builder
          </Link>
        </div>
      </section>

      {/* MAP CARDS */}
      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">Map-Ready Locations</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">Pinned on the ground.</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Save these to your trip board — each card includes coordinates ready for
            Google Maps, Apple Maps, or your itinerary app.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.mapCards.map((m) => (
              <a
                key={m.name}
                href={`https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lng}`}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-border bg-background p-5 transition hover:border-foreground/30 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="eyebrow text-sandstone-deep">{m.type}</p>
                    <h3 className="mt-2 font-display text-lg group-hover:text-forest">{m.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{m.area}</p>
                  </div>
                  <MapPin className="h-4 w-4 shrink-0 text-forest" strokeWidth={1.6} />
                </div>
                <p className="mt-4 text-sm text-foreground/75">{m.note}</p>
                <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">
                  {m.lat.toFixed(4)}, {m.lng.toFixed(4)}
                </p>
              </a>
            ))}
          </div>
          <SampleDisclaimer className="mt-8" />
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-border bg-background py-20">
        <div className="container-editorial">
          <h2 className="font-display text-3xl md:text-4xl">More destinations</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/destinations/$slug"
                params={{ slug: r.slug }}
                className="image-zoom group block overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3]">
                  <img src={r.image} alt={r.name} width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="eyebrow text-white/70">{r.country}</p>
                    <h3 className="mt-1 font-display text-2xl text-white">{r.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="eyebrow text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-background p-8 md:p-10">
      <h3 className="font-display text-2xl">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm text-foreground/80">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DayRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
