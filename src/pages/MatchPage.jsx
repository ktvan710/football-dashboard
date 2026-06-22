import { useParams } from "react-router-dom";
import { matches } from "../data/matches";

function getFlagImage(code) {
  if (!code) return "";
  return `https://flagcdn.com/w640/${code.toLowerCase()}.png`;
}

function flagTextStyle(code) {
  return {
    display: "inline-block",
    lineHeight: "0.95",
    paddingTop: "6px",
    paddingBottom: "6px",

    backgroundImage: `url(${getFlagImage(code)})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",

    fontFamily: "var(--heading)",
    fontSize: "58px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    textTransform: "uppercase",

    WebkitTextStroke: "1px rgba(255,255,255,0.42)",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.55))"
  };
}

function Section({ title, children }) {
  return (
    <section style={styles.card}>
      <h3 className="shiny-card-title">{title}</h3>
      <div style={styles.sectionBody}>{children}</div>
    </section>
  );
}

function InfoGrid({ items }) {
  return (
    <div style={styles.infoGrid}>
      {items.map((item) => (
        <div key={item.label} style={styles.infoBox}>
          <p style={styles.infoLabel}>{item.label}</p>
          <p style={styles.infoValue}>{item.value}</p>
          {item.note && <p style={styles.infoNote}>{item.note}</p>}
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul style={styles.bulletList}>
      {items.map((item, index) => (
        <li key={index} style={styles.bulletItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function TeamPanel({ title, data }) {
  return (
    <div style={styles.teamPanel}>
      <h4 style={styles.teamPanelTitle}>{title}</h4>

      {Object.entries(data).map(([key, value]) => (
        <div key={key} style={styles.detailRow}>
          <span style={styles.detailLabel}>
            {key.replaceAll("_", " ")}
          </span>
          <span style={styles.detailValue}>
            {Array.isArray(value) ? value.join(", ") : value}
          </span>
        </div>
      ))}
    </div>
  );
}

function StatTable({ stats, homeName, awayName }) {
  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, textAlign: "left" }}>Metric</th>
            <th style={styles.th}>{homeName}</th>
            <th style={styles.th}>{awayName}</th>
            <th style={{ ...styles.th, textAlign: "left" }}>Source / Note</th>
          </tr>
        </thead>

        <tbody>
          {stats.map((stat) => (
            <tr key={stat.label} style={styles.tr}>
              <td style={{ ...styles.td, textAlign: "left" }}>{stat.label}</td>
              <td style={styles.td}>{stat.home}</td>
              <td style={styles.td}>{stat.away}</td>
              <td style={{ ...styles.td, textAlign: "left", color: "#94a3b8" }}>
                {stat.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GameScriptCard({ script }) {
  return (
    <div style={styles.scriptCard}>
      <h4 style={styles.scriptTitle}>{script.title}</h4>
      <BulletList items={script.points} />
    </div>
  );
}

function PredictionBlock({ prediction }) {
  return (
    <div style={styles.predictionGrid}>
      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Home Win</p>
        <h4 style={styles.predictionValue}>{prediction.homeWin}%</h4>
      </div>

      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Draw</p>
        <h4 style={styles.predictionValue}>{prediction.draw}%</h4>
      </div>

      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Away Win</p>
        <h4 style={styles.predictionValue}>{prediction.awayWin}%</h4>
      </div>

      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Confidence</p>
        <h4 style={styles.predictionValue}>{prediction.confidence}/10</h4>
      </div>

      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Volatility</p>
        <h4 style={styles.predictionValue}>{prediction.volatility}/10</h4>
      </div>

      <div style={styles.predictionBox}>
        <p style={styles.predictionLabel}>Data Confidence</p>
        <h4 style={styles.predictionValue}>{prediction.dataConfidence}</h4>
      </div>
    </div>
  );
}

function AnalyticsV2({ match }) {
  const analytics = match.analyticsV2;

  if (!analytics) {
    return (
      <Section title="Match Analysis">
        <p style={styles.paragraph}>
          This match still uses the older page format. Add an analyticsV2 object
          in matches.js to unlock the rebuilt dashboard layout.
        </p>
      </Section>
    );
  }

  return (
    <>
      <Section title="Match Importance">
        <InfoGrid
          items={[
            {
              label: "Stage",
              value: match.group || "Needs update",
              note: match.competition
            },
            {
              label: "Importance",
              value: analytics.matchImportance.level,
              note: analytics.matchImportance.note
            },
            {
              label: "Travel / Weather",
              value: analytics.matchImportance.environment,
              note: analytics.matchImportance.gameState
            }
          ]}
        />
      </Section>

      <Section title="Team Form Snapshot">
        <div style={styles.twoColumn}>
          <TeamPanel title={match.home.name} data={analytics.form.home} />
          <TeamPanel title={match.away.name} data={analytics.form.away} />
        </div>
      </Section>

      <Section title="Tactical Identity">
        <div style={styles.twoColumn}>
          <TeamPanel title={match.home.name} data={analytics.tacticalIdentity.home} />
          <TeamPanel title={match.away.name} data={analytics.tacticalIdentity.away} />
        </div>
      </Section>

      <Section title="Matchup Analysis">
        <BulletList items={analytics.matchupAnalysis} />
      </Section>

      <Section title="Statistical Dashboard">
        <StatTable
  stats={analytics.statisticalDashboard}
  homeName={match.home.name}
  awayName={match.away.name}
/>
      </Section>

      <Section title="Player Watch">
        <div style={styles.twoColumn}>
          <TeamPanel title={match.home.name} data={analytics.playerWatch.home} />
          <TeamPanel title={match.away.name} data={analytics.playerWatch.away} />
        </div>
      </Section>

      <Section title="Game Script Scenarios">
        <div style={styles.threeColumn}>
          {analytics.gameScripts.map((script) => (
            <GameScriptCard key={script.title} script={script} />
          ))}
        </div>
      </Section>

      <Section title="Prediction Model">
        <PredictionBlock prediction={analytics.predictionModel} />

        <div style={styles.modelCopy}>
          <p>
            <strong>Model lean:</strong> {analytics.predictionModel.lean}
          </p>
          <p>
            <strong>Most likely score range:</strong>{" "}
            {analytics.predictionModel.scoreRange}
          </p>
          <p>
            <strong>Main reason:</strong> {analytics.predictionModel.mainReason}
          </p>
          <p>
            <strong>Biggest failure point:</strong>{" "}
            {analytics.predictionModel.failurePoint}
          </p>
        </div>
      </Section>

      <Section title="Why This Could Be Wrong">
        <BulletList items={analytics.whyThisCouldBeWrong} />
      </Section>

      <Section title="Source Notes">
        <BulletList items={analytics.sourceNotes} />
      </Section>
    </>
  );
}

export default function MatchPage() {
  const { id } = useParams();
  const match = matches[id];

  if (!match) {
    return (
      <div style={styles.page}>
        <h1 style={styles.errorTitle}>Match not found</h1>
      </div>
    );
  }

  const home = match.home;
  const away = match.away;

  return (
    <div style={styles.page}>
      <div style={styles.heroCard}>
        <div style={styles.matchupTitle}>
          <span key={`${id}-${home.code}-home`} style={flagTextStyle(home.code)}>
            {home.name}
          </span>

          <span style={styles.vsText}>vs</span>

          <span key={`${id}-${away.code}-away`} style={flagTextStyle(away.code)}>
            {away.name}
          </span>
        </div>

        <div style={styles.headerMeta}>
          <p style={styles.headerDate}>
            {new Date(match.kickoff?.date).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "Asia/Kuala_Lumpur"
            })}{" "}
            MYT
          </p>

          <p style={styles.headerLocation}>{match.kickoff?.location}</p>
          <p style={styles.headerGroup}>{match.group}</p>
        </div>
      </div>

      <AnalyticsV2 match={match} />
    </div>
  );
}

const styles = {
  page: {
  color: "#f5f5f5",
  maxWidth: "1180px",
  margin: "0 auto",
  fontFamily: "var(--sans)"
},

  heroCard: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "28px",
  marginBottom: "18px",
  boxShadow: "none"
},

  matchupTitle: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px"
  },

  vsText: {
    color: "#facc15",
    fontFamily: "var(--heading)",
    fontSize: "34px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },

  headerMeta: {
    marginTop: "14px",
    color: "#cbd5e1",
    fontWeight: "800"
  },

  headerDate: {
    margin: "0 0 4px"
  },

  headerLocation: {
    margin: "0 0 4px"
  },

  headerGroup: {
    margin: 0,
    color: "#facc15"
  },

  card: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
  marginBottom: "18px",
  boxShadow: "none"
},

  sectionBody: {
    marginTop: "10px"
  },

  paragraph: {
    color: "#cbd5e1",
    lineHeight: 1.55,
    fontWeight: "700"
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px"
  },

  infoBox: {
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px"
},

  infoLabel: {
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "11px",
    fontWeight: "900",
    margin: "0 0 6px"
  },

  infoValue: {
    color: "#f8fafc",
    fontSize: "18px",
    fontWeight: "900",
    margin: 0
  },

  infoNote: {
    color: "#cbd5e1",
    fontSize: "13px",
    margin: "6px 0 0",
    lineHeight: 1.4
  },

  twoColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "14px"
  },

  threeColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "14px"
  },

  teamPanel: {
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px"
},

  teamPanelTitle: {
    color: "#facc15",
    fontSize: "16px",
    fontWeight: "900",
    margin: "0 0 12px",
    textTransform: "uppercase"
  },

  detailRow: {
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid rgba(148,163,184,0.12)"
  },

  detailLabel: {
    color: "#94a3b8",
    fontSize: "12px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  detailValue: {
    color: "#e2e8f0",
    fontSize: "13px",
    fontWeight: "750",
    lineHeight: 1.45
  },

  bulletList: {
    margin: 0,
    paddingLeft: "20px",
    color: "#dbeafe"
  },

  bulletItem: {
    marginBottom: "8px",
    lineHeight: 1.5,
    fontWeight: "750"
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
    padding: "9px 8px",
    borderBottom: "1px solid rgba(148,163,184,0.2)",
    textAlign: "center"
  },

  tr: {
    borderBottom: "1px solid rgba(148,163,184,0.12)"
  },

  td: {
    padding: "9px 8px",
    color: "#e2e8f0",
    textAlign: "center",
    fontWeight: "700"
  },

  scriptCard: {
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px"
},

  scriptTitle: {
    color: "#facc15",
    margin: "0 0 10px",
    fontWeight: "900"
  },

  predictionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
    marginBottom: "16px"
  },

  predictionBox: {
  background: "#181818",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px",
  textAlign: "center"
},

  predictionLabel: {
    color: "#94a3b8",
    textTransform: "uppercase",
    fontSize: "11px",
    fontWeight: "900",
    margin: "0 0 6px"
  },

  predictionValue: {
    color: "#facc15",
    fontFamily: "var(--score)",
    fontSize: "28px",
    margin: 0
  },

  modelCopy: {
    color: "#dbeafe",
    lineHeight: 1.5,
    fontWeight: "750"
  },

  errorTitle: {
    color: "#f8fafc"
  }
};