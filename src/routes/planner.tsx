import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, MapPin, Calendar, DollarSign, Heart, Loader2, Hotel, Utensils, Plane,
  Camera, Accessibility, Gauge, Coffee, Quote,
} from "lucide-react";
import { SampleDisclaimer } from "@/components/sample-disclaimer";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Travel Planner — Éto Travel Concierge" },
      { name: "description", content: "A conversational AI that drafts personalized itineraries, then a human advisor refines them with you." },
    ],
  }),
  component: Planner,
});

const INTERESTS = ["Photography", "Wildlife", "Food & Wine", "Culture", "Adventure", "Architecture", "Wellness", "Local Markets"];
const STYLES = ["Backpacker", "Comfortable", "Boutique", "Luxury", "Ultra-Luxury"];
const PACES = ["Slow & immersive", "Balanced", "Action-packed"];
const HOTEL_PREFS = ["Hostel / Guesthouse", "Boutique hotel", "Design-forward", "Luxury resort", "Eco-lodge"];
const FOOD_PREFS = ["Omnivore", "Vegetarian", "Vegan", "Pescatarian", "Gluten-free", "Halal", "Kosher"];
const MOBILITY = ["No restrictions", "Limited walking", "Wheelchair accessible required", "Avoid stairs"];
const PHOTO_WILD = ["Photography priority", "Wildlife priority", "Both", "Neither"];

type DayPlan = {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  lodging: string;
  dining: string;
  transport: string;
  costLevel: "$" | "$$" | "$$$" | "$$$$";
  advisorNote: string;
};

type Plan = {
  summary: string;
  whyRecommend: string;
  itinerary: DayPlan[];
  hotels: string[];
  activities: string[];
  restaurants: string[];
  transport: string[];
};

function costFor(style: string): DayPlan["costLevel"] {
  switch (style) {
    case "Backpacker":
      return "$";
    case "Comfortable":
      return "$$";
    case "Boutique":
      return "$$$";
    default:
      return "$$$$";
  }
}

function buildPlan(form: {
  destination: string;
  dates: string;
  budget: string;
  style: string;
  interests: string[];
  pace: string;
  hotelPref: string;
  foodPref: string;
  mobility: string;
  photoWild: string;
}): Plan {
  const dest = form.destination || "your destination";
  const focus = form.interests[0] || "discovery";
  const cost = costFor(form.style);
  return {
    summary: `A ${form.pace.toLowerCase()} ${form.style.toLowerCase()} journey through ${dest}, designed around ${focus.toLowerCase()} with ${form.foodPref.toLowerCase()} dining and ${form.hotelPref.toLowerCase()} stays. We've front-loaded morning light, paced cultural visits with rest, and reserved one evening for serendipity. Mobility profile: ${form.mobility.toLowerCase()}.`,
    whyRecommend: `I built this around the time of year you're traveling (${form.dates || "your dates"}) and your interest in ${form.interests.join(", ").toLowerCase() || "open exploration"}. The pace is intentionally ${form.pace.toLowerCase()} — you'll have at least one slow morning, one chef-led meal, and one evening with nothing on the schedule. ${form.photoWild === "Photography priority" || form.photoWild === "Both" ? "Mornings are timed to golden hour. " : ""}${form.photoWild === "Wildlife priority" || form.photoWild === "Both" ? "Wildlife windows align with seasonal activity. " : ""}This is a draft — your advisor will refine every detail.`,
    itinerary: [
      {
        day: 1,
        title: "Arrival & ease in",
        morning: `Private transfer from the airport into ${dest}; light walk near your hotel to acclimate.`,
        afternoon: "Slow lunch at a neighborhood favorite, then check in and rest.",
        evening: "Welcome dinner at a counter-seat restaurant within 10 minutes of your stay.",
        lodging: `${form.hotelPref} in a central, walkable neighborhood`,
        dining: `${form.foodPref}-friendly tasting at a beloved local kitchen`,
        transport: "Private airport transfer; walking otherwise",
        costLevel: cost,
        advisorNote: "Day one always under-promises. Jet lag is real and the city isn't going anywhere.",
      },
      {
        day: 2,
        title: `${focus} immersion`,
        morning: `Guided morning experience focused on ${focus.toLowerCase()} with a vetted local expert.`,
        afternoon: "Long lunch, then a leisurely afternoon at a museum or quiet neighborhood.",
        evening: "Sunset viewpoint, then dinner reserved months ahead.",
        lodging: `Same ${form.hotelPref.toLowerCase()} — we keep moves minimal`,
        dining: "Chef's-counter dinner; menu adapted to your dietary profile",
        transport: "Metro, rail, or pre-arranged driver depending on city",
        costLevel: cost,
        advisorNote: `This is the day to lean into ${focus.toLowerCase()}. Everything else this week is built around it.`,
      },
      {
        day: 3,
        title: "Hidden side",
        morning: form.photoWild.includes("Photography") || form.photoWild === "Both"
          ? "Photographer-led golden-hour walk in a non-touristy district."
          : "Neighborhood market walk and a coffee at a local roaster.",
        afternoon: "Off-itinerary lunch, then time built in for nothing in particular.",
        evening: "Cultural performance or live music at a small venue.",
        lodging: `Same ${form.hotelPref.toLowerCase()}`,
        dining: "Casual neighborhood spot — pasta, izakaya, or a wine bar depending on city",
        transport: "Walking and short transit hops",
        costLevel: cost,
        advisorNote: "The unscheduled hours are usually what people remember most.",
      },
      {
        day: 4,
        title: "Day trip",
        morning: "Scenic excursion to a nearby region — vineyards, coast, or mountains.",
        afternoon: form.photoWild.includes("Wildlife") || form.photoWild === "Both"
          ? "Wildlife viewing window with a naturalist guide."
          : "Long, slow lunch at a destination restaurant.",
        evening: "Return at sunset; quiet dinner near your hotel.",
        lodging: "Return to base — no packing required",
        dining: "Light dinner; you'll have eaten generously at lunch",
        transport: "Private driver or first-class rail",
        costLevel: cost,
        advisorNote: "We choose day trips that contrast with city days — different landscape, different pace.",
      },
      {
        day: 5,
        title: "Slow morning & departure",
        morning: "Unhurried breakfast, final coffee, last walk through your favorite block.",
        afternoon: "One short final visit if time allows; otherwise rest.",
        evening: "Private transfer to airport.",
        lodging: "Late check-out arranged",
        dining: "Final lunch at a place you couldn't bear to leave unvisited",
        transport: "Private airport transfer (EV where available)",
        costLevel: cost,
        advisorNote: "Don't book anything heavy on departure day. The trip needs space to land.",
      },
    ],
    hotels: [
      `${form.hotelPref} in a quiet central district — 3 vetted options shortlisted`,
      "Heritage property on the outskirts for a 1-night escape",
      form.style === "Ultra-Luxury" || form.style === "Luxury"
        ? "Aman, Belmond, or Rosewood for the splurge night"
        : "A locally-owned guesthouse for personality",
    ],
    activities: [
      `Private ${focus.toLowerCase()} experience with a vetted local guide`,
      form.photoWild.includes("Photography") || form.photoWild === "Both" ? "Photographer-led golden-hour walk" : "Architecture-focused walking tour",
      form.photoWild.includes("Wildlife") || form.photoWild === "Both" ? "Naturalist-led wildlife window" : "Cooking class with a household chef",
      "Cultural performance booked through a local concierge",
    ],
    restaurants: [
      `Tasting menu adapted to your ${form.foodPref.toLowerCase()} preferences`,
      "A multi-generational neighborhood favorite",
      "Counter-seat lunch with the chef",
      "Sunset cocktails at a local institution",
    ],
    transport: [
      "Private airport transfers (EV where available)",
      "First-class rail between cities, prebooked",
      form.mobility === "No restrictions" ? "Metro day passes for in-city travel" : "Private driver for in-city travel",
      "Pre-arranged driver for day trips and golden-hour shoots",
    ],
  };
}

function Planner() {
  const [destination, setDestination] = useState("Kyoto, Japan");
  const [dates, setDates] = useState("Early November, 8 nights");
  const [budget, setBudget] = useState("$8,000 – $12,000 per person");
  const [style, setStyle] = useState("Boutique");
  const [interests, setInterests] = useState<string[]>(["Photography", "Culture"]);
  const [pace, setPace] = useState("Balanced");
  const [hotelPref, setHotelPref] = useState("Boutique hotel");
  const [foodPref, setFoodPref] = useState("Omnivore");
  const [mobility, setMobility] = useState("No restrictions");
  const [photoWild, setPhotoWild] = useState("Photography priority");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);

  const toggle = (i: string) =>
    setInterests((arr) => (arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPlan(null);
    setTimeout(() => {
      setPlan(buildPlan({ destination, dates, budget, style, interests, pace, hotelPref, foodPref, mobility, photoWild }));
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
          className="h-fit space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8 lg:sticky lg:top-28"
        >
          <Field label="Destination" icon={MapPin}>
            <input value={destination} onChange={(e) => setDestination(e.target.value)} required placeholder="Kyoto, Iceland's Westfjords, the Amalfi coast…" className={inputCls} />
          </Field>
          <Field label="Travel dates" icon={Calendar}>
            <input value={dates} onChange={(e) => setDates(e.target.value)} placeholder="e.g. Late March, 8 nights" className={inputCls} />
          </Field>
          <Field label="Budget" icon={DollarSign}>
            <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="$5,000 – $15,000 per person" className={inputCls} />
          </Field>

          <Field label="Travel style" icon={Sparkles}>
            <Pills options={[...STYLES]} value={style} onChange={setStyle} />
          </Field>

          <Field label="Interests" icon={Heart}>
            <div className="flex flex-wrap gap-1.5">
              {INTERESTS.map((i) => {
                const on = interests.includes(i);
                return (
                  <button type="button" key={i} onClick={() => toggle(i)} className={pillCls(on)}>
                    {i}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Pace" icon={Gauge}>
            <Pills options={[...PACES]} value={pace} onChange={setPace} />
          </Field>

          <Field label="Hotel preference" icon={Hotel}>
            <Pills options={[...HOTEL_PREFS]} value={hotelPref} onChange={setHotelPref} />
          </Field>

          <Field label="Food preferences" icon={Coffee}>
            <Pills options={[...FOOD_PREFS]} value={foodPref} onChange={setFoodPref} />
          </Field>

          <Field label="Mobility needs" icon={Accessibility}>
            <Pills options={[...MOBILITY]} value={mobility} onChange={setMobility} />
          </Field>

          <Field label="Photography or wildlife" icon={Camera}>
            <Pills options={[...PHOTO_WILD]} value={photoWild} onChange={setPhotoWild} />
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
                <Sparkles className="h-4 w-4" /> Generate sample itinerary
              </>
            )}
          </button>
          <SampleDisclaimer />
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

const inputCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-foreground focus:outline-none";

function pillCls(on: boolean) {
  return `rounded-full border px-3 py-1.5 text-xs transition ${
    on
      ? "border-foreground bg-foreground text-background"
      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
  }`;
}

function Pills({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button type="button" key={o} onClick={() => onChange(o)} className={pillCls(value === o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof MapPin; children: React.ReactNode }) {
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
        <p className="mt-4 font-display text-2xl">Your sample itinerary will appear here.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill out the form and our concierge AI will draft a personalized plan in seconds.
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

      <SampleDisclaimer />

      <div className="rounded-2xl border-l-2 border-forest bg-secondary/40 p-6">
        <div className="flex items-center gap-2">
          <Quote className="h-4 w-4 text-forest" strokeWidth={1.5} />
          <p className="eyebrow text-forest-deep">Why I recommend this</p>
        </div>
        <p className="mt-3 text-base leading-relaxed text-foreground/85">{plan.whyRecommend}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          — Christopher, lead advisor
        </p>
      </div>

      <div>
        <p className="eyebrow mb-4 text-muted-foreground">The Days</p>
        <ol className="space-y-px overflow-hidden rounded-xl bg-border">
          {plan.itinerary.map((d) => (
            <li key={d.day} className="grid grid-cols-1 gap-5 bg-card p-6 md:grid-cols-[60px_1fr]">
              <div className="flex items-start justify-between md:block">
                <span className="font-display text-2xl text-sandstone-deep">0{d.day}</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground md:mt-3 md:inline-block">
                  {d.costLevel}
                </span>
              </div>
              <div>
                <h4 className="font-display text-lg">{d.title}</h4>
                <div className="mt-3 space-y-2 text-sm text-foreground/80">
                  <DayRow label="Morning" value={d.morning} />
                  <DayRow label="Afternoon" value={d.afternoon} />
                  <DayRow label="Evening" value={d.evening} />
                  <DayRow label="Lodging" value={d.lodging} />
                  <DayRow label="Dining" value={d.dining} />
                  <DayRow label="Transport" value={d.transport} />
                </div>
                <p className="mt-4 rounded-lg bg-secondary/50 px-3 py-2 text-xs italic text-foreground/75">
                  Advisor note — {d.advisorNote}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card icon={Hotel} title="Recommended Hotels" items={plan.hotels} />
        <Card icon={Sparkles} title="Activities" items={plan.activities} />
        <Card icon={Utensils} title="Restaurants" items={plan.restaurants} />
        <Card icon={Plane} title="Transportation" items={plan.transport} />
      </div>

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

function DayRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      <span>{value}</span>
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
