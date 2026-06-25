const TEAM_ABBR = {
  "United States": "USA",
  "South Africa": "RSA",
  "South Korea": "KOR",
  "Bosnia and Herzegovina": "BIH",
  "Ivory Coast": "CIV",
  "Cape Verde": "CPV",
  "Saudi Arabia": "KSA",
  "New Zealand": "NZL",
  "DR Congo": "COD",
  Netherlands: "NED",
  Switzerland: "SUI",
  Colombia: "COL",
  Portugal: "POR",
  Australia: "AUS",
  Argentina: "ARG",
  Uruguay: "URU",
  Germany: "GER",
  France: "FRA",
  England: "ENG",
  Croatia: "CRO",
  Morocco: "MAR",
  Mexico: "MEX",
  Brazil: "BRA",
  Japan: "JPN",
  Ghana: "GHA",
  Belgium: "BEL",
  Austria: "AUT",
  Algeria: "ALG",
  Egypt: "EGY",
  Czechia: "CZE",
  Canada: "CAN",
  Scotland: "SCO",
  Norway: "NOR",
  Spain: "ESP",
  Tunisia: "TUN",
  Panama: "PAN",
  Paraguay: "PAR",
  Turkey: "TUR",
  Haiti: "HTI",
  Curacao: "CUW",
  Ecuador: "ECU",
  Sweden: "SWE",
  Qatar: "QAT",
  Iran: "IRN",
  Iraq: "IRQ",
  Senegal: "SEN",
  Jordan: "JOR",
  Uzbekistan: "UZB"
};

const ROUND_OF_32 = [
  {
    match: 73,
    date: "Jun 28",
    home: "2A",
    away: "2B",
    side: "left",
    order: 3
  },
  {
    match: 74,
    date: "Jun 29",
    home: "1E",
    away: "3A/B/C/D/F",
    thirdOptions: ["A", "B", "C", "D", "F"],
    side: "left",
    order: 1
  },
  {
    match: 75,
    date: "Jun 29",
    home: "1F",
    away: "2C",
    side: "left",
    order: 4
  },
  {
    match: 76,
    date: "Jun 29",
    home: "1C",
    away: "2F",
    side: "right",
    order: 1
  },
  {
    match: 77,
    date: "Jun 30",
    home: "1I",
    away: "3C/D/F/G/H",
    thirdOptions: ["C", "D", "F", "G", "H"],
    side: "left",
    order: 2
  },
  {
    match: 78,
    date: "Jun 30",
    home: "2E",
    away: "2I",
    side: "right",
    order: 2
  },
  {
    match: 79,
    date: "Jun 30",
    home: "1A",
    away: "3C/E/F/H/I",
    thirdOptions: ["C", "E", "F", "H", "I"],
    side: "right",
    order: 3
  },
  {
    match: 80,
    date: "Jul 1",
    home: "1L",
    away: "3E/H/I/J/K",
    thirdOptions: ["E", "H", "I", "J", "K"],
    side: "right",
    order: 4
  },
  {
    match: 81,
    date: "Jul 1",
    home: "1D",
    away: "3B/E/F/I/J",
    thirdOptions: ["B", "E", "F", "I", "J"],
    side: "left",
    order: 7
  },
  {
    match: 82,
    date: "Jul 1",
    home: "1G",
    away: "3A/E/H/I/J",
    thirdOptions: ["A", "E", "H", "I", "J"],
    side: "left",
    order: 8
  },
  {
    match: 83,
    date: "Jul 2",
    home: "2K",
    away: "2L",
    side: "left",
    order: 5
  },
  {
    match: 84,
    date: "Jul 3",
    home: "1H",
    away: "2J",
    side: "left",
    order: 6
  },
  {
    match: 85,
    date: "Jul 3",
    home: "1B",
    away: "3E/F/G/I/J",
    thirdOptions: ["E", "F", "G", "I", "J"],
    side: "right",
    order: 7
  },
  {
    match: 86,
    date: "Jul 4",
    home: "1J",
    away: "2H",
    side: "right",
    order: 5
  },
  {
    match: 87,
    date: "Jul 4",
    home: "1K",
    away: "3D/E/I/J/L",
    thirdOptions: ["D", "E", "I", "J", "L"],
    side: "right",
    order: 8
  },
  {
    match: 88,
    date: "Jul 4",
    home: "2D",
    away: "2G",
    side: "right",
    order: 6
  }
];

const ROUND_OF_16 = [
  { match: 89, date: "Jul 5", home: "W74", away: "W77", side: "left", order: 1 },
  { match: 90, date: "Jul 4", home: "W73", away: "W75", side: "left", order: 2 },
  { match: 93, date: "Jul 7", home: "W83", away: "W84", side: "left", order: 3 },
  { match: 94, date: "Jul 7", home: "W81", away: "W82", side: "left", order: 4 },

  { match: 91, date: "Jul 6", home: "W76", away: "W78", side: "right", order: 1 },
  { match: 92, date: "Jul 6", home: "W79", away: "W80", side: "right", order: 2 },
  { match: 95, date: "Jul 7", home: "W86", away: "W88", side: "right", order: 3 },
  { match: 96, date: "Jul 8", home: "W85", away: "W87", side: "right", order: 4 }
];

const QUARTER_FINALS = [
  { match: 97, date: "Jul 10", home: "W89", away: "W90", side: "left", order: 1 },
  { match: 98, date: "Jul 11", home: "W93", away: "W94", side: "left", order: 2 },
  { match: 99, date: "Jul 12", home: "W91", away: "W92", side: "right", order: 1 },
  { match: 100, date: "Jul 12", home: "W95", away: "W96", side: "right", order: 2 }
];

const SEMI_FINALS = [
  { match: 101, date: "Jul 15", home: "W97", away: "W98", side: "center", order: 1 },
  { match: 102, date: "Jul 16", home: "W99", away: "W100", side: "center", order: 2 }
];

const FINAL_MATCHES = [
  {
    match: 104,
    date: "Jul 19",
    home: "W101",
    away: "W102",
    type: "final",
    label: "FINAL"
  },
  {
    match: 103,
    date: "Jul 18",
    home: "L101",
    away: "L102",
    type: "bronze",
    label: "BRONZE-FINAL"
  }
];

function getGroupLetter(groupName) {
  return String(groupName || "")
    .replace("Group", "")
    .trim()
    .toUpperCase();
}

function getAbbr(teamName, code) {
  if (code) return code.toUpperCase();
  if (!teamName) return "TBD";

  return TEAM_ABBR[teamName] || teamName.slice(0, 3).toUpperCase();
}

function makePlaceholder(label) {
  return {
    name: label,
    team: label,
    abbr: label,
    seed: label,
    flagUrl: "",
    placeholder: true
  };
}

function makeTeam(team, seed) {
  if (!team) return makePlaceholder(seed);

  return {
    ...team,
    name: team.team,
    team: team.team,
    abbr: getAbbr(team.team, team.code),
    seed,
    placeholder: false
  };
}

function normalizeGroups(groupStandings) {
  const groupsByLetter = {};

  groupStandings.forEach((group) => {
    const letter = getGroupLetter(group.group);

    groupsByLetter[letter] = {
      ...group,
      letter,
      isComplete:
        group.teams.length >= 4 && group.teams.every((team) => team.played >= 3),
      teams: group.teams.map((team, index) => ({
        ...team,
        groupLetter: letter,
        rank: index + 1
      }))
    };
  });

  return groupsByLetter;
}

function sortThirdPlacedTeams(thirdTeams) {
  return [...thirdTeams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    if (a.ga !== b.ga) return a.ga - b.ga;
    if (b.wins !== a.wins) return b.wins - a.wins;

    return a.team.localeCompare(b.team);
  });
}

function getThirdPlacedPool(groupsByLetter, mode) {
  const thirdTeams = Object.values(groupsByLetter)
    .filter((group) => {
      if (mode === "confirmed") return group.isComplete;
      return true;
    })
    .map((group) => group.teams[2])
    .filter(Boolean);

  return sortThirdPlacedTeams(thirdTeams).slice(0, 8);
}

function resolveSeed(seed, groupsByLetter, mode) {
  const rank = Number(String(seed).slice(0, 1));
  const groupLetter = String(seed).slice(1);

  const group = groupsByLetter[groupLetter];

  if (!group) return makePlaceholder(seed);
  if (mode === "confirmed" && !group.isComplete) return makePlaceholder(seed);

  return makeTeam(group.teams[rank - 1], seed);
}

function assignThirdPlacedTeams(slots, qualifiedThirds) {
  const usedGroups = new Set();

  return slots.map((slot) => {
    if (!slot.thirdOptions) return slot;

    const thirdTeam = qualifiedThirds.find((team) => {
      return (
        slot.thirdOptions.includes(team.groupLetter) &&
        !usedGroups.has(team.groupLetter)
      );
    });

    if (!thirdTeam) {
      return {
        ...slot,
        projectedThird: null
      };
    }

    usedGroups.add(thirdTeam.groupLetter);

    return {
      ...slot,
      projectedThird: thirdTeam
    };
  });
}

function resolveRoundOf32Match(slot, groupsByLetter, mode) {
  const homeTeam = resolveSeed(slot.home, groupsByLetter, mode);

  let awayTeam;

  if (slot.thirdOptions) {
    awayTeam = slot.projectedThird
      ? makeTeam(slot.projectedThird, `3${slot.projectedThird.groupLetter}`)
      : makePlaceholder(slot.away);
  } else {
    awayTeam = resolveSeed(slot.away, groupsByLetter, mode);
  }

  return {
    ...slot,
    round: "Round of 32",
    homeTeam,
    awayTeam
  };
}

function makeFutureMatch(slot, round) {
  return {
    ...slot,
    round,
    homeTeam: makePlaceholder(slot.home),
    awayTeam: makePlaceholder(slot.away)
  };
}

export function buildProjectedKnockout(groupStandings, mode = "standing") {
  const groupsByLetter = normalizeGroups(groupStandings);
  const qualifiedThirds = getThirdPlacedPool(groupsByLetter, mode);

  const assignedRoundOf32 = assignThirdPlacedTeams(ROUND_OF_32, qualifiedThirds);

  const roundOf32 = assignedRoundOf32.map((slot) => {
    return resolveRoundOf32Match(slot, groupsByLetter, mode);
  });

  return {
    mode,

    qualifiedThirds: qualifiedThirds.map((team, index) => ({
      ...team,
      seed: `3${team.groupLetter}`,
      rank: index + 1
    })),

    roundOf32,

    roundOf16: ROUND_OF_16.map((slot) =>
      makeFutureMatch(slot, "Round of 16")
    ),

    quarterFinals: QUARTER_FINALS.map((slot) =>
      makeFutureMatch(slot, "Quarter-final")
    ),

    semiFinals: SEMI_FINALS.map((slot) =>
      makeFutureMatch(slot, "Semi-final")
    ),

    finals: FINAL_MATCHES.map((slot) => makeFutureMatch(slot, "Finals"))
  };
}