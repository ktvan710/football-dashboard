function createTeam({
  id,
  name,
  city,
  conference,
  arena,
  color = "#f97316"
}) {
  return {
    id,
    name,
    city,
    conference,
    logo: "",
    color,
    arena,
    coach: "needs update",
    record: "needs update",
    form: [],
    starPlayer: "needs update",
    xFactor: "needs update",
    injuryStatusSummary: "needs update",
    identity:
      "Team identity needs to be updated from WNBA.com Stats, Her Hoop Stats, and recent matchup data.",
    offensiveIdentity: "needs update",
    defensiveIdentity: "needs update",
    paceIdentity: "needs update",
    shotProfile: "needs update",
    threePointStyle: "needs update",
    rimPressure: "needs update",
    pickAndRollStyle: "needs update",
    transitionStyle: "needs update",
    reboundingIdentity: "needs update",
    lateGameIdentity: "needs update",
    strengths: [
      {
        label: "Needs verified team-strength update",
        source: "WNBA.com Stats / Her Hoop Stats",
        confidence: "low"
      }
    ],
    weaknesses: [
      {
        label: "Needs verified team-weakness update",
        source: "WNBA.com Stats / Her Hoop Stats",
        confidence: "low"
      }
    ],
    styleTags: ["needs update"],
    keyPlayers: {
      star: "needs update",
      creator: "needs update",
      shooter: "needs update",
      defender: "needs update",
      rebounder: "needs update",
      benchScorer: "needs update",
      xFactor: "needs update",
      breakout: "needs update"
    },
    stats: {
      offensiveRating: null,
      defensiveRating: null,
      netRating: null,
      pace: null,
      efg: null,
      ts: null,
      threePointRate: null,
      freeThrowRate: null,
      turnoverRate: null,
      assistRate: null,
      offensiveReboundRate: null,
      defensiveReboundRate: null,
      reboundRate: null,
      clutchNetRating: null,
      homeNetRating: null,
      awayNetRating: null,
      lastFiveNetRating: null,
      pointsInPaint: null,
      fastBreakPoints: null,
      opponentEfg: null,
      opponentTurnoverRate: null
    },
    matchupProfile: {
      highPaceTeams: "needs update",
      slowHalfCourtTeams: "needs update",
      eliteThreePointTeams: "needs update",
      strongReboundingTeams: "needs update",
      turnoverForcingDefenses: "needs update",
      starHeavyOffenses: "needs update",
      deepBenchTeams: "needs update",
      switchHeavyDefenses: "needs update",
      dropCoverageDefenses: "needs update",
      zoneDefenses: "needs update"
    },
    reportSummary: [
      "This report is structured for verified WNBA research. Add current WNBA.com Stats, Her Hoop Stats, injury reports, and team news to unlock the full scouting view.",
      "The dashboard separates verified data from analysis. Until stats are added, this page avoids making up ratings, injuries, lineups, or trends."
    ],
    sources: [
      "WNBA.com Stats — needs update",
      "Her Hoop Stats — needs update",
      "Basketball-Reference WNBA — needs update",
      "ESPN WNBA — needs update"
    ]
  };
}

export const wnbaTeams = [
  createTeam({
    id: "atlanta-dream",
    name: "Atlanta Dream",
    city: "Atlanta",
    conference: "Eastern",
    arena: "Gateway Center Arena",
    color: "#e31837"
  }),
  createTeam({
    id: "chicago-sky",
    name: "Chicago Sky",
    city: "Chicago",
    conference: "Eastern",
    arena: "Wintrust Arena",
    color: "#6ac4e8"
  }),
  createTeam({
    id: "connecticut-sun",
    name: "Connecticut Sun",
    city: "Uncasville",
    conference: "Eastern",
    arena: "Mohegan Sun Arena",
    color: "#f05023"
  }),
  createTeam({
    id: "dallas-wings",
    name: "Dallas Wings",
    city: "Dallas",
    conference: "Western",
    arena: "College Park Center",
    color: "#00aeef"
  }),
  createTeam({
    id: "golden-state-valkyries",
    name: "Golden State Valkyries",
    city: "San Francisco",
    conference: "Western",
    arena: "Chase Center",
    color: "#b4975a"
  }),
  createTeam({
    id: "indiana-fever",
    name: "Indiana Fever",
    city: "Indianapolis",
    conference: "Eastern",
    arena: "Gainbridge Fieldhouse",
    color: "#e03a3e"
  }),
  createTeam({
    id: "las-vegas-aces",
    name: "Las Vegas Aces",
    city: "Las Vegas",
    conference: "Western",
    arena: "Michelob ULTRA Arena",
    color: "#c8102e"
  }),
  createTeam({
    id: "los-angeles-sparks",
    name: "Los Angeles Sparks",
    city: "Los Angeles",
    conference: "Western",
    arena: "Crypto.com Arena",
    color: "#702f8a"
  }),
  createTeam({
    id: "minnesota-lynx",
    name: "Minnesota Lynx",
    city: "Minneapolis",
    conference: "Western",
    arena: "Target Center",
    color: "#236192"
  }),
  createTeam({
    id: "new-york-liberty",
    name: "New York Liberty",
    city: "New York",
    conference: "Eastern",
    arena: "Barclays Center",
    color: "#86cebc"
  }),
  createTeam({
    id: "phoenix-mercury",
    name: "Phoenix Mercury",
    city: "Phoenix",
    conference: "Western",
    arena: "Footprint Center",
    color: "#e56020"
  }),
  createTeam({
    id: "seattle-storm",
    name: "Seattle Storm",
    city: "Seattle",
    conference: "Western",
    arena: "Climate Pledge Arena",
    color: "#2c5234"
  }),
  createTeam({
    id: "washington-mystics",
    name: "Washington Mystics",
    city: "Washington",
    conference: "Eastern",
    arena: "Entertainment and Sports Arena",
    color: "#e31837"
  })
];

export const wnbaTeamMap = Object.fromEntries(
  wnbaTeams.map((team) => [team.id, team])
);

export function getWnbaTeamByName(name) {
  return wnbaTeams.find((team) => team.name === name);
}