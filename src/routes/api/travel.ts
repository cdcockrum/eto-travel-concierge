import { createFileRoute } from "@tanstack/react-router";
import { generateTravelGuide } from "@/lib/api/gemini-travel.functions";

export const Route = createFileRoute("/api/travel")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const guide = await generateTravelGuide(body);

          return Response.json(guide);
        } catch (error) {
          console.error("Travel API error:", error);

          return Response.json(
            {
              error: "Failed to generate travel guide",
              details:
                error instanceof Error ? error.message : "Unknown server error",
            },
            { status: 500 }
          );
        }
      },

      GET: async () => {
        return Response.json({
          status: "ok",
          message: "Travel API route is working.",
        });
      },
    },
  },
});
