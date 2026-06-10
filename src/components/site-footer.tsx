import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-editorial grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h3 className="font-display text-3xl text-foreground">Éto</h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Extraordinary travel, thoughtfully curated. A boutique advisory powered by
            research, technology, and lived experience.
          </p>
        </div>
        <FooterCol
          title="Explore"
          items={[
            { to: "/destinations", label: "Destinations" },
            { to: "/photography", label: "Photography" },
            { to: "/inspiration", label: "Inspiration" },
            { to: "/sustainable", label: "Sustainable Travel" },
          ]}
        />
        <FooterCol
          title="Plan"
          items={[
            { to: "/planner", label: "AI Planner" },
            { to: "/itinerary", label: "Itinerary Builder" },
            { to: "/culture", label: "Cultural Intelligence" },
          ]}
        />
        <FooterCol
          title="Studio"
          items={[
            { to: "/about", label: "About Éto" },
            { to: "/about", label: "Contact" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="container-editorial flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Éto Travel Concierge. All rights reserved.</p>
          <p className="eyebrow">Designed for the curious traveler</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="eyebrow text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={`${item.to}-${i}`}>
            <Link
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
