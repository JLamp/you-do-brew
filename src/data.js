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
    // preBrew: {
    //   title: "Add coffee",
    //   instruction:
    //     "Center the coffee in your brewer, zero out the scale, and start timer.",
    // },
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
];

export function getGuides() {
  return guides.sort((a, b) => a.method.localeCompare(b.method));
}

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}
