import { useMemo } from "react";
import { worldCupFixtures } from "../data/worldCupFixtures";
import {
  buildGroupStandings,
  getBestThirdPlacedTeams
} from "../data/buildStandings";

const GROUP_ORDER = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
  "Group H",
  "Group I",
  "Group J",
  "Group K",
  "Group L"
];

const tournamentLeaders = {
  goals: [],
  assists: []
};

function sortGroupsByLetter(groups) {
  return [...groups].sort((a, b) => {
    const aIndex = GROUP_ORDER.indexOf(a.group);
    const bIndex = GROUP_ORDER.indexOf(b.group);

    if (aIndex === -1 && bIndex === -1) {
      return a.group.localeCompare(b.group);
    }

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });
}

function getQualificationStatus(index) {
  if (index <= 1) return "qualified";
  if (index === 2) return "possible";
  return "out";
}

function FormBadge({ result, isLatest }) {
  const badgeStyle =
    result === "W"
      ? styles.formWin
      : result === "D"
        ? styles.formDraw
        : styles.formLoss;

  return (
    <span
      style={{
        ...styles.formBadge,
        ...badgeStyle,
        ...(isLatest ? styles.latestFormBadge : {})
      }}
    >
      {result}
    </span>
  );
}

function NextMatchPill({ nextMatch }) {
  if (!nextMatch) {
    return <span style={styles.noNextMatch}>—</span>;
  }

  return (
    <span style={styles.nextMatchPill} title={nextMatch.team}>
      <img
        src={nextMatch.flagUrl}
        alt={nextMatch.team}
        style={styles.nextMatchFlag}
      />
    </span>
  );
}

function QualificationKey() {
  return (
    <div style={styles.qualificationKey}>
      <div style={styles.keyItem}>
        <span style={{ ...styles.keyLine, background: "#4ade80" }} />
        <span>Top 2 qualify</span>
      </div>

      <div style={styles.keyItem}>
        <span style={{ ...styles.keyLine, background: "#facc15" }} />
        <span>3rd-place race</span>
      </div>
    </div>
  );
}

function StandingsTable({ group }) {
  return (
    <div style={styles.tableCard}>
      <div style={styles.tableHeader}>
        <h3 style={styles.tableTitle}>{group.group}</h3>
      </div>

      <div style={styles.tableWrap} className="ktwc-table-wrap">
        <table style={styles.fotmobTable} className="ktwc-standings-table">
          <thead>
            <tr>
              <th style={styles.fotmobTh}>#</th>
              <th style={{ ...styles.fotmobTh, textAlign: "left" }}>Team</th>
              <th style={styles.fotmobTh}>PL</th>
              <th style={styles.fotmobTh}>W</th>
              <th style={styles.fotmobTh}>D</th>
              <th style={styles.fotmobTh}>L</th>
              <th style={styles.fotmobTh}>+/-</th>
              <th style={styles.fotmobTh}>GD</th>
              <th style={styles.fotmobTh}>PTS</th>
              <th style={styles.fotmobTh}>Form</th>
              <th style={{ ...styles.fotmobTh, textAlign: "center" }}>Next</th>
            </tr>
          </thead>

          <tbody>
            {group.teams.map((team, index) => {
              const qualification = getQualificationStatus(index);

              return (
                <tr
                  key={team.team}
                  style={{
                    ...styles.fotmobTr,
                    ...(qualification === "qualified"
                      ? styles.qualifiedRow
                      : qualification === "possible"
                        ? styles.possibleRow
                        : {})
                  }}
                >
                  <td style={styles.fotmobTd}>{index + 1}</td>

                  <td style={{ ...styles.fotmobTd, ...styles.teamCell }}>
                    <span style={styles.teamFlagCircle}>
                      <img
                        src={team.flagUrl}
                        alt={team.team}
                        style={styles.teamFlagImage}
                      />
                    </span>

                    <span style={styles.teamName}>{team.team}</span>
                  </td>

                  <td style={styles.fotmobTd}>{team.played}</td>
                  <td style={styles.fotmobTd}>{team.wins}</td>
                  <td style={styles.fotmobTd}>{team.draws}</td>
                  <td style={styles.fotmobTd}>{team.losses}</td>

                  <td style={styles.fotmobTd}>
                    {team.gf}-{team.ga}
                  </td>

                  <td style={styles.fotmobTd}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </td>

                  <td style={styles.fotmobPts}>{team.points}</td>

                  <td style={styles.fotmobTd}>
                    <div style={styles.formStack}>
                      {(team.form || []).map((result, formIndex) => (
                        <FormBadge
                          key={`${team.team}-${formIndex}`}
                          result={result}
                          isLatest={formIndex === team.form.length - 1}
                        />
                      ))}
                    </div>
                  </td>

                  <td style={styles.fotmobTd}>
                    <NextMatchPill nextMatch={team.nextMatch} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BestThirdPlacedTable({ groups }) {
  const teams = getBestThirdPlacedTeams(groups);

  return (
    <div style={styles.tableCard}>
      <div style={styles.tableHeader}>
        <h3 style={styles.tableTitle}>Best 3rd Placed Teams</h3>
      </div>

      <div style={styles.tableWrap} className="ktwc-table-wrap">
        <table style={styles.fotmobTable} className="ktwc-standings-table">
          <thead>
            <tr>
              <th style={styles.fotmobTh}>#</th>
              <th style={{ ...styles.fotmobTh, textAlign: "left" }}>Team</th>
              <th style={styles.fotmobTh}>PL</th>
              <th style={styles.fotmobTh}>W</th>
              <th style={styles.fotmobTh}>D</th>
              <th style={styles.fotmobTh}>L</th>
              <th style={styles.fotmobTh}>+/-</th>
              <th style={styles.fotmobTh}>GD</th>
              <th style={styles.fotmobTh}>PTS</th>
              <th style={styles.fotmobTh}>Form</th>
              <th style={{ ...styles.fotmobTh, textAlign: "center" }}>Next</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr
                key={`${team.group}-${team.team}`}
                style={{
                  ...styles.fotmobTr,
                  ...(index < 8 ? styles.possibleRow : {})
                }}
              >
                <td style={styles.fotmobTd}>{index + 1}</td>

                <td style={{ ...styles.fotmobTd, ...styles.teamCell }}>
                  <span style={styles.teamFlagCircle}>
                    <img
                      src={team.flagUrl}
                      alt={team.team}
                      style={styles.teamFlagImage}
                    />
                  </span>

                  <span style={styles.teamName}>{team.team}</span>
                </td>

                <td style={styles.fotmobTd}>{team.played}</td>
                <td style={styles.fotmobTd}>{team.wins}</td>
                <td style={styles.fotmobTd}>{team.draws}</td>
                <td style={styles.fotmobTd}>{team.losses}</td>

                <td style={styles.fotmobTd}>
                  {team.gf}-{team.ga}
                </td>

                <td style={styles.fotmobTd}>
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>

                <td style={styles.fotmobPts}>{team.points}</td>

                <td style={styles.fotmobTd}>
                  <div style={styles.formStack}>
                    {(team.form || []).map((result, formIndex) => (
                      <FormBadge
                        key={`${team.team}-${formIndex}`}
                        result={result}
                        isLatest={formIndex === team.form.length - 1}
                      />
                    ))}
                  </div>
                </td>

                <td style={styles.fotmobTd}>
                  <NextMatchPill nextMatch={team.nextMatch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LeaderBoard({ title, data, statLabel }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.leaderTitle}>{title}</h3>

      <div style={styles.leaderList}>
        {data.length > 0 ? (
          data.map((player) => (
            <div key={`${title}-${player.player}`} style={styles.leaderRow}>
              <div style={styles.rank}>{player.rank}</div>

              {player.logo && (
                <img src={player.logo} alt={player.team} style={styles.leaderLogo} />
              )}

              <div style={styles.playerInfo}>
                <p style={styles.playerName}>
                  {player.flag ? `${player.flag} ` : ""}
                  {player.player}
                </p>

                <p style={styles.playerTeam}>{player.team}</p>

                {player.note && <p style={styles.playerNote}>{player.note}</p>}
              </div>

              <div style={styles.statPill}>
                {player.value} {statLabel}
              </div>
            </div>
          ))
        ) : (
          <p style={styles.emptyText}>No data yet.</p>
        )}
      </div>
    </div>
  );
}

export default function WorldCupData() {
  const groupStandings = useMemo(() => {
    return sortGroupsByLetter(buildGroupStandings(worldCupFixtures));
  }, []);

  return (
    <div style={styles.page} className="ktwc-page">
      <style>{WORLD_CUP_DATA_CSS}</style>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>World Cup Data</p>
        <h1 style={styles.heroTitle}>Group Tables</h1>
        <p style={styles.heroText}>
          Auto-updating standings, qualification zones, best third-placed race,
          and tournament leaders powered by your fixture data.
        </p>
      </section>

      <h2 style={styles.sectionTitle}>Group Standings</h2>

      <div style={styles.standingsBlock}>
        <div style={styles.standingsGrid}>
          {groupStandings.map((group) => (
            <StandingsTable key={group.group} group={group} />
          ))}
        </div>

        <h2 style={styles.innerSectionTitle}>Best 3rd Placed Teams</h2>

        <div style={styles.singleTableBlock}>
          <BestThirdPlacedTable groups={groupStandings} />
        </div>

        <QualificationKey />
      </div>

      <h2 style={styles.sectionTitle}>Tournament Leaders</h2>

      <div style={styles.leadersGrid}>
        <LeaderBoard
          title="Top Goalscorers"
          data={tournamentLeaders.goals}
          statLabel="G"
        />

        <LeaderBoard
          title="Top Assisters"
          data={tournamentLeaders.assists}
          statLabel="A"
        />
      </div>
    </div>
  );
}

const WORLD_CUP_DATA_CSS = `
@media (max-width: 600px) {
  .ktwc-page {
    width: 100% !important;
    max-width: 100% !important;
  }

  .ktwc-table-wrap {
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
  }

  .ktwc-standings-table {
    min-width: 820px !important;
  }
}
`;

const styles = {
  page: {
    width: "100%",
    maxWidth: "1040px",
    margin: "0 auto",
    color: "#f5f5f5",
    fontFamily: "var(--sans)"
  },

  hero: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "28px",
    marginBottom: "18px",
    textAlign: "center"
  },

  eyebrow: {
    margin: "0 0 8px",
    color: "#4ade80",
    fontFamily: "var(--heading)",
    fontSize: "14px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.8px"
  },

  heroTitle: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "clamp(52px, 9vw, 92px)",
    fontWeight: "900",
    textTransform: "uppercase",
    lineHeight: "0.9",
    letterSpacing: "-1px"
  },

  heroText: {
    maxWidth: "760px",
    margin: "16px auto 0",
    color: "#a1a1aa",
    fontSize: "15px",
    fontWeight: "800",
    lineHeight: "1.6"
  },

  sectionTitle: {
    margin: "26px 0 14px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "38px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  innerSectionTitle: {
    margin: "24px 0 14px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "30px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  standingsBlock: {
    display: "grid",
    gap: "16px"
  },

  standingsGrid: {
    display: "grid",
    gap: "16px"
  },

  singleTableBlock: {
    display: "grid"
  },

  tableCard: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    overflow: "hidden"
  },

  tableHeader: {
    height: "56px",
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  },

  tableTitle: {
    margin: 0,
    color: "#f5f5f5",
    fontSize: "17px",
    fontWeight: "950"
  },

  tableWrap: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch"
  },

  fotmobTable: {
    width: "100%",
    minWidth: "900px",
    borderCollapse: "collapse"
  },

  fotmobTh: {
    height: "44px",
    color: "#9ca3af",
    fontSize: "11px",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.55px",
    textAlign: "center",
    padding: "0 12px",
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  },

  fotmobTr: {
    height: "66px",
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  },

  qualifiedRow: {
    boxShadow: "inset 4px 0 0 #4ade80"
  },

  possibleRow: {
    boxShadow: "inset 4px 0 0 #facc15"
  },

  fotmobTd: {
    color: "#f5f5f5",
    fontSize: "14px",
    fontWeight: "850",
    textAlign: "center",
    padding: "0 12px",
    whiteSpace: "nowrap"
  },

  fotmobPts: {
    color: "#f5f5f5",
    fontSize: "15px",
    fontWeight: "950",
    textAlign: "center",
    padding: "0 12px",
    whiteSpace: "nowrap"
  },

  teamCell: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    textAlign: "left",
    minWidth: "220px"
  },

  teamFlagCircle: {
    width: "24px",
    height: "24px",
    borderRadius: "999px",
    overflow: "hidden",
    background: "#333",
    flexShrink: 0
  },

  teamFlagImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  },

  teamName: {
    overflow: "hidden",
    textOverflow: "ellipsis"
  },

  formStack: {
    display: "flex",
    justifyContent: "center",
    gap: "6px"
  },

  formBadge: {
    width: "28px",
    height: "28px",
    borderRadius: "7px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "950"
  },

  latestFormBadge: {
    boxShadow: "inset 0 -3px 0 rgba(255,255,255,0.35)"
  },

  formWin: {
    background: "#55a868"
  },

  formDraw: {
    background: "#9ca3af"
  },

  formLoss: {
    background: "#ef4444"
  },

  nextMatchPill: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  },

  nextMatchFlag: {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    objectFit: "cover"
  },

  noNextMatch: {
    color: "#71717a",
    fontWeight: "900"
  },

  qualificationKey: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "850"
  },

  keyItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  },

  keyLine: {
    width: "22px",
    height: "4px",
    borderRadius: "999px"
  },

  leadersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
    marginBottom: "40px"
  },

  card: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "18px"
  },

  leaderTitle: {
    margin: "0 0 14px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "28px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  leaderList: {
    display: "grid",
    gap: "10px"
  },

  leaderRow: {
    display: "grid",
    gridTemplateColumns: "34px 32px 1fr auto",
    gap: "10px",
    alignItems: "center",
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "14px",
    padding: "10px"
  },

  rank: {
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "950"
  },

  leaderLogo: {
    width: "28px",
    height: "28px",
    borderRadius: "999px"
  },

  playerInfo: {
    minWidth: 0
  },

  playerName: {
    margin: 0,
    color: "#f5f5f5",
    fontSize: "14px",
    fontWeight: "950",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  playerTeam: {
    margin: "3px 0 0",
    color: "#a1a1aa",
    fontSize: "12px",
    fontWeight: "800"
  },

  playerNote: {
    margin: "3px 0 0",
    color: "#71717a",
    fontSize: "11px",
    fontWeight: "700"
  },

  statPill: {
    background: "#f5f5f5",
    color: "#111",
    borderRadius: "999px",
    padding: "7px 10px",
    fontSize: "12px",
    fontWeight: "950"
  },

  emptyText: {
    margin: 0,
    color: "#a1a1aa",
    fontSize: "14px",
    fontWeight: "800"
  }
};