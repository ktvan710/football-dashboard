function getFlagCode(code) {
  const aliases = {
    en: "gb-eng",
    scotland: "gb-sct"
  };

  return aliases[code] || code;
}

export function getFlagUrl(code) {
  const flagCode = getFlagCode(code);

  if (!flagCode) return "";

  return `https://flagcdn.com/w80/${flagCode.toLowerCase()}.png`;
}

function createTeam(team) {
  return {
    team: team.name,
    code: team.code,
    flagUrl: getFlagUrl(team.code),
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
    form: [],
    nextMatch: null
  };
}

function sortTable(a, b) {
  if (b.points !== a.points) return b.points - a.points;
  if (b.gd !== a.gd) return b.gd - a.gd;
  if (b.gf !== a.gf) return b.gf - a.gf;
  if (a.ga !== b.ga) return a.ga - b.ga;

  return a.team.localeCompare(b.team);
}

export function buildGroupStandings(matchesObject) {
  const matchList = Object.entries(matchesObject)
    .map(([id, match]) => ({
      id,
      ...match
    }))
    .sort((a, b) => new Date(a.kickoff.date) - new Date(b.kickoff.date));

  const groupMap = {};

  matchList.forEach((match) => {
    const groupName = match.group || "Other";

    if (!groupMap[groupName]) {
      groupMap[groupName] = {};
    }

    if (!groupMap[groupName][match.home.name]) {
      groupMap[groupName][match.home.name] = createTeam(match.home);
    }

    if (!groupMap[groupName][match.away.name]) {
      groupMap[groupName][match.away.name] = createTeam(match.away);
    }

    if (!match.score) {
      return;
    }

    const homeTeam = groupMap[groupName][match.home.name];
    const awayTeam = groupMap[groupName][match.away.name];

    const homeGoals = Number(match.score.home);
    const awayGoals = Number(match.score.away);

    homeTeam.played += 1;
    awayTeam.played += 1;

    homeTeam.gf += homeGoals;
    homeTeam.ga += awayGoals;

    awayTeam.gf += awayGoals;
    awayTeam.ga += homeGoals;

    if (homeGoals > awayGoals) {
      homeTeam.wins += 1;
      awayTeam.losses += 1;

      homeTeam.points += 3;

      homeTeam.form.push("W");
      awayTeam.form.push("L");
    } else if (homeGoals < awayGoals) {
      awayTeam.wins += 1;
      homeTeam.losses += 1;

      awayTeam.points += 3;

      awayTeam.form.push("W");
      homeTeam.form.push("L");
    } else {
      homeTeam.draws += 1;
      awayTeam.draws += 1;

      homeTeam.points += 1;
      awayTeam.points += 1;

      homeTeam.form.push("D");
      awayTeam.form.push("D");
    }

    homeTeam.gd = homeTeam.gf - homeTeam.ga;
    awayTeam.gd = awayTeam.gf - awayTeam.ga;
  });

  // Add next match for each team
  matchList.forEach((match) => {
    if (match.score) return;

    const groupName = match.group || "Other";
    const group = groupMap[groupName];

    if (!group) return;

    const homeTeam = group[match.home.name];
    const awayTeam = group[match.away.name];

    if (homeTeam && !homeTeam.nextMatch) {
      homeTeam.nextMatch = {
        team: match.away.name,
        code: match.away.code,
        flagUrl: getFlagUrl(match.away.code),
        date: match.kickoff.date
      };
    }

    if (awayTeam && !awayTeam.nextMatch) {
      awayTeam.nextMatch = {
        team: match.home.name,
        code: match.home.code,
        flagUrl: getFlagUrl(match.home.code),
        date: match.kickoff.date
      };
    }
  });

  return Object.entries(groupMap).map(([group, teams]) => {
    return {
      group,
      teams: Object.values(teams).sort(sortTable)
    };
  });
}

export function getBestThirdPlacedTeams(groupStandings) {
  return groupStandings
    .map((group) => {
      const thirdTeam = group.teams[2];

      if (!thirdTeam) return null;

      return {
        ...thirdTeam,
        group: group.group
      };
    })
    .filter(Boolean)
    .sort(sortTable);
}