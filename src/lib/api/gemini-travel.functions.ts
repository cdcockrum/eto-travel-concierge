import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateTravelGuide({
  destination,
  budget,
  interests,
}: {
  destination: string;
  budget: string;
  interests: string[];
}) {
  const prompt = `
Generate travel recommendations for:

Destination: ${destination}
Budget: ${budget}
Interests: ${interests.join(", ")}

Return ONLY valid JSON.

Schema:

{
  "overview": "",
  "hotels": [],
  "restaurants": [],
  "attractions": [],
  "itinerary": [
    {
      "day": 1,
      "morning": "",
      "lunch": "",
      "afternoon": "",
      "dinner": ""
    }
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "";

  return JSON.parse(text);
}
