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
  score: {
    home: 5,
    away: 1
  },
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
score: {
    home: 2,
    away: 1
  },
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
score: {
    home: 0,
    away: 0
  },
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
    score: {
      home: 0,
      away: 4
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
  },
    "spain-saudi-arabia": {
    home: {
      name: "Spain",
      code: "es"
    },
    away: {
      name: "Saudi Arabia",
      code: "sa"
    },
    competition: "FIFA World Cup 2026",
    group: "Group H",
    kickoff: {
      date: "2026-06-21T16:00:00Z",
      location: "Atlanta Stadium, Atlanta"
    },
    score: {
      home: 4,
      away: 0
    },
    ratings: {
      home: {
        attack: 92,
        defense: 87,
        pressing: 90,
        transition: 86
      },
      away: {
        attack: 70,
        defense: 66,
        pressing: 72,
        transition: 68
      }
    },
    tactics: {
      style:
        "Spain dominated through patient possession, aggressive counter-pressing, and fast combinations between the lines.",
      advantage:
        "Spain had the technical superiority, midfield control, and attacking depth to keep Saudi Arabia pinned back for long stretches."
    },
    scoutingReport: {
      injuries: [],
      weaknesses:
        "Saudi Arabia struggled to defend wide rotations and had problems tracking late runners into the box.",
      summary:
        "Spain produced a statement performance after their earlier draw with Cape Verde. Their spacing, vertical passing, and early chance creation overwhelmed Saudi Arabia."
    },
    dominance: {
      physicalEdge: "Spain",
      tacticalControl: "Spain",
      pressingEdge: "Spain"
    },
    insight: {
      style:
        "Spain looked closer to their usual identity: controlled possession, sharp pressing after losing the ball, and quick attacking waves.",
      keyBattle:
        "Spain’s midfield control vs Saudi Arabia’s ability to escape pressure.",
      riskFactor:
        "Saudi Arabia needed direct counters and set pieces, but Spain’s early goals removed most of that threat."
    },
    prediction: {
      homeWin: 72,
      awayWin: 10,
      draw: 18
    },
    outlook: {
      tempo: "Spain-controlled, high-possession tempo",
      keyPlayer: "Lamine Yamal",
      weather: "Warm conditions",
      travel: "Neutral venue"
    }
  },

  "belgium-iran": {
    home: {
      name: "Belgium",
      code: "be"
    },
    away: {
      name: "Iran",
      code: "ir"
    },
    competition: "FIFA World Cup 2026",
    group: "Group G",
    kickoff: {
      date: "2026-06-21T19:00:00Z",
      location: "Seattle Stadium, Seattle"
    },
    score: {
      home: 0,
      away: 0
    },
    ratings: {
      home: {
        attack: 82,
        defense: 80,
        pressing: 76,
        transition: 78
      },
      away: {
        attack: 74,
        defense: 83,
        pressing: 79,
        transition: 75
      }
    },
    tactics: {
      style:
        "Belgium tried to control possession, but Iran stayed compact, protected central zones, and slowed the rhythm.",
      advantage:
        "Belgium had more individual quality, but Iran’s defensive structure and discipline made the match difficult to break open."
    },
    scoutingReport: {
      injuries: [],
      weaknesses:
        "Belgium lacked sharpness in the final third and struggled to turn possession into clear chances.",
      summary:
        "This was a cagey Group G match. Belgium had the bigger names, but Iran’s compact block limited space and forced Belgium into slower, wider attacks."
    },
    dominance: {
      physicalEdge: "Iran",
      tacticalControl: "Belgium",
      pressingEdge: "Iran"
    },
    insight: {
      style:
        "Belgium were possession-heavy but not explosive enough. Iran defended with patience and made the game uncomfortable.",
      keyBattle:
        "Belgium’s creators vs Iran’s compact midfield and defensive line.",
      riskFactor:
        "Belgium’s biggest issue was chance creation; Iran’s biggest issue was generating enough threat going forward."
    },
    prediction: {
      homeWin: 48,
      awayWin: 22,
      draw: 30
    },
    outlook: {
      tempo: "Low-to-medium tempo, tactical and compact",
      keyPlayer: "Kevin De Bruyne",
      weather: "Mild conditions",
      travel: "Neutral venue"
    }
  },

  "uruguay-cape-verde": {
    home: {
      name: "Uruguay",
      code: "uy"
    },
    away: {
      name: "Cape Verde",
      code: "cv"
    },
    competition: "FIFA World Cup 2026",
    group: "Group H",
    kickoff: {
      date: "2026-06-21T22:00:00Z",
      location: "Miami Stadium, Miami Gardens"
    },
    score: {
      home: 2,
      away: 2
    },
    ratings: {
      home: {
        attack: 84,
        defense: 78,
        pressing: 82,
        transition: 83
      },
      away: {
        attack: 76,
        defense: 75,
        pressing: 77,
        transition: 80
      }
    },
    tactics: {
      style:
        "Uruguay played with intensity and directness, while Cape Verde relied on resilience, quick transitions, and set-piece threat.",
      advantage:
        "Uruguay had the stronger squad and more attacking pressure, but Cape Verde’s belief and transition threat kept them alive."
    },
    scoutingReport: {
      injuries: [],
      weaknesses:
        "Uruguay left spaces during attacking phases, while Cape Verde had to survive long stretches without the ball.",
      summary:
        "Cape Verde continued their impressive tournament story by earning a 2-2 draw against Uruguay. Uruguay had quality, but Cape Verde showed huge mentality and punished moments of space."
    },
    dominance: {
      physicalEdge: "Uruguay",
      tacticalControl: "Uruguay",
      pressingEdge: "Uruguay"
    },
    insight: {
      style:
        "Uruguay pushed the match physically, but Cape Verde were dangerous when they could break forward or attack dead-ball moments.",
      keyBattle:
        "Uruguay’s pressure vs Cape Verde’s defensive resilience and counterattacks.",
      riskFactor:
        "Uruguay’s aggression created chances, but also opened transition lanes."
    },
    prediction: {
      homeWin: 58,
      awayWin: 16,
      draw: 26
    },
    outlook: {
      tempo: "Physical, direct, high-emotion match",
      keyPlayer: "Federico Valverde",
      weather: "Hot conditions",
      travel: "Neutral venue"
    }
  },

  "new-zealand-egypt": {
    home: {
      name: "New Zealand",
      code: "nz"
    },
    away: {
      name: "Egypt",
      code: "eg"
    },
    competition: "FIFA World Cup 2026",
    group: "Group G",
    kickoff: {
      date: "2026-06-22T01:00:00Z",
      location: "Los Angeles Stadium, Los Angeles"
    },
    score: {
      home: 1,
      away: 3
    },
    ratings: {
      home: {
        attack: 71,
        defense: 69,
        pressing: 73,
        transition: 70
      },
      away: {
        attack: 82,
        defense: 77,
        pressing: 78,
        transition: 84
      }
    },
    tactics: {
      style:
        "New Zealand looked to compete physically and attack directly, while Egypt grew into the match through wide attacks and fast transitions.",
      advantage:
        "Egypt had more attacking quality and better final-third execution, especially once the game opened up."
    },
    scoutingReport: {
      injuries: [],
      weaknesses:
        "New Zealand struggled to manage Egypt’s attacking transitions and had difficulty defending wide-to-central combinations.",
      summary:
        "Egypt came back strongly and turned the game with sharper attacking movement. New Zealand competed well early, but Egypt’s quality in the final third decided the match."
    },
    dominance: {
      physicalEdge: "New Zealand",
      tacticalControl: "Egypt",
      pressingEdge: "Egypt"
    },
    insight: {
      style:
        "Egypt were at their best when they attacked quickly into space and used their forwards to stretch New Zealand’s back line.",
      keyBattle:
        "New Zealand’s physical defending vs Egypt’s transition speed and attacking quality.",
      riskFactor:
        "New Zealand needed to keep the game compact, but once Egypt found rhythm, the match tilted away from them."
    },
    prediction: {
      homeWin: 22,
      awayWin: 55,
      draw: 23
    },
    outlook: {
      tempo: "Open transition game",
      keyPlayer: "Mohamed Salah",
      weather: "Mild conditions",
      travel: "Neutral venue"
    }
  },
    "argentina-austria": {
    home: { name: "Argentina", code: "ar" },
    away: { name: "Austria", code: "at" },
    competition: "FIFA World Cup 2026",
    group: "Group J",
    kickoff: {
      date: "2026-06-22T17:00:00Z",
      location: "Dallas Stadium, Arlington"
    },
    score: {
      home: 2,
      away: 0
    },
    analyticsV2: {
      matchImportance: {
        level: "Top-spot swing match",
        note:
          "Both teams entered Matchday 2 with winning starts. Argentina can move toward qualification control, while Austria can prove its press is strong enough against elite possession.",
        environment:
          "Indoor venue, but hydration-break rhythm can still affect tactical resets.",
        gameState:
          "Argentina want control. Austria want disruption, verticality, and transition moments."
      },
      form: {
        home: {
          last_5_results: "Win 2–1 vs Mauritania; win 5–0 vs Zambia; win 2–0 vs Honduras; win 3–0 vs Iceland; win 3–0 vs Algeria.",
          goals_for_against: "15 GF / 1 GA across last 5; 3 GF / 0 GA in World Cup group data.",
          clean_sheets: "4 clean sheets in last 5; 1 clean sheet in tournament.",
          xG_trend: "1.47 xG vs Algeria — good finishing, not massive chance volume.",
          xGA_trend: "0.30 xGA vs Algeria — very strong defensive chance suppression.",
          opponent_strength: "Algeria opener was controlled; Austria is a tougher pressing/transition test. Scaloni specifically called Austria a “high pressure” and “vertical” team.",
          momentum_rating: "9/10",
          key_warning_sign:
            "Can become stretched if Austria’s first press forces rushed central passes"
        },
        away: {
          last_5_results:
            "Draw 1–1 vs Bosnia and Herzegovina; win 5–1 vs Ghana; win 1–0 vs South Korea; win 1–0 vs Tunisia; win 3–1 vs Jordan.",
          goals_for_against: "11 GF / 3 GA across last 5; 3 GF / 1 GA in World Cup group data.",
          clean_sheets: "2 clean sheets in last 5; 0 tournament clean sheets.",
          xG_trend: "1.66 xG vs Jordan, boosted by Arnautovic’s late penalty.",
          xGA_trend: "0.53 xGA vs Jordan.",
          opponent_strength: "Jordan made Austria work; Reuters said the 3–1 scoreline “perhaps flattered Austria” because Jordan were dangerous in transition; Argentina is a major step up",
          momentum_rating: "7/10",
          key_warning_sign:
            "High-pressing style leaves space behind if Argentina break the first line. Rangnick said Austria must be tactically strong and courageous against Argentina. High line can be exposed by Messi, Alvarez, Lautaro, and weak-side runners"
        }
      },
      tacticalIdentity: {
        home: {
          base_formation: "4-3-3 / 4-4-2 defensive variation",
          in_possession_shape: "2-3-5 with fullback support and Messi between lines",
          out_of_possession_shape: "Compact mid-block with selective pressing",
          build_up_style:
            "Patient circulation, midfield overloads, third-man combinations",
          pressing_style:
            "Situational press after backward passes or loose first touches",
          defensive_block: "Mid block that can jump into a high press",
          transition_style: "Fast vertical attacks once Messi or Enzo receive facing goal",
          main_attacking_zones: "Right half-space, central pockets, cutbacks",
          set_piece_strength: "Strong delivery and box presence",
          biggest_tactical_weakness:
            "Can leave space behind advanced fullbacks if possession breaks down"
        },
        away: {
          base_formation: "4-2-3-1 / 4-4-2 pressing structure",
          in_possession_shape: "Direct, vertical, quick support around the striker",
          out_of_possession_shape: "High press with aggressive man-oriented jumps",
          build_up_style: "Fast progression, fewer slow possessions",
          pressing_style: "Rangnick-style pressure, vertical traps, counter-press",
          defensive_block: "High to mid block",
          transition_style: "Immediate forward passes after regain",
          main_attacking_zones: "Wide channels and second-ball zones",
          set_piece_strength: "Physical threat",
          biggest_tactical_weakness:
            "Space behind the defensive line when the press is bypassed"
        }
      },
      matchupAnalysis: [
        "Argentina’s biggest edge is control between the lines. If Messi receives freely, Austria’s press gets pulled apart.",
        "Austria’s route is disruption: force Argentina wide, create loose touches, then attack quickly.",
        "The key battle is Argentina’s midfield calm against Austria’s pressing speed.",
        "Wide areas matter because Austria’s fullbacks can push high, but that also gives Argentina transition lanes.",
        "Stylistic advantage leans Argentina because they can punish over-aggression with elite final-third quality."
      ],
      statisticalDashboard: [
        { label: "xG per match", home: "1.78", away: "1.42", note: "FBref/Opta" },
        { label: "xGA per match", home: "0.69", away: "0.68", note: "FBref/Opta" },
        { label: "Shots per 90", home: "12.2", away: "9.2", note: "FotMob/SofaScore" },
        { label: "Possession %", home: "High control expected", away: "Lower possession expected", note: "Tactical projection" },
        { label: "PPDA / pressing", home: "Selective press", away: "High intensity", note: "Style-based" },
        { label: "Shots on target", home: "6.0", away: "3.8", note: "Sofascore" },
        { label: "Big chances", home: "2.8", away: "2.2", note: "StatsBomb/Opta" },
        { label: "Cards / fouls risk", home: "Medium, 1.4", away: "Medium, 1.0", note: "Austria press may create contact risk" }
      ],
      playerWatch: {
        home: {
          key_attacker: "Lionel Messi",
          key_creator: "Enzo Fernández",
          key_ball_progressor: "Rodrigo De Paul",
          key_defender: "Cristian Romero",
          key_goalkeeper: "Emiliano Martínez",
          x_factor: "Julián Álvarez",
          most_likely_to_decide: "Lionel Messi",
          vulnerable_tactically: "Advanced fullback zones if Austria counter quickly"
        },
        away: {
          key_attacker: "Marko Arnautović",
          key_creator: "Marcel Sabitzer",
          key_ball_progressor: "Christoph Baumgartner",
          key_defender: "Kevin Danso",
          key_goalkeeper: "Patrick Pentz",
          x_factor: "Romano Schmid",
          most_likely_to_decide: "Marcel Sabitzer",
          vulnerable_tactically: "Centre-backs defending space behind the press"
        }
      },
      gameScripts: [
        {
          title: "If Argentina score first",
          points: [
            "Austria must press higher and take more risks.",
            "Argentina can slow the game and attack the space Austria leaves.",
            "Benefits Argentina because control and transition threat both improve."
          ]
        },
        {
          title: "If Austria score first",
          points: [
            "Argentina will push more players between the lines.",
            "Austria can protect central zones and counter into space.",
            "Game volatility rises because Argentina will commit numbers."
          ]
        },
        {
          title: "If it is 0-0 after 30 minutes",
          points: [
            "Hydration-break coaching adjustments become important.",
            "Austria will feel the press is working.",
            "Argentina still benefit if Austria’s pressure starts to fade."
          ]
        }
      ],
      predictionModel: {
        homeWin: 57,
        draw: 24,
        awayWin: 19,
        scoreRange: "Argentina 1-0 to 2-1",
        confidence: 6,
        volatility: 6,
        dataConfidence: "Medium",
        lean: "Tactical lean: Argentina",
        mainReason:
          "Argentina have more ways to solve pressure and more elite final-third decision-makers.",
        failurePoint:
          "Austria’s press could create high-value turnovers if Argentina’s build-up gets sloppy."
      },
      whyThisCouldBeWrong: [
        "Austria’s pressing can make the match chaotic.",
        "Argentina’s emotional and tactical rhythm may be disrupted by game-state pauses.",
        "One early Austrian transition goal would completely change the script.",
        "Some current lineup and score data still needs verification."
      ],
      sourceNotes: [
        "Reuters: Argentina opened with a 3-0 win over Algeria; Scaloni described Austria as high-pressure and vertical.",
        "Guardian: Austria’s intense press could trouble Argentina if perfectly executed.",
        "Stats/injuries/xG: marked needs update until reliable public data is available."
      ]
    }
  },

  "france-iraq": {
    home: { name: "France", code: "fr" },
    away: { name: "Iraq", code: "iq" },
    competition: "FIFA World Cup 2026",
    group: "Group I",
    kickoff: {
      date: "2026-06-22T21:00:00Z",
      location: "Philadelphia Stadium, Philadelphia"
    },
    score: {
      home: 3,
      away: 0
    },
    analyticsV2: {
      matchImportance: {
        level: "Qualification control match",
        note:
          "France can take a major step toward the knockout round, while Iraq need a response after a difficult opener.",
        environment:
          "Large neutral venue; France likely control territory and possession.",
        gameState:
          "France want early pressure. Iraq need defensive survival and transition efficiency."
      },
      form: {
        home: {
          last_5_results: "France 3-1 Senegal; previous results need update",
          goals_for_against: "3 GF / 1 GA in tournament data available",
          clean_sheets: "0 in current tournament data available",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against Senegal, a strong transition team",
          momentum_rating: "8/10",
          key_warning_sign:
            "Can allow chances if fullbacks push high and rest-defense spacing is poor"
        },
        away: {
          last_5_results: "Iraq 1-4 Norway; previous results need update",
          goals_for_against: "1 GF / 4 GA in tournament data available",
          clean_sheets: "0 in current tournament data available",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against Norway and Haaland",
          momentum_rating: "3/10",
          key_warning_sign:
            "Defensive errors against elite attackers can quickly turn into multi-goal damage"
        }
      },
      tacticalIdentity: {
        home: {
          base_formation: "4-2-3-1 / 4-3-3",
          in_possession_shape: "2-3-5 with wingers high and creators between lines",
          out_of_possession_shape: "Compact 4-4-2 pressing shape",
          build_up_style:
            "Controlled build-up into explosive wide and half-space attacks",
          pressing_style: "Selective high press with strong counter-pressing moments",
          defensive_block: "Mid-to-high block",
          transition_style: "Devastating speed through Mbappé and wide runners",
          main_attacking_zones: "Left channel, right half-space, cutbacks",
          set_piece_strength: "Strong aerial options and delivery",
          biggest_tactical_weakness:
            "Can become stretched if both fullbacks advance at the same time"
        },
        away: {
          base_formation: "4-2-3-1 / 4-5-1 defensive shape",
          in_possession_shape: "Direct progression and quick support around the forward",
          out_of_possession_shape: "Deep compact block",
          build_up_style: "Risk-managed, often direct under pressure",
          pressing_style: "Mostly mid/low pressure with occasional jumps",
          defensive_block: "Low to mid block",
          transition_style: "Counterattacks into wide space",
          main_attacking_zones: "Wide counters and set pieces",
          set_piece_strength: "Important route to goal",
          biggest_tactical_weakness:
            "Space between fullback and centre-back when forced to slide across"
        }
      },
      matchupAnalysis: [
        "France’s speed and individual quality create the clearest tactical edge.",
        "Iraq need to keep the game narrow and force France into lower-quality wide crosses.",
        "Mbappé’s side of the pitch is the pressure point: if Iraq over-shift, France can attack the weak side.",
        "France’s counter-press can trap Iraq before counters develop.",
        "Stylistic advantage leans heavily France, but defensive patience is Iraq’s path to staying alive."
      ],
      statisticalDashboard: [
        { label: "xG per match", home: "Needs update", away: "Needs update", note: "Opta/FBref placeholder" },
        { label: "xGA per match", home: "Needs update", away: "Needs update", note: "Opta/FBref placeholder" },
        { label: "Shots per 90", home: "High expected", away: "Low expected", note: "Tactical projection" },
        { label: "Possession %", home: "High", away: "Low", note: "Expected game state" },
        { label: "Touches in box", home: "High expected", away: "Low expected", note: "Needs event data" },
        { label: "High turnovers", home: "Medium-high", away: "Low", note: "Style-based" },
        { label: "Set-piece xG", home: "Needs update", away: "Important route", note: "Needs update" },
        { label: "Cards / fouls risk", home: "Low-medium", away: "Medium-high", note: "Defending long spells can increase risk" }
      ],
      playerWatch: {
        home: {
          key_attacker: "Kylian Mbappé",
          key_creator: "Michael Olise",
          key_ball_progressor: "Aurélien Tchouaméni",
          key_defender: "William Saliba",
          key_goalkeeper: "Mike Maignan",
          x_factor: "Bradley Barcola",
          most_likely_to_decide: "Kylian Mbappé",
          vulnerable_tactically: "Fullback zones if France lose the ball high"
        },
        away: {
          key_attacker: "Aymen Hussein",
          key_creator: "Needs update",
          key_ball_progressor: "Needs update",
          key_defender: "Needs update",
          key_goalkeeper: "Jalal Hassan",
          x_factor: "Set-piece target",
          most_likely_to_decide: "Aymen Hussein",
          vulnerable_tactically: "Fullbacks isolated against France’s wingers"
        }
      },
      gameScripts: [
        {
          title: "If France score first",
          points: [
            "Iraq must open up, which creates more transition space.",
            "France can manage tempo and rotate attacking zones.",
            "Benefits France heavily because the game becomes less compact."
          ]
        },
        {
          title: "If Iraq score first",
          points: [
            "France will increase pressure and push more players into the box.",
            "Iraq will drop deeper and defend the area.",
            "Volatility rises, but France still have the attacking depth to recover."
          ]
        },
        {
          title: "If it is 0-0 after 30 minutes",
          points: [
            "Iraq gain confidence and the crowd tension rises.",
            "France may increase crossing and direct running.",
            "The longer it stays level, the more important set pieces become."
          ]
        }
      ],
      predictionModel: {
        homeWin: 78,
        draw: 15,
        awayWin: 7,
        scoreRange: "France 2-0 to 3-1",
        confidence: 7,
        volatility: 4,
        dataConfidence: "Medium",
        lean: "Higher-probability outcome: France win",
        mainReason:
          "France have superior attacking depth, speed, and individual quality in the final third.",
        failurePoint:
          "A slow start, poor rest-defense, or Iraq set-piece goal could make the match uncomfortable."
      },
      whyThisCouldBeWrong: [
        "France may rotate or manage minutes.",
        "Iraq can make the match ugly with a compact low block.",
        "Early missed chances can reduce confidence.",
        "Current public injury and lineup data is incomplete."
      ],
      sourceNotes: [
        "Opta Analyst: France are strongly favored by its preview model.",
        "Public detailed xG/player data for 2026 is incomplete, so stat fields are marked needs update.",
        "No invented injuries or confirmed lineups included."
      ]
    }
  },

  "norway-senegal": {
    home: { name: "Norway", code: "no" },
    away: { name: "Senegal", code: "sn" },
    competition: "FIFA World Cup 2026",
    group: "Group I",
    kickoff: {
      date: "2026-06-23T00:00:00Z",
      location: "New York/New Jersey Stadium, East Rutherford"
    },
    score: {
      home: 3,
      away: 2
    },
    analyticsV2: {
      matchImportance: {
        level: "Group I pressure match",
        note:
          "Norway can build on a flying start, while Senegal need a response after losing to France.",
        environment:
          "Pitch condition may matter; Norway raised concern about a short, hard surface.",
        gameState:
          "Norway want structured possession and Haaland service. Senegal want pace, counters, and wide threat."
      },
      form: {
        home: {
          last_5_results: "Norway 4-1 Iraq; previous results need update",
          goals_for_against: "4 GF / 1 GA in tournament data available",
          clean_sheets: "0 in current tournament data available",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against Iraq",
          momentum_rating: "8/10",
          key_warning_sign:
            "Can become predictable if Senegal cut off service into Haaland"
        },
        away: {
          last_5_results: "Senegal 1-3 France; previous results need update",
          goals_for_against: "1 GF / 3 GA in tournament data available",
          clean_sheets: "0 in current tournament data available",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against France",
          momentum_rating: "5/10",
          key_warning_sign:
            "Must defend box entries better while still offering transition threat"
        }
      },
      tacticalIdentity: {
        home: {
          base_formation: "4-3-3 / 4-2-3-1",
          in_possession_shape: "Fullbacks support, midfield feeds vertical lanes",
          out_of_possession_shape: "Organized mid-block",
          build_up_style: "Direct progression into Haaland and supporting runners",
          pressing_style: "Structured press, not reckless",
          defensive_block: "Mid block",
          transition_style: "Fast service into striker and wide runners",
          main_attacking_zones: "Central striker zone, right-sided delivery, cutbacks",
          set_piece_strength: "Very strong aerial target",
          biggest_tactical_weakness:
            "Can be vulnerable if midfield loses second balls"
        },
        away: {
          base_formation: "4-3-3 / 4-2-3-1",
          in_possession_shape: "Wide speed with central support",
          out_of_possession_shape: "Compact block with counter threat",
          build_up_style: "Direct and transitional",
          pressing_style: "Selective press, explosive jumps",
          defensive_block: "Mid block that can drop low",
          transition_style: "Fast counters through wide channels",
          main_attacking_zones: "Left wing, right wing, fast central breaks",
          set_piece_strength: "Physical and athletic",
          biggest_tactical_weakness:
            "Space around midfield if counters fail and Norway recycle possession"
        }
      },
      matchupAnalysis: [
        "Norway’s main edge is Haaland’s box gravity and finishing threat.",
        "Senegal’s main edge is pace in transition, especially if Norway lose the ball in midfield.",
        "The key battle is Norway’s delivery quality vs Senegal’s centre-back concentration.",
        "Wide-area defending matters because Senegal can punish slow defensive recovery.",
        "Stylistic advantage is close: Norway have the stronger opener, Senegal have the transition tools to hurt them."
      ],
      statisticalDashboard: [
        { label: "xG per match", home: "Needs update", away: "Needs update", note: "FBref/Opta placeholder" },
        { label: "xGA per match", home: "Needs update", away: "Needs update", note: "FBref/Opta placeholder" },
        { label: "Shots per 90", home: "High expected", away: "Medium expected", note: "Tactical projection" },
        { label: "Possession %", home: "Medium-high", away: "Medium-low", note: "Expected game state" },
        { label: "Progressive passes", home: "Important", away: "Important in transition", note: "Needs event data" },
        { label: "High turnovers", home: "Medium", away: "Medium", note: "Needs event data" },
        { label: "Set-piece xG", home: "Key Norway route", away: "Physical threat", note: "Needs update" },
        { label: "Cards / fouls risk", home: "Medium", away: "Medium", note: "Physical matchup" }
      ],
      playerWatch: {
        home: {
          key_attacker: "Erling Haaland",
          key_creator: "Martin Ødegaard",
          key_ball_progressor: "Sander Berge",
          key_defender: "Kristoffer Ajer",
          key_goalkeeper: "Ørjan Nyland",
          x_factor: "Antonio Nusa",
          most_likely_to_decide: "Erling Haaland",
          vulnerable_tactically: "Fullbacks if Senegal counter into space"
        },
        away: {
          key_attacker: "Sadio Mané",
          key_creator: "Iliman Ndiaye",
          key_ball_progressor: "Pape Matar Sarr",
          key_defender: "Kalidou Koulibaly",
          key_goalkeeper: "Édouard Mendy",
          x_factor: "Ismaila Sarr",
          most_likely_to_decide: "Sadio Mané",
          vulnerable_tactically: "Centre-backs dealing with Haaland’s movement"
        }
      },
      gameScripts: [
        {
          title: "If Norway score first",
          points: [
            "Senegal must chase and leave more space behind.",
            "Norway can feed Haaland earlier and attack crosses.",
            "Benefits Norway because the game becomes more vertical."
          ]
        },
        {
          title: "If Senegal score first",
          points: [
            "Senegal can defend deeper and counter.",
            "Norway may become cross-heavy.",
            "Benefits Senegal because their transition threat becomes more valuable."
          ]
        },
        {
          title: "If it is 0-0 after 30 minutes",
          points: [
            "Norway will keep searching for Haaland service.",
            "Senegal will grow into transition moments.",
            "The pitch and weather could affect possession rhythm."
          ]
        }
      ],
      predictionModel: {
        homeWin: 43,
        draw: 27,
        awayWin: 30,
        scoreRange: "Norway 1-1 Senegal or Norway 2-1 Senegal",
        confidence: 5,
        volatility: 7,
        dataConfidence: "Medium",
        lean: "Small tactical lean: Norway",
        mainReason:
          "Norway’s opener and Haaland’s form give them the clearer finishing edge.",
        failurePoint:
          "Senegal’s pace and counterattacks can punish Norway if the midfield loses control."
      },
      whyThisCouldBeWrong: [
        "Senegal’s opener was against France, so their form may look worse than their true level.",
        "Norway may struggle if Haaland is isolated.",
        "Pitch conditions could reduce clean possession sequences.",
        "Transition-heavy matches are naturally volatile."
      ],
      sourceNotes: [
        "Reuters: Norway beat Iraq 4-1, Haaland scored twice, and Solbakken highlighted Senegal’s pace and counters.",
        "Reuters: Solbakken raised pitch-condition concerns.",
        "xG and event metrics need update from public data."
      ]
    }
  },

  "jordan-algeria": {
    home: { name: "Jordan", code: "jo" },
    away: { name: "Algeria", code: "dz" },
    competition: "FIFA World Cup 2026",
    group: "Group J",
    kickoff: {
      date: "2026-06-23T03:00:00Z",
      location: "San Francisco Bay Area Stadium, Santa Clara"
    },
    score: {
      home: 1,
      away: 2
    },
    analyticsV2: {
      matchImportance: {
        level: "Elimination-risk match",
        note:
          "Both teams lost their openers. The result can decide whether either side stays alive in Group J.",
        environment:
          "High-pressure match in Santa Clara with emotional all-Arab context.",
        gameState:
          "Jordan need discipline and compactness. Algeria need attacking quality and control."
      },
      form: {
        home: {
          last_5_results: "Jordan lost to Austria; previous results need update",
          goals_for_against: "Scored first World Cup goal; full numbers need update",
          clean_sheets: "Needs update",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against Austria",
          momentum_rating: "5/10",
          key_warning_sign:
            "Can be pinned deep if Algeria control possession and second balls"
        },
        away: {
          last_5_results: "Algeria 0-3 Argentina; previous results need update",
          goals_for_against: "0 GF / 3 GA in tournament data available",
          clean_sheets: "0 in current tournament data available",
          xG_trend: "Needs update from FBref/Opta",
          xGA_trend: "Needs update from FBref/Opta",
          opponent_strength: "Opened against defending champions Argentina",
          momentum_rating: "4/10",
          key_warning_sign:
            "Must turn possession and talent into actual chance quality"
        }
      },
      tacticalIdentity: {
        home: {
          base_formation: "5-4-1 / 4-4-2 defensive variation",
          in_possession_shape: "Direct outlets and wide support",
          out_of_possession_shape: "Compact defensive block",
          build_up_style: "Pragmatic, direct when pressed",
          pressing_style: "Selective pressing, mostly disciplined block",
          defensive_block: "Low to mid block",
          transition_style: "Quick counters after regains",
          main_attacking_zones: "Wide counters and set pieces",
          set_piece_strength: "Important route",
          biggest_tactical_weakness:
            "May struggle to escape pressure for long stretches"
        },
        away: {
          base_formation: "4-3-3 / 4-2-3-1",
          in_possession_shape: "Wide attackers high, creators inside",
          out_of_possession_shape: "Mid-block with pressing jumps",
          build_up_style: "Technical buildup into wide and half-space creation",
          pressing_style: "Medium press, then aggressive counter-press moments",
          defensive_block: "Mid block",
          transition_style: "Fast wide progression through attacking talent",
          main_attacking_zones: "Right wing, left half-space, cutbacks",
          set_piece_strength: "Physical aerial options",
          biggest_tactical_weakness:
            "Can become frustrated if the first goal does not come early"
        }
      },
      matchupAnalysis: [
        "Jordan’s route is compact defending, emotional control, and clean counters.",
        "Algeria’s route is quality in possession and better final-third execution than against Argentina.",
        "The key battle is Algeria’s wide attackers vs Jordan’s defensive block.",
        "Set pieces matter because Jordan may not create many open-play chances.",
        "Stylistic advantage leans Algeria, but Jordan’s discipline can drag the match into a tense low-scoring script."
      ],
      statisticalDashboard: [
        { label: "xG per match", home: "Needs update", away: "Needs update", note: "FBref/Opta placeholder" },
        { label: "xGA per match", home: "Needs update", away: "Needs update", note: "FBref/Opta placeholder" },
        { label: "Shots per 90", home: "Low-medium expected", away: "Medium-high expected", note: "Tactical projection" },
        { label: "Possession %", home: "Lower expected", away: "Higher expected", note: "Expected game state" },
        { label: "Field tilt", home: "Low expected", away: "High expected", note: "Needs event data" },
        { label: "High turnovers", home: "Low", away: "Medium", note: "Style-based" },
        { label: "Set-piece xG", home: "Key route", away: "Secondary route", note: "Needs update" },
        { label: "Cards / fouls risk", home: "Low-medium", away: "Medium", note: "Reuters noted Jordan avoided yellows in opener" }
      ],
      playerWatch: {
        home: {
          key_attacker: "Mousa Al-Taamari",
          key_creator: "Noor Al-Rawabdeh",
          key_ball_progressor: "Ehsan Haddad",
          key_defender: "Yazan Al-Arab",
          key_goalkeeper: "Yazeed Abulaila",
          x_factor: "Ali Olwan",
          most_likely_to_decide: "Mousa Al-Taamari",
          vulnerable_tactically: "Wingbacks defending repeated switches"
        },
        away: {
          key_attacker: "Riyad Mahrez",
          key_creator: "Houssem Aouar",
          key_ball_progressor: "Ismaël Bennacer",
          key_defender: "Ramy Bensebaini",
          key_goalkeeper: "Anthony Mandrea",
          x_factor: "Amine Gouiri",
          most_likely_to_decide: "Riyad Mahrez",
          vulnerable_tactically: "Rest-defense if fullbacks push high"
        }
      },
      gameScripts: [
        {
          title: "If Jordan score first",
          points: [
            "Jordan can drop deeper and protect the box.",
            "Algeria will increase width and crossing volume.",
            "Benefits Jordan emotionally, but pressure will be heavy."
          ]
        },
        {
          title: "If Algeria score first",
          points: [
            "Jordan must open up and take more risks.",
            "Algeria can counter into wider spaces.",
            "Benefits Algeria because the match becomes less compact."
          ]
        },
        {
          title: "If it is 0-0 after 30 minutes",
          points: [
            "Jordan gain belief and crowd energy.",
            "Algeria may become impatient.",
            "Set pieces and discipline become decisive."
          ]
        }
      ],
      predictionModel: {
        homeWin: 22,
        draw: 29,
        awayWin: 49,
        scoreRange: "Jordan 0-1 Algeria or Jordan 1-1 Algeria",
        confidence: 5,
        volatility: 6,
        dataConfidence: "Medium-low",
        lean: "Tactical lean: Algeria",
        mainReason:
          "Algeria have more attacking quality and should control more territory.",
        failurePoint:
          "Jordan’s compact defending and emotional lift can turn the match into a low-event grind."
      },
      whyThisCouldBeWrong: [
        "Algeria’s opening loss came against Argentina, so their level may be underrated.",
        "Jordan’s nerves may be gone after their World Cup debut.",
        "A low-block match can reduce Algeria’s quality advantage.",
        "Confirmed lineups and injuries need updating before kickoff."
      ],
      sourceNotes: [
        "Reuters: Algeria said Jordan are compact defensively and physical.",
        "Reuters: both teams face early elimination pressure.",
        "Reuters: Jordan coach said opener nerves are gone and noted Jordan’s discipline."
      ]
    }
  },

};