export type BudgetLevel = "Budget" | "Mid-range" | "Luxury" | "Mixed";
export type TravelStyle =
  | "Culture"
  | "Food"
  | "Photography"
  | "Wildlife"
  | "Adventure"
  | "History"
  | "Luxury"
  | "Sustainable"
  | "Family"
  | "Solo";

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  continent: string;
  summary: string;
  description: string;
  bestMonths: string[];
  featuredMonths: string[];
  travelStyles: TravelStyle[];
  budgetLevel: BudgetLevel;
  idealLength: string;
  bestFor: string[];
  whyGoNow: string;
  highlights: string[];
  neighborhoodsOrAreas: string[];
  hotels: {
    name: string;
    category: "Budget" | "Mid-range" | "Boutique" | "Luxury";
    area: string;
  }[];
  restaurants: string[];
  attractions: string[];
  photographySpots: string[];
  sustainabilityNotes: string;
  sampleItinerary: {
    day: number;
    title: string;
    morning: string;
    afternoon: string;
    evening: string;
  }[];
}

export const destinations: Destination[] = [
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "East Asia",
    continent: "Asia",
    summary:
      "A layered city of temples, neon, food culture, design, and quiet neighborhood discoveries.",
    description:
      "Tokyo rewards travelers who enjoy contrast: ancient shrines beside modern architecture, world-class dining beside tiny noodle shops, and calm gardens hidden inside one of the world’s largest cities.",
    bestMonths: ["March", "April", "October", "November"],
    featuredMonths: ["March", "April", "November"],
    travelStyles: ["Culture", "Food", "Photography", "Solo", "Luxury"],
    budgetLevel: "Mixed",
    idealLength: "5–7 days",
    bestFor: ["Food", "Design", "Street photography", "First-time Japan travel"],
    whyGoNow:
      "Spring and fall offer comfortable weather, seasonal color, and some of the best conditions for walking neighborhoods.",
    highlights: ["Meiji Shrine", "Yanaka", "Shinjuku Gyoen", "Tsukiji Outer Market"],
    neighborhoodsOrAreas: ["Shinjuku", "Ginza", "Ueno", "Yanaka", "Daikanyama"],
    hotels: [
      { name: "Nohga Hotel Ueno Tokyo", category: "Boutique", area: "Ueno" },
      { name: "Hotel Metropolitan Tokyo Marunouchi", category: "Mid-range", area: "Tokyo Station" },
      { name: "The Gate Hotel Tokyo", category: "Boutique", area: "Ginza" },
      { name: "Aman Tokyo", category: "Luxury", area: "Otemachi" },
    ],
    restaurants: ["Afuri Ramen", "Tsukiji Outer Market", "Ningyocho Imahan", "Koffee Mameya"],
    attractions: ["Meiji Shrine", "Tokyo National Museum", "Shibuya Crossing", "Senso-ji"],
    photographySpots: ["Tokyo International Forum", "Shibuya Crossing", "Yanaka Ginza", "Omoide Yokocho"],
    sustainabilityNotes:
      "Use Tokyo’s rail network, walk neighborhood routes, and support smaller locally owned restaurants and shops.",
    sampleItinerary: [
      {
        day: 1,
        title: "Classic Tokyo Arrival",
        morning: "Start at Meiji Shrine and walk through Yoyogi Park.",
        afternoon: "Explore Harajuku, Omotesando, and design shops in Aoyama.",
        evening: "Dinner in Shinjuku followed by night photography around Omoide Yokocho.",
      },
      {
        day: 2,
        title: "Old Tokyo and Museums",
        morning: "Visit Senso-ji and the surrounding Asakusa streets.",
        afternoon: "Explore Ueno Park and the Tokyo National Museum.",
        evening: "Walk Yanaka Ginza for a quieter neighborhood atmosphere.",
      },
      {
        day: 3,
        title: "Markets, Gardens, and Ginza",
        morning: "Breakfast and street food at Tsukiji Outer Market.",
        afternoon: "Visit Hamarikyu Gardens and explore Ginza.",
        evening: "Dinner near Tokyo Station or Yurakucho.",
      },
    ],
  },

  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Kansai",
    continent: "Asia",
    summary:
      "Japan’s cultural heart, known for temples, gardens, tea houses, craft traditions, and atmospheric streets.",
    description:
      "Kyoto is best experienced slowly. Its temples, gardens, historic districts, and seasonal beauty make it ideal for travelers interested in culture, photography, and contemplative exploration.",
    bestMonths: ["March", "April", "October", "November"],
    featuredMonths: ["April", "October", "November"],
    travelStyles: ["Culture", "History", "Photography", "Food"],
    budgetLevel: "Mixed",
    idealLength: "3–5 days",
    bestFor: ["Temples", "Gardens", "Traditional culture", "Photography"],
    whyGoNow:
      "Spring blossoms and fall foliage make Kyoto especially atmospheric, though early starts are essential to avoid crowds.",
    highlights: ["Fushimi Inari Taisha", "Kiyomizu-dera", "Arashiyama", "Nishiki Market"],
    neighborhoodsOrAreas: ["Gion", "Higashiyama", "Arashiyama", "Pontocho", "Philosopher’s Path"],
    hotels: [
      { name: "Hotel The Celestine Kyoto Gion", category: "Boutique", area: "Gion" },
      { name: "Cross Hotel Kyoto", category: "Mid-range", area: "Kawaramachi" },
      { name: "Ace Hotel Kyoto", category: "Boutique", area: "Central Kyoto" },
      { name: "The Ritz-Carlton Kyoto", category: "Luxury", area: "Kamogawa River" },
    ],
    restaurants: ["Nishiki Market", "Omen Ginkaku-ji", "Kichi Kichi Omurice", "% Arabica Higashiyama"],
    attractions: ["Fushimi Inari Taisha", "Kiyomizu-dera", "Ryoan-ji", "Nijo Castle"],
    photographySpots: ["Sannenzaka", "Arashiyama Bamboo Grove", "Fushimi Inari gates", "Philosopher’s Path"],
    sustainabilityNotes:
      "Use buses, trains, and walking routes. Visit popular temples early and explore lesser-known neighborhoods to reduce pressure on crowded sites.",
    sampleItinerary: [
      {
        day: 1,
        title: "Historic Higashiyama",
        morning: "Begin early at Kiyomizu-dera.",
        afternoon: "Walk Sannenzaka, Ninenzaka, and nearby temple streets.",
        evening: "Dinner in Gion or Pontocho.",
      },
      {
        day: 2,
        title: "Shrines and Markets",
        morning: "Visit Fushimi Inari before crowds build.",
        afternoon: "Explore Nishiki Market and central Kyoto.",
        evening: "Walk along the Kamogawa River.",
      },
      {
        day: 3,
        title: "Arashiyama",
        morning: "Visit the Bamboo Grove early.",
        afternoon: "Explore Tenryu-ji and nearby gardens.",
        evening: "Return to Kyoto for dinner near Kawaramachi.",
      },
    ],
  },

  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    region: "England",
    continent: "Europe",
    summary:
      "A historic, literary, and deeply layered city ideal for museums, architecture, cemeteries, pubs, and cultural wandering.",
    description:
      "London works especially well for travelers who enjoy history, neighborhoods, museums, literary sites, markets, and atmospheric walks. It can be classic or highly specialized depending on the traveler.",
    bestMonths: ["May", "June", "September", "October"],
    featuredMonths: ["May", "June", "October"],
    travelStyles: ["History", "Culture", "Food", "Photography"],
    budgetLevel: "Mixed",
    idealLength: "4–7 days",
    bestFor: ["Museums", "Historic walks", "Architecture", "Pubs", "Dark tourism"],
    whyGoNow:
      "Late spring and early fall offer better walking weather, long daylight, and fewer crowds than peak summer.",
    highlights: ["British Museum", "Highgate Cemetery", "Southbank", "Borough Market"],
    neighborhoodsOrAreas: ["Bloomsbury", "Southbank", "Shoreditch", "Kensington", "Hampstead"],
    hotels: [
      { name: "The Hoxton Shoreditch", category: "Boutique", area: "Shoreditch" },
      { name: "citizenM Tower of London", category: "Mid-range", area: "Tower Hill" },
      { name: "The Zetter Clerkenwell", category: "Boutique", area: "Clerkenwell" },
      { name: "The Savoy", category: "Luxury", area: "Covent Garden" },
    ],
    restaurants: ["Borough Market", "Dishoom", "The Ten Bells", "Regency Cafe"],
    attractions: ["British Museum", "Tower of London", "Tate Modern", "Highgate Cemetery"],
    photographySpots: ["Neal’s Yard", "St. Dunstan in the East", "Southbank", "Highgate Cemetery"],
    sustainabilityNotes:
      "Use the Underground, buses, and walking routes. Choose neighborhood-based days to minimize cross-city travel.",
    sampleItinerary: [
      {
        day: 1,
        title: "Classic London",
        morning: "Walk Westminster, Parliament, and St. James’s Park.",
        afternoon: "Visit the National Gallery and Covent Garden.",
        evening: "Dinner in Soho.",
      },
      {
        day: 2,
        title: "Museums and Markets",
        morning: "Visit the British Museum.",
        afternoon: "Explore Borough Market and the Southbank.",
        evening: "Walk across Millennium Bridge to St. Paul’s.",
      },
      {
        day: 3,
        title: "Atmospheric London",
        morning: "Tour Highgate Cemetery.",
        afternoon: "Explore Hampstead or Camden.",
        evening: "Pub stop at The Ten Bells or a historic East End pub.",
      },
    ],
  },

  {
    id: "paris",
    name: "Paris",
    country: "France",
    region: "Île-de-France",
    continent: "Europe",
    summary:
      "A city of art, architecture, food, gardens, and neighborhoods best explored slowly and deliberately.",
    description:
      "Paris offers iconic museums and monuments, but its real strength is neighborhood exploration: cafés, bookstores, markets, gardens, and quiet streets that reward slow travel.",
    bestMonths: ["April", "May", "September", "October"],
    featuredMonths: ["May", "September", "October"],
    travelStyles: ["Culture", "Food", "Photography", "Luxury", "History"],
    budgetLevel: "Mixed",
    idealLength: "4–6 days",
    bestFor: ["Art", "Food", "Architecture", "Romantic travel", "Walking"],
    whyGoNow:
      "Spring and fall offer beautiful light, comfortable weather, and a more enjoyable pace than peak summer.",
    highlights: ["Louvre", "Musée d’Orsay", "Le Marais", "Luxembourg Gardens"],
    neighborhoodsOrAreas: ["Le Marais", "Saint-Germain-des-Prés", "Montmartre", "Canal Saint-Martin"],
    hotels: [
      { name: "Hôtel des Grands Boulevards", category: "Boutique", area: "Grands Boulevards" },
      { name: "Hôtel Fabric", category: "Boutique", area: "Oberkampf" },
      { name: "Le Général Hôtel", category: "Mid-range", area: "République" },
      { name: "Le Meurice", category: "Luxury", area: "Rue de Rivoli" },
    ],
    restaurants: ["Du Pain et des Idées", "Breizh Café", "Bouillon République", "Café de Flore"],
    attractions: ["Louvre", "Musée d’Orsay", "Sainte-Chapelle", "Père Lachaise Cemetery"],
    photographySpots: ["Pont Alexandre III", "Montmartre", "Palais Royal", "Seine riverbanks"],
    sustainabilityNotes:
      "Walk when possible, use the Métro, and choose neighborhood days built around public transit rather than taxis.",
    sampleItinerary: [
      {
        day: 1,
        title: "Classic Paris",
        morning: "Start at the Louvre or Palais Royal.",
        afternoon: "Walk the Seine and visit Sainte-Chapelle.",
        evening: "Dinner in Le Marais.",
      },
      {
        day: 2,
        title: "Art and Gardens",
        morning: "Visit Musée d’Orsay.",
        afternoon: "Relax in Luxembourg Gardens and explore Saint-Germain.",
        evening: "Café dinner or wine bar.",
      },
      {
        day: 3,
        title: "Neighborhood Paris",
        morning: "Explore Montmartre early.",
        afternoon: "Visit Canal Saint-Martin or Père Lachaise.",
        evening: "Dinner near République or Oberkampf.",
      },
    ],
  },

  {
    id: "joshua-tree",
    name: "Joshua Tree",
    country: "United States",
    region: "California",
    continent: "North America",
    summary:
      "A desert escape shaped by sculptural landscapes, art installations, vintage shops, and otherworldly light.",
    description:
      "Joshua Tree is ideal for travelers who want desert landscapes, stargazing, hiking, design-forward stays, vintage shopping, and an artful slower pace.",
    bestMonths: ["March", "April", "October", "November"],
    featuredMonths: ["March", "April", "October"],
    travelStyles: ["Adventure", "Photography", "Sustainable", "Solo"],
    budgetLevel: "Mixed",
    idealLength: "2–4 days",
    bestFor: ["Desert landscapes", "Stargazing", "Hiking", "Photography", "Vintage shopping"],
    whyGoNow:
      "Spring and fall provide the best hiking temperatures and beautiful desert light.",
    highlights: ["Hidden Valley", "Keys View", "Cholla Cactus Garden", "Noah Purifoy Outdoor Desert Art Museum"],
    neighborhoodsOrAreas: ["Joshua Tree", "Yucca Valley", "Pioneertown", "Twentynine Palms"],
    hotels: [
      { name: "AutoCamp Joshua Tree", category: "Boutique", area: "Joshua Tree" },
      { name: "Pioneertown Motel", category: "Boutique", area: "Pioneertown" },
      { name: "The Bungalows by Homestead Modern", category: "Luxury", area: "Joshua Tree" },
      { name: "Fairfield Inn & Suites Twentynine Palms", category: "Mid-range", area: "Twentynine Palms" },
    ],
    restaurants: ["La Copine", "Pappy & Harriet’s", "Joshua Tree Coffee Company", "The Dez"],
    attractions: ["Joshua Tree National Park", "Noah Purifoy Outdoor Desert Art Museum", "Pioneertown", "World Famous Crochet Museum"],
    photographySpots: ["Cholla Cactus Garden", "Keys View", "Arch Rock", "Hidden Valley"],
    sustainabilityNotes:
      "Stay on marked trails, avoid disturbing desert soil, pack out waste, and respect fragile desert ecosystems.",
    sampleItinerary: [
      {
        day: 1,
        title: "Arrival and Desert Art",
        morning: "Arrive and get coffee at Joshua Tree Coffee Company.",
        afternoon: "Visit Noah Purifoy Outdoor Desert Art Museum.",
        evening: "Dinner in Pioneertown.",
      },
      {
        day: 2,
        title: "National Park Highlights",
        morning: "Hike Hidden Valley.",
        afternoon: "Visit Skull Rock and Arch Rock.",
        evening: "Sunset at Keys View.",
      },
      {
        day: 3,
        title: "Slow Desert Day",
        morning: "Visit Cholla Cactus Garden.",
        afternoon: "Explore vintage shops in Yucca Valley.",
        evening: "Stargazing if skies are clear.",
      },
    ],
  },

  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    region: "Nordic Europe",
    continent: "Europe",
    summary:
      "A dramatic landscape of waterfalls, glaciers, black sand beaches, geothermal pools, and northern light.",
    description:
      "Iceland is best for travelers who love landscape, photography, road trips, geology, and weather-dependent adventure.",
    bestMonths: ["June", "July", "September", "October", "February"],
    featuredMonths: ["February", "June", "September"],
    travelStyles: ["Adventure", "Photography", "Sustainable", "Wildlife"],
    budgetLevel: "Luxury",
    idealLength: "5–10 days",
    bestFor: ["Landscape photography", "Road trips", "Geology", "Northern lights", "Waterfalls"],
    whyGoNow:
      "Summer offers long daylight and road access; September and winter bring stronger chances for northern lights.",
    highlights: ["Reykjavík", "South Coast", "Jökulsárlón", "Snæfellsnes Peninsula"],
    neighborhoodsOrAreas: ["Reykjavík", "Vík", "Höfn", "Snæfellsnes", "Golden Circle"],
    hotels: [
      { name: "Center Hotels Laugavegur", category: "Mid-range", area: "Reykjavík" },
      { name: "Hotel Kría", category: "Boutique", area: "Vík" },
      { name: "Fosshotel Glacier Lagoon", category: "Mid-range", area: "South Coast" },
      { name: "The Retreat at Blue Lagoon", category: "Luxury", area: "Grindavík" },
    ],
    restaurants: ["Braud & Co", "Icelandic Street Food", "Sægreifinn", "Friðheimar"],
    attractions: ["Seljalandsfoss", "Skógafoss", "Reynisfjara", "Jökulsárlón Glacier Lagoon"],
    photographySpots: ["Vestrahorn", "Reynisfjara", "Kirkjufell", "Diamond Beach"],
    sustainabilityNotes:
      "Stay on marked paths, avoid off-road driving, respect weather closures, and choose responsible wildlife and glacier operators.",
    sampleItinerary: [
      {
        day: 1,
        title: "Reykjavík Arrival",
        morning: "Arrive and settle in.",
        afternoon: "Explore downtown Reykjavík and Hallgrímskirkja.",
        evening: "Dinner near the harbor.",
      },
      {
        day: 2,
        title: "Golden Circle",
        morning: "Visit Þingvellir National Park.",
        afternoon: "See Geysir and Gullfoss.",
        evening: "Optional geothermal soak.",
      },
      {
        day: 3,
        title: "South Coast",
        morning: "Visit Seljalandsfoss and Skógafoss.",
        afternoon: "Explore Reynisfjara black sand beach.",
        evening: "Stay near Vík.",
      },
    ],
  },

  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Costa Rica",
    region: "Central America",
    continent: "North America",
    summary:
      "A biodiversity-rich destination for rainforests, wildlife, beaches, volcanoes, and responsible nature travel.",
    description:
      "Costa Rica is ideal for wildlife-focused travelers, families, eco-conscious travelers, and anyone interested in rainforest, birds, beaches, and conservation.",
    bestMonths: ["December", "January", "February", "March", "April"],
    featuredMonths: ["January", "February", "March"],
    travelStyles: ["Wildlife", "Adventure", "Sustainable", "Family"],
    budgetLevel: "Mixed",
    idealLength: "7–10 days",
    bestFor: ["Wildlife", "Rainforests", "Birding", "Eco-lodges", "Families"],
    whyGoNow:
      "The dry season is excellent for wildlife viewing, rainforest activities, and beach time.",
    highlights: ["Monteverde Cloud Forest", "Arenal Volcano", "Manuel Antonio", "Tortuguero"],
    neighborhoodsOrAreas: ["Arenal", "Monteverde", "Manuel Antonio", "Tortuguero", "Osa Peninsula"],
    hotels: [
      { name: "Selina La Fortuna", category: "Budget", area: "La Fortuna" },
      { name: "Hotel Belmar", category: "Boutique", area: "Monteverde" },
      { name: "Arenas Del Mar", category: "Luxury", area: "Manuel Antonio" },
      { name: "Lapa Rios Lodge", category: "Luxury", area: "Osa Peninsula" },
    ],
    restaurants: ["Soda Viquez", "Tree House Restaurant", "El Avion", "Don Rufino"],
    attractions: ["Arenal Volcano", "Monteverde Cloud Forest", "Manuel Antonio National Park", "Tortuguero Canals"],
    photographySpots: ["Monteverde hanging bridges", "Arenal viewpoints", "Manuel Antonio beaches", "Tortuguero canals"],
    sustainabilityNotes:
      "Choose certified eco-lodges, avoid unethical wildlife encounters, and support local guides and conservation projects.",
    sampleItinerary: [
      {
        day: 1,
        title: "Arenal Arrival",
        morning: "Travel to La Fortuna.",
        afternoon: "Visit hot springs or waterfall trails.",
        evening: "Dinner with volcano views.",
      },
      {
        day: 2,
        title: "Rainforest and Volcano",
        morning: "Guided nature walk near Arenal.",
        afternoon: "Hanging bridges or zipline experience.",
        evening: "Relax at lodge.",
      },
      {
        day: 3,
        title: "Monteverde Cloud Forest",
        morning: "Travel to Monteverde.",
        afternoon: "Explore town and coffee options.",
        evening: "Night wildlife walk.",
      },
    ],
  },

  {
    id: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "Oceania",
    continent: "Oceania",
    summary:
      "A cinematic destination for mountains, coastlines, wildlife, Māori culture, road trips, and outdoor adventure.",
    description:
      "New Zealand is best suited for travelers who want landscapes, hiking, road trips, wildlife, and a slower adventure-focused itinerary.",
    bestMonths: ["November", "December", "January", "February", "March"],
    featuredMonths: ["December", "January", "February"],
    travelStyles: ["Adventure", "Photography", "Wildlife", "Sustainable"],
    budgetLevel: "Mixed",
    idealLength: "10–14 days",
    bestFor: ["Road trips", "Hiking", "Wildlife", "Mountains", "Scenic photography"],
    whyGoNow:
      "Late spring through early fall provides the best balance of road access, hiking conditions, and daylight.",
    highlights: ["Queenstown", "Fiordland", "Aoraki/Mount Cook", "Rotorua"],
    neighborhoodsOrAreas: ["Queenstown", "Wanaka", "Rotorua", "Auckland", "Te Anau"],
    hotels: [
      { name: "The Rees Hotel", category: "Luxury", area: "Queenstown" },
      { name: "YHA Aoraki Mt Cook", category: "Budget", area: "Aoraki/Mount Cook" },
      { name: "QT Queenstown", category: "Boutique", area: "Queenstown" },
      { name: "Novotel Rotorua Lakeside", category: "Mid-range", area: "Rotorua" },
    ],
    restaurants: ["Fergburger", "Botswana Butchery", "Federal Delicatessen", "Amisfield"],
    attractions: ["Milford Sound", "Aoraki/Mount Cook National Park", "Hobbiton", "Rotorua geothermal areas"],
    photographySpots: ["Milford Sound", "Lake Tekapo", "Roy’s Peak", "Hooker Valley Track"],
    sustainabilityNotes:
      "Respect biosecurity rules, stay on marked tracks, avoid disturbing wildlife, and use local conservation-minded operators.",
    sampleItinerary: [
      {
        day: 1,
        title: "Queenstown Arrival",
        morning: "Arrive and settle in.",
        afternoon: "Walk the lakefront and explore town.",
        evening: "Dinner with mountain views.",
      },
      {
        day: 2,
        title: "Adventure Day",
        morning: "Take a scenic drive or gondola ride.",
        afternoon: "Optional jet boat, hike, or winery visit.",
        evening: "Relax in Queenstown.",
      },
      {
        day: 3,
        title: "Fiordland",
        morning: "Travel toward Milford Sound or Te Anau.",
        afternoon: "Scenic cruise or nature walk.",
        evening: "Stay near Te Anau.",
      },
    ],
  },
];

export function getCurrentMonth(): string {
  return new Date().toLocaleString("en-US", { month: "long" });
}

export function getFeaturedDestinations(month = getCurrentMonth()): Destination[] {
  const featured = destinations.filter((destination) =>
    destination.featuredMonths.includes(month)
  );

  return featured.length > 0 ? featured : destinations.slice(0, 4);
}

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}

export function getDestinationsByStyle(style: TravelStyle): Destination[] {
  return destinations.filter((destination) =>
    destination.travelStyles.includes(style)
  );
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter((destination) =>
    destination.region.toLowerCase().includes(region.toLowerCase())
  );
}
