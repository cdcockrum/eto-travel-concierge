import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Cpu, Camera, Compass, Globe2, Sparkles, Heart, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SampleDisclaimer } from "@/components/sample-disclaimer";

export const Route = createFileRoute("/plan-with-eto")({
  head: () => ({
    meta: [
      { title: "Plan-With-Éto — Éto Travel Concierge" },
      { name: "description", content: "A hybrid travel advisory practice: AI-powered research, human curation, photography-informed travel design." },
      { property: "og:title", content: "Plan-With-Éto — Éto Travel" },
      { property: "og:description", content: "AI-powered research, human curation, photography-informed travel design." },
      { property: "og:image", content: hero },
    ],
  }),
  component: WorkWith,
});

const PILLARS = [
  { icon: Cpu, title: "AI-Powered Research", body: "Concierge AI scans seasonal patterns, hotel availability, flight cost curves, and conditions in real time — surfacing options I'd never find by hand." },
  { icon: Heart, title: "Human Curation", body: "Every recommendation passes through my own filter — the hotel I've stayed in, the chef I trust, the guide I'd send my family to." },
  { icon: Camera, title: "Photography-Informed Design", body: "Itineraries paced for light, with viewpoints chosen by someone who has shot them at golden hour, in fog, and at the wrong time too." },
  { icon: Globe2, title: "Cultural Context", body: "I prepare you with etiquette notes, language basics, and the small acts of respect that change how a country welcomes you." },
  { icon: Compass, title: "Personalized Planning", body: "We work over calls and shared documents — your dietary needs, mobility, pace, and quirks shape every day of the trip." },
  { icon: Sparkles, title: "On-Trip Support", body: "If a flight cancels at 2 a.m. or a chef has a no-show table, you reach a human — not a chatbot, not an email queue." },
];

const PROCESS = [
  { step: "01", title: "Discovery Call", body: "A 45-minute conversation. We talk about the trips that mattered to you, your dietary world, who's traveling, and what would make this trip extraordinary." },
  { step: "02", title: "AI Research Sprint", body: "I run our concierge AI across hotels, flights, seasonal conditions, and openings — it returns a 30-page brief in an hour." },
  { step: "03", title: "Human Curation Pass", body: "I sit with that brief and add what only experience gives — the chef I'd warn you about, the room category that overlooks a noisy street, the back entrance to a temple." },
  { step: "04", title: "Draft Itinerary", body: "You receive a polished sample itinerary with morning, afternoon, evening, lodging, dining, and transport — plus a 'Why I recommend this' note for every day." },
  { step: "05", title: "Refinement & Booking", body: "Two rounds of revisions. Once locked, I book everything with my own supplier relationships — often at rates and perks unavailable to the public." },
  { step: "06", title: "On-Trip Concierge", body: "You travel with my mobile number. I'm a few time zones away and a phone call from a calm answer." },
];

const TESTIMONIALS = [
  {
    quote: "Christopher booked our 14 nights across Japan as if he'd lived there. The 5:30 a.m. wakeup for the bamboo grove was the best advice we ever followed.",
    name: "Anna & Mark — 2 weeks in Japan",
  },
  {
    quote: "I came in wanting a generic Iceland tour. He pushed me toward the Westfjords and a small-boat operator. It changed how I think about travel.",
    name: "Priya — 10 nights in Iceland",
  },
  {
    quote: "The 'Why I recommend this' notes on every day were a revelation. It felt like having a friend in the country, not a booking site.",
    name: "Jordan — Family of 5 in Costa Rica",
  },
];

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  destination: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10).max(2000),
});

function WorkWith() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Inquiry received. Christopher will reach out within one business day.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 900);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 h-[78vh] min-h-[560px] w-full overflow-hidden md:-mt-20">
        <img src={hero} alt="Christopher Éto Travel" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">Plan-With-Éto</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              A hybrid advisory: AI research, human judgment.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Travel planning that combines algorithmic depth with the taste, relationships, and quiet
              instincts of a working advisor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquire" className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink hover:opacity-90">
                Start an inquiry
              </a>
              <Link to="/planner" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20">
                Try the AI Planner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-editorial py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">The Practice</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              I'm Christopher. I plan trips for people who travel a lot.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-foreground/80">
            <p>
              I spent fifteen years as a travel photographer, six as an in-house advisor at a boutique
              agency, and the last three building Éto — a one-person practice that pairs custom AI
              research tools with hand-curated planning.
            </p>
            <p>
              My clients are usually return travelers — people who've done the big-city tour, who want
              to go deeper, who care about the chef and not just the Michelin star. Many of them are
              photographers, or married to one.
            </p>
            <p>
              I take a small number of trips each month so I can give each one real attention. If we're
              a fit, you'll feel it on the first call.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">The Approach</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Six things every trip gets.</h2>
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

      {/* PROCESS */}
      <section className="container-editorial py-24">
        <p className="eyebrow text-muted-foreground">How It Works</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">From first call to homeward flight.</h2>
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

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">From Recent Travelers</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">In their words.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                <Quote className="h-5 w-5 text-forest" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <SampleDisclaimer className="mt-8" />
        </div>
      </section>

      {/* INQUIRE */}
      <section id="inquire" className="border-t border-border bg-forest-deep py-24 text-cream">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow text-cream/60">Inquire</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tell me about your trip.</h2>
            <p className="mt-5 text-cream/75">
              Share a few details and I'll reach out within one business day to schedule a 45-minute
              discovery call. No fee for the call.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-cream/5 p-6 backdrop-blur md:p-8">
            <Input name="name" label="Your name" placeholder="Jane Doe" />
            <Input name="email" type="email" label="Email" placeholder="jane@email.com" />
            <Input name="destination" label="Destination(s) of interest" placeholder="Japan, Iceland, somewhere quiet…" />
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-cream/70">Tell me more</label>
              <textarea name="message" rows={5} maxLength={2000} placeholder="Dates, travel style, who's coming with you, what would make this trip extraordinary…" className="w-full rounded-md border border-cream/20 bg-cream/5 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50 focus:outline-none" />
            </div>
            <button type="submit" disabled={submitting} className="inline-flex h-11 items-center justify-center rounded-full bg-cream px-6 text-sm font-medium text-ink transition hover:opacity-90 disabled:opacity-70">
              {submitting ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-cream/70">{label}</label>
      <input name={name} type={type} maxLength={255} placeholder={placeholder} className="h-11 w-full rounded-md border border-cream/20 bg-cream/5 px-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50 focus:outline-none" />
    </div>
  );
}
