import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/planner", label: "AI Planner" },
  { to: "/destinations", label: "Destinations" },
  { to: "/itinerary", label: "Itinerary" },
  { to: "/photography", label: "Photography" },
  { to: "/culture", label: "Culture" },
  { to: "/inspiration", label: "Inspiration" },
  { to: "/sustainable", label: "Sustainable" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-foreground md:text-[1.65rem]">
            Éto
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Travel Concierge
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.82rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/planner"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            Plan My Trip
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-editorial flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
