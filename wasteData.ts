export type EcoScore = "good" | "okay" | "bad";
export type Category = "plastic" | "organic" | "ewaste" | "paper" | "glass" | "metal" | "other";

export interface WasteItem {
  id: string;
  name: string;
  aliases: string[];
  category: Category;
  recyclable: boolean | "special";
  disposalMethod: string;
  ecoAlternative: string;
  ecoScore: EcoScore;
  ecoScoreReason: string;
}

export const wasteDatabase: WasteItem[] = [
  {
    id: "plastic-bottle",
    name: "Plastic Bottle",
    aliases: ["water bottle", "soda bottle", "pet bottle"],
    category: "plastic",
    recyclable: true,
    disposalMethod: "Empty liquids, lightly rinse, and place in the blue recycling bin. Keep the cap on.",
    ecoAlternative: "Use a reusable stainless steel or glass water bottle.",
    ecoScore: "okay",
    ecoScoreReason: "Recyclable, but creating new plastic has a high carbon footprint."
  },
  {
    id: "plastic-bag",
    name: "Plastic Bag",
    aliases: ["grocery bag", "shopping bag", "film", "ziploc"],
    category: "plastic",
    recyclable: "special",
    disposalMethod: "Do NOT put in curbside bins (they jam machinery). Take to a grocery store drop-off bin.",
    ecoAlternative: "Bring a reusable canvas or cotton tote bag.",
    ecoScore: "bad",
    ecoScoreReason: "Single-use plastics frequently end up in oceans and take centuries to degrade."
  },
  {
    id: "coffee-pods",
    name: "Coffee Pods",
    aliases: ["keurig pod", "k-cup", "espresso pod"],
    category: "plastic",
    recyclable: false,
    disposalMethod: "Most must go in the regular trash unless you have a specific mail-back program.",
    ecoAlternative: "Use a French press, pour-over, or reusable pod filters.",
    ecoScore: "bad",
    ecoScoreReason: "Extremely difficult to recycle due to mixed materials (plastic, foil, organic matter)."
  },
  {
    id: "styrofoam",
    name: "Styrofoam",
    aliases: ["polystyrene", "foam cup", "takeout container", "packing foam"],
    category: "plastic",
    recyclable: false,
    disposalMethod: "Place in the regular trash bin. It breaks down into microplastics if left in nature.",
    ecoAlternative: "Ask for foil or paper takeout containers, or bring your own.",
    ecoScore: "bad",
    ecoScoreReason: "Rarely recycled and persists in the environment indefinitely."
  },
  {
    id: "bubble-wrap",
    name: "Bubble Wrap",
    aliases: ["packing material", "air pillows", "plastic wrap"],
    category: "plastic",
    recyclable: "special",
    disposalMethod: "Drop off at grocery store film recycling bins. Do NOT put in curbside recycling.",
    ecoAlternative: "Use corrugated cardboard wrapping or crumpled newspaper.",
    ecoScore: "bad",
    ecoScoreReason: "Single-use film plastic is hard to recycle and harmful to wildlife."
  },
  {
    id: "banana-peel",
    name: "Banana Peel",
    aliases: ["fruit skin", "fruit peel", "banana"],
    category: "organic",
    recyclable: "special",
    disposalMethod: "Place in your green compost bin or backyard compost pile.",
    ecoAlternative: "Compost to create nutrient-rich soil for plants.",
    ecoScore: "good",
    ecoScoreReason: "100% biodegradable and returns nutrients to the earth."
  },
  {
    id: "coffee-grounds",
    name: "Coffee Grounds",
    aliases: ["used coffee", "grounds", "espresso grounds"],
    category: "organic",
    recyclable: "special",
    disposalMethod: "Excellent for composting. Can also be sprinkled directly in gardens.",
    ecoAlternative: "N/A - just ensure they are composted!",
    ecoScore: "good",
    ecoScoreReason: "Rich in nitrogen, great for soil health."
  },
  {
    id: "food-scraps",
    name: "Food Scraps",
    aliases: ["leftovers", "vegetable peelings", "bones", "meat"],
    category: "organic",
    recyclable: "special",
    disposalMethod: "Use municipal green bins for all scraps (including meat/dairy). For backyard compost, stick to veggies.",
    ecoAlternative: "Plan meals to reduce food waste before it happens.",
    ecoScore: "good",
    ecoScoreReason: "Composting prevents methane emissions from landfills."
  },
  {
    id: "apple-core",
    name: "Apple Core",
    aliases: ["apple", "core", "seeds"],
    category: "organic",
    recyclable: "special",
    disposalMethod: "Compost bin.",
    ecoAlternative: "Eat the whole apple! Or compost.",
    ecoScore: "good",
    ecoScoreReason: "Breaks down quickly and enriches soil."
  },
  {
    id: "cardboard-box",
    name: "Cardboard Box",
    aliases: ["amazon box", "shipping box", "corrugated"],
    category: "paper",
    recyclable: true,
    disposalMethod: "Break down flat, remove plastic tape if possible, and place in the recycling bin.",
    ecoAlternative: "Reuse for storage or shipping before recycling.",
    ecoScore: "good",
    ecoScoreReason: "Highly recyclable and saves trees when reused."
  },
  {
    id: "newspaper",
    name: "Newspaper",
    aliases: ["flyers", "magazines", "newsprint"],
    category: "paper",
    recyclable: true,
    disposalMethod: "Place in curbside recycling bin. Keep dry.",
    ecoAlternative: "Read news digitally.",
    ecoScore: "good",
    ecoScoreReason: "Easily recycled into new paper products."
  },
  {
    id: "pizza-box",
    name: "Pizza Box",
    aliases: ["takeout box", "greasy box"],
    category: "paper",
    recyclable: "special",
    disposalMethod: "Tear off the clean lid to recycle. The greasy bottom MUST go in the compost/green bin or trash.",
    ecoAlternative: "Dine-in or make pizza at home.",
    ecoScore: "okay",
    ecoScoreReason: "Grease ruins paper recycling batches, but it is compostable."
  },
  {
    id: "receipts",
    name: "Thermal Receipts",
    aliases: ["store receipt", "receipt", "paper receipt"],
    category: "paper",
    recyclable: false,
    disposalMethod: "Throw in the trash. The shiny thermal paper contains BPA/BPS and cannot be recycled or composted.",
    ecoAlternative: "Always ask for an email or digital receipt.",
    ecoScore: "bad",
    ecoScoreReason: "Contains toxic chemicals and contaminates paper recycling streams."
  },
  {
    id: "paper-cup",
    name: "Paper Cup",
    aliases: ["coffee cup", "starbucks cup", "takeout cup"],
    category: "paper",
    recyclable: false,
    disposalMethod: "Most go in the trash. They are lined with plastic to prevent leaks, making them unrecyclable in most facilities.",
    ecoAlternative: "Bring a reusable thermos or mug.",
    ecoScore: "bad",
    ecoScoreReason: "Deceptive 'paper' exterior but requires special facilities to separate the plastic lining."
  },
  {
    id: "egg-carton",
    name: "Paper Egg Carton",
    aliases: ["egg box", "cardboard carton"],
    category: "paper",
    recyclable: true,
    disposalMethod: "Clean ones can be recycled. If soiled, they can be composted.",
    ecoAlternative: "Buy eggs from local farmers who reuse cartons.",
    ecoScore: "good",
    ecoScoreReason: "Made from recycled paper and can be recycled again or composted."
  },
  {
    id: "smartphone",
    name: "Old Smartphone",
    aliases: ["cell phone", "iphone", "android", "mobile"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "Do NOT throw in trash. Take to an e-waste drop-off or Best Buy/Apple store for recycling.",
    ecoAlternative: "Repair your device or buy refurbished instead of new.",
    ecoScore: "bad",
    ecoScoreReason: "Contains rare earth metals and toxic chemicals. Mining for new phones is highly destructive."
  },
  {
    id: "laptop",
    name: "Laptop",
    aliases: ["computer", "macbook", "pc"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "Wipe your data, then take to a certified e-waste recycler.",
    ecoAlternative: "Upgrade components (RAM/SSD) to extend lifespan.",
    ecoScore: "okay",
    ecoScoreReason: "E-waste recycling recovers valuable metals, but the initial carbon footprint is huge."
  },
  {
    id: "alkaline-batteries",
    name: "AA/AAA Batteries",
    aliases: ["batteries", "alkaline", "remote batteries"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "In many places, modern alkalines can go in the trash, but taking them to a hazardous waste facility is better.",
    ecoAlternative: "Invest in high-quality rechargeable batteries.",
    ecoScore: "bad",
    ecoScoreReason: "Single-use and contain corrosive materials."
  },
  {
    id: "lithium-batteries",
    name: "Lithium-ion Batteries",
    aliases: ["phone battery", "laptop battery", "rechargeable battery"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "NEVER put in trash or curbside recycling (they cause fires). Must go to a hazardous waste or battery drop-off.",
    ecoAlternative: "Take care of your devices to prolong battery life.",
    ecoScore: "okay",
    ecoScoreReason: "Highly dangerous if mismanaged, but valuable to recycle."
  },
  {
    id: "printer-ink",
    name: "Printer Ink Cartridge",
    aliases: ["ink", "toner", "cartridge"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "Return to office supply stores (Staples, Office Depot) or mail back to manufacturer.",
    ecoAlternative: "Use a refillable ink tank printer or print less.",
    ecoScore: "bad",
    ecoScoreReason: "Plastic casing and toxic ink take 1000+ years to decompose."
  },
  {
    id: "lightbulb-led",
    name: "LED Lightbulb",
    aliases: ["led bulb", "light", "lamp"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "Take to a hardware store (Home Depot, Lowe's) or e-waste facility.",
    ecoAlternative: "LEDs are already the eco-friendly alternative! Turn them off when leaving a room.",
    ecoScore: "good",
    ecoScoreReason: "Highly energy efficient and long-lasting."
  },
  {
    id: "lightbulb-cfl",
    name: "CFL Lightbulb",
    aliases: ["cfl bulb", "spiral bulb", "fluorescent"],
    category: "ewaste",
    recyclable: "special",
    disposalMethod: "Take to a hazardous waste center or hardware store. Do NOT trash (they contain mercury).",
    ecoAlternative: "Upgrade to LED bulbs.",
    ecoScore: "okay",
    ecoScoreReason: "Energy efficient but contain toxic mercury."
  },
  {
    id: "glass-bottle",
    name: "Glass Bottle",
    aliases: ["beer bottle", "soda glass", "clear glass"],
    category: "glass",
    recyclable: true,
    disposalMethod: "Rinse and place in the recycling bin. Labels can stay on.",
    ecoAlternative: "Buy items in bulk or use refill stations.",
    ecoScore: "good",
    ecoScoreReason: "Glass is 100% recyclable indefinitely without loss of quality."
  },
  {
    id: "wine-bottle",
    name: "Wine Bottle",
    aliases: ["wine", "green glass", "glass bottle"],
    category: "glass",
    recyclable: true,
    disposalMethod: "Rinse and recycle. Remove the cork (corks can often be composted if natural).",
    ecoAlternative: "Look for local wineries that refill bottles.",
    ecoScore: "good",
    ecoScoreReason: "Infinitely recyclable."
  },
  {
    id: "broken-glass",
    name: "Broken Glass",
    aliases: ["shards", "broken window", "shattered cup"],
    category: "glass",
    recyclable: false,
    disposalMethod: "Wrap safely in newspaper, box it up, and place in the regular trash. Do NOT recycle.",
    ecoAlternative: "Handle glassware carefully.",
    ecoScore: "okay",
    ecoScoreReason: "Dangerous for recycling facility workers and often mixed with non-recyclable coatings."
  },
  {
    id: "mirror",
    name: "Mirror",
    aliases: ["looking glass", "broken mirror"],
    category: "glass",
    recyclable: false,
    disposalMethod: "Wrap carefully and place in trash. Large mirrors may need bulk trash pickup.",
    ecoAlternative: "Donate or sell if intact.",
    ecoScore: "bad",
    ecoScoreReason: "The reflective coating makes it impossible to recycle with standard glass."
  },
  {
    id: "aluminum-can",
    name: "Aluminum Can",
    aliases: ["soda can", "beer can", "coke can"],
    category: "metal",
    recyclable: true,
    disposalMethod: "Empty, rinse lightly, and recycle. Do not crush (keeps sorting machines accurate).",
    ecoAlternative: "Drink tap water or buy in bulk.",
    ecoScore: "good",
    ecoScoreReason: "Recycling aluminum saves 95% of the energy needed to make new aluminum."
  },
  {
    id: "steel-can",
    name: "Steel / Tin Can",
    aliases: ["soup can", "bean can", "tin can"],
    category: "metal",
    recyclable: true,
    disposalMethod: "Rinse clean. Place the lid inside the can and squeeze the top closed to trap it, then recycle.",
    ecoAlternative: "Cook fresh beans/soups instead of canned.",
    ecoScore: "good",
    ecoScoreReason: "Highly recyclable."
  },
  {
    id: "tin-foil",
    name: "Aluminum Foil",
    aliases: ["tinfoil", "baking foil", "foil"],
    category: "metal",
    recyclable: "special",
    disposalMethod: "If completely clean, ball it up (at least 2 inches wide) and recycle. If food-soiled, trash it.",
    ecoAlternative: "Use silicone baking mats or glass containers with lids.",
    ecoScore: "okay",
    ecoScoreReason: "Recyclable only if clean, which is rare for used foil."
  },
  {
    id: "cotton-clothes",
    name: "Cotton Clothing",
    aliases: ["t-shirt", "jeans", "socks", "fabric", "textiles"],
    category: "other",
    recyclable: "special",
    disposalMethod: "Donate if wearable. If torn/stained, drop at a textile recycling bin (H&M, Zara, local bins). Do not put in curbside bins.",
    ecoAlternative: "Buy secondhand, mend holes, and wear clothes longer.",
    ecoScore: "okay",
    ecoScoreReason: "Textile waste is a massive landfill problem. Recycling exists but isn't widespread."
  },
  {
    id: "shoes",
    name: "Shoes",
    aliases: ["sneakers", "boots", "footwear"],
    category: "other",
    recyclable: "special",
    disposalMethod: "Donate if in good condition. Otherwise, use specific shoe recycling programs (like Nike's).",
    ecoAlternative: "Repair soles at a cobbler instead of buying new.",
    ecoScore: "bad",
    ecoScoreReason: "Made of complex mixed materials (rubber, foam, glue, leather) making them very hard to recycle."
  },
  {
    id: "paint",
    name: "Paint Cans",
    aliases: ["latex paint", "oil paint", "primer"],
    category: "other",
    recyclable: "special",
    disposalMethod: "Dry out completely (add kitty litter or paint hardener), then trash. Or take liquid paint to hazardous waste.",
    ecoAlternative: "Buy only what you need, and donate leftover paint.",
    ecoScore: "bad",
    ecoScoreReason: "Toxic to groundwater if dumped improperly."
  },
  {
    id: "motor-oil",
    name: "Motor Oil",
    aliases: ["car oil", "engine oil"],
    category: "other",
    recyclable: "special",
    disposalMethod: "Take to an auto parts store (AutoZone, Jiffy Lube) or hazardous waste center.",
    ecoAlternative: "Drive an EV or use public transit.",
    ecoScore: "okay",
    ecoScoreReason: "Highly toxic to water, but fully recyclable if taken to the right place."
  },
  {
    id: "diapers",
    name: "Disposable Diapers",
    aliases: ["nappies", "pampers", "huggies"],
    category: "other",
    recyclable: false,
    disposalMethod: "Trash only. Never flush.",
    ecoAlternative: "Use reusable cloth diapers or compostable alternatives.",
    ecoScore: "bad",
    ecoScoreReason: "Takes 500+ years to decompose and introduces untreated bio-waste to landfills."
  },
  {
    id: "wet-wipes",
    name: "Wet Wipes",
    aliases: ["baby wipes", "makeup wipes", "flushable wipes"],
    category: "other",
    recyclable: false,
    disposalMethod: "Trash only. NEVER FLUSH (even if labeled 'flushable' — they destroy plumbing).",
    ecoAlternative: "Use a washcloth with water and soap.",
    ecoScore: "bad",
    ecoScoreReason: "Usually made with synthetic fibers (plastic) and block municipal sewers."
  },
  {
    id: "medication",
    name: "Old Medication",
    aliases: ["pills", "drugs", "prescriptions"],
    category: "other",
    recyclable: "special",
    disposalMethod: "Take to a pharmacy drop-box or police station. Do NOT flush down the toilet.",
    ecoAlternative: "Only fill prescriptions you plan to take.",
    ecoScore: "okay",
    ecoScoreReason: "Flushing contaminates the water supply and affects wildlife."
  },
];
