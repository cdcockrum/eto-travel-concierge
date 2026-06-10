import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Train, Bird, Building2, HeartHandshake } from "lucide-react";
import costa from "@/assets/dest-costarica.jpg";

export const Route = createFileRoute("/sustainable")({
  head: () => ({
    meta: [
      { title: "Sustainable Travel — Éto Travel Concierge" },
      { name: "description", content: "Eco-friendly stays, responsible wildlife tourism, carbon-conscious planning." },
    ],
  }),
  component: Sustainable,
});

const PILLARS = [
  { icon: Building2, title: "Eco-Friendly Stays", body: "Locally-owned hotels and lodges that invest in their communities and minimize impact." },
  { icon: Bird, title: "Responsible Wildlife", body: "Ethical encounters with reputable operators — no cages, no chasing, no exploitation." },
  { icon: Leaf, title: "Carbon-Conscious", body: "Train over plane, direct over connecting, fewer cities for longer — and verified offsets." },
  { icon: HeartHandshake, title: "Conservation Projects", body: "Curated opportunities to contribute time or funds to projects we vet thoroughly." },
  { icon: Train, title: "Slow Transit", body: "Rail journeys, walking days, and small-group transfers that let you actually arrive." },
];

const PROJECTS = [
  { name: "Reforestation in Costa Rica", body: "Replanting native species on the Osa Peninsula with the Osa Conservation team." },
  { name: "Coral restoration in Indonesia", body: "Diving partnerships in Raja Ampat with biologists rebuilding reef systems." },
  { name: "Snow leopard tracking, Ladakh", body: "Citizen-science weeks in the Himalaya supporting the Snow Leopard Conservancy." },
];

function Sustainable() {
  return (
    <>
      <section className="relative -mt-16 h-[60vh] min-h-[460px] w-full overflow-hidden md:-mt-20">
        <img src={costa} alt="Costa Rica rainforest" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="relative z-10 flex h-full items-end pb-14">
          <div className="container-editorial">
            <p className="eyebrow text-white/70">Sustainable Travel</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-7xl">
              Leave a place better than you found it.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-editorial py-20">
        <p className="max-w-3xl text-lg text-foreground/80">
          Travel is a privilege with consequences. Éto's default settings favor low-impact stays,
          local guides, and slow, considered transport — because the most beautiful places stay
          beautiful when we treat them well.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-background p-7">
              <p.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl">{p.title}</h2>
              <p className="mt-3 text-sm text-foreground/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container-editorial">
          <p className="eyebrow text-muted-foreground">Conservation Partners</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Active projects we support.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display text-xl text-forest">{p.name}</h3>
                <p className="mt-3 text-sm text-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
