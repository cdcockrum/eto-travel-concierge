import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Compass, Database, Cpu, Camera, Leaf, Sparkles, Map, Shield, Bell, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Éto — Travel Advisory" },
      { name: "description", content: "A boutique travel studio combining technology, research, and personal service." },
    ],
  }),
  component: About,
});

const ROLES = [
  { icon: Compass, title: "Travel Advisor", body: "Decades of on-the-ground knowledge and the relationships that open quiet doors." },
  { icon: Database, title: "Data Analyst", body: "Seasonal patterns, pricing models, and risk monitoring that inform every plan." },
  { icon: Cpu, title: "AI Engineer", body: "We build the concierge AI in-house — and never outsource your data." },
  { icon: Camera, title: "Photographer", body: "Itineraries paced for light, with viewpoints chosen by people who've shot them." },
  { icon: Leaf, title: "Conservation Advocate", body: "We measure success by the places we leave intact." },
];

const FUTURE = [
  { icon: Sparkles, title: "AI-Generated Guidebooks", body: "Custom guides built for your trip, printed and bound." },
  { icon: Map, title: "Smart Itinerary Optimization", body: "Continuous re-routing as conditions, prices, and openings change." },
  { icon: Shield, title: "Travel Risk Monitoring", body: "Real-time alerts on weather, geopolitics, and health advisories." },
  { icon: Bell, title: "Wildlife Migration Alerts", body: "Be notified when the great migrations align with your free dates." },
  { icon: Heart, title: "Destination Matching", body: "AI matchmaking between traveler taste and place." },
];

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(80),
  email: z.string().trim().email("A valid email helps us reply").max(255),
  destination: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "A few sentences help us prepare").max(2000),
});

function About() {
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
      toast.success("Inquiry received. An advisor will reach out within one business day.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 900);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 h-[70vh] min-h-[520px] w-full overflow-hidden md:-mt-20">
        <img src={hero} alt="Éto Travel" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">About Éto</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              A small studio, an unusual approach.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              We bring the rigor of a research desk and the warmth of a friend to the craft of travel.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="container-editorial py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <div>
            <p className="eyebrow text-muted-foreground">Our Approach</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Technology, research, personal service.</h2>
          </div>
          <div className="space-y-5 text-lg text-foreground/80">
            <p>
              Éto sits at the intersection of three traditions: the classical travel advisor with
              their notebooks of trusted contacts, the data analyst with their seasonal models, and
              the contemporary AI engineer building tools that augment human judgment.
            </p>
            <p>
              We use technology to do what technology does well — pattern-find, optimize, monitor —
              and we rely on people for what people do well: taste, empathy, and the call to a friend
              at the front desk.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">The Studio</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Five disciplines, one trip.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-5">
            {ROLES.map((r) => (
              <div key={r.title} className="bg-background p-7">
                <r.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl">{r.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="container-editorial py-24">
        <p className="eyebrow text-muted-foreground">In Development</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">What's coming next.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FUTURE.map((f) => (
            <div key={f.title} className="rounded-2xl border border-dashed border-border bg-background p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-sandstone/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-sandstone-deep">
                In development
              </div>
              <f.icon className="mt-5 h-6 w-6 text-forest" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-forest-deep py-24 text-cream">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow text-cream/60">Inquire</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tell us about your trip.</h2>
            <p className="mt-5 text-cream/75">
              Share a few details and an advisor will reach out within one business day with initial
              thoughts and next steps.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-cream/5 p-6 backdrop-blur md:p-8">
            <Input name="name" label="Your name" placeholder="Jane Doe" />
            <Input name="email" type="email" label="Email" placeholder="jane@email.com" />
            <Input name="destination" label="Destination(s) of interest" placeholder="Japan, Iceland, somewhere quiet…" />
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-cream/70">
                Tell us more
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                placeholder="Your dates, travel style, who's coming with you, what would make this trip extraordinary…"
                className="w-full rounded-md border border-cream/20 bg-cream/5 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 items-center justify-center rounded-full bg-cream px-6 text-sm font-medium text-ink transition hover:opacity-90 disabled:opacity-70"
            >
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
