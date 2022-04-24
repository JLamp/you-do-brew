let guides = [
  {
    slug: "chemex-8-cup",
    method: "Chemex (8 Cup)",
    weight: [42, 6],
    coarseness: "Kosher salt",
    totalTime: "4 minutes",
    equipment: [
      "8-Cup Chemex",
      "Chemex Filter",
      "Grinder",
      "Scale",
      "Stir stick",
      "Mug",
    ],
    prep: {
      title: "Prep and preheat",
      instruction:
        "Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.",
    },
    brew: [
      {
        title: "Add coffee",
        instruction:
          "Center the coffee in your brewer, zero out the scale, and start timer.",
      },
      {
        time: 0,
        weight: [150, 1],
        title: "Saturate grounds",
        instruction:
          "Add (hot) water until all the grounds are saturated, which should be about 150g. Stir to get out any dry clumps.",
      },
      {
        // time: 45,
        time: 5,
        weight: [450, 3],
        title: "Add more water",
        instruction:
          "Start second pour, first in a wiggling motion, then a gentle spiral, until you reach about 45og of water. Pour over the dark spots and avoid the light ones.",
      },
      {
        // time: 105,
        time: 10,
        weight: [700, 5],
        title: "Fill to the top",
        instruction:
          "At 1:45, fill the brewer flush to the top or about 700g of water.",
      },

      {
        // time: 240,
        time: 15,
        weight: [700, 0],
        title: "Enjoy :)",
        instruction:
          "You should be pretty close to volume. It’s okay to hover for a couple of seconds to make sure you have enough volume. Then pull the filter out completely and let it drain into the sink.",
      },
    ],
  },
  {
    slug: "hario-v60",
    method: "Hario V60",
    weight: [21, 3],
    coarseness: "Kosher salt",
    totalTime: "3 minutes",
    equipment: [
      "Hario V60 Brewer",
      "Hario V60 Filter",
      "Grinder",
      "Scale",
      "Mug",
    ],
    prep: {
      title: "Fold and rinse filter",
      instruction:
        "Fold the filter into a cone shape and rinse it in the Hario dripper with water just off the boil (about 205°F) to eliminate paper flavor and to heat up the mug or carafe you are brewing into. Discard the rinse water.",
    },
    preBrew: {
      title: "Add coffee",
      instruction:
        "Center coffee in your brewer, zero out the scale, and start timer.",
    },
    brew: [
      {
        time: 0,
        weight: [65, 15],
        title: "Saturate grounds",
        instruction:
          "Add just enough water to cover the grounds and let bloom.",
      },
      {
        time: 30,
        weight: [130, 15],
        title: "Second pour",
        instruction:
          "Pour water in a slow, even spiral. Power over the dark spots and avoid the light ones.",
      },
      {
        time: 60,
        weight: [195, 15],
        title: "Third pour",
        instruction:
          "Pour water in a slow, even spiral. Power over the dark spots and avoid the light ones.",
      },
      {
        time: 90,
        weight: [260, 15],
        title: "Fourth pour",
        instruction:
          "Pour water in a slow, even spiral. Power over the dark spots and avoid the light ones.",
      },
      {
        time: 120,
        weight: [325, 15],
        title: "Fifth pour",
        instruction:
          "Pour water in a slow, even spiral. Power over the dark spots and avoid the light ones.",
      },
      {
        time: 150,
        weight: [390, 15],
        title: "Last pour",
        instruction:
          "Pour water in a slow, even spiral. Power over the dark spots and avoid the light ones.",
      },
      {
        time: 180,
        weight: [390, 0],
        title: "Enjoy :)",
        instruction:
          "You should have about 10 oz of brewed coffee. Remove the brewer and enjoy.",
      },
    ],
  },
  {
    slug: "chemex-6-cup",
    method: "Chemex (6 Cup)",
    weight: [28, 4],
    coarseness: "Kosher salt",
    totalTime: "3.5 minutes",
    equipment: [
      "6-Cup Chemex",
      "Chemex Filter",
      "Grinder",
      "Scale",
      "Stir stick",
      "Mug",
    ],
    prep: {
      title: "Prep and preheat",
      instruction:
        "Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.",
    },
    preBrew: {
      title: "Add coffee",
      instruction:
        "Center the coffee in your brewer, zero out the scale, and start timer.",
    },
    brew: [
      {
        time: 0,
        weight: [130, 20],
        title: "Saturate grounds",
        instruction:
          "Add (hot) water until all the grounds are saturated, which should be about 130g. Stir to get out any dry clumps.",
      },
      {
        time: 60,
        weight: [260, 20],
        title: "Add more water",
        instruction:
          "Start second pour, first in a wiggling motion, then a gentle spiral, until you reach about 260g of water. Pour over the dark spots and avoid the light ones.",
      },
      {
        time: 120,
        weight: [390, 20],
        title: "Fill to the top",
        instruction: "Fill the brewer flush to the top or about 390g (total).",
      },
      {
        time: 210,
        weight: [390, 0],
        title: "Enjoy :)",
        instruction:
          "You should be pretty close to volume. It’s okay to hover for a couple of seconds to make sure you have enough volume. Then pull the filter out completely and let it drain into the sink.",
      },
    ],
  },
  {
    slug: "french-press",
    method: "French Press",
    weight: [34, 5],
    coarseness: "Breadcrumbs",
    totalTime: "5.5 minutes",
    equipment: ["French Press", "Grinder", "Scale", "Stir stick", "Mug"],
    prep: {
      title: "Warm up the press",
      instruction:
        "Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.",
    },
    brew: [
      {
        title: "Add coffee",
        instruction:
          "Place the french press on a scale, add coffee, shake to level the coffee bed, zero the scale.",
      },
      {
        time: 0,
        weight: [200, 15],
        title: "Star timer and pour",
        instruction:
          "Start timer and pour 200 grams of water in 15 seconds. Stir for 5 seconds.",
      },
      {
        time: 30,
        weight: [400, 15],
        title: "Pour to top",
        instruction:
          "At 00:30, pour to 400 grams of water in 15 seconds. Stir for 5 seconds",
      },
      {
        time: 45,
        weight: [400, 0],
        title: "Place plunger",
        instruction:
          "Place the plunger on top of the french press. Press down so the screen is just below the surface of the water.",
      },
      {
        time: 300,
        weight: [400, 0],
        title: "Plunge & enjoy :)",
        instruction:
          "At 5:00, slowly press the plunger to the bottom over the course of 30 seconds. Serve immediately.",
      },
    ],
  },
  {
    slug: "aeropress",
    method: "AeroPress",
    weight: [21, 3],
    coarseness: "Table salt",
    totalTime: "1:45 minutes",
    equipment: ["Aeropress", "Aeropress filter", "Scale", "Stir stick", "Mug"],
    prep: {
      title: "Prep the AeroPress",
      instruction:
        "Get the AeroPress ready to brew by placing the filter in the basket. Next, preheat the brewer and rinse the filter with hot water. This gets rid of any paper flavor and warms everything up. Heat up your mug with hot water while you’re at it.",
    },
    brew: [
      {
        title: "Add coffee",
        instruction:
          "Use the funnel to transfer coffee into Aeropress. Place on a mug, or server, and put on a scale.",
      },
      {
        time: 0,
        weight: [260, 25],
        title: "Pour water",
        instruction:
          "Start your timer and pour 260g of water in 25 seconds (to the ‘4’ mark). Remove mug, with Aeropress, from the scale.",
      },
      {
        time: 35,
        weight: [260, 0],
        title: "Stir",
        instruction: "At 35 seconds, stir for 5 seconds.",
      },
      {
        time: 45,
        weight: [260, 0],
        title: "Plunge",
        instruction:
          "At 45 seconds, place the plunger on top and slowly press for 1 minute.",
      },
      {
        time: 105,
        weight: [260, 0],
        title: "Enjoy :)",
        instruction:
          "When the coffee bed looks dry, and nearly all the water is pushed out, ease up on your pressure. Remove the Aeropress, open the cap, and push out the coffee grounds to clean up. Serve.",
      },
    ],
  },
];

export function getGuides() {
  return guides.sort((a, b) => a.method.localeCompare(b.method));
}

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}
