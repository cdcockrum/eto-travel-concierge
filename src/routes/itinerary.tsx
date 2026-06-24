import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, GripVertical, Trash2, Map, Heart, Download, Clock } from "lucide-react";

export const Route = createFileRoute("/itinerary")({
  head: () => ({
    meta: [
      { title: "Itinerary Builder — Éto Travel Concierge" },
      { name: "description", content: "Build multi-day itineraries with drag-and-drop activities." },
    ],
  }),
  component: ItineraryBuilder,
});

type Activity = { id: string; time: string; title: string; note: string };
type Day = { id: string; date: string; activities: Activity[] };

const SEED: Day[] = [
  {
    id: "d1",
    date: "Day 1 — Arrival in Kyoto",
    activities: [
      { id: "a1", time: "14:00", title: "Hoshinoya Kyoto", note: "Private boat transfer along the Oi river" },
      { id: "a2", time: "17:30", title: "Togetsukyo Bridge", note: "Sunset light over Arashiyama mountains" },
      { id: "a3", time: "19:30", title: "Kaiseki dinner at the ryokan", note: "Seasonal tasting menu, sake pairing" },
    ],
  },
  {
    id: "d2",
    date: "Day 2 — Eastern Temples",
    activities: [
      { id: "a4", time: "06:00", title: "Arashiyama Bamboo Grove", note: "Empty paths, soft golden light" },
      { id: "a5", time: "10:00", title: "Tenryu-ji Temple", note: "Zen rock and pond garden, UNESCO" },
      { id: "a6", time: "13:00", title: "Shoraian Kyoto", note: "Tofu kaiseki overlooking the river" },
    ],
  },
];

const SAVED = ["Hoshinoya Kyoto", "Bamboo Grove Path", "Fushimi Inari upper trail", "Tea ceremony at Camellia"];

function getMapQuery(days: Day[]) {
  const firstActivity = days[0]?.activities[0]?.title;
  return firstActivity || "Kyoto, Japan";
}

function ItineraryBuilder() {
  const [days, setDays] = useState<Day[]>(SEED);
  const [dragId, setDragId] = useState<string | null>(null);

  const mapQuery = getMapQuery(days);
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  const addActivity = (dayId: string) => {
    setDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? {
              ...d,
              activities: [
                ...d.activities,
                { id: crypto.randomUUID(), time: "12:00", title: "New activity", note: "" },
              ],
            }
          : d,
      ),
    );
  };

  const removeActivity = (dayId: string, aId: string) =>
    setDays((ds) =>
      ds.map((d) => (d.id === dayId ? { ...d, activities: d.activities.filter((a) => a.id !== aId) } : d)),
    );

  const addDay = () =>
    setDays((ds) => [
      ...ds,
      { id: crypto.randomUUID(), date: `Day ${ds.length + 1}`, activities: [] },
    ]);

  return (
    <div className="container-editorial py-16 md:py-24">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">The Builder</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Itinerary Builder.</h1>
          <p className="mt-5 text-lg text-foreground/75">
            Compose multi-day plans, rearrange activities, and export a trip your advisor can refine.
          </p>
        </div>

        <div className="flex gap-2">
          <a
            href="#itinerary-map"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            <Map className="h-4 w-4" />
            Map view
          </a>

          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {days.map((day, di) => (
            <section key={day.id} className="relative">
              <div className="flex items-end gap-4">
                <span className="font-display text-5xl text-sandstone-deep md:text-6xl">0{di + 1}</span>
                <input
                  value={day.date}
                  onChange={(e) =>
                    setDays((ds) => ds.map((d) => (d.id === day.id ? { ...d, date: e.target.value } : d)))
                  }
                  className="flex-1 border-b border-transparent bg-transparent pb-2 font-display text-2xl focus:border-border focus:outline-none md:text-3xl"
                />
              </div>

              <ol className="mt-6 space-y-3">
                {day.activities.map((a) => (
                  <li
                    key={a.id}
                    draggable
                    onDragStart={() => setDragId(a.id)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (!dragId || dragId === a.id) return;

                      setDays((ds) =>
                        ds.map((d) => {
                          if (d.id !== day.id) return d;

                          const items = [...d.activities];
                          const fromIdx = items.findIndex((x) => x.id === dragId);
                          const toIdx = items.findIndex((x) => x.id === a.id);

                          if (fromIdx === -1 || toIdx === -1) return d;

                          const [moved] = items.splice(fromIdx, 1);
                          items.splice(toIdx, 0, moved);

                          return { ...d, activities: items };
                        }),
                      );

                      setDragId(null);
                    }}
                    className="group grid cursor-grab grid-cols-[auto_70px_1fr_auto] items-start gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-foreground/30 active:cursor-grabbing"
                  >
                    <GripVertical className="mt-1 h-4 w-4 text-muted-foreground" />

                    <div className="flex items-center gap-1 text-xs font-medium text-foreground">
                      <Clock className="h-3 w-3 text-forest" />
                      {a.time}
                    </div>

                    <div>
                      <input
                        value={a.title}
                        onChange={(e) =>
                          setDays((ds) =>
                            ds.map((d) =>
                              d.id === day.id
                                ? {
                                    ...d,
                                    activities: d.activities.map((x) =>
                                      x.id === a.id ? { ...x, title: e.target.value } : x,
                                    ),
                                  }
                                : d,
                            ),
                          )
                        }
                        className="w-full border-b border-transparent bg-transparent font-medium focus:border-border focus:outline-none"
                      />

                      {a.note && <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>}
                    </div>

                    <button
                      onClick={() => removeActivity(day.id, a.id)}
                      className="opacity-0 transition group-hover:opacity-100"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                    </button>
                  </li>
                ))}
              </ol>

              <button
                onClick={() => addActivity(day.id)}
                className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Plus className="h-4 w-4" /> Add activity
              </button>
            </section>
          ))}

          <button
            onClick={addDay}
            className="w-full rounded-xl border border-dashed border-border py-6 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground"
          >
            <Plus className="mr-2 inline h-4 w-4" /> Add another day
          </button>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-ember" />
              <h3 className="font-display text-lg">Saved Places</h3>
            </div>

            <ul className="mt-4 space-y-2">
              {SAVED.map((s) => (
                <li key={s} className="rounded-md border border-border bg-background px-3 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="itinerary-map"
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <iframe
              title="Itinerary Map"
              src={mapUrl}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
