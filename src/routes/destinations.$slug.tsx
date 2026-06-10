import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, CloudSun, MapPin } from "lucide-react";
import { getDestination, destinations, type Destination } from "@/lib/destinations";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
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
        <div className="container-editorial grid grid-cols-1 gap-6 py-8 md:grid-cols-3">
          <Meta icon={Calendar} label="Best time to visit" value={d.bestTime} />
          <Meta icon={CloudSun} label="Climate" value={d.climate} />
          <Meta icon={MapPin} label="Region" value={d.region} />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container-editorial py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] md:gap-24">
          <div>
            <p className="eyebrow text-muted-foreground">Overview</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A place worth knowing.</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">{d.overview}</p>
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="container-editorial pb-20">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          <Block title="Top Attractions" items={d.attractions} />
          <Block title="Hidden Gems" items={d.hiddenGems} />
          <Block title="Food Recommendations" items={d.food} />
          <Block title="Photography Spots" items={d.photography} />
        </div>
      </section>

      {/* CULTURE */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-editorial grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">Local Culture</p>
            <h2 className="mt-3 font-display text-3xl">Travel with grace.</h2>
          </div>
          <p className="text-lg text-foreground/80">{d.culture}</p>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="container-editorial py-20 md:py-28">
        <p className="eyebrow text-muted-foreground">A Suggested Itinerary</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">3 days, considered.</h2>
        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl bg-border">
          {d.itinerary.map((it) => (
            <li key={it.day} className="grid grid-cols-[80px_1fr] gap-8 bg-background p-8 md:grid-cols-[120px_200px_1fr] md:p-10">
              <div className="font-display text-4xl text-sandstone-deep md:text-5xl">
                0{it.day}
              </div>
              <h3 className="font-display text-xl text-foreground md:text-2xl">{it.title}</h3>
              <p className="col-span-2 text-foreground/75 md:col-span-1">{it.detail}</p>
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

      {/* RELATED */}
      <section className="border-t border-border bg-secondary/30 py-20">
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
