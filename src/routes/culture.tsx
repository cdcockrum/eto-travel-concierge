import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Languages, Users, Landmark, HandHeart } from "lucide-react";
import kyoto from "@/assets/dest-kyoto.jpg";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Cultural Intelligence — Éto Travel Concierge" },
      { name: "description", content: "Guidance on customs, etiquette, language, and history for respectful travel." },
    ],
  }),
  component: Culture,
});

const TOPICS = [
  { icon: Users, title: "Local Customs", body: "From shoe etiquette in Japan to the long lunch in Spain, the unwritten rules that shape daily life." },
  { icon: HandHeart, title: "Etiquette", body: "Greetings, gift-giving, tipping, and the gestures that travel further than language." },
  { icon: Landmark, title: "Cultural Expectations", body: "Dress codes for religious sites, photography restrictions, and quiet hours." },
  { icon: Languages, title: "Language Tips", body: "Twenty essential phrases per destination — pronounced respectfully, used confidently." },
  { icon: BookOpen, title: "Historical Context", body: "Brief, accurate background on the places you'll visit, beyond the guidebook summary." },
];

const SAMPLES = [
  { country: "Japan", tips: ["Remove shoes before entering homes and many restaurants", "Avoid speaking loudly on trains", "Tipping is not customary — and may confuse"] },
  { country: "France", tips: ["Always greet with 'Bonjour' before any request", "Lunch is sacred — don't expect quick service", "Address people with vous, not tu, until invited"] },
  { country: "Iceland", tips: ["Shower thoroughly (without swimwear) before entering pools", "Never walk on moss — it takes decades to recover", "Tipping is included in the bill"] },
];

function Culture() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 h-[60vh] min-h-[480px] w-full overflow-hidden md:-mt-20">
        <img src={kyoto} alt="Kyoto temple" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="relative z-10 flex h-full items-end pb-16">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">Cultural Intelligence Assistant</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              Travel respectfully. Travel deeply.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-editorial py-20">
        <div className="grid max-w-5xl gap-12 md:grid-cols-[1fr_1.6fr]">
          <p className="eyebrow text-muted-foreground">Our Approach</p>
          <p className="text-lg leading-relaxed text-foreground/80">
            The places we visit are not stage sets. They are living, layered cultures with their own
            grammar of behavior. Éto's cultural intelligence layer prepares you to enter that grammar
            with awareness — making your trip richer for you, and gentler for the places you visit.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="container-editorial pb-20">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <div key={t.title} className="bg-background p-8">
              <t.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl">{t.title}</h2>
              <p className="mt-3 text-sm text-foreground/75">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE TIPS */}
      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">Field Notes</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A sampling of what you'll learn.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SAMPLES.map((s) => (
              <div key={s.country} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display text-2xl text-forest">{s.country}</h3>
                <ul className="mt-5 space-y-3">
                  {s.tips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
