export const englandTeamInfo = {
  team: {
    name: "England",
    flag: "🏴",
    flagCode: "gb-eng",
    flagAsset: "england.svg",
    group: "Group L",
    groupShort: "L",
    confederation: "UEFA",
    fifaRanking: "4th",
    headCoach: "Thomas Tuchel",
    captain: "Harry Kane",
    starPlayer: "Harry Kane",
    breakoutPlayer: "Nico O’Reilly",
    tournamentStatus: "1st in Group L after Matchday 1",
    identitySentence:
      "A high-end, attack-first England built around a Kane-Bellingham-Rice spine, wide pace, and a bench strong enough to change the game state late. That upside is real, but the control without the ball is still not fully settled under Tuchel.",
    reportTitle: "England World Cup 2026 Team Report",
    updateContext:
      "Snapshot date: June 23, 2026, before England’s Group L match against Ghana. England are in Group L, are a UEFA side, are coached by Thomas Tuchel, captained by Harry Kane, and sat 4th in the FIFA/Coca-Cola Men’s World Ranking on the last official update of June 11, 2026. They opened the tournament with a 4-2 win over Croatia, so their live tournament status entering the Ghana match is Group L leaders on goal difference after Matchday 1."
  },

  pageMeta: {
    pageLabel: "Team Info",
    pageTitle: "England",
    pageSubtitle:
      "World Cup 2026 team report, tactical profile, lineup, form, player notes, stats dashboard, and matchup analysis.",
    ktPicksAddition:
      "UI addition: this data file separates the England report into website-ready sections so the page can render cards, tables, a pitch lineup, and scouting blocks instead of one pasted essay."
  },

  snapshot: {
    sectionTitle: "Team Header",
    dataConfidence: "Data confidence: High",
    primarySources:
      "The coach, captain, ranking, group placement, and current tournament status are all directly supported by official or high-authority sources.",
    intro:
      "Snapshot date: June 23, 2026, before England’s Group L match against Ghana. England are in Group L, are a UEFA side, are coached by Thomas Tuchel, captained by Harry Kane, and sat 4th in the FIFA/Coca-Cola Men’s World Ranking on the last official update of June 11, 2026. They opened the tournament with a 4-2 win over Croatia, so their live tournament status entering the Ghana match is Group L leaders on goal difference after Matchday 1.",
    fields: [
      { field: "Team", value: "England" },
      { field: "Flag", value: "🏴" },
      { field: "Group", value: "Group L" },
      { field: "Confederation", value: "UEFA" },
      { field: "FIFA ranking", value: "4th" },
      { field: "Head coach", value: "Thomas Tuchel" },
      { field: "Captain", value: "Harry Kane" },
      { field: "Star player", value: "Harry Kane" },
      { field: "Breakout player", value: "Nico O’Reilly" },
      { field: "Tournament status", value: "1st in Group L after Matchday 1" },
      { field: "Data confidence", value: "High" },
      {
        field: "Identity sentence",
        value:
          "A high-end, attack-first England built around a Kane-Bellingham-Rice spine, wide pace, and a bench strong enough to change the game state late. That upside is real, but the control without the ball is still not fully settled under Tuchel."
      }
    ],
    extraParagraphs: [
      "The coach, captain, ranking, group placement, and current tournament status are all directly supported by official or high-authority sources. Nico O’Reilly is listed here as the breakout call because he is a first-time major tournament participant and started the World Cup opener at left-back, which is already a significant tournament role."
    ]
  },

  lineupSection: {
    sectionTitle: "Typical starting XI in the World Cup so far",
    note:
      "England have played only one World Cup match so far, so the most accurate “typical XI” is simply the opening XI against Croatia. This XI was the official lineup in the Croatia win. England used the same general shape in the final warm-up against Costa Rica as well, which increases confidence that this is Tuchel’s current first-choice structure when his core group is available.",
    ratingSource: "SofaScore ratings vs Croatia",
    ratingNote:
      "UI addition: previousMatchRating is included for the lineup cards. Values are N/A until the exact SofaScore ratings vs Croatia are added.",
    players: [
      {
        pos: "GK",
        player: "Jordan Pickford",
        position: "Goalkeeper",
        suggestedFaceAssetKey: "england/pickford",
        imagePath: "/images/england/pickford.png",
        previousMatchRating: "6.1",
        x: "50%",
        y: "88%"
      },
      {
        pos: "RB",
        player: "Reece James",
        position: "Right-back",
        suggestedFaceAssetKey: "england/reece-james",
        imagePath: "/images/england/reece-james.png",
        previousMatchRating: "5.9",
        x: "89%",
        y: "70%"
      },
      {
        pos: "RCB",
        player: "Ezri Konsa",
        position: "Centre-back",
        suggestedFaceAssetKey: "england/konsa",
        imagePath: "/images/england/konsa.png",
        previousMatchRating: "6.2",
        x: "67%",
        y: "77%"
      },
      {
        pos: "LCB",
        player: "John Stones",
        position: "Centre-back",
        suggestedFaceAssetKey: "england/stones",
        imagePath: "/images/england/stones.png",
        previousMatchRating: "6.4",
        x: "33%",
        y: "77%"
      },
      {
        pos: "LB",
        player: "Nico O’Reilly",
        position: "Left-back",
        suggestedFaceAssetKey: "england/nico-oreilly",
        imagePath: "/images/england/nico-oreilly.png",
        previousMatchRating: "6.3",
        x: "11%",
        y: "70%"
      },
      {
        pos: "DM",
        player: "Declan Rice",
        position: "Defensive midfield",
        suggestedFaceAssetKey: "england/rice",
        imagePath: "/images/england/rice.png",
        previousMatchRating: "6.9",
        x: "33%",
        y: "54%"
      },
      {
        pos: "CM",
        player: "Elliot Anderson",
        position: "Central midfield",
        suggestedFaceAssetKey: "england/anderson",
        imagePath: "/images/england/anderson.png",
        previousMatchRating: "7.0",
        x: "67%",
        y: "54%"
      },
      {
        pos: "RW",
        player: "Noni Madueke",
        position: "Right wing",
        suggestedFaceAssetKey: "england/madueke",
        imagePath: "/images/england/madueke.png",
        previousMatchRating: "7.5",
        x: "78%",
        y: "31%"
      },
      {
        pos: "AM",
        player: "Jude Bellingham",
        position: "Attacking midfield",
        suggestedFaceAssetKey: "england/bellingham",
        imagePath: "/images/england/bellingham.png",
        previousMatchRating: "7.7",
        x: "50%",
        y: "37%"
      },
      {
        pos: "LW",
        player: "Anthony Gordon",
        position: "Left wing",
        suggestedFaceAssetKey: "england/gordon",
        imagePath: "/images/england/gordon.png",
        previousMatchRating: "6.3",
        x: "22%",
        y: "31%"
      },
      {
        pos: "ST",
        player: "Harry Kane",
        position: "Centre-forward",
        suggestedFaceAssetKey: "england/kane",
        imagePath: "/images/england/kane.png",
        previousMatchRating: "8.3",
        x: "50%",
        y: "14%"
      }
    ]
  },

  quickVerdict: {
    sectionTitle: "Quick Verdict",
    cards: [
      {
        label: "Overall team strength",
        headline: "One of the deepest attacking squads",
        text:
          "Overall team strength: England have one of the deepest attacking squads in the tournament and came in as one of the stronger pre-tournament contenders, with Opta giving them a 96.0% chance to reach the knockout rounds and an 11.2% pre-tournament chance to win the World Cup."
      },
      {
        label: "Main tactical identity",
        headline: "4-2-3-1 base, 3-2-5 in possession",
        text:
          "Main tactical identity: The base is a 4-2-3-1, but in possession England often expand into a 3-2-5 or 3-4-3-looking attacking shape with Kane dropping to link and wide players attacking the last line."
      },
      {
        label: "Biggest advantage",
        headline: "Chance volume and scoring routes",
        text:
          "Biggest advantage: Chance volume and multiplicity of scoring routes. England posted 22 shots, 11 on target, and 7 big chances against Croatia, then created 4.91 xG against Costa Rica in the final warm-up."
      },
      {
        label: "Biggest weakness",
        headline: "Defensive control can disappear",
        text:
          "Biggest weakness: Defensive control can disappear when games get loose. Croatia scored twice despite generating only 0.72 xG, and Tuchel explicitly called the defensive side of the performance a “wake-up call.”"
      },
      {
        label: "Player most likely to decide games",
        headline: "Harry Kane",
        text:
          "Player most likely to decide games: Harry Kane. He captains the side, scored twice in the opener, reached 10 World Cup goals for England, and remains the attack’s primary finisher and reference point."
      },
      {
        label: "Tournament ceiling",
        headline: "Semi-final minimum top-end expectation",
        text:
          "Tournament ceiling: Semi-final minimum is a reasonable top-end expectation; a final and title push are plausible if the rest-defense stabilizes. England were the third-likeliest team to top their group in Opta’s pre-tournament model and one of the stronger overall title candidates."
      },
      {
        label: "Data confidence",
        headline: "Medium-high",
        text:
          "Data confidence: Medium-high. The squad quality and opener data are strong; the ceiling remains partly projection-based, so that element is inherently less certain."
      }
    ]
  },

  tournamentContext: {
    sectionTitle: "Tournament Context",
    dataConfidence: "Data confidence: High.",
    primarySources:
      "UEFA, England Football, Reuters, official match centre information, and tournament schedule context.",
    paragraphs: [
      "England qualified as UEFA Group K winners with 24 points from 8 matches, finishing above Albania, Serbia, Latvia and Andorra. UEFA’s standings and results show they won all eight qualifiers, while England’s official Croatia match centre notes that they were one of only two UEFA teams to win every qualifier and the only one not to concede a goal.",
      "The World Cup draw placed England in Group L with Croatia, Ghana and Panama. Their group-stage schedule is officially listed as Croatia in Arlington on June 17, Ghana in Foxborough on June 23, and Panama in East Rutherford on June 27. If they win the group, England’s path would send them to Atlanta for the Round of 32 on July 1.",
      "Recent World Cup history is strong but not trophy-level. England finished fourth in 2018 and reached the quarter-finals in 2022. England’s official Croatia match centre also notes this is their 17th World Cup appearance and their eighth consecutive participation, their longest streak since missing 1994.",
      "Pressure is high, even if Tuchel has tried to damp it down. Reuters reported that Tuchel said England should not be considered favourites because of the long gap since their last major men’s title in 1966, but that they can still “dare to dream.” That framing matters: externally, England are judged like a contender; internally, Tuchel is trying to keep the emotional load manageable.",
      "Squad experience is concentrated in the spine. Harry Kane, Jordan Pickford, John Stones and Marcus Rashford are at their third World Cup, while Jordan Henderson is at his fourth, equalling Sir Bobby Charlton’s England record for men’s World Cup appearances. At the same time, the Croatia opener gave World Cup starts to six players making their first appearance in the competition, which shows how much of Tuchel’s preferred XI also carries first-time finals exposure.",
      "Travel and climate are real factors. England prepared in Palm Beach, Florida, then moved to their tournament base in Kansas City, and Tuchel has repeatedly emphasized heat and humidity management. Reuters also reported his dissatisfaction with mandatory hydration breaks because of their effect on rhythm, which adds another layer to match management in North America."
    ]
  },

  recentForm: {
    sectionTitle: "Recent Form Snapshot",
    summary:
      "Across those five matches, England scored 9, conceded 4, and kept 2 clean sheets. Their average xG across the sample is about 2.40 per match, while the average xGA is about 0.54 per match. The trend line is encouraging in attack after the Japan defeat, but the Croatia game showed that “low xGA” does not automatically equal defensive calm if individual moments and structure break down.",
    xgContext:
      "Opponent strength has been mixed but not soft. England faced Uruguay and Japan in March as World Cup finalists from outside UEFA, then played World Cup-qualified Croatia in the opener. Reuters reported Uruguay were ranked 16th and Japan 18th when those March friendlies were arranged, while Croatia entered the World Cup as another top European-level test.",
    momentumRating:
      "Momentum rating: 8/10. Three straight wins, a high-upside attacking opener, and no fresh injuries before Ghana point upward. The warning sign is obvious, though: England are still too easy to play through when the first line is bypassed and the match becomes stretched. Reuters confirmed there were no injury issues ahead of Ghana, but Tuchel also acknowledged that the tactical challenge would be very different against a direct counterattacking opponent.",
    keyWarning:
      "Key warning sign: game-state control. England conceded late to Uruguay, lost to Japan when they could not find enough clean final-third structure, and were twice pegged back by Croatia despite territorial superiority.",
    dataConfidence:
      "Data confidence: Medium-high. Results are official; xG comes from public stat feeds rather than one unified official tournament database.",
    formRecord: {
      wins: 3,
      draws: 1,
      losses: 1,
      goalsScored: 9,
      goalsConceded: 4,
      cleanSheets: 2,
      display: "3 wins, 1 draw, 1 loss"
    },
    matches: [
      {
        date: "17 Jun 2026",
        match: "England vs Croatia",
        opponent: "Croatia",
        result: "W 4-2",
        englandXg: "2.79",
        opponentXg: "0.72",
        competition: "World Cup"
      },
      {
        date: "10 Jun 2026",
        match: "England vs Costa Rica",
        opponent: "Costa Rica",
        result: "W 3-0",
        englandXg: "4.91",
        opponentXg: "0.03",
        competition: "Friendly"
      },
      {
        date: "06 Jun 2026",
        match: "England vs New Zealand",
        opponent: "New Zealand",
        result: "W 1-0",
        englandXg: "1.54",
        opponentXg: "0.12",
        competition: "Friendly"
      },
      {
        date: "31 Mar 2026",
        match: "England vs Japan",
        opponent: "Japan",
        result: "L 0-1",
        englandXg: "0.89",
        opponentXg: "0.58",
        competition: "Friendly"
      },
      {
        date: "27 Mar 2026",
        match: "England vs Uruguay",
        opponent: "Uruguay",
        result: "D 1-1",
        englandXg: "1.86",
        opponentXg: "1.27",
        competition: "Friendly"
      }
    ],
    formBadges: ["W", "W", "W", "L", "D"]
  },

  tacticalIdentity: {
    sectionTitle: "Tactical Identity",
    dataConfidence:
      "Data confidence: Medium. The shape is supported by evidence, but England are still in the early stages of Tuchel’s tournament cycle, so some of this is best read as a live tactical profile rather than a fixed identity.",
    primarySources:
      "Primary sources used in this section: England Football match centres, Reuters, The Analyst, Sofascore, and public tactical analysis.",
    subSections: [
      {
        title: "Verified data",
        paragraphs: [
          "England’s opener used a 4-2-3-1 on paper: Pickford behind James, Konsa, Stones and O’Reilly; Rice and Anderson in midfield; Madueke, Bellingham and Gordon behind Kane. England used effectively the same attacking personnel and general structure against Costa Rica in the final warm-up.",
          "Tuchel has also said, from the moment of his England appointment, that he wants an attacking game that reflects the physicality, intensity and directness of the Premier League. That intention matters because it helps explain the current England balance: they are not purely possession-patient, and they are not a pure transition side either. They want sustained pressure, but with verticality."
        ]
      },
      {
        title: "Analyst read",
        paragraphs: [
          "Usual formation: 4-2-3-1 base.",
          "In-possession shape: Often expands into a 3-2-5. Sofascore’s team guide specifically described England’s possession structure that way, with Kane dropping to connect and the wide players attacking beyond him.",
          "Out-of-possession shape: A flexible 4-4-2 or 4-2-3-1 press. England are willing to jump high with the wide players and No. 10, but the Croatia opener also showed phases where the block dropped too deep and lost compactness.",
          "Build-up style: England prefer to access midfield early through Rice, Stones and Bellingham, then accelerate through Kane’s dropping movements or direct wing progression. The Croatia and Costa Rica reports both show the same themes: Madueke and Gordon attacking from wide, Kane linking, and Bellingham finding driving central lanes.",
          "Pressing style: Selective high press rather than reckless all-out pressure. Anthony Gordon’s work against Croatia stood out; The Times’ tournament data snippet credited him with 29 high pressures in the opposition half, the most by any England player in that match window.",
          "Defensive block: Mid-to-high block in theory, but the first half against Croatia became too stretched and too passive. Tuchel explicitly criticized England’s deep shape and poor ball management in that game.",
          "Transition style: Fast. When England regain the ball, they want to attack the channel quickly through wide runners or Bellingham’s central carries, with Kane acting as either the last receiver or the layoff point.",
          "Main attacking zones: The right side has been especially active through Madueke and, when used, Saka. The left can be more direct through Gordon, while Bellingham and Kane connect centrally. Madueke won the penalty against Croatia, Bellingham attacked the inside-right corridor for his goal, and Gordon repeatedly burst in from the left against Costa Rica.",
          "Set-piece style: Already productive. England scored from a penalty and a corner against Croatia, and the current setup appears to treat dead balls as a major scoring edge rather than a secondary route.",
          "How they create chances: wide dribble-and-cutback actions, Kane’s dropping link play, Bellingham’s carries through the half-spaces, and set plays.",
          "How they usually concede chances: through transition disorder, half-cleared wide entries, or loss of structure after they step too high with full-backs and midfield. Croatia’s two goals were less about sustained control and more about England losing cleanliness in key moments. Tuchel’s own post-match comments support that reading."
        ]
      }
    ],
    tacticalCards: [
      {
        label: "Base shape",
        value: "4-2-3-1",
        note: "England’s opener used a 4-2-3-1 on paper."
      },
      {
        label: "In possession",
        value: "3-2-5",
        note:
          "England often expand into a 3-2-5 with Kane dropping and wide players attacking beyond him."
      },
      {
        label: "Out of possession",
        value: "4-4-2 / 4-2-3-1 press",
        note:
          "England can press high, but Croatia showed phases where the block became too deep and stretched."
      },
      {
        label: "Main chance routes",
        value: "Wings, Kane, Bellingham, set plays",
        note:
          "England create through wide cutbacks, Kane’s link play, Bellingham carries, and dead balls."
      },
      {
        label: "Transition style",
        value: "Fast",
        note:
          "When England regain the ball, they look for channels quickly through runners or Bellingham’s central carries."
      },
      {
        label: "Main warning",
        value: "Rest-defense volatility",
        note:
          "England usually concede chances through transition disorder or loss of structure after committing players forward."
      }
    ]
  },

  strengthsWeaknesses: {
    sectionTitle: "Strengths and Weaknesses",
    dataConfidence:
      "Data confidence: Medium-high. Most strengths are directly visible in qualification or the Croatia/Costa Rica sample; several weaknesses are already acknowledged by Tuchel and supported by live match evidence.",
    strengths: {
      title: "Strengths",
      items: [
        {
          title: "Elite attacking ceiling",
          text:
            "Elite attacking ceiling. England can post real shot volume against strong opponents. They produced 22 shots and 11 on target against Croatia, then 29 shots and 4.91 xG against Costa Rica."
        },
        {
          title: "A devastating Kane-centric attack structure",
          text:
            "A devastating Kane-centric attack structure. Kane is still the central reference point as scorer, box target and connective passer. His double against Croatia, plus his broader World Cup scoring record, shows England still have a genuine match-winner at No. 9."
        },
        {
          title: "Bellingham gives them a line-breaking central runner",
          text:
            "Bellingham gives them a line-breaking central runner. England are not only a cross-and-cutback side. Bellingham’s goal against Croatia came from a direct carry into the box, which matters because it gives England a second way to break settled blocks."
        },
        {
          title: "Wide 1v1 threat",
          text:
            "Wide 1v1 threat. Madueke forced the penalty against Croatia and repeatedly attacked the last defender, while Gordon was England’s most destabilizing runner against Costa Rica. That means England can create without needing lengthy central combinations every time."
        },
        {
          title: "Set-piece threat",
          text:
            "Set-piece threat. England were one of the cleanest qualifying sides in Europe and already showed in the opener that dead balls can swing matches for them. Kane scored from the spot and then again from a corner."
        },
        {
          title: "Bench impact",
          text:
            "Bench impact. Rashford scored off the bench against Croatia, Saka assisted, and England’s reserve attackers give Tuchel strong second-phase options when games open late."
        },
        {
          title: "Qualification-grade defensive baseline exists",
          text:
            "Qualification-grade defensive baseline exists. England’s qualifiers were not just efficient; they were spotless. They won all eight matches and did not concede a goal, which means there is a proven defensive floor even if the opener was messy."
        }
      ]
    },
    weaknesses: {
      title: "Weaknesses",
      items: [
        {
          title: "Rest-defense is not yet tournament-proof",
          text:
            "Rest-defense is not yet tournament-proof. Croatia scored twice from just 0.72 xG, which strongly suggests England’s biggest issue was not chance quantity allowed but the quality of their defensive execution in key moments."
        },
        {
          title: "They can become too transition-heavy",
          text:
            "They can become too transition-heavy. Tuchel’s own criticism after Croatia centered on England becoming too deep and managing the ball poorly. That is a major red flag because knockout football punishes exactly that kind of sloppiness."
        },
        {
          title: "The left side is still a live tactical experiment",
          text:
            "The left side is still a live tactical experiment. O’Reilly is talented, but he is also a first-time tournament player being used in a major structural role. That adds upside in possession and uncertainty in defensive spacing."
        },
        {
          title: "England look less complete without Kane’s reference play",
          text:
            "England look less complete without Kane’s reference play. In the March loss to Japan, with Kane absent, England misfired and lost 1-0. Reuters described the attack as lacking enough high-quality creation, which reinforces just how central Kane remains to their best structure."
        },
        {
          title: "Game management after taking the lead remains shaky",
          text:
            "Game management after taking the lead remains shaky. Uruguay equalized in stoppage time, and Croatia equalized twice before England finally pulled away. That pattern matters more than the raw results."
        },
        {
          title: "Tournament conditions may blunt rhythm",
          text:
            "Tournament conditions may blunt rhythm. Tuchel has openly complained that hydration breaks alter the flow of matches, and England’s travel pattern inside the U.S. is not trivial either. Those are not excuses; they are real tournament variables."
        }
      ]
    }
  },

  styleTags: {
    sectionTitle: "Style tags",
    display:
      "4-2-3-1 base, 3-2-5 in possession, high-upside attack, Kane-centric, Bellingham carries, wide isolation threat, set-piece danger, bench firepower, transition risk, game-control volatility, elite spine, knockout-capable.",
    tags: [
      "4-2-3-1 base",
      "3-2-5 in possession",
      "High-upside attack",
      "Kane-centric",
      "Bellingham carries",
      "Wide isolation threat",
      "Set-piece danger",
      "Bench firepower",
      "Transition risk",
      "Game-control volatility",
      "Elite spine",
      "Knockout-capable"
    ]
  },

  keyPlayers: {
    sectionTitle: "Key Players",
    dataConfidence:
      "Data confidence: Mixed. Player identity and usage are high-confidence; several advanced team metrics for the current World Cup remain incomplete in public sources and are marked accordingly.",
    primarySources:
      "Primary sources: England Football, Reuters, Transfermarkt, The Analyst, Flashscore, ESPN, Sofascore.",
    players: [
      {
        category: "Best attacker",
        player: "Harry Kane",
        position: "CF",
        club: "Bayern Munich",
        roleInTeam: "Captain, focal striker, finisher",
        mainStrengths: "Box finishing, aerial threat, hold-up play, penalty value",
        mainWeaknessOrRisk: "England look more ordinary when he is absent",
        whyHeMattersTactically:
          "England’s attack is built around his scoring and his ability to drop and connect the runners around him."
      },
      {
        category: "Best creator",
        player: "Jude Bellingham",
        position: "AM/CM",
        club: "Real Madrid",
        roleInTeam: "Free central connector",
        mainStrengths: "Ball-carrying, timing of runs, final-third improvisation",
        mainWeaknessOrRisk: "Can leave spaces if the game gets too end-to-end",
        whyHeMattersTactically:
          "He gives England central access beyond simple wing play. His Croatia goal captured that perfectly."
      },
      {
        category: "Best ball progressor",
        player: "Declan Rice",
        position: "CM/DM",
        club: "Arsenal",
        roleInTeam: "Controller and cover midfielder",
        mainStrengths: "First-pass security, territory control, recovery running",
        mainWeaknessOrRisk:
          "Heavy workload management is still a consideration",
        whyHeMattersTactically:
          "Rice stabilizes the build-up and protects England when full-backs or attackers commit forward."
      },
      {
        category: "Best defender",
        player: "John Stones",
        position: "CB",
        club: "Manchester City",
        roleInTeam: "Senior centre-back and buildup anchor",
        mainStrengths: "Calm buildup, positioning, experience",
        mainWeaknessOrRisk:
          "England’s line can still wobble when the whole unit loses spacing",
        whyHeMattersTactically:
          "He helps turn England from a purely athletic side into a composed possession side."
      },
      {
        category: "Best midfielder",
        player: "Declan Rice",
        position: "CM/DM",
        club: "Arsenal",
        roleInTeam: "Midfield balance piece",
        mainStrengths: "Defensive coverage, timing, box support",
        mainWeaknessOrRisk:
          "If overrun, England’s control drops quickly",
        whyHeMattersTactically:
          "He is the hinge between England’s attack and their rest-defense."
      },
      {
        category: "Best goalkeeper",
        player: "Jordan Pickford",
        position: "GK",
        club: "Everton",
        roleInTeam: "First-choice goalkeeper",
        mainStrengths: "Major-tournament experience, shot-stopping, voice",
        mainWeaknessOrRisk: "Distribution can be forced under pressure",
        whyHeMattersTactically:
          "England’s most experienced tournament goalkeeper and a key organizer behind an evolving back line."
      },
      {
        category: "X-factor",
        player: "Marcus Rashford",
        position: "LW/FW",
        club: "Barcelona on loan from Manchester United",
        roleInTeam: "Impact attacker off the bench or rotation starter",
        mainStrengths: "Pace, direct finishing, transition threat",
        mainWeaknessOrRisk: "Defensive intensity is lower than Gordon’s",
        whyHeMattersTactically:
          "Rashford changes the threat profile instantly when the game opens. He proved it with his goal off the bench against Croatia."
      },
      {
        category: "Young breakout player",
        player: "Nico O’Reilly",
        position: "LB/utility wide player",
        club: "Manchester City",
        roleInTeam: "Progressive left-sided option",
        mainStrengths: "Athleticism, forward running, attacking upside",
        mainWeaknessOrRisk:
          "First major tournament, still learning defensive detail",
        whyHeMattersTactically:
          "His selection changes England’s left-side profile and makes the buildup more adventurous."
      },
      {
        category: "Most tactically important",
        player: "Harry Kane",
        position: "CF",
        club: "Bayern Munich",
        roleInTeam: "The reference point for the whole attack",
        mainStrengths: "Finishing plus link play",
        mainWeaknessOrRisk: "Overreliance",
        whyHeMattersTactically:
          "England’s best version still tends to run through Kane’s gravity, movement and timing."
      }
    ]
  },

  statisticalDashboard: {
    sectionTitle: "Statistical dashboard",
    dataConfidence:
      "Data confidence: Mixed. Player identity and usage are high-confidence; several advanced team metrics for the current World Cup remain incomplete in public sources and are marked accordingly.",
    primarySources:
      "Primary sources: England Football, Reuters, Transfermarkt, The Analyst, Flashscore, ESPN, Sofascore.",
    importantNote:
      "Scope note: most figures below are 2026 World Cup only, after one group-stage match, unless the note says otherwise.",
    metrics: [
      {
        metric: "xG per match",
        value: "2.79",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1 vs Croatia"
      },
      {
        metric: "xGA per match",
        value: "0.72",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1 vs Croatia"
      },
      {
        metric: "Non-penalty xG",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified from available source set"
      },
      {
        metric: "Shots per 90",
        value: "22.0",
        source: "ESPN / Flashscore",
        confidence: "High",
        note: "World Cup MD1"
      },
      {
        metric: "Shots on target per 90",
        value: "11.0",
        source: "ESPN / Flashscore",
        confidence: "High",
        note: "World Cup MD1"
      },
      {
        metric: "Shots allowed per 90",
        value: "10.0",
        source: "ESPN / Flashscore",
        confidence: "High",
        note: "World Cup MD1"
      },
      {
        metric: "Big chances created",
        value: "7.0",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1"
      },
      {
        metric: "Big chances allowed",
        value: "2.0",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1"
      },
      {
        metric: "Possession %",
        value: "52.0%",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1"
      },
      {
        metric: "Field tilt",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "PPDA / pressing intensity",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "High turnovers",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified at team level"
      },
      {
        metric: "Progressive passes",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "Progressive carries",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "Touches in opposition box",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "Crosses",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Not verified"
      },
      {
        metric: "Set-piece xG",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note: "Set-piece goals verified, xG not verified"
      },
      {
        metric: "Goals minus xG",
        value: "+1.21",
        source: "Derived from score and xG",
        confidence: "Medium",
        note: "World Cup MD1"
      },
      {
        metric: "Save percentage",
        value: "60.0%",
        source: "Derived from shots on target faced and goals conceded",
        confidence: "Medium",
        note: "3 saves from 5 shots on target faced"
      },
      {
        metric: "Cards per match",
        value: "null",
        source: "needs update",
        confidence: "Low",
        note:
          "FIFA snippet shows tournament cards/fouls category exists, but England-specific verified value not cleanly retrievable"
      },
      {
        metric: "Fouls per match",
        value: "10.0",
        source: "Flashscore",
        confidence: "Medium",
        note: "World Cup MD1 vs Croatia"
      }
    ]
  },

  matchupProfile: {
    sectionTitle: "Matchup Profile and Summary",
    dataConfidence:
      "Data confidence: Medium. This section blends verified evidence with inference from live match behavior, so it should be treated as analytic rather than purely descriptive.",
    primarySources:
      "England Football, Reuters, The Analyst, Sofascore, Flashscore, ESPN, and public tactical analysis.",
    cards: [
      {
        title: "Against high-pressing teams",
        text:
          "Against high-pressing teams, England are probably good enough technically to escape pressure through Rice, Stones, Bellingham and Kane, but Japan exposed that the structure can still stall when the reference points are disrupted."
      },
      {
        title: "Against low blocks",
        text:
          "Against low blocks, England look much more comfortable because they can generate volume from crosses, cutbacks, set plays, and late central runs."
      },
      {
        title: "Against possession teams and technical midfields",
        text:
          "Against possession teams and technical midfields, England’s main challenge is whether they can keep the game played on their terms. Croatia’s first half suggested that elite midfield manipulation can still drag them into messy defensive spacing."
      },
      {
        title: "Against counterattacking teams",
        text:
          "Against counterattacking teams, the risk is even clearer: Tuchel previewed Ghana as a very different challenge for exactly that reason."
      },
      {
        title: "Against physical teams",
        text:
          "Against physical teams, England should not be outmuscled, but they can be dragged into ugly rhythm games, as the Uruguay match showed."
      },
      {
        title: "Against teams with elite wingers",
        text:
          "Against teams with elite wingers, England’s wide defensive balance remains the pressure point, especially if their full-backs or hybrid wide defenders are already committed forward."
      },
      {
        title: "Against teams with an elite striker",
        text:
          "Against teams with an elite striker, England’s centre-backs are individually strong enough, but the real issue is service prevention rather than last-ditch defending."
      }
    ]
  },

  gameScriptAnalysis: {
    sectionTitle: "Game script analysis",
    scripts: [
      {
        title: "If England score first",
        text:
          "If England score first, the upside is obvious: the match can tilt into wave attacks and bench-finisher territory. That is exactly how the Croatia game eventually turned."
      },
      {
        title: "If England concede first",
        text:
          "But if they concede first, or if their lead is immediately challenged, the current version still has too much emotional and structural swing in it."
      },
      {
        title: "If it is 0-0 after 60 minutes",
        text:
          "If it is 0-0 after 60 minutes, England are still well-positioned because their bench attacking quality is among the best in the group."
      },
      {
        title: "If England dominate possession",
        text:
          "If they dominate possession, they usually create enough volume to win."
      },
      {
        title: "If England are forced to defend deep",
        text:
          "If they are forced to defend deep, confidence drops: the distances between lines widen, and their rest-defense issues become real defensive issues."
      }
    ]
  },

  whatCouldGoWrong: {
    sectionTitle: "What could go wrong",
    paragraphs: [
      "If England go out earlier than expected, the likeliest path is not a talent deficit. It is a structure problem. A technical midfield can drag them into control issues, a fast counterattacking side can attack the space around the full-backs, and a knockout opponent that survives England’s best attacking burst can expose their game-state management. The Japan loss and the Croatia first half are the clearest evidence so far."
    ]
  },

  teamReportSummary: {
    sectionTitle: "Team report summary",
    paragraphs: [
      "England look like a serious World Cup side, not just a famous name with a strong squad list. The spine is elite, the bench is powerful, and the attacking structure already has enough moving parts to unpick different opponents. Kane remains the decisive reference, Bellingham gives them central thrust, Rice keeps the system from tipping too far into chaos, and the wide options mean Tuchel can alter the pace and geometry of a game without dropping overall threat. Qualification was flawless, the opener was explosive, and the underlying tournament ceiling is undeniably high.",
      "The caution is just as clear. England’s best football is already good enough to beat major opponents, but their worst phases are still too open. Croatia’s two goals, the late concession against Uruguay, and the March loss to Japan all point to the same unresolved question: can England control the match when the emotional tempo rises and the rest-defense is stressed? If the answer becomes yes, they have the tools to go very deep. If not, they still carry the profile of a team that can look like a finalist one half and vulnerable the next."
    ]
  },

  ktPicksAddition: {
    sectionTitle: "KT Picks addition",
    label: "Added by KT Picks UI",
    text:
      "This section is not extra scouting analysis. It exists so the website can clearly label anything added for layout, navigation, or visual structure."
  }
};