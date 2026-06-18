import { generateTravelGuide } from "@/lib/api/gemini-travel.functions";

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();

    const guide = await generateTravelGuide(body);

    return Response.json(guide);
  } catch (error) {
    console.error("Travel API error:", error);

    return Response.json(
      {
        error: "Failed to generate travel guide",
      },
      {
        status: 500,
      }
    );
  }
}
