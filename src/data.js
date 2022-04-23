let guides = [
  {
    slug: "chemex-8-cup",
    method: "Chemex 8 Cup",
    weight: [42, 6],
    coarseness: "Kosher salt",
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
    preBrew: {
      title: "Add coffee",
      instruction:
        "Center the coffee in your brewer, zero out the scale, and start timer.",
    },
    brew: [
      {
        time: 0,
        weight: 150,
        title: "Saturate grounds",
        instruction:
          "Add (hot) water until all the grounds are saturated, which should be about 150g. Stir to get out any dry clumps.",
      },
      {
        // time: 45,
        time: 5,
        weight: 450,
        title: "Add more water",
        instruction:
          "Start second pour, first in a wiggling motion, then a gentle spiral, until you reach about 45og of water. Pour over the dark spots and avoid the light ones.",
      },
      {
        // time: 105,
        time: 10,
        weight: 700,
        title: "Fill to the top",
        instruction:
          "At 1:45, fill the brewer flush to the top or about 700g of water.",
      },

      {
        // time: 240,
        time: 15,
        weight: 700,
        title: "Wait for it to brew",
        instruction:
          "You should be pretty close to volume. Look at the glass bubble or belly button, which indicates 20 ounces. Lift the filter. It’s okay to hover for a couple of seconds to make sure you have enough volume. Then pull the filter out completely and let it drain into the sink.",
      },
    ],
  },
  {
    slug: "aeropress",
    method: "Aeropress",
    weight: [17, "2 1/2"],
    coarseness: "Table salt",
    equipment: [
      "Aeropress brewer",
      "Aeropress filter",
      "Grinder",
      "17g (1 Aeropress scoop) of coffee",
      "Hot water just off the boil",
      "Aeropress paddle or spoon",
      "Timer",
      "Mug",
    ],
    prep: [
      [
        "Prep and preheat",
        "Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.",
      ],
      [
        "Weigh and grind coffee",
        "Add 42g or about 6 Tablespoons of coffee, ground kind of like Kosher salt. Center the coffee in your brewer and zero out the scale.",
      ],
    ],
  },
  {
    slug: "french-press",
    method: "8 Cup French Press",
    weight: [56, 8],
    coarseness: "Breadcrumbs",
    equipment: [
      "8 cup French press brewer",
      "Grinder",
      "56g (8 tablespoons) of fresh coffee",
      "Hot water just off the boil",
      "Wooden spoon or coffee paddle",
      "Scale",
      "Timer",
      "Mug",
    ],
    prep: [
      [
        "Prep and preheat",
        "Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.",
      ],
      [
        "Weigh and grind coffee",
        "Add 42g or about 6 Tablespoons of coffee, ground kind of like Kosher salt. Center the coffee in your brewer and zero out the scale.",
      ],
    ],
  },
];

export function getGuides() {
  return guides;
}

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}
