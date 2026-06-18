import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/travel")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          status: "ok",
          message: "Travel API route is working.",
        });
      },

      POST: async () => {
        return Response.json({
          summary: "Test successful",
          whyRecommend: "Testing API route and planner rendering.",
          hotels: ["Test Hotel"],
          restaurants: ["Test Restaurant"],
          activities: ["Test Activity"],
          transport: ["Test Transport"],
          itinerary: [
            {
              day: 1,
              title: "Test Day",
              morning: "Test Morning",
              afternoon: "Test Afternoon",
              evening: "Test Evening",
              lodging: "Test Hotel",
              dining: "Test Restaurant",
              transport: "Taxi",
              costLevel: "$$",
              advisorNote: "This is a test.",
            },
          ],
        });
      },
    },
  },
});
