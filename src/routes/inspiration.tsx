import { createFileRoute } from "@tanstack/react-router";
import tokyo from "@/assets/dest-tokyo.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import joshua from "@/assets/dest-joshua.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import paris from "@/assets/dest-paris.jpg";
import london from "@/assets/dest-london.jpg";
import nz from "@/assets/dest-newzealand.jpg";
import costa from "@/assets/dest-costarica.jpg";

export const Route = createFileRoute("/inspiration")({
  head: () => ({
    meta: [
      { title: "Travel Inspiration — Éto Travel Concierge" },
      { name: "description", content: "Curated collections: hidden gems, wildlife, national parks, photography journeys." },
    ],
  }),
  component: Inspiration,
});

const COLLECTIONS = [
  { title: "Hidden Gems", count: "12 destinations", image: kyoto, body: "Lesser-known places we send the curious." },
  { title: "Wildlife Adventures", count: "9 journeys", image: costa, body: "Ethical encounters, expert guides, the magic of long lenses." },
  { title: "Historic Cities", count: "15 cities", image: paris, body: "Layered urban experiences from Lisbon to Kyoto." },
  { title: "National Parks", count: "20 parks", image: nz, body: "From Iceland's Vatnajökull to New Zealand's Fiordland." },
  { title: "Dark Tourism", count: "7 places", image: london, body: "Sites of memory — visited with rigor and respect." },
  { title: "Photography Journeys", count: "10 expeditions", image: iceland, body: "Itineraries designed around light." },
  { title: "Sustainable Travel", count: "14 trips", image: joshua, body: "Low-impact stays, locally-owned operators, slow transport." },
  { title: "Culinary Routes", count: "11 menus", image: tokyo, body: "From kaiseki counters to roadside stalls." },
];

function Inspiration() {
  return (
    <div className="container-editorial py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow text-muted-foreground">The Hub</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Travel Inspiration.</h1>
        <p className="mt-5 text-lg text-foreground/75">
          Curated collections we update seasonally — to spark the trip you didn't know you wanted to take.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((c, i) => (
          <article
            key={c.title}
            className={`image-zoom group relative overflow-hidden rounded-2xl bg-card ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "aspect-[4/3] md:aspect-[3/2.4] md:h-full" : "aspect-[4/3]"}`}>
              <img src={c.image} alt={c.title} width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="eyebrow text-white/70">{c.count}</p>
                <h2 className={`mt-2 font-display text-white ${i === 0 ? "text-4xl md:text-6xl" : "text-3xl"}`}>{c.title}</h2>
                <p className="mt-2 max-w-md text-sm text-white/80">{c.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
