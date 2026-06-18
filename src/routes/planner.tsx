import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  MapPin,
  Calendar,
  DollarSign,
  Heart,
  Loader2,
  Hotel,
  Utensils,
  Plane,
  Camera,
  Accessibility,
  Gauge,
  Coffee,
  Quote,
} from "lucide-react";
import { SampleDisclaimer } from "@/components/sample-disclaimer";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Travel Planner — Éto Travel Concierge" },
      {
        name: "description",
        content:
          "A conversational AI that drafts personalized itineraries, then a human advisor refines them with you.",
      },
    ],
  }),
  component: Planner,
});

const INTERESTS = [
  "Photography",
  "Wildlife",
  "Food & Wine",
  "Culture",
  "Adventure",
  "Architecture",
  "Wellness",
  "Local Markets",
];

const STYLES = ["Backpacker", "Comfortable", "Boutique", "Luxury", "Ultra-Luxury"];
const PACES = ["Slow & immersive", "Balanced", "Action-packed"];
const HOTEL_PREFS = [
  "Hostel / Guesthouse",
  "Boutique hotel",
  "Design-forward",
  "Luxury resort",
  "Eco-lodge",
];
const FOOD_PREFS = [
  "Omnivore",
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Halal",
  "Kosher",
];
const MOBILITY = [
  "No restrictions",
  "Limited walking",
  "Wheelchair accessible required",
  "Avoid stairs",
];
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
  costLevel: "$" | "$$" | "$$$" | "$$$$" | string;
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
  const [error, setError] = useState<string | null>(null);

  const toggle = (interest: string) => {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    );
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setPlan(null);
    setError(null);

    try {
      const response = await fetch("/api/travel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination,
          dates,
          budget,
          style,
          interests,
          pace,
          hotelPref,
          foodPref,
          mobility,
          photoWild,
        }),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(`API error ${response.status}: ${text}`);
      }

      const guide = JSON.parse(text) as Plan;
      setPlan(guide);
    } catch (err) {
      console.error("Travel planning error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating your itinerary."
      );
    } finally {
      setLoading(false);
    }
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
        <form
          onSubmit={submit}
          className="h-fit space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8 lg:sticky lg:top-28"
        >
          <Field label="Destination" icon={MapPin}>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              placeholder="Kyoto, Iceland's Westfjords, the Amalfi coast…"
              className={inputCls}
            />
          </Field>

          <Field label="Travel dates" icon={Calendar}>
            <input
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. Late March, 8 nights"
              className={inputCls}
            />
          </Field>

          <Field label="Budget" icon={DollarSign}>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="$5,000 – $15,000 per person"
              className={inputCls}
            />
          </Field>

          <Field label="Travel style" icon={Sparkles}>
            <Pills options={STYLES} value={style} onChange={setStyle} />
          </Field>

          <Field label="Interests" icon={Heart}>
            <div className="flex flex-wrap gap-1.5">
              {INTERESTS.map((interest) => {
                const selected = interests.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggle(interest)}
                    className={pillCls(selected)}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Pace" icon={Gauge}>
            <Pills options={PACES} value={pace} onChange={setPace} />
          </Field>

          <Field label="Hotel preference" icon={Hotel}>
            <Pills options={HOTEL_PREFS} value={hotelPref} onChange={setHotelPref} />
          </Field>

          <Field label="Food preferences" icon={Coffee}>
            <Pills options={FOOD_PREFS} value={foodPref} onChange={setFoodPref} />
          </Field>

          <Field label="Mobility needs" icon={Accessibility}>
            <Pills options={MOBILITY} value={mobility} onChange={setMobility} />
          </Field>

          <Field label="Photography or wildlife" icon={Camera}>
            <Pills options={PHOTO_WILD} value={photoWild} onChange={setPhotoWild} />
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
                <Sparkles className="h-4 w-4" /> Generate AI itinerary
              </>
            )}
          </button>

          <SampleDisclaimer />
        </form>

        <div className="min-h-[400px]">
          {error && (
            <div className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}

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

function pillCls(selected: boolean) {
  return `rounded-full border px-3 py-1.5 text-xs transition ${
    selected
      ? "border-foreground bg-foreground text-background"
      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
  }`;
}

function Pills({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => onChange(option)}
          className={pillCls(value === option)}
        >
          {option}
        </button>
      ))}
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
        <p className="mt-4 font-display text-2xl">Your AI itinerary will appear here.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill out the form and the concierge AI will draft a destination-specific plan.
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
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          {plan.summary}
        </p>
      </div>

      <SampleDisclaimer />

      <div className="rounded-2xl border-l-2 border-forest bg-secondary/40 p-6">
        <div className="flex items-center gap-2">
          <Quote className="h-4 w-4 text-forest" strokeWidth={1.5} />
          <p className="eyebrow text-forest-deep">Why I recommend this</p>
        </div>
        <p className="mt-3 text-base leading-relaxed text-foreground/85">
          {plan.whyRecommend}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          — Christopher, lead advisor
        </p>
      </div>

      <div>
        <p className="eyebrow mb-4 text-muted-foreground">The Days</p>
        <ol className="space-y-px overflow-hidden rounded-xl bg-border">
          {plan.itinerary?.map((day) => (
            <li
              key={day.day}
              className="grid grid-cols-1 gap-5 bg-card p-6 md:grid-cols-[60px_1fr]"
            >
              <div className="flex items-start justify-between md:block">
                <span className="font-display text-2xl text-sandstone-deep">
                  {String(day.day).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground md:mt-3 md:inline-block">
                  {day.costLevel}
                </span>
              </div>

              <div>
                <h4 className="font-display text-lg">{day.title}</h4>
                <div className="mt-3 space-y-2 text-sm text-foreground/80">
                  <DayRow label="Morning" value={day.morning} />
                  <DayRow label="Afternoon" value={day.afternoon} />
                  <DayRow label="Evening" value={day.evening} />
                  <DayRow label="Lodging" value={day.lodging} />
                  <DayRow label="Dining" value={day.dining} />
                  <DayRow label="Transport" value={day.transport} />
                </div>

                <p className="mt-4 rounded-lg bg-secondary/50 px-3 py-2 text-xs italic text-foreground/75">
                  Advisor note — {day.advisorNote}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card icon={Hotel} title="Recommended Hotels" items={plan.hotels || []} />
        <Card icon={Sparkles} title="Activities" items={plan.activities || []} />
        <Card icon={Utensils} title="Restaurants" items={plan.restaurants || []} />
        <Card icon={Plane} title="Transportation" items={plan.transport || []} />
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
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof MapPin;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-forest" strokeWidth={1.5} />
        <h4 className="font-display text-lg">{title}</h4>
      </div>

      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/80">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
