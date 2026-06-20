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
score: {
    home: 2,
    away: 0
  },
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
  bet1: "",
  bet2: "",
  bet3: ""
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
score: {
    home: 0,
    away: 1
  },
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
  bet1: "",
  bet2: "",
  bet3: ""
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
score: {
    home: 3,
    away: 0
  },
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
      bet1: "",
      bet2: "",
      bet3: ""
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
score: {
    home: 0,
    away: 1
  },
    competition: "World Cup 2026",
    group: "Group D",

    kickoff: {
      date: "2026-06-20T03:00:00Z",
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
  },
   "netherlands-sweden": {
    home: { name: "Netherlands", key: "netherlands", code: "nl" },
    away: { name: "Sweden", key: "sweden", code: "se" },

    competition: "World Cup 2026",
    group: "Group F",

    kickoff: {
      date: "2026-06-21T01:00:00+08:00",
      location: "Houston Stadium, Houston"
    },

    ratings: {
      netherlands: {
        attack: 85,
        defense: 83,
        pressing: 82,
        transition: 84
      },
      sweden: {
        attack: 87,
        defense: 81,
        pressing: 77,
        transition: 76
      }
    },

    tactics: {
      netherlands: {
        style: "Possession control + wide attacking rotations",
        advantage: "Technical control and buildup quality"
      },
      sweden: {
        style: "Compact defensive block + direct attacks",
        advantage: "Physicality and aerial threat"
      }
    },

    scouting: {
      injury: {
        home: "No major injuries added yet",
        away: "No major injuries added yet"
      },
      weakness: {
        home: "Can be exposed if fullbacks push too high",
        away: "May struggle to control possession for long periods"
      },
      summary:
        "Netherlands should look to control the ball, while Sweden can threaten through direct play and set pieces."
    },

    analysis: {
      insight: {
        style: "Possession team vs compact defensive team",
        keyBattle: "Netherlands midfield control vs Sweden defensive shape",
        risk: "Sweden set pieces and transition chances"
      },

      prediction: {
        home: 52,
        away: 24,
        draw: 24
      },

      bestBets: {
        bet1: "",
        bet2: "",
        bet3: ""
      },

      outlook: {
        flow:
          "Netherlands likely control possession while Sweden defend compactly and look for direct attacking moments.",

        factors: [
          "Midfield control",
          "Set-piece defense",
          "Wide attacking efficiency"
        ],

        edge:
          "Slight advantage to Netherlands due to stronger technical control."
      }
    }
  },

  "germany-ivory-coast": {
    home: { name: "Germany", key: "germany", code: "de" },
    away: { name: "Ivory Coast", key: "ivoryCoast", code: "ci" },

    competition: "World Cup 2026",
    group: "Group E",

    kickoff: {
      date: "2026-06-21T04:00:00+08:00",
      location: "Toronto Stadium, Toronto"
    },

    ratings: {
      germany: {
        attack: 88,
        defense: 84,
        pressing: 86,
        transition: 85
      },
      ivoryCoast: {
        attack: 79,
        defense: 77,
        pressing: 76,
        transition: 82
      }
    },

    tactics: {
      germany: {
        style: "High possession + structured pressing",
        advantage: "Midfield control and attacking depth"
      },
      ivoryCoast: {
        style: "Athletic transitions + direct attacking",
        advantage: "Speed and physicality in open space"
      }
    },

    scouting: {
      injury: {
        home: "No major injuries added yet",
        away: "No major injuries added yet"
      },
      weakness: {
        home: "Can leave space behind the press",
        away: "Can struggle against sustained possession pressure"
      },
      summary:
        "Germany should control large phases of possession, while Ivory Coast can be dangerous in transition."
    },

    analysis: {
      insight: {
        style: "Possession pressure vs athletic counter attack",
        keyBattle: "Germany midfield control vs Ivory Coast transition speed",
        risk: "Germany getting exposed after losing possession"
      },

      prediction: {
        home: 60,
        away: 20,
        draw: 20
      },

      bestBets: {
        bet1: "",
        bet2: "",
        bet3: ""
      },

      outlook: {
        flow:
          "Germany expected to dominate possession, with Ivory Coast looking to attack quickly after turnovers.",

        factors: [
          "Germany counter-pressing",
          "Ivory Coast transition speed",
          "Final third efficiency"
        ],

        edge:
          "Advantage to Germany due to stronger structure and control."
      }
    }
  },

  "ecuador-curacao": {
    home: { name: "Ecuador", key: "ecuador", code: "ec" },
    away: { name: "Curacao", key: "curacao", code: "cw" },

    competition: "World Cup 2026",
    group: "Group E",

    kickoff: {
      date: "2026-06-21T08:00:00+08:00",
      location: "Kansas City Stadium, Kansas City"
    },

    ratings: {
      ecuador: {
        attack: 80,
        defense: 83,
        pressing: 81,
        transition: 82
      },
      curacao: {
        attack: 68,
        defense: 70,
        pressing: 67,
        transition: 69
      }
    },

    tactics: {
      ecuador: {
        style: "Physical pressing + fast wide attacks",
        advantage: "Athleticism and defensive intensity"
      },
      curacao: {
        style: "Compact defending + counter attacking",
        advantage: "Low block discipline"
      }
    },

    scouting: {
      injury: {
        home: "No major injuries added yet",
        away: "No major injuries added yet"
      },
      weakness: {
        home: "Can be inefficient if forced to break down a deep block",
        away: "May struggle against high pressing and physical duels"
      },
      summary:
        "Ecuador should have the physical and defensive edge, while Curacao will likely defend deeper and counter."
    },

    analysis: {
      insight: {
        style: "High intensity pressing vs low block",
        keyBattle: "Ecuador pressure vs Curacao defensive resistance",
        risk: "Ecuador failing to convert dominance into goals"
      },

      prediction: {
        home: 65,
        away: 15,
        draw: 20
      },

      bestBets: {
        bet1: "",
        bet2: "",
        bet3: ""
      },

      outlook: {
        flow:
          "Ecuador likely press high and control territory, while Curacao defend compactly and look for rare counters.",

        factors: [
          "Early goal impact",
          "Ecuador pressing intensity",
          "Curacao defensive discipline"
        ],

        edge:
          "Advantage to Ecuador due to stronger physical profile and defensive quality."
      }
    }
  },

  "tunisia-japan": {
    home: { name: "Tunisia", key: "tunisia", code: "tn" },
    away: { name: "Japan", key: "japan", code: "jp" },

    competition: "World Cup 2026",
    group: "Group F",

    kickoff: {
      date: "2026-06-21T12:00:00+08:00",
      location: "Estadio Monterrey, Guadalupe"
    },

    ratings: {
      tunisia: {
        attack: 73,
        defense: 78,
        pressing: 75,
        transition: 74
      },
      japan: {
        attack: 84,
        defense: 80,
        pressing: 86,
        transition: 85
      }
    },

    tactics: {
      tunisia: {
        style: "Compact defense + disciplined midfield block",
        advantage: "Defensive organization"
      },
      japan: {
        style: "High tempo pressing + quick combinations",
        advantage: "Speed, pressing, and technical movement"
      }
    },

    scouting: {
      injury: {
        home: "No major injuries added yet",
        away: "No major injuries added yet"
      },
      weakness: {
        home: "Can struggle to progress the ball under pressure",
        away: "Can be vulnerable to physical duels and set pieces"
      },
      summary:
        "Japan should bring tempo and pressing, while Tunisia rely on defensive discipline and compact spacing."
    },

    analysis: {
      insight: {
        style: "High tempo pressing vs compact defensive block",
        keyBattle: "Japan pressing vs Tunisia buildup",
        risk: "Tunisia set pieces and defensive resilience"
      },

      prediction: {
        home: 22,
        away: 55,
        draw: 23
      },

      bestBets: {
        bet1: "",
        bet2: "",
        bet3: ""
      },

      outlook: {
        flow:
          "Japan expected to press aggressively and move the ball quickly, while Tunisia look to slow the game down and defend compactly.",

        factors: [
          "Japan pressing success",
          "Tunisia defensive structure",
          "Set-piece danger"
        ],

        edge:
          "Advantage to Japan due to stronger pressing and attacking rhythm."
      }
    }
  }

};