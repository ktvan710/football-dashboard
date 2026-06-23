import { worldCupFixtures } from "../data/worldCupFixtures";
import { tournamentLeaders } from "../data/worldCupData";
import {
  buildGroupStandings,
  getBestThirdPlacedTeams
} from "../data/buildStandings";
function getQualificationStatus(index) {
  if (index === 0 || index === 1) return "qualified";
  if (index === 2) return "possible";
  return "none";
}



function InfoCard({ item }) {
  return (
    <div style={styles.infoCard}>
      <p style={styles.infoLabel}>{item.label}</p>
      <h2 style={styles.infoValue}>{item.value}</h2>
      <p style={styles.infoNote}>{item.note}</p>
    </div>
  );
}

function FormBadge({ result, isLatest }) {
  const colors = {
    W: {
      background: "#5ea868",
      color: "#ffffff"
    },
    D: {
      background: "#9aa0a6",
      color: "#ffffff"
    },
    L: {
      background: "#d94b45",
      color: "#ffffff"
    }
  };

  return (
    <span
      style={{
        ...styles.formBadge,
        ...colors[result],
        ...(isLatest ? styles.latestFormBadge : {})
      }}
    >
      {result}
    </span>
  );
}

function NextMatchPill({ nextMatch }) {
  if (!nextMatch) {
    return <span style={styles.emptyText}>—</span>;
  }

  return (
    <span style={styles.nextMatchPill}>
      <span style={styles.nextFlagCircle}>
        <img
          src={nextMatch.flagUrl}
          alt={nextMatch.team}
          style={styles.nextFlagImage}
        />
      </span>
    </span>
  );
}

function QualificationKey() {
  return (
    <div style={styles.keyWrap}>
      <div style={styles.keyItem}>
        <span style={{ ...styles.keyStripe, background: "#59d97a" }} />
        <span>Qualification for next stage</span>
      </div>

      <div style={styles.keyItem}>
        <span style={{ ...styles.keyStripe, background: "#f2c94c" }} />
        <span>Possible qualification for next stage</span>
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

      <div style={styles.tableWrapper}>
        <table style={styles.fotmobTable}>
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
  <img src={team.flagUrl} alt={team.team} style={styles.teamFlagImage} />
</span>
                    <span>{team.team}</span>
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

function LeaderBoard({ title, data, statLabel }) {
  return (
    <div style={styles.card}>
      <h3 className="shiny-card-title">{title}</h3>

      <div style={styles.leaderList}>
        {data.length > 0 ? (
          data.map((player) => (
            <div key={`${title}-${player.player}`} style={styles.leaderRow}>
              <div style={styles.rank}>{player.rank}</div>

              {player.logo && (
                <img
                  src={player.logo}
                  alt={player.team}
                  style={styles.leaderLogo}
                />
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
function BestThirdPlacedTable({ groups }) {
  const teams = getBestThirdPlacedTeams(groups);

  return (
    <div style={styles.tableCard}>
      <div style={styles.tableHeader}>
        <h3 style={styles.tableTitle}>Best 3rd Placed Teams</h3>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.fotmobTable}>
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
              <th style={{ ...styles.fotmobTh, textAlign: "center" }}>
                Next
              </th>
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

                  <span>{team.team}</span>
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
export default function WorldCupData() {
    const groupStandings = buildGroupStandings(worldCupFixtures);
  return (
    <div style={styles.page}>
      

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

const styles = {
  page: {
  color: "#f5f5f5",
  maxWidth: "1280px",
  margin: "0 auto",
  fontFamily: "var(--sans)"
},

formBadge: {
  width: "23px",
  height: "23px",
  borderRadius: "7px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: "900",
  fontFamily: "var(--score)"
},

latestFormBadge: {
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  transform: "translateY(-1px)"
},

nextMatchPill: {
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  background: "rgba(2,6,23,0.5)",
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: "999px",
  padding: "5px 9px",
  color: "#e2e8f0",
  fontSize: "12px",
  fontWeight: "900",
  whiteSpace: "nowrap"
},

nextFlagCircle: {
  width: "22px",
  height: "22px",
  borderRadius: "999px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(15,23,42,0.8)",
  border: "1px solid rgba(148,163,184,0.25)",
  fontSize: "13px"
},

playerNote: {
  margin: "3px 0 0",
  color: "#64748b",
  fontSize: "11px",
  fontWeight: "800"
},
standingsBlock: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
  padding: 0
},

innerSectionTitle: {
  color: "#f5f5f5",
  fontSize: "20px",
  fontWeight: "850",
  margin: "0",
  padding: "18px 22px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  borderBottom: "1px solid rgba(255,255,255,0.08)"
},

  pageHeader: {
    background: "#1f1f1f",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.6)",
    borderRadius: "24px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.42)"
  },

  pageEyebrow: {
    color: "#facc15",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "8px"
  },

  pageTitle: {
    fontFamily: "var(--heading)",
    fontSize: "62px",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#f8fafc"
  },

  pageSubtitle: {
    color: "#cbd5e1",
    maxWidth: "700px",
    fontWeight: "700",
    marginTop: "10px"
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "16px",
    marginBottom: "28px"
  },

  infoCard: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "none"
},
singleTableBlock: {
  margin: 0,
  background: "#1f1f1f"
},

tableCard: {
  background: "#1f1f1f",
  borderRadius: "0",
  overflow: "hidden",
  border: "0",
  borderRight: "1px solid rgba(255,255,255,0.06)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "none"
},

tableHeader: {
  padding: "14px 22px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "#1f1f1f"
},

tableTitle: {
  margin: 0,
  color: "#f5f5f5",
  fontSize: "18px",
  fontWeight: "800",
  textAlign: "left"
},

fotmobTable: {
  width: "100%",
  borderCollapse: "collapse",
  background: "#1f1f1f",
   fontFamily: "var(--sans)"
},

fotmobTh: {
  color: "#9a9aa0",
  fontSize: "11px",
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  padding: "14px 10px",
  textAlign: "center"
},

fotmobTr: {
  position: "relative"
},

fotmobTd: {
  color: "#f3f4f6",
  fontSize: "14px",
  fontWeight: "700",
  padding: "12px 10px",
  textAlign: "center",
  borderTop: "1px solid rgba(255,255,255,0.04)"
},

fotmobPts: {
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "900",
  padding: "12px 10px",
  textAlign: "center",
  borderTop: "1px solid rgba(255,255,255,0.04)"
},

qualifiedRow: {
  boxShadow: "inset 4px 0 0 #59d97a"
},

possibleRow: {
  boxShadow: "inset 4px 0 0 #f2c94c"
},

teamCell: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textAlign: "left"
},

teamFlag: {
  fontSize: "21px",
  lineHeight: 1
},

formStack: {
  display: "flex",
  justifyContent: "center",
  gap: "8px"
},

formBadge: {
  minWidth: "34px",
  height: "34px",
  borderRadius: "8px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "800",
  position: "relative"
},

latestFormBadge: {
  textDecoration: "underline",
  textUnderlineOffset: "7px",
  textDecorationThickness: "3px"
},

nextMatchPill: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
},

nextFlagCircle: {
  width: "38px",
  height: "38px",
  borderRadius: "999px",
  background: "#2a2a2a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  border: "1px solid rgba(255,255,255,0.08)"
},

keyWrap: {
  display: "flex",
  gap: "22px",
  flexWrap: "wrap",
  padding: "16px 22px 20px",
  background: "#1f1f1f",
  borderTop: "1px solid rgba(255,255,255,0.08)"
},

keyItem: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#d1d5db",
  fontSize: "13px",
  fontWeight: "700"
},

keyStripe: {
  width: "4px",
  height: "18px",
  borderRadius: "999px",
  display: "inline-block"
},
  infoLabel: {
    color: "#94a3b8",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "0.8px",
    marginBottom: "8px"
  },

  infoValue: {
    fontFamily: "var(--score)",
    fontSize: "42px",
    color: "#facc15",
    margin: 0
  },

  infoNote: {
    color: "#cbd5e1",
    fontSize: "13px",
    marginTop: "6px"
  },

  sectionTitle: {
    color: "#f8fafc",
    fontFamily: "var(--heading)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "34px",
    margin: "28px 0 14px"
  },

  standingsGrid: {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "0",
  background: "#1f1f1f"
},

  leadersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px"
  },

  card: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "none"
},

  tableWrapper: {
    overflowX: "auto"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px"
  },

  th: {
    color: "#94a3b8",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    padding: "8px 6px",
    borderBottom: "1px solid rgba(148,163,184,0.2)",
    textAlign: "center"
  },

  tr: {
    borderBottom: "1px solid rgba(148,163,184,0.12)"
  },

  td: {
    padding: "9px 6px",
    color: "#e2e8f0",
    textAlign: "center",
    fontWeight: "700"
  },

  teamCell: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    textAlign: "left"
  },

  points: {
    padding: "9px 6px",
    color: "#facc15",
    textAlign: "center",
    fontWeight: "900",
    fontFamily: "var(--score)",
    fontSize: "16px"
  },

  teamLogo: {
    width: "20px",
    height: "20px",
    objectFit: "contain"
  },

  leaderLogo: {
    width: "24px",
    height: "24px",
    objectFit: "contain"
  },

  leaderList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "8px"
  },

  leaderRow: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "10px",
  borderRadius: "12px"
},

  rank: {
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    background: "rgba(250,204,21,0.16)",
    color: "#facc15",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontFamily: "var(--score)"
  },

  playerInfo: {
    flex: 1
  },

  playerName: {
    margin: 0,
    color: "#f8fafc",
    fontWeight: "900",
    fontSize: "14px"
  },

  playerTeam: {
    margin: "3px 0 0",
    color: "#94a3b8",
    fontSize: "12px",
    fontWeight: "700"
  },

  statPill: {
    background: "#020617",
    color: "#facc15",
    border: "1px solid rgba(250,204,21,0.35)",
    borderRadius: "999px",
    padding: "5px 9px",
    fontWeight: "900",
    fontFamily: "var(--score)",
    fontSize: "13px"
  },

  emptyText: {
    color: "#94a3b8",
    margin: 0,
    fontWeight: "800"
  },
  teamFlagCircle: {
  width: "22px",
  height: "22px",
  borderRadius: "999px",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#2a2a2a",
  flex: "0 0 auto"
},

teamFlagImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
},

nextFlagCircle: {
  width: "38px",
  height: "38px",
  borderRadius: "999px",
  background: "#2a2a2a",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(255,255,255,0.08)"
},

nextFlagImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
}
};