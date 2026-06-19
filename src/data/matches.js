export const globalAssets = {
  trophy:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/2026_FIFA_World_Cup_emblem.svg/250px-2026_FIFA_World_Cup_emblem.svg.png",
  ronaldo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiyoP2_CWbi4AkU6TFKhTYDZE8enJK14N9w&s"
};

export const matches = {
  "usa-australia": {
    home: { name: "USA", key: "usa" },
  away: { name: "Australia", key: "australia" },

    competition: "World Cup 2026",
    group: "Group D",

    kickoff: {
      date: "June 19, 2026",
      location: "Seattle Stadium, Seattle"
    },

    ratings: {
      usa: {
        attack: 84,
        defense: 78,
        pressing: 88,
        transition: 82
      },
      australia: {
        attack: 76,
        defense: 80,
        pressing: 74,
        transition: 75
      }
    },

    tactics: {
      usa: {
        style: "High press + fast transitions",
        advantage: "Pressing intensity"
      },
      australia: {
        style: "Compact defense + counter attack",
        advantage: "Defensive structure"
      }
    },

    scouting: {
      injury: {
        home: "Christian Pulisic doubtful, left calf injury",
        away: "Mohamed Toure doubtful, calf injury"
      },
      weakness: {
        home: "Defensive transitions when fullbacks push high",
        away: "Struggles under high pressing intensity"
      },
      summary:
        "USA controls tempo through pressing, Australia relies on compact defense and counters."
    },

    analysis: {
      insight: {
        style: "High tempo vs defensive block",
        keyBattle: "Midfield control",
        risk: "Transition defense on counter attacks"
      },

      prediction: {
        home: 58,
        away: 27,
        draw: 15
      },

      bestBets: {
  bet1: "Over 2.5 Goals",
  bet2: "Both Teams to Score",
  bet3: "Double Chance: Australia or Draw"
},

      outlook: {
        flow:
          "USA dominant possession phases, Australia low block + counter attacks",

        factors: [
          "Midfield control under pressure",
          "Transition defense after losing possession",
          "Efficiency in final third"
        ],

        edge:
          "Slight advantage: USA due to higher pressing intensity and attacking output."
      }
    }
  },

  "scotland-morocco": {
  home: { name: "Scotland", key: "scotland" },
  away: { name: "Morocco", key: "morocco" },

  competition: "World Cup 2026",
  group: "Group C",

  kickoff: {
    date: "June 19, 2026",
    location: "Lusail Stadium"
  },

  scouting: {
    injury: {
      home: "None reported",
      away: "None reported"
    },
    weakness: {
      home: "Inconsistency in buildup under pressure",
      away: "Can be stretched in wide defensive zones"
    },
    summary:
      "Scotland’s direct wing play vs Morocco’s structured defensive system creates a tactical battle of tempo vs control."
  },

  analysis: {
    insight: {
      style: "Direct attacking vs structured defense",
      keyBattle: "Wide areas and transition control",
      risk: "Scotland losing possession in buildup under pressure"
    },

    prediction: {
      home: 34,
      away: 41,
      draw: 25
    },

    bestBets: {
  bet1: "Over 2.5 Goals",
  bet2: "Both Teams to Score",
  bet3: "Double Chance: Morocco or Draw"
},

    outlook: {
      flow:
        "Morocco expected to sit in a compact mid-block while Scotland look to progress quickly through wide channels and crosses.",

      factors: [
        "Wide duels (fullbacks vs wingers)",
        "Set-piece effectiveness",
        "Transition speed after turnovers"
      ],

      edge:
        "Slight advantage to Morocco due to defensive structure and transition control."
    }
  },

  ratings: {
    scotland: {
      attack: 77,
      defense: 79,
      pressing: 74,
      transition: 76
    },
    morocco: {
      attack: 80,
      defense: 86,
      pressing: 82,
      transition: 81
    }
  },

  tactics: {
    scotland: {
      style: "Direct attacking + wing play",
      advantage: "Crossing and set pieces"
    },
    morocco: {
      style: "Structured defense + quick counters",
      advantage: "Defensive stability + transition speed"
    }
  }
},

  "brazil-haiti": {
  home: { name: "Brazil", key: "brazil" },
  away: { name: "Haiti", key: "haiti" },

  competition: "World Cup 2026",
  group: "Group C",

  kickoff: {
    date: "June 19, 2026",
    location: "Lusail Stadium"
  },

  ratings: {
    brazil: {
      attack: 92,
      defense: 85,
      pressing: 88,
      transition: 90
    },
    haiti: {
      attack: 68,
      defense: 70,
      pressing: 66,
      transition: 65
    }
  },

  tactics: {
    brazil: {
      style: "High possession + creative attacking overloads",
      advantage: "Technical superiority in final third"
    },
    haiti: {
      style: "Low block + counter attacking focus",
      advantage: "Compact defensive shape"
    }
  },

  scouting: {
    injury: {
      home: "No major injuries reported",
      away: "No major injuries reported"
    },
    weakness: {
      home: "Occasional vulnerability to fast counters",
      away: "Struggles under sustained pressure and possession dominance"
    },
    summary:
      "Brazil’s fluid attacking system against Haiti’s compact defensive block."
  },

  analysis: {
    insight: {
      style: "Possession dominance vs low block defense",
      keyBattle: "Brazil attack vs Haiti defensive block",
      risk: "Haiti conceding early under pressure"
    },

    prediction: {
      home: 78,
      away: 10,
      draw: 12
    },

    bestBets: {
      bet1: "Brazil Win",
      bet2: "Over 2.5 Goals",
      bet3: "Brazil -1 Handicap"
    },

    outlook: {
      flow:
        "Brazil expected to dominate possession with high attacking pressure, while Haiti will sit deep and look for rare counter attacking chances.",

      factors: [
        "Brazil attacking width vs deep defensive block",
        "Early goal impact",
        "Haiti transition efficiency"
      ],

      edge:
        "Strong advantage to Brazil due to overwhelming attacking and technical superiority."
    }
  }
},

   "turkey-paraguay": {
    home: {
  name: "Turkey",
  key: "turkey"
},

away: {
  name: "Paraguay",
  key: "paraguay"
},
    competition: "World Cup 2026",
    group: "Group D",

    kickoff: {
      date: "June 19, 2026",
      location: "Hard Rock Stadium, Miami"
    },

    ratings: {
      turkey: {
        attack: 82,
        defense: 78,
        pressing: 80,
        transition: 81
      },
      paraguay: {
        attack: 74,
        defense: 77,
        pressing: 75,
        transition: 76
      }
    },

    tactics: {
      turkey: {
        style: "High pressing + direct attack",
        advantage: "Physical intensity"
      },
      paraguay: {
        style: "Compact block + counters",
        advantage: "Defensive discipline"
      }
    },

    scouting: {
      injury: {
        home: "Minor knocks, squad mostly fit",
        away: "No major injuries reported"
      },
      weakness: {
        home: "Leaves space when overattacking",
        away: "Struggles vs sustained press"
      },
      summary:
        "Turkey aggression vs Paraguay defensive discipline."
    },

    analysis: {
      insight: {
        style: "Pressing vs low block",
        keyBattle: "Midfield duels",
        risk: "Turkey defensive gaps"
      },

      prediction: {
        home: 52,
        away: 23,
        draw: 25
      },

      bestBets: {
        bet1: "Turkey Win or Draw",
        bet2: "Under 3.5 Goals",
        bet3: "Turkey Corners Over 4.5"
      },

      outlook: {
        flow:
          "Turkey press high while Paraguay sit deep and counter.",

        factors: [
          "Midfield battles",
          "Set pieces",
          "Transitions"
        ],

        edge:
          "Slight advantage to Turkey."
      }
    }
  }
};