import { Info } from "lucide-react";
import { SAMPLE_DISCLAIMER } from "@/lib/destinations";

export function SampleDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-dashed border-sandstone-deep/40 bg-sandstone/20 px-4 py-3 text-xs text-foreground/70 ${className}`}
    >
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sandstone-deep" strokeWidth={1.6} />
      <p>{SAMPLE_DISCLAIMER}</p>
    </div>
  );
}
