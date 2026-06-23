export const portugalTeamInfo = {
  team: {
    name: "Portugal",
    flag: "🇵🇹",
    flagCode: "pt",
    flagAsset: "portugal.svg",
    group: "Group K",
    groupShort: "K",
    confederation: "UEFA",
    fifaRanking: "5",
    headCoach: "Roberto Martínez",
    captain: "Cristiano Ronaldo",
    starPlayer: "Bruno Fernandes",
    breakoutPlayer: "João Neves",
    tournamentStatus: "1 point from 1 match; Uzbekistan next on June 23",
    identitySentence:
      "Ball-dominant, technically elite, left-flank aggressive, but still searching for clean World Cup control",
    reportTitle: "Portugal World Cup 2026 team report for KT Picks",
    updateContext:
      "Update context: this page is written as of June 23, 2026, before Portugal’s second Group K match against Uzbekistan later today in Houston."
  },

  pageMeta: {
    pageLabel: "Team Info",
    pageTitle: "Portugal",
    pageSubtitle:
      "World Cup 2026 team report, tactical profile, lineup, form, and tournament context.",
    ktPicksAddition:
      "UI addition: this data file separates the report into website-ready sections so the page can render cards, tables, a pitch lineup, and scouting blocks instead of one pasted essay."
  },

  snapshot: {
    sectionTitle: "Team snapshot",
    dataConfidence:
      "Data confidence: high for roster, fixtures, tournament context, and lineup-so-far; medium for star/breakout labels because those are partly analytical.",
    primarySources:
      "Primary sources used in this section: UEFA, FIFA, Reuters, Transfermarkt, FotMob.",
    intro:
      "Portugal arrive in Group K as a UEFA side ranked No. 5 in FIFA world ranking, coached by Roberto Martínez and captained by Cristiano Ronaldo. They are one point into the group after a 1-1 draw with DR Congo, and the broader squad profile is still elite: 26 players, average age 28.1, estimated total market value about €1.01bn.",
    fields: [
      { field: "Team", value: "Portugal" },
      { field: "Flag", value: "🇵🇹" },
      { field: "Flag asset", value: "portugal.svg" },
      { field: "Group", value: "K" },
      { field: "Confederation", value: "UEFA" },
      { field: "FIFA ranking", value: "5th" },
      { field: "Head coach", value: "Roberto Martínez" },
      { field: "Captain", value: "Cristiano Ronaldo" },
      { field: "Star player", value: "Bruno Fernandes" },
      { field: "Breakout player", value: "João Neves" },
      {
        field: "Tournament status",
        value: "1 point from 1 match; Uzbekistan next on June 23"
      },
      {
        field: "Identity sentence",
        value:
          "Ball-dominant, technically elite, left-flank aggressive, but still searching for clean World Cup control"
      }
    ]
  },

  lineupSection: {
    sectionTitle: "World Cup starting XI so far",
    note:
      "World Cup starting XI so far: because Portugal have played only one World Cup match at the time of writing, the only fully verified tournament XI is the Matchday 1 starting lineup vs DR Congo. Reuters also reported that all Portugal players except Tomás Araújo are available for Uzbekistan, including Rúben Dias, so the XI may change for Matchday 2.",
    ratingSource: "SofaScore ratings vs DR Congo",
    ratingNote:
      "UI addition: previousMatchRating is included for the lineup cards. Cristiano Ronaldo is marked 6.1 from SofaScore-accessible text. Other ratings are N/A until exact SofaScore ratings are added.",
    players: [
      {
        pos: "GK",
        player: "Diogo Costa",
        suggestedFaceAssetKey: "diogo-costa",
        imagePath: "/images/portugal/diogo-costa.jpeg",
        previousMatchRating: "6.8",
        x: "50%",
        y: "88%"
      },
      {
        pos: "RB",
        player: "João Cancelo",
        suggestedFaceAssetKey: "joao-cancelo",
        imagePath: "/images/portugal/joao-cancelo.jpeg",
        previousMatchRating: "6.3",
        x: "89%",
        y: "70%"
      },
      {
        pos: "RCB",
        player: "Tomás Araújo",
        suggestedFaceAssetKey: "tomas-araujo",
        imagePath: "/images/portugal/tomas-araujo.jpeg",
        previousMatchRating: "6.9",
        x: "67%",
        y: "73%"
      },
      {
        pos: "LCB",
        player: "Renato Veiga",
        suggestedFaceAssetKey: "renato-veiga",
        imagePath: "/images/portugal/renato-veiga.jpeg",
        previousMatchRating: "7.3",
        x: "33%",
        y: "73%"
      },
      {
        pos: "LB",
        player: "Nuno Mendes",
        suggestedFaceAssetKey: "nuno-mendes",
        imagePath: "/images/portugal/nuno-mendes.jpeg",
        previousMatchRating: "6.5",
        x: "11%",
        y: "70%"
      },
      {
        pos: "CM",
        player: "Vitinha",
        suggestedFaceAssetKey: "vitinha",
        imagePath: "/images/portugal/vitinha.jpeg",
        previousMatchRating: "7.5",
        x: "30%",
        y: "52%"
      },
      {
        pos: "CM",
        player: "João Neves",
        suggestedFaceAssetKey: "joao-neves",
        imagePath: "/images/portugal/joao-neves.jpeg",
        previousMatchRating: "8.0",
        x: "70%",
        y: "52%"
      },
      {
        pos: "AM",
        player: "Bruno Fernandes",
        suggestedFaceAssetKey: "bruno-fernandes",
        imagePath: "/images/portugal/bruno-fernandes.jpeg",
        previousMatchRating: "7.8",
        x: "50%",
        y: "38%"
      },
      {
        pos: "RW",
        player: "Bernardo Silva",
        suggestedFaceAssetKey: "bernardo-silva",
        imagePath: "/images/portugal/bernardo-silva.jpeg",
        previousMatchRating: "6.2",
        x: "78%",
        y: "26%"
      },
      {
        pos: "LW",
        player: "Pedro Neto",
        suggestedFaceAssetKey: "pedro-neto",
        imagePath: "/images/portugal/pedro-neto.jpeg",
        previousMatchRating: "7.1",
        x: "22%",
        y: "26%"
      },
      {
        pos: "ST",
        player: "Cristiano Ronaldo",
        suggestedFaceAssetKey: "cristiano-ronaldo",
        imagePath: "/images/portugal/cristiano-ronaldo.jpeg",
        previousMatchRating: "6.1",
        x: "50%",
        y: "14%"
      }
    ]
  },

  quickVerdict: {
    sectionTitle: "Quick verdict",
    cards: [
      {
        label: "Overall team strength",
        headline: "Elite tournament-level squad quality",
        text:
          "Overall team strength: elite tournament-level squad quality, especially through midfield control and top-end fullback talent. Reuters called the Vitinha–João Neves–Bruno Fernandes engine room a group that can “make a convincing claim to be the best in the world,” and Transfermarkt’s squad valuation backs the depth argument."
      },
      {
        label: "Main tactical identity",
        headline: "Ball-first control side",
        text:
          "Main tactical identity: a ball-first side that builds from the back, uses a 4-3-3 or 4-2-3-1 base, and tries to accelerate through wide/fullback structures rather than living off pure chaos."
      },
      {
        label: "Biggest advantage",
        headline: "Left-side thrust",
        text:
          "Biggest advantage: left-side thrust, especially when Nuno Mendes can break lines and attack space with pace and power."
      },
      {
        label: "Biggest weakness",
        headline: "Possession does not always become shot quality",
        text:
          "Biggest weakness: Portugal’s possession does not always become shot quality. Against DR Congo they had only seven shots, one on target, and just 0.64 xG, despite having most of the ball."
      },
      {
        label: "Player most likely to decide games",
        headline: "Bruno Fernandes",
        text:
          "Player most likely to decide games: Bruno Fernandes, because Portugal’s structure still depends heavily on his final pass, crossing, and set-piece delivery."
      },
      {
        label: "Tournament ceiling",
        headline: "Semi-final level, possible final push",
        text:
          "Tournament ceiling: strong enough for a semi-final run and, if chance creation sharpens, a genuine final push. Opta’s pre-tournament model gave Portugal a 59.0% chance to win Group K and a 94.9% chance to reach the knockout stage."
      }
    ]
  },

  tournamentContext: {
    sectionTitle: "Tournament context and recent form",
    dataConfidence:
      "Data confidence: high for fixtures, qualification, history, and last-five results; medium for pressure and momentum labels.",
    primarySources:
      "Primary sources used in this section: UEFA, FIFA, Reuters, FPF, FotMob, Transfermarkt, Opta Analyst.",
    paragraphs: [
      "Portugal’s Group K opponents are DR Congo, Uzbekistan, and Colombia. UEFA’s fixture page lists Portugal’s group schedule as 17 June vs DR Congo in Houston, 23 June vs Uzbekistan in Houston, and 28 June vs Colombia in Miami. In the 48-team format, the top two in each group plus the eight best third-placed teams advance to the knockout phase.",
      "Portugal qualified by finishing first in UEFA qualifying Group F with a W4-D1-L1 record and a 20-7 goals split, with Cristiano Ronaldo their top scorer on five goals. Historically, this is Portugal’s ninth World Cup, their best finish remains third place in 1966, and their most recent World Cup ended in the 2022 quarter-finals.",
      "The pressure level is already significant. After the 1-1 draw with DR Congo, Reuters reported growing outside criticism, and Martínez openly admitted Portugal lost “discipline and structure” after the opening phase of the match. He publicly insisted there was no internal panic, but also acknowledged that a win over Uzbekistan mattered to keep pace with group leaders Colombia, who opened with a 3-1 win over Uzbekistan.",
      "This squad blends experience and peak-age talent. UEFA noted that Nuno Mendes, João Neves, Vitinha and Gonçalo Ramos arrived at the finals after winning the UEFA Champions League with Paris Saint-Germain, while Ronaldo is at a sixth World Cup. Transfermarkt’s squad snapshot shows a roster with elite market value concentration in Vitinha (€140m), João Neves (€140m), and Nuno Mendes (€80m).",
      "Travel and tournament management slightly favor Portugal’s group phase. Their first two matches are both in Houston, reducing early travel load, before the group finale in Miami. Reuters also reported that Martínez explicitly considered weather and time-zone demands when choosing extra depth in fullback and goalkeeper positions."
    ]
  },

  recentForm: {
    sectionTitle: "Recent form snapshot",
    summary:
      "FotMob’s recent-form team page summarizes Portugal’s last five as 3 wins, 2 draws, 0 losses, with 7 goals scored and 3 conceded. That means 2 clean sheets in the last five.",
    xgContext:
      "The xG picture is much less comfortable than the raw results. The only clearly verifiable recent xG data available in the public match reporting here is the World Cup opener: Opta logged Portugal at 0.64 xG and DR Congo at 0.82 xG, so the short-term trend marker is not upward dominance but underproduction. Multi-match rolling xG and xGA trendlines still need update.",
    momentumRating:
      "Momentum rating: 6.5/10. The last-five record is good, but the World Cup opener damaged the feel of control. The key warning sign is not just the dropped points; it is that Portugal paired huge territory and passing volume with minimal end product. Reuters reported seven shots and one on target, while Opta logged the lower xG total despite Portugal’s territorial dominance.",
    formRecord: {
      wins: 3,
      draws: 2,
      losses: 0,
      goalsScored: 7,
      goalsConceded: 3,
      cleanSheets: 2,
      display: "3 wins, 2 draws, 0 losses"
    },
    matches: [
      {
        date: "17 Jun 2026",
        match: "Portugal vs DR Congo",
        result: "1-1",
        competition: "World Cup"
      },
      {
        date: "10 Jun 2026",
        match: "Portugal vs Nigeria",
        result: "2-1",
        competition: "Friendly"
      },
      {
        date: "6 Jun 2026",
        match: "Portugal vs Chile",
        result: "2-1",
        competition: "Friendly"
      },
      {
        date: "31 Mar 2026",
        match: "USA vs Portugal",
        result: "0-2",
        competition: "Friendly"
      },
      {
        date: "28 Mar 2026",
        match: "Mexico vs Portugal",
        result: "0-0",
        competition: "Friendly"
      }
    ],
    formBadges: ["D", "W", "W", "W", "D"]
  },

  tacticalIdentity: {
    sectionTitle: "Tactical identity",
    dataConfidence:
      "Data confidence: medium. Formation/build-up patterns are well-supported; exact match-to-match behavior still depends on personnel and opponent.",
    primarySources:
      "Primary sources used in this section: Total Football Analysis, Coaches’ Voice, Reuters, Opta, FIFA.",
    subSections: [
      {
        title: "Verified tactical base",
        paragraphs: [
          "Portugal’s underlying shape is best read as a 4-3-3 base that can present as 4-2-3-1 depending on the personnel and phase. Total Football Analysis describes Martínez’s Portugal as structurally flexible, but “as a general system” they use 4-3-3, beginning play with split centre-backs and a pivot ahead of them, while the pivot can later drop into the back line to reshape buildup. Coaches’ Voice, analyzing the Nations League final, showed Portugal pressing high in a 4-2-3-1 with Bruno Fernandes jumping onto the opposing pivot.",
          "In possession, the clearest themes are circulation from the back, fullback-pivot rotations, and width that becomes asymmetry. TFA notes that the full-backs start wide and deep, with the possibility of moving inside, and that the back-three building block can morph during the game depending on which player joins the line. Reuters captured the team idea in Martínez’s own words before Uzbekistan: Portugal “want the ball,” want to “defend and react quickly,” and want to “counterattack quickly.”",
          "Out of possession, Portugal can start with a high 4-2-3-1 press, but they are not locked into that height. Coaches’ Voice showed that in the Nations League final they regained control after halftime from a medium block, becoming more compact and then attacking in transition, particularly through Nuno Mendes on the left. That adaptability matters because Portugal’s opener against DR Congo suggested their initial control can fade if structure loosens.",
          "The left side is the most dangerous attacking corridor. Coaches’ Voice and Total Football Analysis both stress the tactical impact of Nuno Mendes, whether in one-v-one defending, overlapping/underlapping bursts, or pure carrying power into space. When Portugal become vertical, that flank usually starts it.",
          "Set pieces are a split story. Portugal benefit from Bruno Fernandes’ delivery and from box targets like Ronaldo, but the team also conceded against DR Congo from a well-worked short-corner sequence, while TFA’s Ireland analysis highlighted another concession from a corner routine and repeated danger from vertical balls into the space behind Portugal’s line."
        ]
      }
    ],
    tacticalCards: [
      {
        label: "Base shape",
        value: "4-3-3 / 4-2-3-1",
        note:
          "Portugal’s underlying shape is best read as a 4-3-3 base that can present as 4-2-3-1 depending on personnel and phase."
      },
      {
        label: "Build-up",
        value: "Flexible back-three structures",
        note:
          "Split centre-backs, pivot rotations, and full-back movement allow the structure to reshape during possession."
      },
      {
        label: "Main attacking lane",
        value: "Left flank",
        note:
          "Nuno Mendes is the most dangerous corridor starter when Portugal become vertical."
      },
      {
        label: "Out of possession",
        value: "High press / medium block",
        note:
          "Portugal can press high, but also fall into a compact medium block when needed."
      },
      {
        label: "Set pieces",
        value: "Threat and risk",
        note:
          "Bruno Fernandes’ delivery creates upside, but DR Congo exposed short-corner and restart concentration issues."
      },
      {
        label: "Main warning",
        value: "Control can fade",
        note:
          "The DR Congo opener suggested Portugal’s initial control can loosen if structure drops."
      }
    ]
  },

  strengthsWeaknesses: {
    sectionTitle: "Strengths and weaknesses",
    strengths: {
      title: "Strengths",
      items: [
        {
          title: "Midfield control and circulation",
          text:
            "Midfield control and circulation: Portugal’s midfield can monopolize central possession and recycle attacks without losing calm. Reuters described this unit as possibly the best midfield group in the tournament."
        },
        {
          title: "Elite pass security",
          text:
            "Elite pass security: Opta recorded 724 completed passes against DR Congo, the most Portugal have ever completed in a World Cup game, and Vitinha individually set a Portugal single-match World Cup record with 121 completed passes."
        },
        {
          title: "Left-flank acceleration",
          text:
            "Left-flank acceleration: Nuno Mendes is the side’s most explosive structural weapon. In the Nations League final, Coaches’ Voice saw him repeatedly beat opponents on the outside and inside, driving both defensive recovery and attacking production."
        },
        {
          title: "Flexible buildup shapes",
          text:
            "Flexible buildup shapes: Martínez’s system can become a back three, a 3-3-4, or a 3-4-3 depending on how the pivot and full-backs rotate, which helps Portugal escape crude pressure schemes."
        },
        {
          title: "Bench threat",
          text:
            "Bench threat: Portugal can change winger profiles and attacking tempo with players such as Rafael Leão, Francisco Conceição, Gonçalo Ramos, João Félix, and Nélson Semedo. Coaches’ Voice credited Portugal’s substitutions with changing the flow of the Nations League final."
        },
        {
          title: "Tournament experience and winning habit",
          text:
            "Tournament experience and winning habit: Reuters noted Martínez’s competitive record is extremely strong, and Portugal arrived as reigning Nations League champions."
        }
      ]
    },
    weaknesses: {
      title: "Weaknesses",
      items: [
        {
          title: "Possession can become sterile",
          text:
            "Possession can become sterile: DR Congo held Portugal to one shot on target and 0.64 xG, despite Portugal owning the ball for long spells. This is the single biggest red flag from the opener."
        },
        {
          title: "Space behind the line",
          text:
            "Space behind the line: TFA’s Ireland analysis showed how Portugal’s advanced defensive block can be attacked by direct balls, early vertical passes, and wing-to-channel runs."
        },
        {
          title: "Rest-defense and set-piece concentration",
          text:
            "Rest-defense and set-piece concentration: Portugal conceded in transition-related moments against Ireland and from a short-corner routine against DR Congo."
        },
        {
          title: "Overreliance on the Ronaldo reference point",
          text:
            "Overreliance on the Ronaldo reference point: Martínez still sees Ronaldo as the forward who opens space with movement, but Opta and Reuters data from the opener suggest the balance is fragile when the ball reaches the box too slowly or too predictably."
        },
        {
          title: "Right-side balance can wobble",
          text:
            "Right-side balance can wobble: Coaches’ Voice and TFA both documented matches where Martínez made corrective right-side changes to improve defensive security or wing threat."
        },
        {
          title: "Low-block problem-solving still needs proof",
          text:
            "Low-block problem-solving still needs proof: TFA’s Ireland piece described Portugal drifting into backward circulation and “desperate crosses” when a compact defense denied central access. DR Congo used a similar discipline script successfully in the World Cup opener."
        }
      ]
    }
  },

  styleTags: {
    sectionTitle: "Style tags",
    display:
      "Possession-first · Flexible buildup · Left-flank thrust · High press · Medium-block fallback · Wide overloads · Technical midfield · Transition-capable · Set-piece threat · Set-piece risk · Star-dependent finishing · Control-not-always-penetration",
    tags: [
      "Possession-first",
      "Flexible buildup",
      "Left-flank thrust",
      "High press",
      "Medium-block fallback",
      "Wide overloads",
      "Technical midfield",
      "Transition-capable",
      "Set-piece threat",
      "Set-piece risk",
      "Star-dependent finishing",
      "Control-not-always-penetration"
    ]
  },

  keyPlayers: {
    sectionTitle: "Key players",
    dataConfidence:
      "Data confidence: medium to high. Club/team registration data are strong; role interpretation is analytical.",
    primarySources:
      "Primary sources used in this section: Transfermarkt, Reuters, Opta, Coaches’ Voice, FotMob.",
    players: [
      {
        category: "Best attacker",
        player: "Cristiano Ronaldo",
        position: "CF",
        club: "Al-Nassr",
        roleInTeam: "Penalty-box reference, aerial target, finishing endpoint",
        mainStrengths: "Box movement, gravity, finishing history",
        mainWeaknessOrRisk:
          "Major-tournament drought now at 10 matches; lower pressing/ball-connection value than earlier-career versions",
        whyHeMattersTactically:
          "Martínez still frames him as the player whose movement opens space and anchors the box."
      },
      {
        category: "Best creator",
        player: "Bruno Fernandes",
        position: "AM/CM",
        club: "Manchester United",
        roleInTeam: "Primary chance-maker and set-piece taker",
        mainStrengths: "Final ball, crosses, through passes, restarts",
        mainWeaknessOrRisk:
          "Can be pushed into lower-value delivery if central lanes are clogged",
        whyHeMattersTactically:
          "Portugal’s attack still needs his tempo change and final pass to turn dominance into shots."
      },
      {
        category: "Best ball progressor",
        player: "Vitinha",
        position: "CM/DM",
        club: "Paris Saint-Germain",
        roleInTeam: "First-phase controller and press escape valve",
        mainStrengths: "Passing volume, composure, rhythm control",
        mainWeaknessOrRisk:
          "If opponents deny central lanes, Portugal can tilt too safe",
        whyHeMattersTactically:
          "His 121 completed passes vs DR Congo show how much the structure runs through him."
      },
      {
        category: "Best defender",
        player: "Rúben Dias",
        position: "CB",
        club: "Manchester City",
        roleInTeam: "Defensive leader and organizer when fit",
        mainStrengths: "Positioning, duels, line management, leadership",
        mainWeaknessOrRisk: "Recent injury disrupted his opener availability",
        whyHeMattersTactically:
          "Portugal’s cleanest rest-defense version usually includes him. Reuters said he was available again before Uzbekistan."
      },
      {
        category: "Best midfielder",
        player: "João Neves",
        position: "CM",
        club: "Paris Saint-Germain",
        roleInTeam: "Connector, aggressor, second-wave runner",
        mainStrengths:
          "Energy, ball-winning, timing into the box, progression support",
        mainWeaknessOrRisk:
          "Youth can bring occasional over-acceleration in hectic phases",
        whyHeMattersTactically:
          "He scored Portugal’s opener and became the third-youngest Portuguese World Cup scorer."
      },
      {
        category: "Best goalkeeper",
        player: "Diogo Costa",
        position: "GK",
        club: "FC Porto",
        roleInTeam: "First-choice keeper and buildup starter",
        mainStrengths: "Shot-stopping, calm distribution, penalty reputation",
        mainWeaknessOrRisk:
          "If Portugal’s line is stretched, he faces harder transition shots",
        whyHeMattersTactically:
          "Coaches’ Voice highlighted him as a penalty specialist, while Portugal’s buildup regularly starts through him."
      },
      {
        category: "X-factor",
        player: "Rafael Leão",
        position: "LW",
        club: "AC Milan",
        roleInTeam: "Chaos creator off the bench or from the start",
        mainStrengths: "Pace, dribbling, depth runs, one-v-one threat",
        mainWeaknessOrRisk: "Defensive contribution is limited",
        whyHeMattersTactically:
          "Coaches’ Voice and TFA both argue Portugal become more dangerous when his left-side threat is used properly."
      },
      {
        category: "Young or breakout player",
        player: "João Neves",
        position: "CM",
        club: "Paris Saint-Germain",
        roleInTeam: "Pressing energy and late-arriving scorer",
        mainStrengths: "Tactical intelligence, clean ball use, timing",
        mainWeaknessOrRisk: "Still building long-tournament experience",
        whyHeMattersTactically:
          "FotMob lists him as Portugal’s standout league performer this season, and his World Cup opener only strengthened that case."
      },
      {
        category: "Most tactically important player",
        player: "Nuno Mendes",
        position: "LB",
        club: "Paris Saint-Germain",
        roleInTeam: "Left-flank accelerator and recovery defender",
        mainStrengths:
          "Carrying power, overlap timing, recovery speed, one-v-one defending",
        mainWeaknessOrRisk:
          "His aggressive positioning can expose space if rest defense fails",
        whyHeMattersTactically:
          "Portugal’s most distinctive structural edge comes when he can tilt the match from the left."
      }
    ]
  },

  statisticalDashboard: {
    sectionTitle: "Statistical dashboard",
    dataConfidence:
      "Data confidence: mixed. Match-one World Cup numbers are mostly strong; many broader tournament-process metrics still need update.",
    primarySources:
      "Primary sources used in this section: Opta Analyst, Reuters, FIFA Match Centre, FotMob.",
    importantNote:
      "Important note: most of the verified public numbers below are from Portugal’s World Cup Matchday 1 draw vs DR Congo. For deeper tournament dashboards such as PPDA, field tilt, progressive passing totals, and high turnovers, this report leaves null/needs update rather than guessing.",
    metrics: [
      {
        metric: "xG per match",
        value: "0.64",
        source: "Opta match report",
        confidence: "Medium",
        note: "Matchday 1 only"
      },
      {
        metric: "xGA per match",
        value: "0.82",
        source: "Opta match report",
        confidence: "Medium",
        note: "Matchday 1 only"
      },
      {
        metric: "Non-penalty xG",
        value: "0.64",
        source: "Opta match report",
        confidence: "Medium",
        note: "No penalty noted"
      },
      {
        metric: "Shots per 90",
        value: "7.0",
        source: "Reuters / Opta",
        confidence: "High",
        note: "Matchday 1 only"
      },
      {
        metric: "Shots on target per 90",
        value: "1.0",
        source: "Reuters / Opta",
        confidence: "High",
        note: "Matchday 1 only"
      },
      {
        metric: "Shots allowed per 90",
        value: "8.0",
        source: "Opta match report",
        confidence: "High",
        note: "Matchday 1 only"
      },
      {
        metric: "Big chances created",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Public verifiable tournament value not retrieved"
      },
      {
        metric: "Big chances allowed",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Public verifiable tournament value not retrieved"
      },
      {
        metric: "Possession %",
        value: "68.0",
        source: "FIFA Match Centre snippet",
        confidence: "Medium",
        note:
          "FIFA listed 68%; Reuters/Opta described much heavier dominance, so provider methodology should be flagged"
      },
      {
        metric: "Field tilt",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Deep territorial-process stat unavailable in retrieved public feed"
      },
      {
        metric: "PPDA / pressing intensity",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Needs event-level or dedicated team-stat source"
      },
      {
        metric: "High turnovers",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Needs event-level team table"
      },
      {
        metric: "Progressive passes",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Needs FBref or equivalent verified table"
      },
      {
        metric: "Progressive carries",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Needs FBref or equivalent verified table"
      },
      {
        metric: "Touches in opposition box",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not confirmed in retrievable tournament feed"
      },
      {
        metric: "Crosses",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not confirmed in retrievable tournament feed"
      },
      {
        metric: "Set-piece xG",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not confirmed in retrievable tournament feed"
      },
      {
        metric: "Goals minus xG",
        value: "+0.36",
        source: "Derived from 1 goal and 0.64 xG",
        confidence: "Medium",
        note: "Matchday 1 only"
      },
      {
        metric: "Save percentage",
        value: "50.0%",
        source: "Derived from DR Congo’s 2 shots on target and 1 goal",
        confidence: "Medium",
        note: "Matchday 1 only"
      },
      {
        metric: "Cards per match",
        value: "3.0",
        source: "FIFA Match Centre snippet",
        confidence: "High",
        note: "Matchday 1 only"
      },
      {
        metric: "Fouls per match",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note:
          "FIFA snippet exposed “fouls against” wording, but not a clean committed-fouls value"
      }
    ]
  },

  matchupProfile: {
    sectionTitle: "Matchup profile and build-ready data",
    dataConfidence:
      "Data confidence: medium. These are evidence-based tactical reads rather than purely hard-stat outputs.",
    primarySources:
      "Primary sources used in this section: Reuters, Opta, TFA, Coaches’ Voice, UEFA, FIFA.",
    cards: [
      {
        title: "Against high-pressing teams",
        text:
          "Against high-pressing teams, Portugal should be relatively comfortable in first phase because they can split centre-backs, use the pivot flexibly, and lean on controllers like Vitinha and João Neves. The issue is less about escaping pressure and more about what happens after escape: if the next pass does not arrive early enough, territory can turn back into slow circulation."
      },
      {
        title: "Against low blocks",
        text:
          "Against low blocks, the concern is real. Ireland’s qualifier win and DR Congo’s opener draw both showed versions of the same stress point: Portugal can camp in the opponent’s half without generating enough high-quality shots, then drift into wing crossing or hopeful box traffic."
      },
      {
        title: "Against possession teams",
        text:
          "Against possession teams, Portugal may actually look more natural. Coaches’ Voice’s Nations League final analysis showed that after tactical adjustment Portugal could defend from a more compact block and then break with clarity, especially from the left. This suggests they can be more dangerous when the game gives them transition room rather than static occupation."
      },
      {
        title: "Against counterattacking teams",
        text:
          "Against counterattacking teams, Portugal’s rest-defense is the pressure point. TFA’s Ireland breakdown and the DR Congo opener both point toward vulnerability when the line is advanced, the full-backs are high, and the first transition duel is lost."
      },
      {
        title: "Against physical teams",
        text:
          "Against physical teams, Portugal still have enough technical security to dominate the ball, but duel-heavy matches can flatten their fluency if the opponent turns the game into second balls, long diagonals, and restart chaos."
      },
      {
        title: "Against technical midfield teams",
        text:
          "Against technical midfield teams, Portugal have the talent to compete because their own central unit is elite. This is one reason Reuters framed the midfield as the real headline act of the squad."
      },
      {
        title: "Against teams with elite wingers",
        text:
          "Against teams with elite wingers, Portugal’s right side is the one to watch. Coaches’ Voice showed Martínez needing to correct that flank against Spain, while Rúben Dias himself said positional discipline becomes decisive against Uzbekistan’s expected back-five shape and similar block structure."
      },
      {
        title: "Against teams with an elite striker",
        text:
          "Against teams with an elite striker, Portugal’s answer depends heavily on whether Rúben Dias is available and how settled the centre-back pairing is. With Dias fit, the defensive floor rises. Without him, the line has looked more improvized."
      }
    ]
  },

  gameScriptAnalysis: {
    sectionTitle: "Game script analysis",
    scripts: [
      {
        title: "If Portugal score first",
        text:
          "If Portugal score first: the ideal script is territorial domination and midfield control, but the DR Congo match is the warning that an early lead does not guarantee stable control. Portugal lost structure after a bright first 20 minutes and never put the game away."
      },
      {
        title: "If Portugal concede first",
        text:
          "If Portugal concede first: expect Martínez to increase width and wing threat, likely by changing the profile of the wide attackers. Coaches’ Voice showed how additions such as Rafael Leão and more aggressive wide support changed Portugal’s attack level."
      },
      {
        title: "If it is 0-0 after 60 minutes",
        text:
          "If it is 0-0 after 60 minutes: Portugal become a substitution game. Their bench can materially change pace and dribbling threat, especially out wide."
      },
      {
        title: "If Portugal dominate possession",
        text:
          "If Portugal dominate possession: that alone is not enough. The opener produced huge pass and possession volume, but low shot quality. This team still has to prove it can turn control into sharpness."
      },
      {
        title: "If Portugal are forced to defend deep",
        text:
          "If Portugal are forced to defend deep: the profile is better than many assume. Coaches’ Voice showed a version of Portugal capable of compact medium-block work and transition threat, but concentration on restarts and second balls remains essential."
      }
    ]
  },

  whatCouldGoWrong: {
    sectionTitle: "What could go wrong?",
    paragraphs: [
      "The biggest danger is that the DR Congo draw is not dismissed as “just bad finishing” when the data and tape say more than that. Portugal’s xG was lower than the opponent’s, the shot count was low for a team that monopolized possession, and the defensive concentration around set plays and open-field structure both slipped. Add the ongoing debate around Ronaldo’s role, plus a group containing a strong Colombia side already in front, and the margin for another flat display is thinner than Portugal would have expected before kickoff in North America.",
      "Portugal still look like a team with genuine tournament weight. The midfield is elite, Nuno Mendes gives them a rare left-sided gear-change, and Martínez has enough tactical options and bench quality to reshape a game. In broad squad terms, this is still one of the more talented groups in the competition, and the pre-tournament projection models respected that.",
      "But the premium scouting view should be clear-eyed: Portugal are not yet producing World Cup football that matches the glamour of their roster. The opener exposed the central strategic question of their tournament. Can they turn ball control into clean, repeatable chance creation while keeping enough rest-defense to survive counters and set pieces? If the answer becomes yes, their ceiling is high. If the answer remains inconsistent, they will look powerful on paper and vulnerable in practice."
    ]
  },

  ktPicksAddition: {
    sectionTitle: "KT Picks addition",
    label: "Added by KT Picks UI",
    text:
      "This section is not extra scouting analysis. It exists so the website can clearly label anything added for layout, navigation, or visual structure."
  }
};