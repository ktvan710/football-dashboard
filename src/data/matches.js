export const countryFlags = (code) =>
  `https://flagcdn.com/24x18/${code}.png`;

export const globalAssets = {
  trophy:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/2026_FIFA_World_Cup_emblem.svg/250px-2026_FIFA_World_Cup_emblem.svg.png",
  ronaldo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiyoP2_CWbi4AkU6TFKhTYDZE8enJK14N9w&s"
};

export const matches = {
  "usa-australia": {
    home: { name: "USA", key: "usa", code: "us" },
  away: { name: "Australia", key: "australia", code: "au" },

    competition: "World Cup 2026",
    group: "Group D",

    kickoff: {
      date: "2026-06-19T19:00:00Z",
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
        home: 61.7,
        away: 23.2,
        draw: 18.9
      },

      bestBets: {
  bet1: "Australia +2.5 corners",
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
  home: { name: "Scotland", key: "scotland", code: "gb-sct" },
  away: { name: "Morocco", key: "morocco", code: "ma" },

  competition: "World Cup 2026",
  group: "Group C",

  kickoff: {
    date: "2026-06-19T22:00:00Z",
    location: "Boston Stadium, Massachusetts"
  },

  scouting: {
    injury: {
      home: "Scott McKenna, CB, calf injury",
      away: "Bounou mild shoulder injury"
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
      home: 17.8,
      away: 27.4,
      draw: 58.8
    },

    bestBets: {
  bet1: "Scotland over 0.5",
  bet2: "Both Teams to Score and Draw",
  bet3: "Under 8.5 corners"
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
  home: { name: "Brazil", key: "brazil", code: "br" },
  away: { name: "Haiti", key: "haiti", code: "ht" },

  competition: "World Cup 2026",
  group: "Group C",

  kickoff: {
    date: "2026-06-20T00:30:00Z",
    location: "Philadelphia Stadium, Philadelphia"
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
      home: "Neymar out",
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
      home: 90.1,
      away: 8.92,
      draw: 3.98
    },

    bestBets: {
      bet1: "Brazil to Nil",
      bet2: "1st half under 1.5",
      bet3: "Odd"
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
  key: "turkey", code: "tr"
},

away: {
  name: "Paraguay",
  key: "paraguay", code: "py"
},
    competition: "World Cup 2026",
    group: "Group D",

    kickoff: {
      date: "2026-06-20T04:00:00Z",
      location: "SF Bay Area Stadium, Santa Clara"
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
        home: "Yildiz doubtful, calf",
        away: "Gustavo Caballero and Ramon Sosa doubtful"
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
        home: 48.3,
        away: 29.2,
        draw: 26.3
      },

      bestBets: {
        bet1: "Turkey Win",
        bet2: "2nd half highest scoring half",
        bet3: "Turkey Corners -1.5"
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