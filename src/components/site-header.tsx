import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/planner", label: "AI Planner" },
  { to: "/destinations", label: "Destinations" },
  { to: "/itinerary", label: "Itinerary" },
  { to: "/photography", label: "Photography" },
  { to: "/culture", label: "Culture" },
  { to: "/sustainable", label: "Sustainable" },
  { to: "/plan-with-eto", label: "Plan With Éto" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const transparentHeader = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        transparentHeader
          ? "bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-xl"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span
            className={`font-display text-2xl tracking-tight md:text-[1.65rem] ${
              transparentHeader
                ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
                : "text-foreground"
            }`}
          >
            Éto
          </span>
          <span
            className={`hidden text-[0.65rem] uppercase tracking-[0.25em] sm:inline ${
              transparentHeader
                ? "text-white/90"
                : "text-muted-foreground"
            }`}
          >
            Travel Concierge
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[0.82rem] font-medium transition-colors ${
                transparentHeader
                   ? "text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] hover:text-white"
                   : "text-muted-foreground hover:text-foreground"
              }`}
              activeProps={{
                className: transparentHeader
                  ? "text-white"
                  : "text-stone-600 font-semibold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/planner"
            className="hidden rounded-full bg-forest-deep px-4 py-2 text-xs font-medium text-white transition hover:opacity-90 sm:inline-flex"
          >
            Plan My Trip
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              scrolled || open
                ? "border-border text-foreground"
                : "border-white/40 bg-black/20 text-white backdrop-blur-md"
            }`}
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
