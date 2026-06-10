import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, MapPin, Calendar, DollarSign, Heart, Loader2, Hotel, Utensils, Plane, Backpack } from "lucide-react";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Travel Planner — Éto Travel Concierge" },
      { name: "description", content: "A conversational AI that drafts personalized itineraries in under a minute." },
    ],
  }),
  component: Planner,
});

const INTERESTS = ["Adventure", "Luxury", "Wildlife", "Photography", "Food & Wine", "Culture", "Family Travel", "Solo Travel"];
const STYLES = ["Backpacker", "Comfortable", "Boutique", "Luxury", "Ultra-Luxury"];

type Plan = {
  summary: string;
  itinerary: { day: number; title: string; detail: string }[];
  hotels: string[];
  activities: string[];
  restaurants: string[];
  transport: string[];
  packing: string[];
};

function buildPlan(form: {
  destination: string;
  dates: string;
  budget: string;
  interests: string[];
  style: string;
}): Plan {
  const dest = form.destination || "your destination";
  const focus = form.interests[0] || "discovery";
  return {
    summary: `A ${form.style.toLowerCase()} ${focus.toLowerCase()}-focused journey through ${dest}, balancing the iconic with the quietly extraordinary. We've front-loaded morning light for photography, paced cultural visits with rest, and reserved one evening for serendipity.`,
    itinerary: [
      { day: 1, title: "Arrival & Orientation", detail: `Private transfer, late check-in, and a curated welcome dinner near your stay in ${dest}.` },
      { day: 2, title: `${focus} Immersion`, detail: `A guided morning experience aligned with your interest in ${focus.toLowerCase()}, followed by a leisurely afternoon and locally-loved dinner.` },
      { day: 3, title: "Hidden Side", detail: `Off-the-itinerary neighborhoods, a long lunch, and an evening cultural performance.` },
      { day: 4, title: "Day Trip", detail: `A scenic excursion to a nearby region — landscape, gastronomy, or wildlife depending on season.` },
      { day: 5, title: "Slow Morning & Departure", detail: `An unhurried farewell breakfast, time for a final visit, and your transfer home.` },
    ],
    hotels: [
      `The Editor — a design-forward boutique in central ${dest}`,
      `Quiet House Retreat — heritage property on the outskirts`,
      `Aman or equivalent for the ultra-luxury extension`,
    ],
    activities: [
      `Private ${focus.toLowerCase()} experience with a vetted local guide`,
      "Photographer-led golden-hour walk",
      "Cooking class with a household chef",
    ],
    restaurants: [
      "A Michelin-starred tasting menu",
      "A multi-generational neighborhood favorite",
      "Sunset cocktails at a rooftop institution",
    ],
    transport: [
      "Private airport transfers (sustainable EV where available)",
      "Rail for inter-city; we'll prebook first-class",
      "Pre-arranged driver for day trips",
    ],
    packing: [
      "Layered, neutral palette for variable weather",
      "Comfortable walking shoes (cobblestones, gravel temple paths)",
      "Adapter + camera + small daypack",
      "Modest cover-up for religious sites",
    ],
  };
}

function Planner() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState<string[]>(["Photography"]);
  const [style, setStyle] = useState("Boutique");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);

  const toggle = (i: string) =>
    setInterests((arr) => (arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPlan(null);
    setTimeout(() => {
      setPlan(buildPlan({ destination, dates, budget, interests, style }));
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="container-editorial py-16 md:py-24">
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" /> Concierge AI · Beta
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl">The AI Planner.</h1>
        <p className="mt-5 text-lg text-foreground/75">
          Describe the trip you have in mind. In moments, we'll draft a personalized
          itinerary — then a human advisor refines every detail with you.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* FORM */}
        <form
          onSubmit={submit}
          className="h-fit space-y-7 rounded-2xl border border-border bg-card p-6 md:p-8 lg:sticky lg:top-28"
        >
          <Field label="Destination" icon={MapPin}>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              placeholder="Kyoto, Iceland's Westfjords, the Amalfi coast…"
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-foreground focus:outline-none"
            />
          </Field>
          <Field label="Travel dates" icon={Calendar}>
            <input
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. Late March, 8 nights"
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-foreground focus:outline-none"
            />
          </Field>
          <Field label="Budget" icon={DollarSign}>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="$5,000 – $15,000 per person"
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-foreground focus:outline-none"
            />
          </Field>

          <Field label="Interests" icon={Heart}>
            <div className="flex flex-wrap gap-1.5">
              {INTERESTS.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle(i)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition ${
                      on
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Travel style" icon={Sparkles}>
            <div className="flex flex-wrap gap-1.5">
              {STYLES.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    style === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Drafting your itinerary…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" /> Generate itinerary
              </>
            )}
          </button>
        </form>

        {/* OUTPUT */}
        <div className="min-h-[400px]">
          {!plan && !loading && <EmptyState />}
          {loading && (
            <div className="grid h-full place-items-center rounded-2xl border border-dashed border-border bg-secondary/30 p-12 text-center">
              <div>
                <Loader2 className="mx-auto h-6 w-6 animate-spin text-forest" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Drafting itinerary, vetting hotels, mapping golden-hour light…
                </p>
              </div>
            </div>
          )}
          {plan && <PlanView plan={plan} />}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-medium text-foreground">
        <Icon className="h-3.5 w-3.5 text-forest" />
        {label}
      </span>
      {children}
    </label>
  );
}

function EmptyState() {
  return (
    <div className="grid h-full place-items-center rounded-2xl border border-dashed border-border bg-secondary/30 p-12 text-center">
      <div className="max-w-sm">
        <Sparkles className="mx-auto h-6 w-6 text-forest" />
        <p className="mt-4 font-display text-2xl">Your itinerary will appear here.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill out a few details and our concierge AI will draft a personalized plan in seconds.
        </p>
      </div>
    </div>
  );
}

function PlanView({ plan }: { plan: Plan }) {
  return (
    <div className="space-y-8 rounded-2xl border border-border bg-card p-6 md:p-10">
      <div>
        <p className="eyebrow text-muted-foreground">Your draft itinerary</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">A trip, drafted.</h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">{plan.summary}</p>
      </div>

      <Section title="The Days">
        <ol className="space-y-px overflow-hidden rounded-xl bg-border">
          {plan.itinerary.map((d) => (
            <li key={d.day} className="grid grid-cols-[60px_1fr] gap-4 bg-card p-5">
              <span className="font-display text-2xl text-sandstone-deep">0{d.day}</span>
              <div>
                <h4 className="font-display text-lg">{d.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{d.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card icon={Hotel} title="Recommended Hotels" items={plan.hotels} />
        <Card icon={Sparkles} title="Activities" items={plan.activities} />
        <Card icon={Utensils} title="Restaurants" items={plan.restaurants} />
        <Card icon={Plane} title="Transportation" items={plan.transport} />
      </div>

      <Card icon={Backpack} title="Packing recommendations" items={plan.packing} />

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Send to my advisor
        </button>
        <button className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
          Save itinerary
        </button>
        <button className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
          Export PDF
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-muted-foreground">{title}</p>
      {children}
    </div>
  );
}

function Card({ icon: Icon, title, items }: { icon: typeof MapPin; title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-forest" strokeWidth={1.5} />
        <h4 className="font-display text-lg">{title}</h4>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-foreground/80">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
