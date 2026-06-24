import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Sparkles, Leaf, Camera } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { destinations } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Éto Travel Concierge — Extraordinary Travel, Thoughtfully Curated" },
      {
        name: "description",
        content:
          "Custom itineraries, destination expertise, and AI-assisted research for creating unforgettable journeys.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = destinations.slice(0, 4);
  return (
    <>
      {/* HERO */}
      {/* HERO */}
<section className="relative -mt-16 h-screen min-h-[680px] w-full overflow-hidden md:-mt-20">
  <img
    src={heroImg}
    alt="Cinematic Icelandic coast"
    width={1920}
    height={1080}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Stronger overlays for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

  <div className="relative z-10 flex h-full items-end pb-20 md:pb-28">
    <div className="container-editorial">
      <div className="max-w-4xl rounded-3xl bg-black/25 p-6 backdrop-blur-[2px] md:p-8">
        <p className="eyebrow text-white/80">A Boutique Travel Studio</p>

        <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.02] text-white md:text-[4.5rem] lg:text-[5.5rem]">
          Extraordinary Travel,
          <br />
          <em className="font-light italic text-white">Thoughtfully Curated.</em>
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
          AI-powered travel planning combined with expert human guidance to create
          unforgettable journeys.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/planner"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-white"
          >
            Plan My Trip
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      
{/* HOW ETO WORKS */}
<section className="container-editorial pt-24 pb-8 md:pt-32 md:pb-12">
  <div className="max-w-3xl">
    <p className="eyebrow text-muted-foreground">How ÉTO Works</p>
    <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
      From first idea to finished itinerary.
    </h2>
    <p className="mt-5 text-lg text-foreground/75">
      ÉTO turns scattered travel ideas into a clear, personalized journey
      shaped around your interests, pace, budget, and travel style.
    </p>
  </div>

  <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
    {HOW_IT_WORKS.map((step) => (
      <div key={step.title} className="bg-background p-8">
        <p className="font-display text-4xl text-sandstone-deep">
          {step.step}
        </p>
        <h3 className="mt-5 font-display text-2xl">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-foreground/75">
          {step.body}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-10">
    <Link
      to="/plan-with-eto"
      className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
    >
      Plan With ÉTO
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  </div>
</section>
    
      {/* PHILOSOPHY */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">Our Philosophy</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              Travel that earns its place in your story.
            </h2>
          </div>
          <div className="space-y-5 text-base text-foreground/80 md:text-lg">
            <p>
              We build journeys at the intersection of research and intuition. Every itinerary
              is shaped by data — seasonal patterns, wildlife migrations, light angles — and
              softened by the knowledge of someone who has actually walked the path.
            </p>
            <p>
              Whether you're chasing aurora in the Westfjords or learning kaiseki in a Kyoto
              machiya, Éto brings the rigor of a research desk and the warmth of a friend.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 bg-background p-8">
              <p.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">Destinations</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">Where we're sending travelers now.</h2>
            </div>
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground"
            >
              View all destinations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((d, idx) => (
              <Link
                key={d.slug}
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className={`image-zoom group block overflow-hidden rounded-xl bg-card ${
                  idx === 0 ? "lg:row-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`relative ${idx === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px]" : "aspect-[4/5]"}`}>
                  <img
                    src={d.image}
                    alt={d.name}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="eyebrow text-white/70">{d.country}</p>
                    <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">{d.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{d.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-forest-deep px-8 py-20 text-center md:px-16 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
          <p className="eyebrow relative text-cream/70">The AI Planner</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance font-display text-4xl text-cream md:text-6xl">
            Describe your dream trip. We'll build the rest.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-cream/70">
            Our concierge AI drafts personalized itineraries in under a minute — then
            our advisors refine every detail with you.
          </p>
          <Link
            to="/planner"
            className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition hover:opacity-90"
          >
            Start Planning
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      
      {/* ETO DISPATCH */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="rounded-3xl border border-border bg-secondary/40 px-8 py-16 text-center md:px-16">
          <p className="eyebrow text-muted-foreground">
            ÉTO Dispatch
          </p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            One thoughtful email each month.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/75">
            Seasonal destinations, photography opportunities, wildlife migrations,
            travel insights, and carefully curated journeys from around the world.
          </p>

          <form
            action="https://formspree.io/f/xzdldwyk"
            method="POST"
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm"
            />

            <button
              type="submit"
              className="rounded-full bg-forest-deep px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>      
    </>
  );
}
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell us about your trip",
    body: "Share where you want to go, your budget, travel style, interests, and what kind of experience you hope to have.",
  },
  {
    step: "02",
    title: "We curate the journey",
    body: "ÉTO combines intelligent research tools with human expertise to recommend destinations, accommodations, experiences, and logistics.",
  },
  {
    step: "03",
    title: "Travel with confidence",
    body: "Receive a personalized itinerary complete with practical guidance, curated recommendations, and advisor refinement.",
  },
];

const PILLARS = [
  { icon: Sparkles, title: "AI-Augmented", body: "Itineraries drafted by intelligent agents trained on years of travel data." },
  { icon: Compass, title: "Human-Led", body: "An experienced advisor refines every plan with personal judgment." },
  { icon: Camera, title: "Photographer's Eye", body: "We plan around light, season, and composition — not opening hours." },
  { icon: Leaf, title: "Quietly Sustainable", body: "We favor locally-owned stays and low-impact transit by default." },
];
