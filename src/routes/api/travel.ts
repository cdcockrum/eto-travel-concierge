import { generateTravelGuide } from "~/lib/api/gemini-travel.functions";

export async function POST(request: Request) {
  const body = await request.json();

  const result = await generateTravelGuide({
    destination: body.destination,
    budget: body.budget,
    interests: body.interests,
  });

  return Response.json(result);
}
