import { createFileRoute } from "@tanstack/react-router";
import { Camera, Sunrise, Mountain, Building, Bird } from "lucide-react";
import iceland from "@/assets/dest-iceland.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import joshua from "@/assets/dest-joshua.jpg";
import costa from "@/assets/dest-costarica.jpg";
import nz from "@/assets/dest-newzealand.jpg";
import paris from "@/assets/dest-paris.jpg";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography Travel Guides — Éto Travel Concierge" },
      { name: "description", content: "Itineraries planned around golden hour, scenic viewpoints, and seasonal light." },
    ],
  }),
  component: Photography,
});

const GUIDES = [
  { title: "Golden Hour", subtitle: "When the light becomes architecture.", image: paris, locations: ["Trocadéro at sunrise", "Tuscan farm roads at 7am", "Stokksnes peninsula in winter"], icon: Sunrise },
  { title: "Scenic Viewpoints", subtitle: "The composition is already there.", image: nz, locations: ["Roy's Peak, Wanaka", "Trolltunga, Norway", "Quiraing on Skye"], icon: Mountain },
  { title: "Wildlife", subtitle: "Patience, long lenses, ethics.", image: costa, locations: ["Osa Peninsula, Costa Rica", "Maasai Mara migration", "Patagonia puma tracking"], icon: Bird },
  { title: "Architecture", subtitle: "Symmetry, shadow, scale.", image: kyoto, locations: ["Naoshima art island", "Brutalist São Paulo", "Marrakech medina rooftops"], icon: Building },
];

const SEASONS = [
  { season: "Spring", note: "Cherry blossoms in Kyoto, wildflowers in California, soft European light." },
  { season: "Summer", note: "Iceland midnight sun, Norwegian fjords, Italian coast at dawn." },
  { season: "Autumn", note: "Japan momiji, New England color, Patagonia trekking season." },
  { season: "Winter", note: "Aurora in the Arctic, snow monkeys in Nagano, empty European cities." },
];

function Photography() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 h-[70vh] min-h-[520px] w-full overflow-hidden md:-mt-20">
        <img src={iceland} alt="Photography travel" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">A Special Section</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              Photography Travel Guides.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Itineraries built around light, season, and composition — by photographers who know the
              difference between a postcard and a portfolio piece.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="container-editorial py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {GUIDES.map((g) => (
            <article key={g.title} className="image-zoom group relative overflow-hidden rounded-2xl bg-card">
              <div className="relative aspect-[4/3]">
                <img src={g.image} alt={g.title} width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <g.icon className="h-6 w-6 text-cream" strokeWidth={1.5} />
                  <h2 className="mt-3 font-display text-3xl text-white">{g.title}</h2>
                  <p className="mt-1 text-sm text-white/80">{g.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {g.locations.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-foreground/80">
                      <Camera className="mt-1 h-3 w-3 shrink-0 text-forest" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEASONAL */}
      <section className="border-t border-border bg-secondary/40 py-24">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">Seasonal Recommendations</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Plan by light, not calendar.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
            {SEASONS.map((s) => (
              <div key={s.season} className="bg-background p-7">
                <h3 className="font-display text-2xl text-forest">{s.season}</h3>
                <p className="mt-3 text-sm text-foreground/75">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="image-zoom overflow-hidden rounded-2xl">
              <img src={joshua} alt="Joshua Tree" width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-muted-foreground">From the Field</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">"The trip you plan is the trip you make."</h2>
              <p className="mt-5 text-lg text-foreground/75">
                Photography itineraries are an act of preparation. We map sunrise angles to viewpoints,
                cross-reference moon phases with dark-sky locations, and pace your days around the
                quietest, most luminous hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
