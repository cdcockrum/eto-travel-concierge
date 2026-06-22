import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Bed, Utensils, Compass, Map } from "lucide-react";
import tokyo from "@/assets/dest-tokyo.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import joshua from "@/assets/dest-joshua.jpg";

export const Route = createFileRoute("/sample-itineraries")({
  head: () => ({
    meta: [
      { title: "Sample Itineraries — ÉTO Travel Concierge" },
      {
        name: "description",
        content:
          "Explore sample ÉTO travel itineraries for Japan, Iceland, and Joshua Tree.",
      },
    ],
  }),
  component: SampleItineraries,
});

const itineraries = [
  {
    title: "Tokyo & Kyoto",
    subtitle: "First Journey to Japan",
    length: "9 Days",
    tags: ["Culture", "Food", "Photography"],
    image: tokyo,
    description:
      "Experience the contrast between Tokyo’s energy and Kyoto’s timeless traditions through carefully paced days, exceptional stays, and meaningful cultural experiences.",
    highlights: [
      "Sunrise at Fushimi Inari",
      "Private tea ceremony",
      "Tokyo food tour",
      "Traditional machiya stay",
      "Seasonal photography locations",
    ],
  },
  {
    title: "Iceland South Coast",
    subtitle: "Glaciers, Black Sand & Northern Light",
    length: "7 Days",
    tags: ["Adventure", "Photography", "Wildlife"],
    image: iceland,
    description:
      "Explore glaciers, black sand beaches, geothermal landscapes, and dramatic coastlines with a route designed around weather, light, and flexibility.",
    highlights: [
      "Jökulsárlón Glacier Lagoon",
      "Diamond Beach",
      "Ice cave experience",
      "Northern lights viewing",
      "Boutique countryside stays",
    ],
  },
  {
    title: "Joshua Tree",
    subtitle: "Creative Desert Retreat",
    length: "4 Days",
    tags: ["Art", "Design", "Slow Travel"],
    image: joshua,
    description:
      "Disconnect from routine and reconnect with creativity through desert landscapes, architectural stays, outdoor art, stargazing, and slow mornings.",
    highlights: [
      "Noah Purifoy Outdoor Museum",
      "Integratron sound bath",
      "Pioneertown dinner",
      "Stargazing",
      "Desert architecture",
    ],
  },
];

const includes = [
  {
    icon: Bed,
    title: "Curated Stays",
    body: "Hotels, lodges, villas, ryokan, eco-lodges, and unique accommodations selected for fit and atmosphere.",
  },
  {
    icon: Utensils,
    title: "Dining",
    body: "Restaurants, cafés, markets, coffee shops, tasting menus, and local favorites matched to the traveler.",
  },
  {
    icon: Compass,
    title: "Experiences",
    body: "Museums, guides, cultural activities, wildlife encounters, photography locations, and seasonal opportunities.",
  },
  {
    icon: Map,
    title: "Logistics",
    body: "Transportation, pacing, neighborhood strategy, timing, booking notes, and practical travel guidance.",
  },
];

function SampleItineraries() {
  return (
    <div className="container-editorial pt-12 pb-24 md:pt-20">
      <header className="max-w-3xl">
        <p className="eyebrow text-muted-foreground">Sample Itineraries</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">
          Journeys, thoughtfully shaped.
        </h1>
        <p className="mt-5 text-lg text-foreground/75">
          Every ÉTO itinerary is customized. These examples show the level of
          research, pacing, and curation included in a personalized travel plan.
        </p>
        <p className="mt-4 text-xs italic text-muted-foreground">
          Sample itineraries are for demonstration purposes. Final travel plans
          are customized and verified before booking.
        </p>
      </header>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        {itineraries.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="eyebrow text-white/70">{item.length}</p>
                <h2 className="mt-2 font-display text-3xl text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-foreground/75">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-24 border-y border-border bg-secondary/40 py-20">
        <div>
          <p className="eyebrow text-muted-foreground">What’s Included</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Every itinerary is built with practical detail.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-4">
          {includes.map((item) => (
            <div key={item.title} className="bg-background p-8">
              <item.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl">{item.title}</h3>
              <p className="mt-3 text-sm text-foreground/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-3xl bg-forest-deep px-8 py-20 text-center text-cream md:px-16 md:py-28">
        <p className="eyebrow text-cream/70">Plan With ÉTO</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl md:text-6xl">
          Ready for a journey designed around you?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/70">
          These itineraries are examples, not templates. ÉTO creates travel
          plans around your pace, interests, budget, and travel style.
        </p>
        <Link
          to="/plan-with-eto"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition hover:opacity-90"
        >
          Start an Inquiry
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
