import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Cpu, Camera, Compass, Globe2, Sparkles, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/plan-with-eto")({
  head: () => ({
    meta: [
      { title: "Plan With Éto — Éto Travel Concierge" },
      {
        name: "description",
        content:
          "Personalized travel advisory services combining AI-assisted research, human curation, destination expertise, and thoughtful itinerary design.",
      },
      { property: "og:title", content: "Plan With Éto — Éto Travel Concierge" },
      {
        property: "og:description",
        content:
          "Personalized travel planning with AI-assisted research, human curation, and advisor-level support.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: PlanWithEto,
});

const PILLARS = [
  {
    icon: Cpu,
    title: "AI-Assisted Research",
    body: "ÉTO uses modern planning tools to quickly surface destination options, seasonal considerations, hotel ideas, logistics, and experience possibilities.",
  },
  {
    icon: Heart,
    title: "Human Curation",
    body: "Every trip is shaped by judgment, taste, context, and traveler fit — not simply generated from a generic itinerary template.",
  },
  {
    icon: Camera,
    title: "Photography-Informed Design",
    body: "Itineraries can be paced around light, atmosphere, scenic viewpoints, architecture, wildlife, and meaningful visual moments.",
  },
  {
    icon: Globe2,
    title: "Cultural Context",
    body: "Travelers receive practical notes on etiquette, local customs, neighborhood character, language basics, and respectful travel.",
  },
  {
    icon: Compass,
    title: "Personalized Planning",
    body: "Trips are designed around your pace, budget, interests, hotel style, food preferences, mobility needs, and travel goals.",
  },
  {
    icon: Sparkles,
    title: "Advisor Support",
    body: "ÉTO helps turn scattered ideas into a polished plan, from early destination guidance to itinerary refinement.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Trip Inquiry",
    body: "Share where you want to go, when you want to travel, your budget, and the kind of experience you are hoping for.",
  },
  {
    step: "02",
    title: "Discovery & Direction",
    body: "ÉTO reviews your goals and helps clarify the best destination, pacing, hotel style, and planning approach.",
  },
  {
    step: "03",
    title: "Research & Curation",
    body: "AI-assisted research is paired with human review to identify hotels, neighborhoods, restaurants, activities, cultural sites, and logistics.",
  },
  {
    step: "04",
    title: "Custom Itinerary",
    body: "Receive a thoughtful itinerary with daily pacing, lodging ideas, dining notes, transportation guidance, and advisor recommendations.",
  },
  {
    step: "05",
    title: "Refinement",
    body: "The plan is adjusted around your feedback until it feels practical, personal, and aligned with the trip you want.",
  },
  {
    step: "06",
    title: "Travel Preparation",
    body: "Final notes may include packing guidance, cultural context, confirmation details, neighborhood tips, and practical travel reminders.",
  },
];

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  destination: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10).max(2000),
});

function PlanWithEto() {
  const contactEmail = "christopher@ccockrum.com";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  const result = schema.safeParse(data);

  if (!result.success) {
    toast.error(result.error.issues[0]?.message ?? "Please review the form");
    return;
  }

  setSubmitting(true);

  const response = await fetch("https://formspree.io/f/xgobglkd", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    toast.success("Inquiry received. ÉTO will follow up within one business day.");
    e.currentTarget.reset();
  } else {
    toast.error("Unable to send inquiry. Please try again.");
  }

  setSubmitting(false);
};

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
};

  return (
    <>
      <section className="relative -mt-16 h-[78vh] min-h-[560px] w-full overflow-hidden md:-mt-20">
        <img
          src={hero}
          alt="ÉTO Travel Concierge"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />

        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">Plan with ÉTO</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              Personalized travel planning, thoughtfully curated.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              ÉTO combines AI-assisted research, human curation, cultural context, and advisor-level planning to create trips that feel personal, practical, and memorable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inquire"
                className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
              >
                Start an inquiry
              </a>
              <Link
                to="/planner"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
              >
                Try the AI Planner
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">The Service</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Travel planning for people who want more than a generic itinerary.
            </h2>
          </div>

          <div className="space-y-5 text-lg text-foreground/80">
            <p>
              ÉTO Travel Concierge is a personalized travel advisory service for travelers who want a trip shaped around their interests, pace, budget, and style.
            </p>
            <p>
              Whether you are planning a cultural city escape, a photography-focused journey, a wildlife or conservation trip, a luxury retreat, or a meaningful family vacation, ÉTO helps turn ideas into a clear and carefully designed travel plan.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">The Approach</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            What ÉTO brings to every trip.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <p.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24">
        <p className="eyebrow text-muted-foreground">How It Works</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          From first idea to finished itinerary.
        </h2>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <li key={p.step} className="bg-background p-8">
              <p className="font-display text-3xl text-sandstone-deep">{p.step}</p>
              <h3 className="mt-3 font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-foreground/75">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="inquire" className="border-t border-border bg-forest-deep py-24 text-cream">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow text-cream/60">Inquire</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Tell ÉTO about your trip.
            </h2>
            <p className="mt-5 text-cream/75">
              Share a few details about where you want to go, who is traveling, and what kind of experience you want. ÉTO will follow up to begin shaping the plan.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-cream/5 p-6 backdrop-blur md:p-8">
            <Input name="name" label="Your name" placeholder="Jane Doe" />
            <Input name="email" type="email" label="Email" placeholder="jane@email.com" />
            <Input name="destination" label="Destination(s) of interest" placeholder="Japan, Iceland, Costa Rica…" />

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-cream/70">
                Tell us more
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                placeholder="Dates, travel style, budget, who's coming with you, and what would make this trip meaningful…"
                className="w-full rounded-md border border-cream/20 bg-cream/5 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-cream px-6 text-sm font-medium text-ink transition hover:opacity-90 disabled:opacity-70"
            >
              Open email
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-cream/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-cream/20 bg-cream/5 px-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50 focus:outline-none"
      />
    </div>
  );
}
