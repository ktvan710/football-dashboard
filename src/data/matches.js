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
"ecuador-germany": {
  home: { name: "Ecuador", code: "ec" },
  away: { name: "Germany", code: "de" },
  competition: "FIFA World Cup 2026",
  group: "Group E",
  kickoff: {
    date: "2026-06-25T20:00:00Z",
    location: "New York/New Jersey Stadium, East Rutherford"
  },
  analyticsV2: {
    matchImportance: {
      level: "Must-win survival match for Ecuador",
      note:
        "Germany have already secured qualification and control of Group E after wins over Curaçao and Ivory Coast. Ecuador enter under major pressure after failing to score against Ivory Coast and Curaçao.",
      environment:
        "Large neutral venue. Ecuador are likely to play with emotional urgency, while Germany want rhythm and knockout momentum without overextending key players.",
      gameState:
        "Ecuador need goals and probably need a win. Germany can control the game state, manage tempo, and punish Ecuador if they chase too aggressively."
    },

    form: {
      home: {
        last_5_results:
          "Ecuador 0-1 Ivory Coast; Ecuador 0-0 Curaçao; previous results need update",
        goals_for_against: "0 GF / 1 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Shot volume appears stronger than output, but exact xG needs update from FBref/Opta/FotMob",
        xGA_trend:
          "Defensive numbers look respectable from scoreline, but exact xGA needs update",
        opponent_strength:
          "Opened against Ivory Coast, then drew Curaçao; Germany are their strongest test",
        momentum_rating: "3/10",
        key_warning_sign:
          "Ecuador have not scored yet despite pressure and shot creation; final-third execution is the major red flag"
      },

      away: {
        last_5_results:
          "Germany 7-1 Curaçao; Germany 2-1 Ivory Coast; previous results need update",
        goals_for_against: "9 GF / 2 GA in tournament data available",
        clean_sheets: "0 tournament clean sheets",
        xG_trend:
          "Strong attacking trend expected, exact xG needs update from Opta/FBref",
        xGA_trend:
          "Germany have conceded in both tournament games; exact xGA needs update",
        opponent_strength:
          "Beat Curaçao heavily, then came from behind to beat Ivory Coast",
        momentum_rating: "9/10",
        key_warning_sign:
          "Already qualified, so game management or small rotation could lower intensity"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "4-2-3-1 / 4-3-3",
        in_possession_shape:
          "Fullbacks support wide progression, with Caicedo protecting rest defense and midfield circulation",
        out_of_possession_shape:
          "Compact 4-4-2 / 4-5-1 block, trying to deny central access",
        build_up_style:
          "Controlled buildup through midfield, then wide attacks and cutbacks",
        pressing_style:
          "Medium press with selective jumps, especially when Germany play backward",
        defensive_block: "Mid block that may become more aggressive if Ecuador need a goal",
        transition_style:
          "Quick wide breaks through runners after regains, but finishing has been the problem",
        main_attacking_zones:
          "Left-sided progression, wide combinations, late box arrivals",
        set_piece_strength:
          "Useful physical route, but exact set-piece xG needs update",
        biggest_tactical_weakness:
          "If Ecuador push numbers forward, Germany can attack the space behind the fullbacks"
      },

      away: {
        base_formation: "4-2-3-1 / 4-2-2-2 attacking rotation",
        in_possession_shape:
          "2-3-5 with creators between lines, high wingers, and fullback support",
        out_of_possession_shape:
          "Compact 4-4-2 press that can jump high after loose touches",
        build_up_style:
          "Structured buildup, quick switches, half-space combinations, and central overloads",
        pressing_style:
          "Coordinated high press and counter-press, but may manage energy due to qualification status",
        defensive_block: "Mid-to-high block",
        transition_style:
          "Fast vertical attacks after regains, especially into wide or half-space runners",
        main_attacking_zones:
          "Central pockets, right half-space combinations, weak-side switches",
        set_piece_strength:
          "Strong delivery and aerial targets",
        biggest_tactical_weakness:
          "Can concede transition chances if fullbacks and midfielders are advanced at the same time"
      }
    },

    matchupAnalysis: [
      "Ecuador’s biggest route is emotional intensity: press Germany’s buildup, create territory, and finally convert one of their chances.",
      "Germany’s biggest edge is chance quality and variety. They can score through central combinations, wide rotations, set pieces, or transition moments.",
      "The key battle is Moisés Caicedo and Ecuador’s midfield screen against Germany’s between-the-lines creators.",
      "Wide areas matter because Ecuador may need to commit fullbacks forward, which opens counter lanes for Germany.",
      "Stylistic advantage leans Germany because Ecuador need to chase the game more than Germany do."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "High volume but poor conversion reported",
        away: "High attacking output",
        note: "Opta/FotMob trend label; exact number needs update"
      },
      {
        label: "Shots allowed per 90",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Needs update",
        away: "Needs update",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Possession %",
        home: "Medium expected",
        away: "Medium-high expected",
        note: "Tactical projection"
      },
      {
        label: "Field tilt",
        home: "Must push higher than previous games",
        away: "Likely territorial control",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Caicedo / midfield progression important",
        away: "High-value central progression expected",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Wide runners important",
        away: "Wirtz/Musiala-style carries important",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Needs update",
        away: "High expected",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Medium-high if chasing",
        away: "Controlled high press",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Key upset route",
        away: "Key control route",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Possible route",
        away: "Strong route",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Likely underperforming finishing",
        away: "Likely positive finishing trend",
        note: "Exact xG needs update"
      },
      {
        label: "Save percentage",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium-high",
        away: "Medium",
        note: "Ecuador desperation can raise foul risk"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Enner Valencia",
        key_creator: "Kendry Páez",
        key_ball_progressor: "Moisés Caicedo",
        key_defender: "Willian Pacho",
        key_goalkeeper: "Hernán Galíndez",
        x_factor: "Jeremy Sarmiento",
        most_likely_to_decide:
          "Moisés Caicedo if Ecuador can turn midfield regains into attacks",
        vulnerable_tactically:
          "Ecuador fullbacks if they push high while chasing a goal"
      },

      away: {
        key_attacker: "Deniz Undav",
        key_creator: "Jamal Musiala",
        key_ball_progressor: "Joshua Kimmich",
        key_defender: "Antonio Rüdiger",
        key_goalkeeper: "Manuel Neuer / Marc-André ter Stegen needs lineup update",
        x_factor: "Florian Wirtz",
        most_likely_to_decide:
          "Deniz Undav if Germany continue using him as a high-impact finisher",
        vulnerable_tactically:
          "Germany’s fullback zones if Ecuador counter quickly after turnovers"
      }
    },

    gameScripts: [
      {
        title: "If Ecuador score first",
        points: [
          "Ecuador can protect the center and turn the match into a transition battle.",
          "Germany will increase possession pressure and try to attack through half-spaces.",
          "Risk level rises because Ecuador may defend deeper than they have all tournament.",
          "Benefits Ecuador emotionally, but only if they avoid sitting too low too early."
        ]
      },
      {
        title: "If Germany score first",
        points: [
          "Ecuador are forced to open the game and commit more bodies forward.",
          "Germany can manage tempo and attack the space behind Ecuador’s fullbacks.",
          "Substitutions may become more aggressive for Ecuador, with extra attackers or wide runners.",
          "Benefits Germany because the game becomes more stretched and transition-heavy."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Ecuador may grow anxious because their tournament problem has been finishing.",
          "Germany can stay patient and wait for Ecuador to overcommit.",
          "The match becomes a test of Ecuador’s emotional control.",
          "Benefits Germany slightly because they do not need to force the game."
        ]
      }
    ],

    predictionModel: {
      homeWin: 18,
      draw: 20,
      awayWin: 62,
      scoreRange: "Ecuador 0-1 Germany to Ecuador 1-2 Germany",
      confidence: 6,
      volatility: 5,
      dataConfidence: "Medium",
      lean: "Higher-probability outcome: Germany avoid defeat",
      mainReason:
        "Germany have already shown more attacking variety, more finishing quality, and better game-state control.",
      failurePoint:
        "Germany’s qualification status could lower intensity, and Ecuador’s urgency could create a chaotic high-pressure game."
    },

    whyThisCouldBeWrong: [
      "Germany may rotate or manage minutes with qualification already secured.",
      "Ecuador’s underlying chance creation may be better than their zero-goal output suggests.",
      "One early Ecuador goal changes the emotional rhythm completely.",
      "Confirmed lineups, injuries, and exact xG data still need updating."
    ],

    sourceNotes: [
      "Reuters: Germany are already qualified and are seeking three wins from three against Ecuador.",
      "Reuters: Nico Schlotterbeck is out; Antonio Rüdiger is expected to take a larger defensive role.",
      "Reuters: Ecuador have faced criticism after failing to score against Ivory Coast and Curaçao.",
      "Opta Analyst: Germany are the model favorite; exact dashboard metrics still need manual update.",
      "FIFA/FotMob/SofaScore: use for final lineups, live data, xG, shot maps, and player ratings before kickoff."
    ]
  }
},

"curacao-ivory-coast": {
  home: { name: "Curaçao", code: "cw" },
  away: { name: "Ivory Coast", code: "ci" },
  competition: "FIFA World Cup 2026",
  group: "Group E",
  kickoff: {
    date: "2026-06-25T20:00:00Z",
    location: "Philadelphia Stadium, Philadelphia"
  },
  analyticsV2: {
    matchImportance: {
      level: "Second-place qualification decider",
      note:
        "Ivory Coast control the cleaner path to second place after beating Ecuador and competing well against Germany. Curaçao still have a route after earning a historic 0-0 draw with Ecuador.",
      environment:
        "Philadelphia venue with high pressure on both teams. Ivory Coast are chasing a historic knockout place, while Curaçao are trying to turn a debut tournament into a shock qualification push.",
      gameState:
        "Ivory Coast can be more balanced because a strong result likely protects their position. Curaçao need defensive discipline first, then efficient transition moments."
    },

    form: {
      home: {
        last_5_results:
          "Curaçao 1-7 Germany; Curaçao 0-0 Ecuador; previous results need update",
        goals_for_against: "1 GF / 7 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; likely low chance volume against stronger opponents",
        xGA_trend:
          "Needs update; scorelines suggest major defensive pressure against Germany but strong recovery vs Ecuador",
        opponent_strength:
          "Opened against Germany, then drew Ecuador in a resilient defensive performance",
        momentum_rating: "6/10",
        key_warning_sign:
          "The Germany match showed how quickly Curaçao can be overloaded if the defensive block loses compactness"
      },

      away: {
        last_5_results:
          "Ivory Coast 1-0 Ecuador; Ivory Coast 1-2 Germany; previous results need update",
        goals_for_against: "2 GF / 2 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; attacking threat has looked more sustainable than Ecuador’s output",
        xGA_trend:
          "Needs update; Germany created enough pressure to overturn the game",
        opponent_strength:
          "Beat Ecuador, then narrowly lost to already-qualified Germany",
        momentum_rating: "7/10",
        key_warning_sign:
          "Must avoid turning territorial control into a slow, frustrated, low-chance game"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "4-2-3-1 / 4-4-2 defensive shape",
        in_possession_shape:
          "Direct outlets into attacking midfielders and wide runners, with limited long-possession sequences",
        out_of_possession_shape:
          "Compact mid-to-low block, narrow central protection, and quick pressure near the box",
        build_up_style:
          "Pragmatic buildup, often direct when pressed",
        pressing_style:
          "Selective press rather than full high pressure; likely to conserve shape",
        defensive_block: "Low to mid block",
        transition_style:
          "Quick vertical attacks after regains, especially through wide outlets",
        main_attacking_zones:
          "Wide counters, second balls, and set-piece situations",
        set_piece_strength:
          "Important route because open-play territory may be limited",
        biggest_tactical_weakness:
          "If the first line is bypassed, the back line can be exposed to repeated box entries"
      },

      away: {
        base_formation: "4-3-3 / 4-2-3-1",
        in_possession_shape:
          "Wingers high, midfield support underneath, fullbacks adding width when safe",
        out_of_possession_shape:
          "Athletic 4-4-2 / 4-5-1 mid-block with aggressive wide pressure",
        build_up_style:
          "Direct but technical, using wide progression and quick final-third combinations",
        pressing_style:
          "Medium-to-high pressing in bursts, especially after poor first touches",
        defensive_block: "Mid block with the ability to press higher",
        transition_style:
          "Fast wide attacks through athletic runners and early service into the box",
        main_attacking_zones:
          "Wide channels, right-sided combinations, cutbacks, and second-ball zones",
        set_piece_strength:
          "Physical aerial threat and strong delivery potential",
        biggest_tactical_weakness:
          "Can leave space behind fullbacks if the wide press fails"
      }
    },

    matchupAnalysis: [
      "Curaçao’s best chance is to repeat the Ecuador script: compact block, goalkeeper security, and patience without the ball.",
      "Ivory Coast’s best route is wide pressure. If they isolate Curaçao fullbacks, they can generate cutbacks and box entries.",
      "The key battle is Curaçao’s defensive spacing against Ivory Coast’s wide forwards and late-arriving midfield runners.",
      "Set pieces matter because Curaçao may not create many open-play chances, while Ivory Coast have a physical edge.",
      "Stylistic advantage leans Ivory Coast because they have more athletic attacking tools and more ways to create pressure."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "Low expected",
        away: "Medium-high expected",
        note: "Tactical projection"
      },
      {
        label: "Shots allowed per 90",
        home: "High pressure expected",
        away: "Medium expected",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Needs update",
        away: "Needs update",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Big chances allowed",
        home: "Needs update",
        away: "Needs update",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Possession %",
        home: "Lower expected",
        away: "Higher expected",
        note: "Expected game state"
      },
      {
        label: "Field tilt",
        home: "Low expected",
        away: "High expected",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Limited but important on counters",
        away: "Wide and half-space progression expected",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Wide outlets important",
        away: "Key attacking weapon",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Low expected",
        away: "Medium-high expected",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Low block / selective press",
        away: "Medium-high in bursts",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Low",
        away: "Important chance source",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Key upset route",
        away: "Physical edge",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Needs update",
        away: "Needs update",
        note: "Exact xG unavailable"
      },
      {
        label: "Save percentage",
        home: "Important after Ecuador clean sheet",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium-high",
        away: "Medium",
        note: "Curaçao defending long spells can increase foul pressure"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Leandro Bacuna",
        key_creator: "Tahith Chong",
        key_ball_progressor: "Juninho Bacuna",
        key_defender: "Jurien Gaari",
        key_goalkeeper: "Eloy Room",
        x_factor: "Richairo Živković",
        most_likely_to_decide:
          "Eloy Room if Curaçao need another survival-style defensive performance",
        vulnerable_tactically:
          "Curaçao fullbacks if Ivory Coast create repeated 1v1s wide"
      },

      away: {
        key_attacker: "Amad Diallo",
        key_creator: "Franck Kessié",
        key_ball_progressor: "Yan Diomandé",
        key_defender: "Evan Ndicka",
        key_goalkeeper: "Yahia Fofana",
        x_factor: "Simon Adingra",
        most_likely_to_decide:
          "Amad Diallo if Ivory Coast can isolate him in wide or half-space situations",
        vulnerable_tactically:
          "Fullback zones if Ivory Coast push high and Curaçao counter quickly"
      }
    },

    gameScripts: [
      {
        title: "If Curaçao score first",
        points: [
          "Curaçao can drop into a compact survival block and slow the tempo.",
          "Ivory Coast will push fullbacks higher and increase crossing/cutback volume.",
          "Substitutions likely become more attacking for Ivory Coast around the hour mark.",
          "Benefits Curaçao emotionally, but the defensive workload becomes extreme."
        ]
      },
      {
        title: "If Ivory Coast score first",
        points: [
          "Curaçao must open up more than they would like.",
          "Ivory Coast can attack transition lanes and use their athletic edge.",
          "Curaçao may need earlier attacking substitutions or more direct service.",
          "Benefits Ivory Coast because their pressing and counterattacking become more dangerous."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Curaçao gain belief that the Ecuador defensive script can repeat.",
          "Ivory Coast must stay patient and avoid forcing low-quality shots.",
          "Set pieces and second balls become more important.",
          "Benefits Curaçao slightly if the match becomes tense and low-event."
        ]
      }
    ],

    predictionModel: {
      homeWin: 17,
      draw: 25,
      awayWin: 58,
      scoreRange: "Curaçao 0-1 Ivory Coast to Curaçao 1-2 Ivory Coast",
      confidence: 6,
      volatility: 6,
      dataConfidence: "Medium-low",
      lean: "Tactical lean: Ivory Coast",
      mainReason:
        "Ivory Coast have shown more attacking quality across two matches and have the athletic wide threats to stress Curaçao’s block.",
      failurePoint:
        "Curaçao already proved against Ecuador that they can survive pressure and turn the game into a low-scoring grind."
    },

    whyThisCouldBeWrong: [
      "Curaçao’s confidence is higher after the Ecuador draw.",
      "Ivory Coast may become impatient if they dominate territory but do not score early.",
      "A goalkeeper-heavy or set-piece-driven match can break normal tactical expectations.",
      "Confirmed lineups, injuries, and exact xG data still need updating before kickoff."
    ],

    sourceNotes: [
      "Reuters: Curaçao coach Dick Advocaat said his team can trouble any rival after the 0-0 draw with Ecuador.",
      "Reuters: Ivory Coast coach Emerse Faé praised Curaçao’s resilience and emphasized intensity and focus.",
      "Reuters / public match reports: Ivory Coast beat Ecuador 1-0, then lost 2-1 to Germany.",
      "Public stat fields such as xG, PPDA, shot maps, and injury details are marked needs update until verified from FIFA/FotMob/SofaScore/Opta."
    ]
  }
},
"japan-sweden": {
  home: { name: "Japan", code: "jp" },
  away: { name: "Sweden", code: "se" },
  competition: "FIFA World Cup 2026",
  group: "Group F",
  kickoff: {
    date: "2026-06-25T23:00:00Z",
    location: "Dallas Stadium, Dallas"
  },
  analyticsV2: {
    matchImportance: {
      level: "Automatic qualification swing match",
      note:
        "Japan enter on four points after a 2-2 draw with the Netherlands and a 4-0 win over Tunisia. Sweden enter on three points after a 5-1 win over Tunisia and a 5-1 defeat to the Netherlands. A win for either side guarantees at least second place in Group F.",
      environment:
        "Dallas venue. Game-state pressure is heavier on Sweden because Japan can play with more control and still benefit from draw scenarios.",
      gameState:
        "Japan want compact control, coordinated pressure, and quick attacks into Sweden's defensive gaps. Sweden need attacking bravery without becoming stretched again."
    },

    form: {
      home: {
        last_5_results:
          "Japan 2-2 Netherlands; Japan 4-0 Tunisia; previous results need update",
        goals_for_against: "6 GF / 2 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Needs update from FBref/Opta/FotMob, but attacking output spiked strongly against Tunisia",
        xGA_trend:
          "Needs update; Japan conceded twice to the Netherlands but controlled Tunisia",
        opponent_strength:
          "Opened against the Netherlands, then dominated eliminated Tunisia",
        momentum_rating: "8/10",
        key_warning_sign:
          "If Sweden force the game into open transitions, Japan's back line must handle Isak and Gyökeres without leaving central spaces"
      },

      away: {
        last_5_results:
          "Sweden 5-1 Tunisia; Sweden 1-5 Netherlands; previous results need update",
        goals_for_against: "6 GF / 6 GA in tournament data available",
        clean_sheets: "0 tournament clean sheets",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; strong attacking output but chance quality needs verification",
        xGA_trend:
          "Needs update; scorelines suggest major defensive volatility",
        opponent_strength:
          "Dominated Tunisia, then were heavily exposed by the Netherlands",
        momentum_rating: "5/10",
        key_warning_sign:
          "Defensive spacing collapsed against the Netherlands, and Japan's coordination can punish big gaps"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "3-4-2-1 / 4-2-3-1 depending on personnel",
        in_possession_shape:
          "Back three or two-plus-rest-defense base, wingbacks or fullbacks supporting wide progression, creators between lines",
        out_of_possession_shape:
          "Compact 5-4-1 / 4-4-2 hybrid with synchronized pressing jumps",
        build_up_style:
          "Patient circulation, third-man combinations, quick switches, and controlled progression through midfield",
        pressing_style:
          "Coordinated medium-to-high press, especially when opponents receive facing their own goal",
        defensive_block: "Mid block that can jump high in coordinated triggers",
        transition_style:
          "Fast counters through wide runners and central support once Sweden's press is bypassed",
        main_attacking_zones:
          "Right half-space, wide overloads, cutbacks, and second-line runs",
        set_piece_strength:
          "Useful delivery and movement, exact set-piece xG needs update",
        biggest_tactical_weakness:
          "Can become vulnerable if wingbacks/fullbacks are high and Sweden break quickly into the channels"
      },

      away: {
        base_formation: "4-4-2 / 4-2-3-1, with possible defensive tweaks after Netherlands loss",
        in_possession_shape:
          "Direct access into two elite forwards, wide support, and quick second-ball attacks",
        out_of_possession_shape:
          "Compact 4-4-2 when organized, but spacing can stretch when chasing",
        build_up_style:
          "Vertical progression, early passes into Isak/Gyökeres, and wide service",
        pressing_style:
          "Medium press with selective high jumps; Potter has emphasized compactness and controlling space",
        defensive_block: "Mid block, potentially lower than against the Netherlands",
        transition_style:
          "Very dangerous attacking big spaces through Isak, Gyökeres, Kulusevski, and Elanga",
        main_attacking_zones:
          "Central striker lanes, right-sided carries, wide early service, and second balls",
        set_piece_strength:
          "Strong physical route with aerial targets",
        biggest_tactical_weakness:
          "If Sweden defend large spaces, Japan's coordinated rotations can pull the back line apart"
      }
    },

    matchupAnalysis: [
      "Japan's biggest edge is team structure. Their spacing, rotations, and synchronized pressing make them hard to pull apart.",
      "Sweden's biggest edge is individual forward power. Isak and Gyökeres can decide the match if Sweden create transition space.",
      "The key battle is Japan's compactness against Sweden's two-striker threat.",
      "Sweden must find the balance between attacking enough to chase qualification and not repeating the open-space collapse against the Netherlands.",
      "Stylistic advantage slightly leans Japan because they can play multiple game states, while Sweden likely need a more aggressive approach."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "Medium-high expected",
        away: "Medium-high expected",
        note: "Tactical projection"
      },
      {
        label: "Shots allowed per 90",
        home: "Needs update",
        away: "High concern after Netherlands match",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Strong trend after Tunisia",
        away: "Strong striker-driven threat",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Big chances allowed",
        home: "Needs update",
        away: "High concern",
        note: "Netherlands exposed defensive gaps"
      },
      {
        label: "Possession %",
        home: "Medium-high control expected",
        away: "Medium-low unless chasing",
        note: "Expected game state"
      },
      {
        label: "Field tilt",
        home: "Balanced to positive",
        away: "Transition-dependent",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Key Japan control metric",
        away: "Direct vertical passes important",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Wide/half-space carries important",
        away: "Elanga/Kulusevski-style carries important",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Medium-high expected",
        away: "Striker-dependent",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Coordinated medium-high press",
        away: "Selective press, compactness priority",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Key Japan route",
        away: "Possible but riskier",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Needs update",
        away: "Physical edge possible",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Needs update after 4-goal Tunisia match",
        away: "Needs update after two 5-1 scorelines",
        note: "Exact xG unavailable"
      },
      {
        label: "Save percentage",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium",
        away: "Medium-high",
        note: "Sweden chasing game-state can increase contact risk"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Ayase Ueda",
        key_creator: "Daichi Kamada",
        key_ball_progressor: "Hidemasa Morita",
        key_defender: "Shogo Taniguchi",
        key_goalkeeper: "Zion Suzuki",
        x_factor: "Junya Ito",
        most_likely_to_decide:
          "Ayase Ueda if Japan continue creating clean penalty-box chances",
        vulnerable_tactically:
          "Wide defensive channels if Sweden release Isak or Gyökeres early"
      },

      away: {
        key_attacker: "Alexander Isak",
        key_creator: "Dejan Kulusevski",
        key_ball_progressor: "Anthony Elanga",
        key_defender: "Victor Lindelöf",
        key_goalkeeper: "Robin Olsen",
        x_factor: "Viktor Gyökeres",
        most_likely_to_decide:
          "Alexander Isak if Sweden can create transition space behind Japan's line",
        vulnerable_tactically:
          "Centre-backs and fullbacks defending Japan's synchronized rotations"
      }
    },

    gameScripts: [
      {
        title: "If Japan score first",
        points: [
          "Sweden must chase, which opens the pitch for Japan's transitions.",
          "Japan can sit in a compact mid-block and attack Sweden's spacing mistakes.",
          "Potter may need earlier wide attacking changes, especially if Sweden lack penetration.",
          "Benefits Japan because control, patience, and counterattacking all become stronger."
        ]
      },
      {
        title: "If Sweden score first",
        points: [
          "Japan must increase possession pressure and commit more players between lines.",
          "Sweden can drop into a more compact block and look for Isak/Gyökeres outlets.",
          "The game becomes more physical and set-piece-heavy.",
          "Benefits Sweden because it lets them protect space rather than chase it."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Japan are comfortable because they can stay patient and control risk.",
          "Sweden may feel pressure to increase attacking numbers before halftime.",
          "The key adjustment becomes Sweden's compactness: too passive and Japan dominate, too open and Japan cut through.",
          "Benefits Japan slightly because they do not need the game to become chaotic."
        ]
      }
    ],

    predictionModel: {
      homeWin: 39,
      draw: 29,
      awayWin: 32,
      scoreRange: "Japan 1-1 Sweden to Japan 2-1 Sweden",
      confidence: 5,
      volatility: 7,
      dataConfidence: "Medium",
      lean: "Small tactical lean: Japan",
      mainReason:
        "Japan have been more stable across both group matches, while Sweden's defensive volatility is a major concern against coordinated movement.",
      failurePoint:
        "Sweden's striker quality can override the tactical picture if Isak and Gyökeres receive enough early service."
    },

    whyThisCouldBeWrong: [
      "Sweden have elite forwards who can decide low-margin games.",
      "Japan may rotate or manage minutes after using a large portion of the squad already.",
      "Sweden's 5-1 loss to the Netherlands may exaggerate their true defensive level.",
      "Exact xG, injuries, and confirmed lineups still need updating before kickoff."
    ],

    sourceNotes: [
      "Reuters: Japan drew the Netherlands 2-2 and beat Tunisia 4-0, while Sweden beat Tunisia 5-1 then lost 5-1 to the Netherlands.",
      "Reuters: the winner is guaranteed at least second place in Group F.",
      "Reuters: Graham Potter said Sweden must be compact against Japan's coordination and organization.",
      "Reuters: Takefusa Kubo was injured for the Tunisia match; final availability needs update.",
      "FIFA/FotMob/SofaScore: use for final lineups, xG, shot maps, player ratings, and live injury status."
    ]
  }
},

"tunisia-netherlands": {
  home: { name: "Tunisia", code: "tn" },
  away: { name: "Netherlands", code: "nl" },
  competition: "FIFA World Cup 2026",
  group: "Group F",
  kickoff: {
    date: "2026-06-25T23:00:00Z",
    location: "Kansas City Stadium, Kansas City"
  },
  analyticsV2: {
    matchImportance: {
      level: "Top-spot chase for Netherlands, pride match for Tunisia",
      note:
        "Tunisia are already eliminated after heavy defeats to Sweden and Japan. The Netherlands are level with Japan on four points and are fighting to win Group F.",
      environment:
        "Kansas City setting. Netherlands have qualification control and attacking momentum, while Tunisia need a dignified final performance after a turbulent campaign.",
      gameState:
        "Netherlands want early control and top-spot pressure. Tunisia need defensive compactness, emotional discipline, and a clean final showing."
    },

    form: {
      home: {
        last_5_results:
          "Tunisia 1-5 Sweden; Tunisia 0-4 Japan; previous results need update",
        goals_for_against: "1 GF / 9 GA in tournament data available",
        clean_sheets: "0 tournament clean sheets",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; attacking output has been low",
        xGA_trend:
          "Needs update; scorelines show severe defensive pressure",
        opponent_strength:
          "Faced Sweden and Japan, now face the Group F attacking leaders",
        momentum_rating: "2/10",
        key_warning_sign:
          "Tunisia have conceded nine goals in two World Cup games and changed coach mid-tournament"
      },

      away: {
        last_5_results:
          "Netherlands 2-2 Japan; Netherlands 5-1 Sweden; previous results need update",
        goals_for_against: "7 GF / 3 GA in tournament data available",
        clean_sheets: "0 tournament clean sheets",
        xG_trend:
          "Strong attacking trend expected, exact xG needs update from Opta/FBref",
        xGA_trend:
          "Needs update; defensive control still imperfect after conceding twice to Japan",
        opponent_strength:
          "Drew Japan and dominated Sweden, now face eliminated Tunisia",
        momentum_rating: "9/10",
        key_warning_sign:
          "Top-spot race can create pressure, and forward availability needs final lineup update"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "4-2-3-1 / 4-5-1 defensive structure",
        in_possession_shape:
          "Direct progression into wide outlets, with limited buildup confidence under pressure",
        out_of_possession_shape:
          "Compact low-to-mid block, trying to protect central spaces and avoid another early collapse",
        build_up_style:
          "Risk-managed and often direct, especially if Netherlands press high",
        pressing_style:
          "Selective pressing only; likely to prioritize shape and emotional control",
        defensive_block: "Low to mid block",
        transition_style:
          "Counters into wide channels, but support around the ball has been inconsistent",
        main_attacking_zones:
          "Wide counters, set pieces, and second balls",
        set_piece_strength:
          "Potential route to goal, exact set-piece xG needs update",
        biggest_tactical_weakness:
          "Defensive spacing and recovery runs have been heavily exposed in both group games"
      },

      away: {
        base_formation: "4-3-3 / 3-2-5 attacking shape",
        in_possession_shape:
          "Fullbacks and wingers high, midfield control underneath, attackers rotating between central and wide lanes",
        out_of_possession_shape:
          "4-4-2 / 4-3-3 pressing structure with strong counter-press moments",
        build_up_style:
          "Controlled possession, quick switches, wide overloads, and fast attacks once lanes open",
        pressing_style:
          "Aggressive counter-press with high pressing waves when opponent buildup is loose",
        defensive_block: "Mid-to-high block",
        transition_style:
          "Fast forward attacks through pace and quality in wide areas",
        main_attacking_zones:
          "Right-sided Dumfries overlaps, left-wing combinations, central striker movements, cutbacks",
        set_piece_strength:
          "Strong aerial and delivery threat",
        biggest_tactical_weakness:
          "Can concede if fullbacks push high and rest defense is late to cover wide counters"
      }
    },

    matchupAnalysis: [
      "The Netherlands' biggest edge is attacking depth. They can rotate attackers and still maintain speed, width, and penalty-box threat.",
      "Tunisia's route is pride and structure: stay compact, avoid early concession, and make the game slower than the Dutch want.",
      "The key battle is Tunisia's fullbacks against Dutch wide overloads and Dumfries-style runs.",
      "If Netherlands score early, the match can open into another heavy chance-volume game.",
      "Stylistic advantage leans strongly Netherlands because Tunisia's defensive structure has not survived sustained pressure so far."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "Low expected",
        away: "High expected",
        note: "Tactical projection"
      },
      {
        label: "Shots allowed per 90",
        home: "High concern",
        away: "Medium",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Low expected",
        away: "High expected",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Big chances allowed",
        home: "High concern",
        away: "Needs update",
        note: "Tunisia defensive trend is poor"
      },
      {
        label: "Possession %",
        home: "Low expected",
        away: "High expected",
        note: "Expected game state"
      },
      {
        label: "Field tilt",
        home: "Low expected",
        away: "High expected",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Limited under pressure",
        away: "High expected",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Wide counters only",
        away: "Key attacking route",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Low expected",
        away: "High expected",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Low block / selective press",
        away: "High counter-press threat",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Low",
        away: "Key chance source",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Possible low-volume route",
        away: "Strong secondary route",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Needs update",
        away: "Likely positive attacking momentum",
        note: "Exact xG unavailable"
      },
      {
        label: "Save percentage",
        home: "High workload expected",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium-high",
        away: "Low-medium",
        note: "Tunisia defending long spells can increase foul pressure"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Youssef Msakni",
        key_creator: "Elias Achouri",
        key_ball_progressor: "Ellyes Skhiri",
        key_defender: "Montassar Talbi",
        key_goalkeeper: "Aymen Dahmen",
        x_factor: "Ali Abdi",
        most_likely_to_decide:
          "Aymen Dahmen if Tunisia are forced into another survival-style match",
        vulnerable_tactically:
          "Tunisia fullbacks defending Dutch overloads and weak-side switches"
      },

      away: {
        key_attacker: "Cody Gakpo",
        key_creator: "Xavi Simons",
        key_ball_progressor: "Frenkie de Jong",
        key_defender: "Virgil van Dijk",
        key_goalkeeper: "Bart Verbruggen",
        x_factor: "Denzel Dumfries",
        most_likely_to_decide:
          "Denzel Dumfries if the Netherlands repeatedly create overloads on the right side",
        vulnerable_tactically:
          "Space behind advanced fullbacks if Tunisia can counter cleanly"
      }
    },

    gameScripts: [
      {
        title: "If Tunisia score first",
        points: [
          "Tunisia can drop deeper and chase a pride result through compact defending.",
          "Netherlands will increase width and ball speed, especially through fullback and winger rotations.",
          "Koeman may use attacking depth early if the central striker situation is unclear.",
          "Benefits Tunisia emotionally, but the defensive workload becomes extremely high."
        ]
      },
      {
        title: "If Netherlands score first",
        points: [
          "Tunisia's low block has to open slightly, which creates more Dutch transition and cutback chances.",
          "Netherlands can manage rhythm while still chasing goals scored for the group-top race.",
          "Dutch wide attackers and fullbacks become more dangerous as Tunisia lose structure.",
          "Benefits Netherlands heavily because Tunisia's tournament has unraveled after early pressure."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Tunisia gain confidence and can frame the match as a pride rescue performance.",
          "Netherlands may become more direct to force earlier box entries.",
          "Set pieces and second balls become Tunisia's best upset route.",
          "Benefits Netherlands slightly because they have more depth and more ways to change the attack."
        ]
      }
    ],

    predictionModel: {
      homeWin: 8,
      draw: 16,
      awayWin: 76,
      scoreRange: "Tunisia 0-2 Netherlands to Tunisia 1-3 Netherlands",
      confidence: 7,
      volatility: 4,
      dataConfidence: "Medium",
      lean: "Higher-probability outcome: Netherlands win",
      mainReason:
        "The Netherlands have more attacking depth, are chasing top spot, and face a Tunisia side that has conceded heavily in both group matches.",
      failurePoint:
        "Tunisia's pride response under Renard could slow the match down if they survive the opening phase without conceding."
    },

    whyThisCouldBeWrong: [
      "Tunisia are eliminated but may play with emotional freedom and pride.",
      "Netherlands may rotate or manage forward availability before the knockout stage.",
      "A low block can reduce the number of clean Dutch chances if Tunisia stay compact.",
      "Confirmed lineups, injuries, and exact xG data still need updating before kickoff."
    ],

    sourceNotes: [
      "Reuters: Tunisia are eliminated after losing 5-1 to Sweden and 4-0 to Japan.",
      "Reuters: Herve Renard said Tunisia must show pride and dignity in their final match.",
      "Reuters: Netherlands drew Japan 2-2 and beat Sweden 5-1 while battling for top spot.",
      "Reuters: Denzel Dumfries expects Tunisia to play with full energy despite elimination.",
      "Reuters: Netherlands forward availability needs final update, with Brobbey and Summerville mentioned as carrying issues and Depay status requiring lineup confirmation.",
      "FIFA/FotMob/SofaScore: use for final lineups, xG, shot maps, player ratings, and live injury status."
    ]
  }
},
"turkey-usa": {
  home: { name: "Turkey", code: "tr" },
  away: { name: "United States", code: "us" },
  competition: "FIFA World Cup 2026",
  group: "Group D",
  kickoff: {
    date: "2026-06-26T02:00:00Z",
    location: "Los Angeles Stadium, Inglewood"
  },
  analyticsV2: {
    matchImportance: {
      level: "Dead-rubber for table position, rhythm match for USA",
      note:
        "The United States have already secured top spot in Group D after wins over Paraguay and Australia. Turkey are eliminated after defeats to Australia and Paraguay, so this is about pride, rotation, and momentum rather than qualification.",
      environment:
        "Los Angeles venue with strong home support for the U.S. The emotional edge may be with Turkey trying to avoid leaving the tournament without a result.",
      gameState:
        "USA can manage minutes and protect players on yellow cards. Turkey need a committed response and will likely play with more emotional urgency."
    },

    form: {
      home: {
        last_5_results:
          "Turkey 0-2 Australia; Turkey 0-1 Paraguay; previous results need update",
        goals_for_against: "0 GF / 3 GA in tournament data available",
        clean_sheets: "0 tournament clean sheets",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; attacking output has not turned into goals",
        xGA_trend:
          "Needs update; scorelines suggest Turkey have been competitive but inefficient",
        opponent_strength:
          "Lost to Australia, then lost a tight match to Paraguay",
        momentum_rating: "2/10",
        key_warning_sign:
          "Turkey have not scored yet and are already eliminated, so motivation and final-third confidence are major concerns"
      },

      away: {
        last_5_results:
          "United States 4-1 Paraguay; United States 2-0 Australia; previous results need update",
        goals_for_against: "6 GF / 1 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Strong attacking trend expected, exact xG needs update from Opta/FBref/FotMob",
        xGA_trend:
          "Positive defensive trend after Australia clean sheet; exact xGA needs update",
        opponent_strength:
          "Beat Paraguay comfortably, then controlled Australia to secure first place",
        momentum_rating: "9/10",
        key_warning_sign:
          "USA are expected to rotate and avoid starting players on yellow cards, which can lower cohesion"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "4-2-3-1 / 4-3-3",
        in_possession_shape:
          "Technical midfield base with wide attackers stretching the pitch and creators moving into half-spaces",
        out_of_possession_shape:
          "4-4-2 / 4-5-1 mid-block, depending on how aggressively Turkey press",
        build_up_style:
          "Short buildup into midfield, then quick wide progression through creative players",
        pressing_style:
          "Medium press with emotional high-press spells when chasing momentum",
        defensive_block: "Mid block that may become higher because Turkey have nothing to protect",
        transition_style:
          "Fast attacks through wide runners and early passes into attacking midfielders",
        main_attacking_zones:
          "Right half-space, wide combinations, central cutbacks",
        set_piece_strength:
          "Useful technical delivery but exact set-piece xG needs update",
        biggest_tactical_weakness:
          "If Turkey overcommit to chase a pride result, USA can attack transition lanes behind fullbacks"
      },

      away: {
        base_formation: "4-3-3 / 4-2-3-1",
        in_possession_shape:
          "Fullbacks support wide attacks, midfielders rotate underneath, front line attacks channels and cutbacks",
        out_of_possession_shape:
          "Compact 4-4-2 / 4-3-3 pressing shape with strong counter-pressing after turnovers",
        build_up_style:
          "Controlled buildup with vertical bursts, switches to wide players, and runners attacking the box",
        pressing_style:
          "Aggressive in spells, but likely more controlled due to rotation and yellow-card management",
        defensive_block: "Mid-to-high block",
        transition_style:
          "Quick forward attacks after regains, especially if Turkey lose the ball centrally",
        main_attacking_zones:
          "Wide channels, right-sided combinations, central third-man runs",
        set_piece_strength:
          "Physical box presence and strong delivery options",
        biggest_tactical_weakness:
          "Rotation can reduce timing, pressing chemistry, and final-third sharpness"
      }
    },

    matchupAnalysis: [
      "USA's biggest edge is structure and confidence: they have already solved two different Group D game states.",
      "Turkey's best route is emotional intensity, early pressure, and turning the match into a pride response rather than a controlled U.S. rhythm game.",
      "The key tactical battle is Turkey's creative midfielders against a likely rotated U.S. midfield screen.",
      "USA's wide transitions can hurt Turkey if Turkish fullbacks push high looking for their first tournament goal.",
      "Stylistic advantage still leans USA, but the rotation factor makes the game less predictable than the table suggests."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "Medium expected",
        away: "Medium-high expected",
        note: "Tactical projection"
      },
      {
        label: "Shots allowed per 90",
        home: "Needs update",
        away: "Low-medium expected",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Needs update",
        away: "Strong tournament trend",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Big chances allowed",
        home: "Needs update",
        away: "Needs update",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Possession %",
        home: "Medium expected",
        away: "Medium-high expected",
        note: "Expected game state"
      },
      {
        label: "Field tilt",
        home: "Can rise if USA rotate",
        away: "Positive expected",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Key route through creators",
        away: "Strong control route",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Wide carries important",
        away: "Wide transition carries important",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Needs update",
        away: "Medium-high expected",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Medium with emotional jumps",
        away: "Controlled press due to rotation",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Possible pride-response route",
        away: "Key chance source",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Possible route",
        away: "Useful route",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Likely underperforming finishing",
        away: "Likely positive output trend",
        note: "Exact xG unavailable"
      },
      {
        label: "Save percentage",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium-high",
        away: "Managed carefully",
        note: "USA avoiding yellow-card risk for key players"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Kenan Yıldız",
        key_creator: "Hakan Çalhanoğlu",
        key_ball_progressor: "Arda Güler",
        key_defender: "Merih Demiral",
        key_goalkeeper: "Uğurcan Çakır",
        x_factor: "Barış Alper Yılmaz",
        most_likely_to_decide:
          "Arda Güler if Turkey finally turn possession spells into high-quality chances",
        vulnerable_tactically:
          "Turkey fullbacks if they push high and USA counter into wide channels"
      },

      away: {
        key_attacker: "Christian Pulisic",
        key_creator: "Gio Reyna",
        key_ball_progressor: "Yunus Musah",
        key_defender: "Tim Ream",
        key_goalkeeper: "Matt Turner",
        x_factor: "Ricardo Pepi",
        most_likely_to_decide:
          "Gio Reyna if USA rotate and need a central creator to control tempo",
        vulnerable_tactically:
          "Rotated defensive pairings if Turkey overload central zones"
      }
    },

    gameScripts: [
      {
        title: "If Turkey score first",
        points: [
          "Turkey can turn the match into an emotional pride performance.",
          "USA will need to increase tempo without exposing players they are trying to protect.",
          "Substitutions may come earlier for USA if rhythm looks flat.",
          "Benefits Turkey because it forces a rotated U.S. side into a more urgent game state."
        ]
      },
      {
        title: "If USA score first",
        points: [
          "Turkey's morale and defensive shape are tested immediately.",
          "USA can manage the ball, preserve legs, and attack transition spaces.",
          "Turkey may become more open as they chase their first goal of the tournament.",
          "Benefits USA because their game management and depth become more valuable."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Turkey gain belief that they can leave the tournament with a result.",
          "USA may stay patient because the table pressure is gone.",
          "The match could become rhythm-based rather than high intensity.",
          "Benefits USA slightly because they do not need to force the game."
        ]
      }
    ],

    predictionModel: {
      homeWin: 20,
      draw: 25,
      awayWin: 55,
      scoreRange: "Turkey 0-1 United States to Turkey 1-2 United States",
      confidence: 5,
      volatility: 6,
      dataConfidence: "Medium",
      lean: "Tactical lean: United States",
      mainReason:
        "USA have been the strongest team in Group D and have more stable attacking output, even with rotation expected.",
      failurePoint:
        "USA rotation, yellow-card management, and Turkey's pride response could make the match lower-control and more volatile."
    },

    whyThisCouldBeWrong: [
      "USA are expected to rest several players on yellow cards.",
      "Turkey have nothing to lose and may play with more emotional freedom.",
      "Pulisic's final role needs lineup confirmation despite medical clearance.",
      "Dead-rubber matches can produce unusual intensity and rotation patterns."
    ],

    sourceNotes: [
      "Reuters: USA have secured top spot in Group D and will not start four players currently on yellow cards.",
      "Reuters: Pulisic has been medically cleared from a calf issue, but his starting status needs final confirmation.",
      "Reuters: Turkey are eliminated and Montella emphasized pride and respect for the players.",
      "FIFA/FotMob/SofaScore: use for final lineups, xG, shot maps, player ratings, and live injury updates."
    ]
  }
},

"paraguay-australia": {
  home: { name: "Paraguay", code: "py" },
  away: { name: "Australia", code: "au" },
  competition: "FIFA World Cup 2026",
  group: "Group D",
  kickoff: {
    date: "2026-06-26T02:00:00Z",
    location: "San Francisco Bay Area Stadium, Santa Clara"
  },
  analyticsV2: {
    matchImportance: {
      level: "Second-place qualification decider",
      note:
        "Australia need a draw to guarantee progression, while Paraguay need a win for the cleanest path to second place. A draw may still keep Paraguay alive through the best-third-place route, but the direct automatic spot is the major prize.",
      environment:
        "Bay Area kickoff with high pressure for both teams. Mandatory cooling breaks may affect rhythm and coaching resets.",
      gameState:
        "Australia can be slightly more pragmatic because a draw is enough. Paraguay must balance attacking urgency with the risk of being countered."
    },

    form: {
      home: {
        last_5_results:
          "Paraguay 1-4 United States; Paraguay 1-0 Turkey; previous results need update",
        goals_for_against: "2 GF / 4 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; improved final-third impact against Turkey",
        xGA_trend:
          "Needs update; USA match exposed defensive gaps, Turkey match showed resilience",
        opponent_strength:
          "Lost to group-leading USA, then beat Turkey despite playing with 10 men",
        momentum_rating: "6/10",
        key_warning_sign:
          "Miguel Almirón is suspended, removing a major transition and ball-carrying threat"
      },

      away: {
        last_5_results:
          "Australia 2-0 Turkey; Australia 0-2 United States; previous results need update",
        goals_for_against: "2 GF / 2 GA in tournament data available",
        clean_sheets: "1 tournament clean sheet",
        xG_trend:
          "Needs update from FBref/Opta/FotMob; attack looked stronger with Irankunda and Metcalfe involved",
        xGA_trend:
          "Needs update; USA controlled key stretches but Australia were competitive",
        opponent_strength:
          "Beat Turkey, then lost to the group winners United States",
        momentum_rating: "6/10",
        key_warning_sign:
          "Australia are missing Jacob Italiano and Mathew Leckie, forcing lineup changes in a decisive match"
      }
    },

    tacticalIdentity: {
      home: {
        base_formation: "4-2-3-1 / 4-4-2 defensive variation",
        in_possession_shape:
          "Compact buildup with direct wide progression and support around the striker",
        out_of_possession_shape:
          "Mid-block with aggressive duels and strong central protection",
        build_up_style:
          "Pragmatic, often direct into wide runners or second-ball zones",
        pressing_style:
          "Medium press with emotional high-pressure spells, especially if chasing",
        defensive_block: "Mid block that can drop into a compact low block",
        transition_style:
          "Fast counters through wide channels, though Almirón suspension reduces ball-carrying threat",
        main_attacking_zones:
          "Wide service, second balls, set pieces, and central runs behind midfield",
        set_piece_strength:
          "Important route because open-play creation may be reduced without Almirón",
        biggest_tactical_weakness:
          "If Paraguay overcommit to chasing the win, Australia can attack space behind the fullbacks"
      },

      away: {
        base_formation: "4-2-3-1 / 4-4-2 out of possession",
        in_possession_shape:
          "Direct progression, wide deliveries, second-ball support, and runners attacking the box",
        out_of_possession_shape:
          "Compact 4-4-2 / 4-5-1 mid-block, protecting central zones",
        build_up_style:
          "Pragmatic and vertical, with early service into runners and wide outlets",
        pressing_style:
          "Selective press; likely more controlled because a draw is enough",
        defensive_block: "Mid block with possible lower protection late if level",
        transition_style:
          "Fast breaks through Irankunda-style pace and midfield runners",
        main_attacking_zones:
          "Wide right, early crosses, cutbacks, and set-piece second balls",
        set_piece_strength:
          "Strong aerial and physical route",
        biggest_tactical_weakness:
          "Forced defensive changes can affect spacing and timing against Paraguay's pressure"
      }
    },

    matchupAnalysis: [
      "Australia's biggest edge is game-state leverage: they do not need to win, so they can protect central space and force Paraguay to take risks.",
      "Paraguay's biggest route is intensity and direct pressure, but Almirón's suspension removes one of their best transition weapons.",
      "The key battle is Australia's defensive reshuffle against Paraguay's wide attacks and set-piece pressure.",
      "Cooling breaks may help both coaches reset structure, which matters in a match where game-state management is everything.",
      "Stylistic advantage is narrow: Australia have the qualification math, Paraguay have the urgency."
    ],

    statisticalDashboard: [
      {
        label: "xG per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "xGA per match",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta/FotMob placeholder"
      },
      {
        label: "Non-penalty xG",
        home: "Needs update",
        away: "Needs update",
        note: "FBref/Opta placeholder"
      },
      {
        label: "Shots per 90",
        home: "Medium expected",
        away: "Medium expected",
        note: "Tactical projection"
      },
      {
        label: "Shots allowed per 90",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Big chances created",
        home: "Needs update without Almirón",
        away: "Needs update",
        note: "Sofascore/FotMob placeholder"
      },
      {
        label: "Big chances allowed",
        home: "High concern from USA match",
        away: "Needs update",
        note: "Game-state dependent"
      },
      {
        label: "Possession %",
        home: "Higher if chasing",
        away: "Can accept lower possession",
        note: "Expected game state"
      },
      {
        label: "Field tilt",
        home: "Likely rises over time if level",
        away: "Can defend and counter",
        note: "Needs event data"
      },
      {
        label: "Progressive passes",
        home: "Wide/direct progression important",
        away: "Vertical outlets important",
        note: "FBref placeholder"
      },
      {
        label: "Progressive carries",
        home: "Reduced by Almirón suspension",
        away: "Irankunda/Volpato-style threat important",
        note: "FBref placeholder"
      },
      {
        label: "Touches in opposition box",
        home: "Must increase to win",
        away: "Transition and set-piece dependent",
        note: "Opta/FotMob placeholder"
      },
      {
        label: "PPDA / pressing",
        home: "Medium-high if chasing",
        away: "Selective, controlled",
        note: "Style-based"
      },
      {
        label: "High turnovers",
        home: "Key route to chance creation",
        away: "Counter route if Paraguay overplay",
        note: "StatsBomb/Opta placeholder"
      },
      {
        label: "Set-piece xG",
        home: "Important route",
        away: "Important route",
        note: "Needs update"
      },
      {
        label: "Goals minus xG",
        home: "Needs update",
        away: "Needs update",
        note: "Exact xG unavailable"
      },
      {
        label: "Save percentage",
        home: "Needs update",
        away: "Needs update",
        note: "FotMob/SofaScore placeholder"
      },
      {
        label: "Cards / fouls risk",
        home: "Medium-high",
        away: "Medium",
        note: "High-pressure qualifier with Paraguay chasing second"
      }
    ],

    playerWatch: {
      home: {
        key_attacker: "Julio Enciso",
        key_creator: "Diego Gómez",
        key_ball_progressor: "Needs update without Miguel Almirón",
        key_defender: "Gustavo Gómez",
        key_goalkeeper: "Roberto Fernández",
        x_factor: "Ramón Sosa",
        most_likely_to_decide:
          "Julio Enciso if Paraguay can create enough central shooting chances without Almirón",
        vulnerable_tactically:
          "Paraguay fullbacks if they push high and Australia counter into the channels"
      },

      away: {
        key_attacker: "Nestory Irankunda",
        key_creator: "Connor Metcalfe",
        key_ball_progressor: "Cristian Volpato",
        key_defender: "Harry Souttar",
        key_goalkeeper: "Mathew Ryan",
        x_factor: "Riley McGree",
        most_likely_to_decide:
          "Nestory Irankunda if Australia use his pace earlier than they did against USA",
        vulnerable_tactically:
          "Australia's reshuffled fullback zone after Jacob Italiano's injury"
      }
    },

    gameScripts: [
      {
        title: "If Paraguay score first",
        points: [
          "Paraguay can protect the second-place position and force Australia to open up.",
          "Australia must become more aggressive, likely using pace and wide runners earlier.",
          "Cooling breaks become important for Popovic to reset the attacking plan.",
          "Benefits Paraguay because the qualification math flips in their favor."
        ]
      },
      {
        title: "If Australia score first",
        points: [
          "Paraguay must chase two outcomes: the match and qualification security.",
          "Australia can defend compactly, slow the tempo, and counter into wide spaces.",
          "Paraguay may need earlier attacking substitutions because Almirón is unavailable.",
          "Benefits Australia heavily because a draw was already enough."
        ]
      },
      {
        title: "If it is 0-0 after 30 minutes",
        points: [
          "Australia are comfortable because the live table still favors them.",
          "Paraguay may increase pressing and direct attacks before halftime.",
          "The game can become tense, physical, and set-piece driven.",
          "Benefits Australia slightly, but Paraguay's urgency rises every minute."
        ]
      }
    ],

    predictionModel: {
      homeWin: 30,
      draw: 30,
      awayWin: 40,
      scoreRange: "Paraguay 1-1 Australia to Paraguay 0-1 Australia",
      confidence: 5,
      volatility: 7,
      dataConfidence: "Medium",
      lean: "Small tactical lean: Australia avoid defeat",
      mainReason:
        "Australia have the cleaner qualification scenario and can manage the match more pragmatically, while Paraguay are missing Almirón.",
      failurePoint:
        "Australia's injury-forced changes could disrupt the defensive structure, and Paraguay's urgency can create a high-pressure game."
    },

    whyThisCouldBeWrong: [
      "Paraguay's win over Turkey showed resilience even with 10 men.",
      "Australia are missing Italiano and Leckie, which affects both defensive balance and attacking options.",
      "Paraguay only need one strong set-piece or transition moment to flip the table.",
      "A draw may create unusual late-game incentives depending on other group and third-place scenarios."
    ],

    sourceNotes: [
      "Reuters: Australia need at least a draw to guarantee progression, while Paraguay are chasing the cleaner second-place route.",
      "Reuters: Jacob Italiano and Mathew Leckie are out for Australia.",
      "Reuters: Paraguay will be without Miguel Almirón after his red card against Turkey.",
      "Reuters: Paraguay coach Daniel Garnero criticized mandatory cooling breaks because they interrupt continuity.",
      "FIFA/FotMob/SofaScore: use for final lineups, xG, shot maps, player ratings, and live injury updates."
    ]
  }
},
};
// USA vs Turkey route aliases
// These fix route/id mismatches from different naming styles.
if (matches["turkey-united-states"]) {
  matches["turkey-usa"] = matches["turkey-united-states"];
  matches["usa-turkey"] = matches["turkey-united-states"];
  matches["turkiye-usa"] = matches["turkey-united-states"];
  matches["usa-turkiye"] = matches["turkey-united-states"];
  matches["türkiye-usa"] = matches["turkey-united-states"];
  matches["usa-türkiye"] = matches["turkey-united-states"];
}