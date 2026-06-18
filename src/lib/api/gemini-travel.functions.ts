import { GoogleGenAI } from "@google/genai";

type TravelForm = {
  destination: string;
  dates?: string;
  budget?: string;
  style?: string;
  interests?: string[];
  pace?: string;
  hotelPref?: string;
  foodPref?: string;
  mobility?: string;
  photoWild?: string;
};

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const ai = new GoogleGenAI({ apiKey });

function cleanGeminiJson(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export async function generateTravelGuide(form: TravelForm) {
  const prompt = `
You are an expert luxury travel advisor.

Create a destination-specific travel plan using REAL hotels, restaurants, attractions, neighborhoods, cafes, museums, and activities.

Destination: ${form.destination}
Dates: ${form.dates || "Not specified"}
Budget: ${form.budget || "Not specified"}
Travel Style: ${form.style || "Boutique"}
Interests: ${(form.interests || []).join(", ") || "Culture, food, photography"}
Pace: ${form.pace || "Balanced"}
Hotel Preference: ${form.hotelPref || "Boutique hotel"}
Food Preference: ${form.foodPref || "Omnivore"}
Mobility Needs: ${form.mobility || "No restrictions"}
Photography/Wildlife Priority: ${form.photoWild || "Neither"}

Return ONLY valid JSON.
Do not include markdown.
Do not include code fences.
Do not include commentary before or after the JSON.

Use this exact structure:

{
  "summary": "string",
  "whyRecommend": "string",
  "hotels": [
    "real hotel name — short reason why it fits"
  ],
  "restaurants": [
    "real restaurant name — short reason why it fits"
  ],
  "activities": [
    "real attraction/activity name — short reason why it fits"
  ],
  "transport": [
    "specific transportation recommendation"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "string",
      "morning": "real place/activity name with short description",
      "afternoon": "real place/activity name with short description",
      "evening": "real restaurant/activity name with short description",
      "lodging": "real hotel name or lodging area",
      "dining": "real restaurant name",
      "transport": "specific transportation guidance",
      "costLevel": "$$$",
      "advisorNote": "string"
    }
  ]
}

Create a 5-day itinerary.

Important:
- Use real named places.
- Avoid generic phrases like "local café", "historic neighborhood", "seasonal tasting menu", or "museum visit".
- If uncertain about current details, include "verify before booking" in the relevant note.
- Recommendations are sample planning suggestions and should be reviewed before booking.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text || "{}";
  const cleaned = cleanGeminiJson(text);

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Gemini returned invalid JSON:", cleaned);
    throw new Error("Failed to parse Gemini travel guide response");
  }
}
