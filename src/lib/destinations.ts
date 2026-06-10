import tokyo from "@/assets/dest-tokyo.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import joshua from "@/assets/dest-joshua.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import paris from "@/assets/dest-paris.jpg";
import london from "@/assets/dest-london.jpg";
import nz from "@/assets/dest-newzealand.jpg";
import costa from "@/assets/dest-costarica.jpg";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  image: string;
  bestTime: string;
  climate: string;
  overview: string;
  attractions: string[];
  hiddenGems: string[];
  culture: string;
  food: string[];
  photography: string[];
  itinerary: { day: number; title: string; detail: string }[];
  tags: string[];
};

export const destinations: Destination[] = [
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    tagline: "Neon-soaked nights, monastic mornings.",
    image: tokyo,
    bestTime: "March–May, October–November",
    climate: "Humid subtropical · 5–30°C",
    overview:
      "A city that holds contradictions effortlessly — centuries-old shrines next to architectural showpieces, hushed kaiseki counters one block from karaoke towers. Tokyo rewards the patient traveler with a thousand small worlds.",
    attractions: [
      "Meiji Jingu Shrine at dawn",
      "teamLab Planets",
      "Tsukiji Outer Market",
      "Shibuya Sky observation",
      "Yanaka old town walk",
    ],
    hiddenGems: [
      "Kagurazaka's lantern-lit back alleys",
      "Daikanyama T-Site at midnight",
      "Nezu Museum garden",
    ],
    culture:
      "Quiet on public transit. Cash still rules many neighborhoods. A small bow goes a long way.",
    food: ["Sushi at Sushi Saito", "Tonkatsu in Meguro", "Ramen at Afuri", "Kissaten coffee ritual"],
    photography: [
      "Shibuya Crossing from Mag's Park",
      "Rooftop of Shibuya Sky at blue hour",
      "Yanaka cemetery cherry blossoms",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Shibuya", detail: "Settle into Aman Tokyo. Sunset at Shibuya Sky, dinner at a hidden izakaya in Ebisu." },
      { day: 2, title: "Old Tokyo", detail: "Yanaka district walking tour, tea ceremony, evening kaiseki." },
      { day: 3, title: "Design Day", detail: "21_21 Design Sight, teamLab Planets, Daikanyama bookshops." },
    ],
    tags: ["Culture", "Food & Wine", "Photography"],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    tagline: "A thousand years of stillness.",
    image: kyoto,
    bestTime: "April (sakura), November (momiji)",
    climate: "Temperate · 2–32°C",
    overview:
      "Kyoto is best experienced slowly. Wake before the tour buses, wander the Philosopher's Path at dawn, and let the city's restraint reshape your sense of beauty.",
    attractions: [
      "Fushimi Inari before sunrise",
      "Arashiyama Bamboo Grove",
      "Kinkaku-ji",
      "Nanzen-ji aqueduct",
      "Gion district at dusk",
    ],
    hiddenGems: [
      "Honen-in moss garden",
      "Kurama-dera mountain temple",
      "Demachi Futaba mochi shop",
    ],
    culture:
      "Photography is restricted in many private lanes of Gion. Geiko and maiko are at work — give them space.",
    food: ["Shojin ryori at Tenryu-ji", "Obanzai home cooking", "Matcha at Ippodo"],
    photography: [
      "Bamboo grove at 6am, no crowds",
      "Fushimi Inari upper paths",
      "Kamogawa river at golden hour",
    ],
    itinerary: [
      { day: 1, title: "Arashiyama", detail: "Bamboo at dawn, Tenryu-ji garden, riverside lunch." },
      { day: 2, title: "Eastern Temples", detail: "Philosopher's Path, Nanzen-ji, Gion evening stroll." },
      { day: 3, title: "Tea & Craft", detail: "Tea ceremony in a private machiya, indigo dye workshop." },
    ],
    tags: ["Culture", "Photography", "Solo"],
  },
  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    country: "USA",
    region: "North America",
    tagline: "Desert silence, cosmic skies.",
    image: joshua,
    bestTime: "October–April",
    climate: "Arid desert · 0–40°C",
    overview:
      "A landscape that strips away the unnecessary. The high desert offers an almost spiritual quiet, with night skies among the darkest in California.",
    attractions: ["Hidden Valley loop", "Keys View at sunset", "Cholla Cactus Garden", "Noah Purifoy Outdoor Museum"],
    hiddenGems: ["Pioneertown sound baths", "Pappy & Harriet's", "Integratron"],
    culture: "Leave no trace. The desert ecosystem is fragile — stay on trails.",
    food: ["La Copine in Yucca Valley", "Kitchen in the Desert", "Frontier Café"],
    photography: ["Keys View at golden hour", "Astrophotography near Cholla Garden", "Pioneertown street scenes"],
    itinerary: [
      { day: 1, title: "Arrive & Stargaze", detail: "Check into a desert casita, sunset at Keys View, dark-sky session." },
      { day: 2, title: "Park Day", detail: "Hidden Valley hike, Skull Rock, Cholla Garden at sunset." },
      { day: 3, title: "Art & Music", detail: "Noah Purifoy sculptures, Pioneertown lunch, live music at Pappy's." },
    ],
    tags: ["Adventure", "Photography", "Wildlife"],
  },
  {
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    region: "Europe",
    tagline: "Fire, ice, and the long blue hour.",
    image: iceland,
    bestTime: "June–August (midnight sun), February (aurora)",
    climate: "Subarctic · -5 to 15°C",
    overview:
      "Iceland is theater — geothermal valleys, glacier lagoons, basalt sea stacks. Rent a 4x4, plan loosely, and let the weather rewrite your day.",
    attractions: ["Reynisfjara black sand beach", "Jökulsárlón glacier lagoon", "Þingvellir", "Westfjords"],
    hiddenGems: ["Hornstrandir nature reserve", "Stokksnes peninsula", "Húsavík whale watching"],
    culture: "Respect roped-off areas; Icelandic moss takes decades to recover.",
    food: ["Dill restaurant", "Fish & chips at Reykjavík harbor", "Skyr at every breakfast"],
    photography: ["Diamond Beach at sunrise", "Stokksnes black-sand reflections", "Aurora over Kirkjufell"],
    itinerary: [
      { day: 1, title: "Reykjavík", detail: "Harpa, hot dog at Bæjarins Beztu, Sky Lagoon ritual." },
      { day: 2, title: "South Coast", detail: "Seljalandsfoss, Skógafoss, black sand at Reynisfjara." },
      { day: 3, title: "Glaciers", detail: "Vatnajökull ice cave tour, Diamond Beach at golden hour." },
    ],
    tags: ["Adventure", "Wildlife", "Photography"],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Europe",
    tagline: "The city as a slow ritual.",
    image: paris,
    bestTime: "April–June, September–October",
    climate: "Oceanic · 5–25°C",
    overview:
      "Skip the checklist. Paris is at its best when you give it time — a morning at Picasso, an unhurried lunch, a riverside walk at dusk.",
    attractions: ["Musée d'Orsay", "Sainte-Chapelle", "Marais walking", "Picasso Museum"],
    hiddenGems: ["Promenade Plantée", "Square du Vert-Galant", "Canal Saint-Martin"],
    culture: "Greet shopkeepers with 'Bonjour' before anything else. It changes everything.",
    food: ["Septime", "Du Pain et des Idées", "Le Comptoir du Relais", "Berthillon ice cream"],
    photography: ["Trocadéro at sunrise", "Pont Alexandre III at blue hour", "Rooftop of Galeries Lafayette"],
    itinerary: [
      { day: 1, title: "Right Bank", detail: "Marais walk, lunch at Breizh Café, Picasso Museum." },
      { day: 2, title: "Left Bank", detail: "Orsay, Luxembourg Gardens, dinner at a Saint-Germain bistro." },
      { day: 3, title: "Hidden Paris", detail: "Canal Saint-Martin, vintage shops, sunset at Sacré-Cœur." },
    ],
    tags: ["Culture", "Food & Wine", "Luxury"],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    region: "Europe",
    tagline: "A capital of small worlds.",
    image: london,
    bestTime: "May–September",
    climate: "Temperate maritime · 4–22°C",
    overview:
      "London rewards the wanderer — neighborhood by neighborhood, museum by museum. Anchor your stay in one quarter and explore on foot.",
    attractions: ["Tate Modern", "Sir John Soane's Museum", "Borough Market", "Hampstead Heath"],
    hiddenGems: ["Daunt Books Marylebone", "Wilton's Music Hall", "Kyoto Garden, Holland Park"],
    culture: "Mind the queue. Pub etiquette: order at the bar, no tipping required.",
    food: ["St. John", "Brat", "Padella", "Lyle's"],
    photography: ["Millennium Bridge to St Paul's", "Notting Hill pastel houses", "Greenwich Park panorama"],
    itinerary: [
      { day: 1, title: "South Bank", detail: "Tate Modern, lunch at Borough Market, walk to Westminster." },
      { day: 2, title: "Hidden Galleries", detail: "Soane Museum, Wallace Collection, dinner at St. John." },
      { day: 3, title: "Markets & Parks", detail: "Columbia Road flowers, Hampstead Heath, swim at Kenwood Ponds." },
    ],
    tags: ["Culture", "Food & Wine", "Family"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "Oceania",
    tagline: "Cinematic wilderness, end of the world.",
    image: nz,
    bestTime: "December–March (summer), June–August (snow)",
    climate: "Temperate oceanic · 5–25°C",
    overview:
      "Two islands, infinite landscapes. From Milford Sound's fjords to the Coromandel's hidden coves, Aotearoa is a slow road trip waiting to happen.",
    attractions: ["Milford Sound", "Tongariro Crossing", "Aoraki/Mount Cook", "Waiheke vineyards"],
    hiddenGems: ["Catlins coast", "Hot Water Beach", "Castlepoint Lighthouse"],
    culture: "Acknowledge Māori place names. A simple 'kia ora' is welcomed.",
    food: ["Amisfield in Queenstown", "Mister D in Napier", "Whitebait fritters anywhere coastal"],
    photography: ["Mitre Peak from Milford", "Lake Pukaki turquoise", "Wai-O-Tapu thermal pools"],
    itinerary: [
      { day: 1, title: "Queenstown", detail: "Arrival, lakeside dinner, sunset gondola." },
      { day: 2, title: "Fiordland", detail: "Milford Sound cruise, kayak in the fjords." },
      { day: 3, title: "Wanaka", detail: "Roy's Peak hike at dawn, lakeside lunch, stargazing." },
    ],
    tags: ["Adventure", "Wildlife", "Photography"],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    country: "Costa Rica",
    region: "Central America",
    tagline: "Pura vida in the cloud forest.",
    image: costa,
    bestTime: "December–April (dry season)",
    climate: "Tropical · 21–32°C",
    overview:
      "A small country with extraordinary biodiversity. Pair Monteverde's cloud forest with Osa Peninsula's wild Pacific coast for an unforgettable contrast.",
    attractions: ["Monteverde Cloud Forest", "Corcovado National Park", "Arenal Volcano", "Manuel Antonio"],
    hiddenGems: ["Nicoya Peninsula Blue Zone", "Cahuita Caribbean coast", "Río Celeste waterfall"],
    culture: "Sustainability is a national identity. Support locally-owned eco-lodges.",
    food: ["Casados", "Gallo pinto breakfasts", "Ceviche on the Pacific coast"],
    photography: ["Toucans in the canopy", "Arenal at sunrise", "Bioluminescent bay paddle"],
    itinerary: [
      { day: 1, title: "Arenal", detail: "Volcano hike, hanging bridges, hot springs at La Fortuna." },
      { day: 2, title: "Monteverde", detail: "Cloud forest canopy walk, night wildlife tour." },
      { day: 3, title: "Osa Peninsula", detail: "Corcovado guided trek — scarlet macaws and tapirs." },
    ],
    tags: ["Wildlife", "Adventure", "Sustainable"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
