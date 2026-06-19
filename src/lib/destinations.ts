import tokyo from "@/assets/dest-tokyo.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import joshua from "@/assets/dest-joshua.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import paris from "@/assets/dest-paris.jpg";
import london from "@/assets/dest-london.jpg";
import nz from "@/assets/dest-newzealand.jpg";
import costa from "@/assets/dest-costarica.jpg";

export const SAMPLE_DISCLAIMER =
  "Sample recommendations for demonstration purposes. Final travel plans should be customized and verified before booking.";

export type HotelTier = "Budget" | "Mid-Range" | "Boutique" | "Luxury";
export type Hotel = { name: string; tier: HotelTier; neighborhood: string; note: string };
export type MapCard = { name: string; type: string; area: string; lat: number; lng: number; note: string };

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  featuredMonths: string[];
  tagline: string;
  image: string;
  bestTime: string;
  tripLength: string;
  climate: string;
  overview: string;
  whyRecommend: string;
  neighborhoods: { name: string; vibe: string }[];
  hotels: Hotel[];
  attractions: string[];
  hiddenGems: string[];
  culture: string;
  etiquette: string[];
  sustainability: string[];
  food: string[];
  coffee: string[];
  photography: string[];
  itinerary: { day: number; title: string; morning: string; afternoon: string; evening: string; lodging: string; dining: string; transport: string }[];
  mapCards: MapCard[];
  tags: string[];
};

export const destinations: Destination[] = [
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    featuredMonths: ["March", "April", "October", "November"],
    tagline: "Neon-soaked nights, monastic mornings.",
    image: tokyo,
    bestTime: "Late March–early May (sakura) and October–November (clear, crisp)",
    tripLength: "5–7 nights, ideally paired with 3 nights in Kyoto",
    climate: "Humid subtropical · 5–30°C across the year",
    overview:
      "Tokyo holds contradictions effortlessly: Meiji Jingu's cedars one block from Harajuku's neon, a hushed kaiseki counter above a karaoke tower. The city rewards travelers who slow down and let one neighborhood at a time reveal itself.",
    whyRecommend:
      "I send first-timers to Tokyo because nowhere else compresses so many distinct micro-cultures into one rail map. With a Suica card and a loose plan, you can move from a 6 a.m. shrine walk in Yoyogi to a tempura counter in Ginza to a jazz kissa in Shinjuku. And each one will feel like its own trip.",
    neighborhoods: [
      { name: "Aoyama / Omotesando", vibe: "Calm, design-led base: leafy boulevards, easy metro access, walkable to Shibuya and Harajuku." },
      { name: "Marunouchi", vibe: "Polished business district near Tokyo Station, ideal for shinkansen day trips and first-time arrivals." },
      { name: "Yanaka", vibe: "Old Tokyo: wooden shopfronts, cats, cemeteries, slow mornings." },
      { name: "Shimokitazawa", vibe: "Vintage shops, tiny live houses, and the city's best independent coffee scene." },
    ],
    hotels: [
      { name: "UNPLAN Kagurazaka", tier: "Budget", neighborhood: "Kagurazaka", note: "Design-forward hostel with private rooms in a lantern-lit former geisha quarter." },
      { name: "Hotel Niwa Tokyo", tier: "Mid-Range", neighborhood: "Jimbocho", note: "Quiet ryokan-style hotel near Imperial Palace gardens; excellent breakfast." },
      { name: "Trunk Hotel Cat Street", tier: "Boutique", neighborhood: "Shibuya / Harajuku", note: "Walkable to everything fashion and food — strong rooftop bar." },
      { name: "Aman Tokyo", tier: "Luxury", neighborhood: "Otemachi", note: "33rd-floor onsen, Imperial Palace views, the gold standard for service in Asia." },
    ],
    attractions: [
      "Meiji Jingu Shrine at 6:30 a.m. (before tour buses)",
      "teamLab Planets — book the earliest slot",
      "Shibuya Sky observation at blue hour",
      "Tsukiji Outer Market for a tamago-and-uni breakfast",
      "Nezu Museum & garden in Aoyama",
    ],
    hiddenGems: [
      "Kagurazaka's lantern-lit back alleys after dark",
      "Daikanyama T-Site bookstore at midnight",
      "Hotel Okura Heritage Wing lobby — mid-century preservation",
      "Bar Ben Fiddich in Nishi-Shinjuku for foraged cocktails",
    ],
    culture:
      "Tokyo runs on quiet competence. Trains are silent, queues are sacred, and small acts of consideration carry weight that words cannot. A traveler who watches first and acts second will be welcomed everywhere.",
    etiquette: [
      "No phone calls on trains; keep voices low.",
      "Cash is still essential outside major chains. Carry ¥10,000 minimum.",
      "Shoes off when you see a raised entry threshold (genkan).",
      "Don't tip. It can cause confusion or be politely returned.",
    ],
    sustainability: [
      "Use the rail and metro.  The JR Yamanote loop reaches almost every neighborhood worth visiting.",
      "Carry a small towel and reusable bottle; public bins are rare and tap water is excellent.",
      "Skip the disposable umbrella stands at konbini. Bring a packable one from home.",
    ],
    food: [
      "Sushi Saito (referral required) or Sushi Yoshitake for the omakase ritual",
      "Tonkatsu Maisen Aoyama: the original branch in a converted bathhouse",
      "Afuri ramen, Ebisu: yuzu-shio that converts skeptics",
      "Kagari ramen, Ginza: chicken paitan, a 30-minute queue is normal",
    ],
    coffee: [
      "Koffee Mameya Kakeru, Kiyosumi: tasting-menu coffee in a former warehouse",
      "Glitch Coffee, Jimbocho: light-roast pioneers",
      "Fuglen Tokyo, Tomigaya: Norwegian roasters, neighborhood institution",
      "Bear Pond Espresso, Shimokitazawa: old-school perfectionist",
    ],
    photography: [
      "Shibuya Crossing from Mag's Park rooftop, 5 p.m. on a wet evening",
      "Shibuya Sky open-air deck at blue hour (45 min after sunset)",
      "Yanaka cemetery cherry blossoms in early April, 7 a.m.",
      "Tokyo Tower from Roppongi Hills observation, golden hour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive & ease in: Aoyama",
        morning: "Narita Express to Tokyo Station; private car to hotel; soak and reset.",
        afternoon: "Slow walk Omotesando → Cat Street → Meiji Jingu (enter from Harajuku gate).",
        evening: "Counter-seat dinner at a yakitori-ya in Ebisu; quiet nightcap at Bar Trench.",
        lodging: "Trunk Hotel Cat Street",
        dining: "Toriki, Meguro: chef's choice yakitori",
        transport: "Private airport transfer; metro for the evening",
      },
      {
        day: 2,
        title: "Old Tokyo: Yanaka & Ueno",
        morning: "Walking tour of Yanaka with a local guide; stop for taiyaki at Tsubame Doraneko.",
        afternoon: "Tokyo National Museum at Ueno: Focus on the Honkan main hall.",
        evening: "Tea ceremony in a private machiya in Kagurazaka, then kaiseki at Ishikawa.",
        lodging: "Trunk Hotel Cat Street",
        dining: "Ishikawa, Kagurazaka: 3-star kaiseki",
        transport: "Metro and short taxi between Yanaka and Kagurazaka",
      },
      {
        day: 3,
        title: "Design & light: teamLab to Shibuya Sky",
        morning: "First-entry slot at teamLab Planets, Toyosu.",
        afternoon: "21_21 Design Sight in Midtown; bookshop wander at Daikanyama T-Site.",
        evening: "Shibuya Sky at blue hour, dinner at a Nakameguro izakaya along the canal.",
        lodging: "Trunk Hotel Cat Street",
        dining: "Higashi-Yama, Nakameguro — modern Japanese in a quiet courtyard",
        transport: "Yurikamome line to Toyosu; metro back",
      },
    ],
    mapCards: [
      { name: "Meiji Jingu Shrine", type: "Cultural Site", area: "Shibuya", lat: 35.6764, lng: 139.6993, note: "Arrive at opening for stillness under the cedars." },
      { name: "teamLab Planets", type: "Experience", area: "Toyosu", lat: 35.6492, lng: 139.7905, note: "Wear shorts or roll-up pants — you'll wade through water." },
      { name: "Shibuya Sky", type: "Viewpoint", area: "Shibuya", lat: 35.6586, lng: 139.7016, note: "Book the 4:30 p.m. slot in winter for blue hour." },
      { name: "Aman Tokyo", type: "Hotel · Luxury", area: "Otemachi", lat: 35.6873, lng: 139.7649, note: "Onsen on the 33rd floor with Imperial Palace views." },
      { name: "Koffee Mameya Kakeru", type: "Coffee", area: "Kiyosumi", lat: 35.6802, lng: 139.7986, note: "Reserve the tasting-flight seating in advance." },
    ],
    tags: ["Culture", "Food & Wine", "Photography"],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    featuredMonths: ["March", "April", "October", "November"],
    tagline: "A thousand years of stillness.",
    image: kyoto,
    bestTime: "Early April (sakura) and mid-November (momiji); avoid Golden Week and Obon",
    tripLength: "3–4 nights. Long enough for early-morning temple visits",
    climate: "Temperate · 2°C winter mornings to 35°C August afternoons; bring layers",
    overview:
      "Kyoto is best experienced before sunrise. Wake at 5:30, walk the Philosopher's Path before the buses arrive, and let the city's restraint reshape your sense of beauty. By 10 a.m. the crowds return. By then you should be back at your machiya with a coffee.",
    whyRecommend:
      "Kyoto is the only city I plan around sunrise. The same temples that feel like theme parks at noon are profoundly moving at 6 a.m., and the discipline of getting up rewards you all week. Pair it with Tokyo, never substitute it.",
    neighborhoods: [
      { name: "Higashiyama", vibe: "Stone lanes, Kiyomizu-dera at your doorstep. Atmospheric but busy by mid-morning." },
      { name: "Gion", vibe: "Old machiya townhouses, geiko district. Atmospheric evenings, quiet days." },
      { name: "Arashiyama", vibe: "Bamboo grove and river views. Best as a base if you want pre-sunrise access." },
      { name: "Nishijin", vibe: "Working textile district: local cafes, no tourists, real Kyoto." },
    ],
    hotels: [
      { name: "Piece Hostel Sanjo", tier: "Budget", neighborhood: "Sanjo", note: "Modern hostel with private rooms; 5 minutes to subway and Pontocho." },
      { name: "Hotel Anteroom Kyoto", tier: "Mid-Range", neighborhood: "Kujo", note: "Art-driven hotel with an excellent gallery and breakfast bakery." },
      { name: "Sowaka", tier: "Boutique", neighborhood: "Gion", note: "23-room machiya conversion with a quiet courtyard — book months ahead." },
      { name: "Aman Kyoto", tier: "Luxury", neighborhood: "North Kyoto (forested)", note: "Forest pavilions on a former garden estate; onsen, kaiseki, total quiet." },
    ],
    attractions: [
      "Fushimi Inari at 5:30 a.m. Walk the full 2-hour loop",
      "Arashiyama Bamboo Grove before 7 a.m.",
      "Kinkaku-ji (Golden Pavilion). Go at opening",
      "Nanzen-ji aqueduct and sub-temples",
      "Gion at dusk. Quiet stroll, no photography of geiko",
    ],
    hiddenGems: [
      "Honen-in moss garden, just off Philosopher's Path",
      "Kurama-dera mountain temple, 30 min by train",
      "Demachi Futaba mochi shop. Order the mame mochi",
      "Kamigamo Shrine on the 25th of the month (open-air market)",
    ],
    culture:
      "Kyoto is a working city, not an open-air museum. Geiko and maiko are commuting to appointments. They are not a photo opportunity. Many private lanes in Gion now forbid photography, and signs are enforced.",
    etiquette: [
      "No photos of geiko/maiko in private Gion lanes. Fines are issued.",
      "Remove shoes at all temple entrances marked with a step up.",
      "Speak softly inside temple grounds; some have explicit no-photo zones.",
      "Bow lightly when entering shops: a small gesture, warmly received.",
    ],
    sustainability: [
      "Buy a 1-day bus pass, cheaper and lower-impact than taxis.",
      "Carry your own chopsticks for casual meals; convenience-store waribashi adds up.",
      "Support family-run kaiseki and tea houses in Nishijin and Gion.",
    ],
    food: [
      "Shojin ryori (Buddhist vegetarian) at Tenryu-ji's Shigetsu",
      "Obanzai home cooking at Menami, Kawaramachi",
      "Tofu kaiseki at Tousuiro, Kiyamachi",
      "Nishiki Market wander. Pickles, sesame, freshly grilled mochi",
    ],
    coffee: [
      "% Arabica Higashiyama. Flagship, riverside views",
      "Weekenders Coffee, Tominokoji: Alley speakeasy roaster",
      "Kurasu Kyoto Stand: meticulous pour-overs near the station",
      "Walden Woods Kyoto: all-white former temple, almost theatrical",
    ],
    photography: [
      "Arashiyama bamboo grove at 6 a.m., no crowds, soft light",
      "Fushimi Inari upper paths (above the first 30 min of crowds)",
      "Kamogawa river at golden hour, looking south from Sanjo Bridge",
      "Hokan-ji (Yasaka Pagoda) from Yasaka-dori at dawn",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arashiyama early",
        morning: "5:45 a.m. taxi to bamboo grove; walk to Tenryu-ji garden as it opens.",
        afternoon: "Riverside lunch at Shoraian (tofu kaiseki); train back to base.",
        evening: "Pontocho Alley dinner at a small kappo counter; nightcap at Bar K6.",
        lodging: "Sowaka, Gion",
        dining: "Shoraian tofu kaiseki, then kappo dinner at Yoshikawa",
        transport: "Morning taxi, JR Sagano line back",
      },
      {
        day: 2,
        title: "Eastern temples & Philosopher's Path",
        morning: "Open Nanzen-ji; walk the Philosopher's Path north to Ginkaku-ji.",
        afternoon: "Honen-in moss garden, then matcha at Ippodo's tasting room.",
        evening: "Gion stroll at dusk; kaiseki at Giro Giro Hitoshina (modern, accessible).",
        lodging: "Sowaka, Gion",
        dining: "Giro Giro Hitoshina — playful kaiseki tasting",
        transport: "Walking; taxi for evening",
      },
      {
        day: 3,
        title: "Tea, craft, and Fushimi",
        morning: "Private tea ceremony in a Higashiyama machiya.",
        afternoon: "Indigo-dye workshop in Nishijin with a 4th-generation craftsman.",
        evening: "Fushimi Inari at 4 p.m. for golden hour; sake tasting in Fushimi-ku.",
        lodging: "Sowaka, Gion",
        dining: "Izakaya Toriyoshi in Fushimi — yakitori with local junmai",
        transport: "Subway and short taxi rides",
      },
    ],
    mapCards: [
      { name: "Fushimi Inari Taisha", type: "Cultural Site", area: "Fushimi", lat: 34.9671, lng: 135.7727, note: "Start before sunrise for the upper paths alone." },
      { name: "Arashiyama Bamboo Grove", type: "Nature", area: "Arashiyama", lat: 35.0170, lng: 135.6720, note: "Enter from the north entrance to skip the worst crowds." },
      { name: "Sowaka", type: "Hotel · Boutique", area: "Gion", lat: 35.0001, lng: 135.7790, note: "23-room machiya — book 4+ months ahead." },
      { name: "% Arabica Higashiyama", type: "Coffee", area: "Higashiyama", lat: 34.9988, lng: 135.7806, note: "Go at opening, order the Kyoto blend." },
      { name: "Kiyomizu-dera", type: "Cultural Site", area: "Higashiyama", lat: 34.9949, lng: 135.7851, note: "Avoid 10 a.m.–4 p.m.; sunset visit is sublime." },
    ],
    tags: ["Culture", "Photography", "Solo"],
  },
  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    country: "USA",
    region: "North America",
    featuredMonths: ["February", "March", "April", "October", "November"],
    tagline: "Desert silence, cosmic skies.",
    image: joshua,
    bestTime: "October–April; avoid July–August (40°C+ daytime)",
    tripLength: "3–4 nights — pair with a night in Palm Springs to ease in",
    climate: "Arid high desert · 0°C nights to 40°C+ summer days; 30°C swing common",
    overview:
      "A landscape that strips away the unnecessary. The high desert offers an almost monastic quiet, with some of the darkest night skies in Southern California and a creative-class undercurrent — art installations, sound baths, vintage Airstreams — woven through the dust.",
    whyRecommend:
      "I send creative travelers here when they need a reset. Three nights in a desert casita, two long hikes, one Pioneertown dinner, and a single hour of stargazing rewires people. It's the only U.S. destination I recommend with no city option — let the desert do its work.",
    neighborhoods: [
      { name: "Joshua Tree (town)", vibe: "Closest to the West Entrance — best for first-time park visits." },
      { name: "Yucca Valley", vibe: "More amenities — grocery, La Copine, well-stocked casitas." },
      { name: "Pioneertown", vibe: "1940s film set turned high-desert village — Pappy & Harriet's anchor." },
      { name: "29 Palms", vibe: "Quieter, closer to North Entrance — best for stargazing weekends." },
    ],
    hotels: [
      { name: "Joshua Tree Lake Campground", tier: "Budget", neighborhood: "Joshua Tree", note: "Tent or RV under exceptional dark skies; bring layers." },
      { name: "Mojave Sands Motel", tier: "Mid-Range", neighborhood: "Joshua Tree", note: "5-room renovated motel; communal courtyard with fire pit." },
      { name: "Sacred Sands", tier: "Boutique", neighborhood: "Joshua Tree (West Entrance)", note: "Two-suite straw-bale inn with private outdoor showers and unobstructed park views." },
      { name: "AutoCamp Joshua Tree", tier: "Luxury", neighborhood: "Joshua Tree", note: "Airstream suites with a sleek mid-century clubhouse and pool." },
    ],
    attractions: [
      "Hidden Valley loop (1 mile, sunset light is best)",
      "Keys View at sunset — Coachella Valley laid out below",
      "Cholla Cactus Garden at golden hour",
      "Noah Purifoy Outdoor Desert Art Museum",
      "Barker Dam loop — petroglyphs and seasonal water",
    ],
    hiddenGems: [
      "Pioneertown sound baths at the Integratron",
      "Pappy & Harriet's Monday open mic",
      "Giant Rock — sacred site, four-wheel drive only",
      "Bing-Crosby-era piano bar at 29 Palms Inn",
    ],
    culture:
      "The desert ecosystem is fragile and slow to recover — a single footprint on cryptobiotic crust can take decades to heal. The local community blends ranchers, artists, and conservationists; everyone agrees on the basics: tread lightly, look up at night, and don't honk.",
    etiquette: [
      "Stay on trails; never carve, climb, or break Joshua trees (federally protected).",
      "Pack out every scrap, including fruit peels and pistachio shells.",
      "Dim phone screens after dark — light pollution travels miles in clear air.",
      "Ask before photographing people in town; many locals value privacy.",
    ],
    sustainability: [
      "Bring a reusable gallon jug — desert towns ration water in dry years.",
      "Use refillable propane or solar lanterns instead of single-use butane.",
      "Donate to the Mojave Desert Land Trust for habitat preservation.",
    ],
    food: [
      "La Copine, Flamingo Heights — chef's-counter brunch worth the drive",
      "Kitchen in the Desert, Yucca Valley — wood-fired, Caribbean-inflected",
      "Pappy & Harriet's, Pioneertown — mesquite BBQ and live music",
      "Frontier Café, Joshua Tree — breakfast burritos for trailheads",
    ],
    coffee: [
      "Joshua Tree Coffee Company — small-batch roaster, great pour-over",
      "Frontier Café — drip with a patio for journaling",
      "La Copine bar program — natural wines and an espresso martini at sunset",
    ],
    photography: [
      "Keys View at golden hour for Coachella Valley layers",
      "Cholla Cactus Garden 30 minutes before sunset — backlit needles",
      "Astrophotography near Arch Rock on a new moon",
      "Pioneertown's Mane Street at blue hour for film-set warmth",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive & stargaze",
        morning: "Fly into Palm Springs; lunch at Workshop Kitchen + Bar.",
        afternoon: "Drive up to Joshua Tree (45 min); settle into the casita.",
        evening: "Sunset at Keys View; ranger-led dark-sky session at Cottonwood.",
        lodging: "Sacred Sands",
        dining: "La Copine — book 3 weeks ahead",
        transport: "Rental SUV (high clearance helpful, not required)",
      },
      {
        day: 2,
        title: "Park day",
        morning: "Hidden Valley loop at sunrise; Barker Dam for petroglyphs.",
        afternoon: "Picnic lunch at Jumbo Rocks; siesta back at casita.",
        evening: "Cholla Cactus Garden at golden hour, then dinner at Pappy & Harriet's.",
        lodging: "Sacred Sands",
        dining: "Pappy & Harriet's — mesquite tri-tip and live music",
        transport: "Self-drive within park; check fuel before entering",
      },
      {
        day: 3,
        title: "Art & sound",
        morning: "Noah Purifoy Outdoor Museum — allow 90 minutes minimum.",
        afternoon: "Sound bath at the Integratron (reserve weeks ahead).",
        evening: "Slow dinner at Kitchen in the Desert; final stargaze from the casita patio.",
        lodging: "Sacred Sands",
        dining: "Kitchen in the Desert — wood-fired tasting",
        transport: "Self-drive",
      },
    ],
    mapCards: [
      { name: "Hidden Valley Trail", type: "Hike", area: "JT National Park", lat: 34.0117, lng: -116.1664, note: "Easy 1-mile loop; great for first afternoon." },
      { name: "Keys View", type: "Viewpoint", area: "JT National Park", lat: 33.9266, lng: -116.1869, note: "Arrive 45 min before sunset for parking." },
      { name: "Sacred Sands", type: "Hotel · Boutique", area: "Joshua Tree", lat: 34.1158, lng: -116.3417, note: "Two-suite property — books 6 months out." },
      { name: "Pappy & Harriet's", type: "Restaurant · Music", area: "Pioneertown", lat: 34.1577, lng: -116.4732, note: "Reserve a table; concert nights sell out months ahead." },
      { name: "Noah Purifoy Museum", type: "Art Site", area: "Joshua Tree", lat: 34.1830, lng: -116.3380, note: "Free, open-air, donation appreciated; no shade." },
    ],
    tags: ["Adventure", "Photography", "Wildlife"],
  },
  {
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    region: "Europe",
    featuredMonths: ["February", "March", "June", "July", "September", "October"],
    tagline: "Fire, ice, and the long blue hour.",
    image: iceland,
    bestTime: "June–August for midnight sun and highlands; late September–March for aurora",
    tripLength: "7–10 nights for the Ring Road; 4 nights minimum for South Coast loop",
    climate: "Subarctic · −5 to 15°C; weather changes hourly in any season",
    overview:
      "Iceland is theater. Geothermal valleys, glacier lagoons, basalt sea stacks — staged at a scale that humbles. Rent a 4x4, plan loosely, and let the weather rewrite your day. The country rewards travelers who treat the itinerary as a draft.",
    whyRecommend:
      "I send self-drivers to Iceland and choose the South Coast 80% of the time. It packs glaciers, black-sand beaches, ice caves, and the most reliable aurora viewing into a tight loop, with excellent guesthouses every 90 minutes. The Westfjords are for return travelers with 10+ nights.",
    neighborhoods: [
      { name: "Reykjavík — 101 (downtown)", vibe: "Walkable, café-dense, harbor views — ideal for first and last nights." },
      { name: "Vík", vibe: "South Coast base — black sand, puffins in summer, easy to ice caves." },
      { name: "Höfn", vibe: "Glacier-lagoon access; langoustine capital." },
      { name: "Akureyri", vibe: "North Iceland gateway — whales, Lake Mývatn, geothermal baths." },
    ],
    hotels: [
      { name: "Kex Hostel, Reykjavík", tier: "Budget", neighborhood: "101 Reykjavík", note: "Former biscuit factory; private doubles, great bar with live music." },
      { name: "Hotel Rangá", tier: "Mid-Range", neighborhood: "South Iceland", note: "Aurora wake-up calls, hot tubs, and a serious whisky bar." },
      { name: "Fosshotel Glacier Lagoon", tier: "Boutique", neighborhood: "Hof", note: "Architectural lodge minutes from Vatnajökull's edge." },
      { name: "The Retreat at Blue Lagoon", tier: "Luxury", neighborhood: "Reykjanes", note: "Private lagoon access, lava-built suites, ideal for arrival or departure." },
    ],
    attractions: [
      "Reynisfjara black-sand beach (heed sneaker-wave warnings)",
      "Jökulsárlón glacier lagoon and Diamond Beach",
      "Þingvellir — continental rift, Viking parliament site",
      "Geysir / Strokkur eruptions in the Golden Circle",
      "Sky Lagoon, Kópavogur — geothermal infinity pool",
    ],
    hiddenGems: [
      "Stokksnes peninsula at low tide for Vestrahorn reflections",
      "Hornstrandir nature reserve (Westfjords, summer only)",
      "Hvítserkur sea stack on the Vatnsnes peninsula",
      "Húsavík for ethical whale watching with North Sailing",
    ],
    culture:
      "Icelanders are warm but reserved; small talk is light, sincerity is direct. Conservation is a national value — moss takes 50+ years to recover from a footprint, and roped-off areas are roped for a reason.",
    etiquette: [
      "Shower fully (nude) before entering any public pool — non-negotiable.",
      "Never drive off-road; tracks last for decades and incur huge fines.",
      "Tipping is not customary; it's built into prices.",
      "Don't pick the moss or stack rock cairns.",
    ],
    sustainability: [
      "Rent an EV — fast chargers reach every region except the deep highlands.",
      "Choose certified Vakinn operators for whale watching and glacier tours.",
      "Refill from the tap; bottled water is unnecessary and discouraged.",
    ],
    food: [
      "Dill, Reykjavík — Iceland's first Michelin star",
      "Matur og Drykkur — Icelandic heritage tasting",
      "Pakkhús, Höfn — langoustine straight off the boat",
      "Bæjarins Beztu Pylsur — the iconic harbor hot dog",
    ],
    coffee: [
      "Reykjavík Roasters, Kárastígur — flagship, light roasts",
      "Stofan Café — armchair lounge in a 1900s townhouse",
      "Te & Kaffi — reliable national chain with good drip",
    ],
    photography: [
      "Diamond Beach at sunrise — backlit ice on black sand",
      "Stokksnes black-sand reflections at low tide",
      "Aurora over Kirkjufell with a full moon",
      "Skógafoss from the cliff path at golden hour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Reykjavík slow start",
        morning: "Arrive Keflavík; Blue Lagoon en route to the city.",
        afternoon: "Harpa Concert Hall, Hallgrímskirkja, downtown 101 wander.",
        evening: "Sky Lagoon ritual at sunset; dinner at Matur og Drykkur.",
        lodging: "Hotel Borg, Reykjavík",
        dining: "Matur og Drykkur — Icelandic heritage menu",
        transport: "Private transfer or rental car pickup",
      },
      {
        day: 2,
        title: "South Coast — waterfalls to black sand",
        morning: "Seljalandsfoss (walk behind it) and Skógafoss.",
        afternoon: "Reynisfjara black sand; check sea-wave forecast first.",
        evening: "Check in at Hotel Rangá; aurora wake-up call set.",
        lodging: "Hotel Rangá",
        dining: "Hotel Rangá's restaurant — Arctic char and lamb",
        transport: "4x4 rental — 2.5 hr drive from Reykjavík",
      },
      {
        day: 3,
        title: "Glaciers & Diamond Beach",
        morning: "Vatnajökull ice cave tour (booked, late October–March).",
        afternoon: "Jökulsárlón lagoon and Diamond Beach at golden hour.",
        evening: "Langoustine dinner in Höfn; aurora watch from a dark turnout.",
        lodging: "Fosshotel Glacier Lagoon",
        dining: "Pakkhús, Höfn",
        transport: "Self-drive; guide-led for ice caves",
      },
    ],
    mapCards: [
      { name: "Reynisfjara Beach", type: "Nature", area: "South Coast", lat: 63.4055, lng: -19.0444, note: "Check sneaker-wave forecast before walking near surf." },
      { name: "Jökulsárlón", type: "Nature", area: "Vatnajökull", lat: 64.0784, lng: -16.2306, note: "Sunrise and sunset both excellent — different palettes." },
      { name: "Hotel Rangá", type: "Hotel · Mid-Range", area: "South Iceland", lat: 63.7426, lng: -20.2949, note: "Aurora wake-up calls year-round." },
      { name: "Sky Lagoon", type: "Spa", area: "Kópavogur", lat: 64.1042, lng: -21.9486, note: "Book the 7-step ritual at sunset." },
      { name: "Stokksnes / Vestrahorn", type: "Viewpoint", area: "Höfn", lat: 64.2548, lng: -14.9926, note: "Pay the small access fee at the cafe; check tides." },
    ],
    tags: ["Adventure", "Wildlife", "Photography"],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Europe",
    featuredMonths: ["April", "May", "June", "September", "October"],
    tagline: "The city as a slow ritual.",
    image: paris,
    bestTime: "Mid-April–June and September–October; avoid August (closures)",
    tripLength: "5–7 nights to actually slow down — fewer feels rushed",
    climate: "Oceanic · 5–25°C; bring a light layer year-round",
    overview:
      "Skip the checklist. Paris is at its best when you give it time — a morning at the Musée Picasso, an unhurried lunch in the Marais, an evening walk along the Canal Saint-Martin. Stay in one arrondissement and let the city come to you.",
    whyRecommend:
      "I steer first-timers away from the Champs-Élysées and into the Marais or Saint-Germain. The best Paris is residential — a bakery downstairs, a corner cafe for breakfast, and three museums within a 20-minute walk. Skip the bus tour, buy a Metro pass, and walk.",
    neighborhoods: [
      { name: "Le Marais (3e/4e)", vibe: "Medieval lanes, falafel and Picasso, lively but never tacky." },
      { name: "Saint-Germain (6e)", vibe: "Bookshops, jazz, classic Left Bank — refined and quiet at night." },
      { name: "Canal Saint-Martin (10e)", vibe: "Hip, residential, weekend picnics by the locks." },
      { name: "Batignolles (17e)", vibe: "Local-favorite village feel — market, parks, no tour buses." },
    ],
    hotels: [
      { name: "Hotel Jeanne d'Arc Le Marais", tier: "Budget", neighborhood: "Marais", note: "Family-run, simple rooms on a quiet pedestrian square." },
      { name: "Hotel National des Arts et Métiers", tier: "Mid-Range", neighborhood: "Haut Marais", note: "Stylish rooftop bar with Eiffel Tower views; well-priced for the location." },
      { name: "Hôtel des Grands Boulevards", tier: "Boutique", neighborhood: "2e arrondissement", note: "Experimental Cocktail Club downstairs; killer pastries; intimate rooms." },
      { name: "Le Bristol Paris", tier: "Luxury", neighborhood: "8e (Faubourg Saint-Honoré)", note: "Old-world service, Eric Frechon's 3-star dining, garden suites." },
    ],
    attractions: [
      "Musée d'Orsay — go Thursday evening when it's quietest",
      "Sainte-Chapelle stained glass at noon",
      "Musée Picasso, Marais",
      "Rodin Museum and gardens",
      "Père Lachaise cemetery walk",
    ],
    hiddenGems: [
      "Promenade Plantée — elevated park, the original High Line",
      "Square du Vert-Galant at sunset",
      "Marché des Enfants Rouges for Saturday lunch",
      "Musée de la Vie Romantique tea garden",
    ],
    culture:
      "Greet shopkeepers with 'Bonjour' before anything else — it changes every interaction. Lunch is sacred (12:30–2 p.m.), dinner is late (8 p.m. or later), and the long table is the rule, not the exception.",
    etiquette: [
      "'Bonjour' on entry, 'Au revoir' on exit — every shop, every time.",
      "Service is included; round up or leave a euro or two if pleased.",
      "Don't order a cappuccino after lunch.",
      "Dress one notch up from your usual — Parisians notice.",
    ],
    sustainability: [
      "Metro and Vélib' bikes cover the entire city; skip taxis.",
      "Shop the marchés — Aligre, Bastille, Batignolles — over supermarkets.",
      "Choose Eurostar over short-haul flights to London or Amsterdam.",
    ],
    food: [
      "Septime, 11e — modern French tasting (book 21 days ahead at 10 a.m.)",
      "Du Pain et des Idées — escargot pastries on the Canal Saint-Martin",
      "Le Comptoir du Relais — Yves Camdeborde's bistro classic",
      "Clamato, 11e — Septime's walk-in seafood sibling",
    ],
    coffee: [
      "Telescope Café, 1er — pioneers of Paris third-wave",
      "Coutume Café, 7e — flagship roastery and brunch",
      "Café Kitsuné, Palais Royal — the courtyard table at 9 a.m.",
      "Boot Café, Marais — tiny, photogenic, excellent espresso",
    ],
    photography: [
      "Trocadéro at sunrise — Eiffel Tower without crowds",
      "Pont Alexandre III at blue hour from the Right Bank",
      "Rooftop of Galeries Lafayette (free, often missed)",
      "Rue Crémieux pastel houses, early morning",
    ],
    itinerary: [
      {
        day: 1,
        title: "Settle into the Marais",
        morning: "Train from CDG; coffee at Boot Café; check in.",
        afternoon: "Musée Picasso, then a slow wander to Place des Vosges.",
        evening: "Apéro at Candelaria, dinner at Clamato.",
        lodging: "Hôtel des Grands Boulevards",
        dining: "Clamato — natural wine and oysters",
        transport: "RER B from CDG; walking inside the city",
      },
      {
        day: 2,
        title: "Left Bank classics",
        morning: "Musée d'Orsay (book 9:30 a.m. slot); coffee at Coutume.",
        afternoon: "Luxembourg Gardens lunch picnic from Poilâne.",
        evening: "Jazz at Le Caveau de la Huchette, dinner at Le Comptoir du Relais.",
        lodging: "Hôtel des Grands Boulevards",
        dining: "Le Comptoir du Relais",
        transport: "Metro line 4 / walking",
      },
      {
        day: 3,
        title: "Hidden Paris",
        morning: "Canal Saint-Martin walk; pastries at Du Pain et des Idées.",
        afternoon: "Vintage shopping in the Haut Marais; Musée de la Vie Romantique.",
        evening: "Sunset at Sacré-Cœur (back side, fewer tourists); dinner at Le Coq Rico.",
        lodging: "Hôtel des Grands Boulevards",
        dining: "Le Coq Rico — heritage poultry",
        transport: "Walking; metro for Montmartre",
      },
    ],
    mapCards: [
      { name: "Musée d'Orsay", type: "Museum", area: "7e", lat: 48.8600, lng: 2.3266, note: "Thursday evenings until 9:45 p.m. are quietest." },
      { name: "Hôtel des Grands Boulevards", type: "Hotel · Boutique", area: "2e", lat: 48.8717, lng: 2.3437, note: "Reserve the Experimental cocktail bar in advance." },
      { name: "Septime", type: "Restaurant", area: "11e", lat: 48.8528, lng: 2.3804, note: "Reservations open 21 days ahead at 10 a.m. Paris time." },
      { name: "Sainte-Chapelle", type: "Cultural Site", area: "1er (Île de la Cité)", lat: 48.8554, lng: 2.3450, note: "Visit at noon for direct sun through the windows." },
      { name: "Promenade Plantée", type: "Park", area: "12e", lat: 48.8473, lng: 2.3741, note: "Start at Bastille; walk east for 4.5 km of elevated park." },
    ],
    tags: ["Culture", "Food & Wine", "Luxury"],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    region: "Europe",
    featuredMonths: ["May", "June", "July", "September", "October"],
    tagline: "A capital of small worlds.",
    image: london,
    bestTime: "May–September; late September is ideal — warm, dry, theatre season",
    tripLength: "4–6 nights — enough to explore three neighborhoods deeply",
    climate: "Temperate maritime · 4–22°C; always bring a rain shell",
    overview:
      "London rewards the wanderer — neighborhood by neighborhood, museum by museum. Anchor your stay in one quarter, walk everywhere within it, and take the Tube for the longer hops. Resist the temptation to do everything; you can't.",
    whyRecommend:
      "London is my favorite city for a slow second visit. First-timers tick off the Tower and the Eye; returning travelers stay in Marylebone or Shoreditch, eat at Brat or St. John, and finally see London the way Londoners do — in fragments, on foot, with a pint at the end.",
    neighborhoods: [
      { name: "Marylebone", vibe: "Genteel, walkable, Daunt Books and Chiltern Firehouse — a beloved hotel district." },
      { name: "Shoreditch", vibe: "Creative, restaurant-dense, Brick Lane and Spitalfields markets nearby." },
      { name: "Notting Hill", vibe: "Pastel houses, Saturday Portobello market, leafy and quiet midweek." },
      { name: "Bermondsey", vibe: "South Bank-adjacent, food-focused, Borough Market on foot." },
    ],
    hotels: [
      { name: "The Hoxton Shoreditch", tier: "Budget", neighborhood: "Shoreditch", note: "Stylish rooms from £150; great lobby bar and breakfast bag at the door." },
      { name: "The Zetter Townhouse Marylebone", tier: "Mid-Range", neighborhood: "Marylebone", note: "13 quirky rooms in a Georgian townhouse with a beloved cocktail parlour." },
      { name: "The Ned", tier: "Boutique", neighborhood: "City of London", note: "Soho House-operated, 8 restaurants, rooftop pool — destination on its own." },
      { name: "Claridge's", tier: "Luxury", neighborhood: "Mayfair", note: "Art Deco landmark with the city's gold-standard afternoon tea." },
    ],
    attractions: [
      "Tate Modern — free entry, queue early for the special exhibitions",
      "Sir John Soane's Museum — book the candlelit evening visit",
      "Borough Market for a Saturday lunch crawl",
      "Hampstead Heath ponds and Parliament Hill viewpoint",
      "Royal Academy of Arts summer exhibition",
    ],
    hiddenGems: [
      "Daunt Books, Marylebone — the original Edwardian travel bookshop",
      "Wilton's Music Hall — Victorian survivor, drinks before any show",
      "Kyoto Garden in Holland Park — a quiet pocket of Japan",
      "Leighton House Museum — orientalist mansion in Holland Park",
    ],
    culture:
      "Mind the queue — it's a national institution. Pub etiquette: order at the bar, no tipping required, and Sunday roast is taken seriously. Londoners are warmer than the stereotype, but reserved on the Tube.",
    etiquette: [
      "Stand on the right on escalators; walk on the left.",
      "Order at the bar in pubs; no table service unless told otherwise.",
      "10–12.5% service is standard at restaurants — check the bill first.",
      "Don't make small talk on the Tube during commuter hours.",
    ],
    sustainability: [
      "Get an Oyster card or contactless tap — Tube and bus reach everywhere.",
      "Eat at smaller, ingredient-driven kitchens (Brat, Lyle's, Rochelle Canteen) over hotel restaurants.",
      "Take Eurostar to Paris, Brussels, or Amsterdam instead of flying.",
    ],
    food: [
      "St. John, Smithfield — nose-to-tail, Britain's most important restaurant",
      "Brat, Shoreditch — Basque grill, the turbot is non-negotiable",
      "Padella, Borough — small-plate fresh pasta, no reservations",
      "Lyle's, Shoreditch — refined modern British tasting",
    ],
    coffee: [
      "Monmouth Coffee, Borough — institution since 1978",
      "Workshop Coffee, Marylebone — meticulous flat whites",
      "Prufrock Coffee, Holborn — barista training ground, top brews",
      "Climpson & Sons, London Fields — Saturday market roaster",
    ],
    photography: [
      "Millennium Bridge looking toward St Paul's at blue hour",
      "Notting Hill pastel houses on Lancaster Road, early morning",
      "Greenwich Park panorama from the Royal Observatory",
      "Sky Garden (free booking) for City skyline shots",
    ],
    itinerary: [
      {
        day: 1,
        title: "South Bank arrival",
        morning: "Train from Heathrow; coffee at Monmouth; check in.",
        afternoon: "Tate Modern, walk Millennium Bridge to St Paul's.",
        evening: "Borough Market drinks; dinner at Padella (queue early).",
        lodging: "The Hoxton Shoreditch",
        dining: "Padella — cacio e pepe is the order",
        transport: "Heathrow Express + Tube; walking after",
      },
      {
        day: 2,
        title: "Hidden museums",
        morning: "Sir John Soane's Museum at opening; Wallace Collection after.",
        afternoon: "Long lunch at Rochelle Canteen.",
        evening: "Pre-theatre drinks at the American Bar, Savoy; dinner at St. John.",
        lodging: "The Hoxton Shoreditch",
        dining: "St. John — bone marrow + parsley salad, eccles cake",
        transport: "Tube + walking",
      },
      {
        day: 3,
        title: "Markets and parks",
        morning: "Columbia Road flower market (Sunday), brunch at Brawn.",
        afternoon: "Hampstead Heath — walk the ponds, end at Kenwood House.",
        evening: "Sunset pint at the Holly Bush, Hampstead; dinner at Brat.",
        lodging: "The Hoxton Shoreditch",
        dining: "Brat — whole turbot to share",
        transport: "Overground for Hampstead",
      },
    ],
    mapCards: [
      { name: "Tate Modern", type: "Museum", area: "Bankside", lat: 51.5076, lng: -0.0994, note: "Free permanent collection; ticket the special exhibition." },
      { name: "Borough Market", type: "Market", area: "Southwark", lat: 51.5055, lng: -0.0910, note: "Closed Sundays; Saturday is the full experience." },
      { name: "The Hoxton Shoreditch", type: "Hotel · Budget", area: "Shoreditch", lat: 51.5260, lng: -0.0781, note: "Book the lighter rooms on the courtyard side." },
      { name: "St. John", type: "Restaurant", area: "Smithfield", lat: 51.5202, lng: -0.1015, note: "Reserve 4 weeks ahead for prime times." },
      { name: "Hampstead Heath", type: "Park", area: "Hampstead", lat: 51.5608, lng: -0.1632, note: "Parliament Hill for the postcard skyline view." },
    ],
    tags: ["Culture", "Food & Wine", "Family"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "Oceania",
    featuredMonths: ["December", "January", "February", "March"],
    tagline: "Cinematic wilderness, end of the world.",
    image: nz,
    bestTime: "Dec–March (summer) and June–August (snow); shoulder months are uncrowded",
    tripLength: "12–18 nights — both islands cannot be rushed",
    climate: "Temperate oceanic · 5–25°C; four seasons in a day on the West Coast",
    overview:
      "Two islands, infinite landscapes. From Milford Sound's fjords to the Coromandel's hidden coves, Aotearoa is a slow road trip waiting to happen. Distances are short on the map and long in practice — plan fewer stops, stay longer in each.",
    whyRecommend:
      "Travelers always try to do both islands in 10 days; I always push back. Pick the South Island for landscapes and adventure, the North Island for culture and beaches, and only combine them with 14+ nights. Otherwise you'll spend the trip in a car.",
    neighborhoods: [
      { name: "Queenstown", vibe: "South Island adventure hub — lake, gondola, gateway to Fiordland and Wanaka." },
      { name: "Wanaka", vibe: "Quieter Queenstown alternative — Roy's Peak, Cardrona, slower pace." },
      { name: "Napier", vibe: "Art Deco coastal town in Hawke's Bay — wine country, year-round mild weather." },
      { name: "Russell, Bay of Islands", vibe: "Subtropical North — sailing, dolphins, Māori history at Waitangi." },
    ],
    hotels: [
      { name: "YHA Queenstown Lakefront", tier: "Budget", neighborhood: "Queenstown", note: "Private rooms with lake views; walk to everything." },
      { name: "The Rees Hotel", tier: "Mid-Range", neighborhood: "Queenstown", note: "Lakeside apartment-style suites; kitchen, balcony, parking included." },
      { name: "Eichardt's Private Hotel", tier: "Boutique", neighborhood: "Queenstown waterfront", note: "Five suites in an 1860s pub conversion — the iconic in-town stay." },
      { name: "Blanket Bay", tier: "Luxury", neighborhood: "Glenorchy", note: "Glacier-fed lake, helicopter access, the South Island's most storied lodge." },
    ],
    attractions: [
      "Milford Sound (cruise or kayak — go in light rain for the waterfalls)",
      "Tongariro Alpine Crossing (book transport for a one-way hike)",
      "Aoraki/Mount Cook National Park stargazing",
      "Waiheke Island vineyards — day trip from Auckland",
      "Hobbiton movie set (yes, even for non-fans)",
    ],
    hiddenGems: [
      "Catlins coast — yellow-eyed penguins, no crowds",
      "Hot Water Beach, Coromandel — dig your own thermal pool at low tide",
      "Castlepoint Lighthouse, Wairarapa — windswept and otherworldly",
      "Oamaru's Steampunk HQ and Victorian quarter",
    ],
    culture:
      "Aotearoa is bicultural by constitution — Māori place names, language (te reo), and customs are interwoven with everyday life. A simple 'kia ora' is welcomed, and learning the meaning of marae and pōwhiri before a cultural visit is a sign of respect.",
    etiquette: [
      "Acknowledge Māori place names — Aoraki, not just Mount Cook.",
      "Don't sit on tables; in Māori tikanga, the head and food don't mix.",
      "Tipping is not expected; round up if service was exceptional.",
      "Always check fire danger ratings before lighting any flame.",
    ],
    sustainability: [
      "Clean boots between hikes — kauri dieback and didymo are serious.",
      "Choose Qualmark Enviro-certified operators for tours and lodges.",
      "Offset domestic flights through Air New Zealand's FlyNeutral program.",
    ],
    food: [
      "Amisfield, Queenstown — South Island tasting menu, vineyard setting",
      "Mister D, Napier — leg of lamb, jam doughnut with syringes",
      "Hugo's Bistro, Wellington — neighborhood favorite, modern Kiwi",
      "Whitebait fritters anywhere on the West Coast in season",
    ],
    coffee: [
      "Allpress Roastery & Cafe, Auckland — Kiwi coffee royalty",
      "Vudu Cafe, Queenstown — best flat white in town, breakfast staple",
      "Mojo Coffee, Wellington — Wellington invented the flat white, allegedly",
      "Patagonia Chocolates, Wanaka — coffee + lakeside hot chocolates",
    ],
    photography: [
      "Mitre Peak from Milford on a misty morning",
      "Lake Pukaki turquoise with Aoraki backdrop",
      "Wai-O-Tapu Champagne Pool, Rotorua — go at opening",
      "Roy's Peak ridge selfie at sunrise (be there by 5:30 a.m.)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Queenstown landing",
        morning: "Arrive via Auckland; lake walk to shake off the flight.",
        afternoon: "Skyline gondola; light lunch at Bespoke Kitchen.",
        evening: "Sunset on the Earnslaw steamship; dinner at Botswana Butchery.",
        lodging: "Eichardt's Private Hotel",
        dining: "Botswana Butchery — South Island beef, lakeside",
        transport: "Domestic flight + rental SUV",
      },
      {
        day: 2,
        title: "Fiordland day",
        morning: "Early drive to Te Anau (2 hr); coffee stop.",
        afternoon: "Milford Sound cruise — pick a small-boat operator.",
        evening: "Return drive at golden hour; dinner at Rātā back in Queenstown.",
        lodging: "Eichardt's Private Hotel",
        dining: "Rātā — chef Josh Emett's flagship",
        transport: "Self-drive (or guided coach if weather is poor)",
      },
      {
        day: 3,
        title: "Wanaka & stars",
        morning: "Drive to Wanaka via Crown Range; coffee at Big Fig.",
        afternoon: "Lakeside lunch; bike Hawea River Trail.",
        evening: "Stargazing at Mount Cook (dark sky reserve, 2.5 hr drive).",
        lodging: "Eichardt's or Lake Ohau Lodge for Mt Cook night",
        dining: "Kika, Wanaka — share-plate modern NZ",
        transport: "Self-drive; high-vis if hiking at dusk",
      },
    ],
    mapCards: [
      { name: "Milford Sound", type: "Nature", area: "Fiordland", lat: -44.6717, lng: 167.9252, note: "Small-boat cruise beats the big operators." },
      { name: "Aoraki/Mount Cook", type: "Nature · Dark Sky", area: "Canterbury", lat: -43.5950, lng: 170.1418, note: "Stay overnight — best stargazing in the country." },
      { name: "Eichardt's Private Hotel", type: "Hotel · Boutique", area: "Queenstown", lat: -45.0345, lng: 168.6601, note: "Lakefront suite is worth the upgrade." },
      { name: "Roy's Peak Track", type: "Hike", area: "Wanaka", lat: -44.6928, lng: 169.0511, note: "5–6 hr return; start at 5 a.m. for sunrise." },
      { name: "Amisfield Bistro", type: "Restaurant", area: "Queenstown", lat: -45.0011, lng: 168.7378, note: "Trust the tasting menu; book lunch for the views." },
    ],
    tags: ["Adventure", "Wildlife", "Photography"],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    country: "Costa Rica",
    region: "Central America",
    featuredMonths: ["December", "January", "February", "March", "April"],
    tagline: "Pura vida in the cloud forest.",
    image: costa,
    bestTime: "December–April (dry season); May–November greener and quieter",
    tripLength: "8–10 nights to combine cloud forest, volcano, and coast",
    climate: "Tropical · 21–32°C; microclimates vary dramatically by elevation",
    overview:
      "A small country with extraordinary biodiversity — 5% of the world's species in 0.03% of its land. Pair Monteverde's cloud forest with the Osa Peninsula's wild Pacific coast for an unforgettable contrast: cool mossy mornings, then humid jungle afternoons with scarlet macaws overhead.",
    whyRecommend:
      "I send wildlife travelers to the Osa Peninsula, not Manuel Antonio. The crowds and the macaws have an inverse relationship. Pair three nights in a remote eco-lodge with the Arenal–Monteverde corridor and you'll see more in eight nights than most do in three weeks of Costa Rica.",
    neighborhoods: [
      { name: "La Fortuna / Arenal", vibe: "Volcano views, hot springs, easy hikes — gentle introduction." },
      { name: "Monteverde", vibe: "Cloud forest at altitude — cool, misty, the world's best birding." },
      { name: "Osa Peninsula", vibe: "Most biodiverse place on Earth per square km — true wilderness." },
      { name: "Nicoya Peninsula", vibe: "Blue Zone surf towns — Nosara, Santa Teresa — slow living." },
    ],
    hotels: [
      { name: "Selina La Fortuna", tier: "Budget", neighborhood: "La Fortuna", note: "Private rooms with volcano views; coworking and yoga on site." },
      { name: "Tabacón Thermal Resort", tier: "Mid-Range", neighborhood: "Arenal", note: "Natural thermal rivers run through the property; lush gardens." },
      { name: "Senda Monteverde", tier: "Boutique", neighborhood: "Monteverde", note: "Cabin-style rooms tucked into the cloud forest canopy; superb naturalist guides." },
      { name: "Lapa Rios Lodge", tier: "Luxury", neighborhood: "Osa Peninsula", note: "16 thatched bungalows above the Pacific; pioneer of Costa Rican eco-luxury." },
    ],
    attractions: [
      "Monteverde Cloud Forest — guided dawn walk for the best wildlife",
      "Corcovado National Park (Osa) with a licensed guide — mandatory",
      "Arenal Volcano hike + La Fortuna waterfall",
      "Manuel Antonio National Park (busy but beautiful — go at opening)",
      "Tortuguero canals for nesting turtles (July–October)",
    ],
    hiddenGems: [
      "Nicoya Peninsula Blue Zone — Nosara yoga community",
      "Cahuita Caribbean coast — Afro-Caribbean culture, lower crowds",
      "Río Celeste waterfall — surreal blue, in Tenorio Volcano park",
      "San Gerardo de Dota for quetzal sightings",
    ],
    culture:
      "Pura vida is more than a phrase — it's a frame for daily life. Tico time is real (allow buffer), and sustainability isn't marketing here: 99% of electricity comes from renewables and a quarter of the land is protected.",
    etiquette: [
      "Tip 10% on top of the 10% service charge if pleased.",
      "Greet shopkeepers with 'buenas' on entry.",
      "Never touch or feed wildlife, even monkeys near hotels.",
      "Dress modestly when visiting small inland towns and churches.",
    ],
    sustainability: [
      "Stay at CST-certified (Certificación para la Sostenibilidad Turística) lodges — Lapa Rios, Pacuare, Senda are all 5-leaf.",
      "Always hire local guides — entry to Corcovado requires it anyway.",
      "Skip souvenir purchases involving turtle shell, coral, or hardwood.",
    ],
    food: [
      "Casados (rice, beans, plantains, protein) at any soda — try Soda Viquez",
      "Gallo pinto breakfasts everywhere — best with Lizano sauce",
      "Ceviche at La Pecora Nera on the Caribbean coast",
      "Don Rufino, La Fortuna — refined Costa Rican tasting",
    ],
    coffee: [
      "Café Monteverde — farm tour included with tastings",
      "Doka Estate, Alajuela — visit between flights",
      "Cafeoteca, San José — third-wave roaster flight",
      "El Trapiche, Monteverde — coffee, sugarcane, and cacao tour",
    ],
    photography: [
      "Toucans and quetzals in the Monteverde canopy at dawn",
      "Arenal Volcano at sunrise from Tabacón pools",
      "Bioluminescent bay paddle in Paquera (new moon)",
      "Scarlet macaws over Osa Peninsula beaches at golden hour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arenal arrival",
        morning: "Fly into San José; 3-hour drive (or 30-min flight) to La Fortuna.",
        afternoon: "Easy hike on Arenal 1968 lava trail with naturalist.",
        evening: "Tabacón hot springs at sunset; dinner at Don Rufino.",
        lodging: "Tabacón Thermal Resort",
        dining: "Don Rufino — refined Tico cuisine",
        transport: "Private driver from SJO airport",
      },
      {
        day: 2,
        title: "Monteverde transfer",
        morning: "Drive 3.5 hr via Tilarán to Monteverde (mostly paved now).",
        afternoon: "Selvatura hanging bridges canopy walk.",
        evening: "Night wildlife tour — sloths, kinkajous, glass frogs.",
        lodging: "Senda Monteverde",
        dining: "Trio Restaurant — farm-to-table Costa Rican",
        transport: "Private 4x4 transfer recommended",
      },
      {
        day: 3,
        title: "Cloud forest dawn",
        morning: "Reserve guided 6 a.m. walk — quetzal season Feb–July.",
        afternoon: "Café Monteverde coffee tour and tasting.",
        evening: "Ridge sunset with cocktails at Sabor Tico; early night.",
        lodging: "Senda Monteverde",
        dining: "Sabor Tico — casados and tres leches",
        transport: "Hotel shuttles within Monteverde",
      },
    ],
    mapCards: [
      { name: "Monteverde Cloud Forest Reserve", type: "Nature", area: "Monteverde", lat: 10.3010, lng: -84.7891, note: "Reserve dawn guided walk 24 hr ahead." },
      { name: "Arenal Volcano", type: "Nature", area: "La Fortuna", lat: 10.4634, lng: -84.7034, note: "1968 trail is the photographer's pick." },
      { name: "Lapa Rios Lodge", type: "Hotel · Luxury", area: "Osa Peninsula", lat: 8.4133, lng: -83.3328, note: "Charter flight from SJO via Puerto Jiménez." },
      { name: "Tabacón Hot Springs", type: "Spa", area: "Arenal", lat: 10.4922, lng: -84.7159, note: "Day-pass available even for non-guests." },
      { name: "Corcovado National Park", type: "Nature", area: "Osa Peninsula", lat: 8.5396, lng: -83.5919, note: "Licensed guide is required — book through your lodge." },
    ],
    tags: ["Wildlife", "Adventure", "Sustainable"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getCurrentMonth() {
  return new Date().toLocaleString("en-US", { month: "long" });
}

export function getFeaturedDestinations(month = getCurrentMonth()) {
  const featured = destinations.filter((d) =>
    d.featuredMonths.includes(month)
  );

  return featured.length > 0 ? featured.slice(0, 3) : destinations.slice(0, 3);
}
