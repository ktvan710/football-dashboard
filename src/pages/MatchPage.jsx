import { useParams } from "react-router-dom";
import { matches } from "../data/matches";
function getFlagPattern(code) {
  const patterns = {
    nl: "linear-gradient(to bottom, #ae1c28 0 33%, #e2e8f0 33% 66%, #21468b 66% 100%)",

    se: `
  linear-gradient(to right, rgba(0,0,0,0) 0 28%, #fecc00 28% 41%, rgba(0,0,0,0) 41% 100%),
  linear-gradient(to bottom, rgba(0,0,0,0) 0 38%, #fecc00 38% 54%, rgba(0,0,0,0) 54% 100%),
  linear-gradient(to bottom, #006aa7 0%, #006aa7 100%)
`,

    de: "linear-gradient(to bottom, #000000 0 33%, #dd0000 33% 66%, #ffce00 66% 100%)",

    ci: "linear-gradient(to right, #f77f00 0 33%, #e2e8f0 33% 66%, #009e60 66% 100%)",

    ec: "linear-gradient(to bottom, #ffdd00 0 50%, #034ea2 50% 75%, #ed1c24 75% 100%)",

    cw: `
  radial-gradient(circle at 24% 35%, #ffffff 0 4%, rgba(255,255,255,0) 4.5%),
  radial-gradient(circle at 34% 45%, #ffffff 0 2.5%, rgba(255,255,255,0) 3%),
  linear-gradient(to bottom, rgba(0,0,0,0) 0 62%, #f9e300 62% 69%, rgba(0,0,0,0) 69% 100%),
  linear-gradient(to bottom, #002b7f 0%, #002b7f 100%)
`,

    tn: "linear-gradient(90deg, #e70013, #e2e8f0, #e70013)",

    jp: "radial-gradient(circle, #bc002d 0 28%, #e2e8f0 29% 100%)",

    us: "linear-gradient(to bottom, #b22234 0 14%, #e2e8f0 14% 28%, #b22234 28% 42%, #e2e8f0 42% 56%, #b22234 56% 70%, #e2e8f0 70% 84%, #b22234 84% 100%)",

    au: "linear-gradient(135deg, #012169, #e2e8f0, #e4002b)",

    br: "linear-gradient(135deg, #009c3b 0 35%, #ffdf00 35% 65%, #002776 65% 100%)",

    ht: "linear-gradient(to bottom, #00209f 0 50%, #d21034 50% 100%)",

    tr: "linear-gradient(135deg, #e30a17, #e2e8f0, #e30a17)",

    py: "linear-gradient(to bottom, #d52b1e 0 33%, #e2e8f0 33% 66%, #0038a8 66% 100%)",

    ma: "linear-gradient(135deg, #c1272d, #006233)",

    "gb-sct": "linear-gradient(135deg, #005eb8 0 45%, #e2e8f0 45% 55%, #005eb8 55% 100%)"
  };

  return patterns[code] || "linear-gradient(90deg, #38bdf8, #facc15)";
}

function flagTextStyle(code) {
  return {
    display: "inline-block",
    lineHeight: "0.95",
    paddingTop: "6px",
    paddingBottom: "6px",

    background: getFlagPattern(code),
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",

    fontFamily: "var(--heading)",
    fontSize: "56px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    textTransform: "uppercase",

    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.45))",

    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  };
}
function RatingBar({ label, value }) {
function getEmoji(team) {
  const emojis = {
    USA: "🇺🇸",
    Australia: "🇦🇺",
    Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    Morocco: "🇲🇦",
    Brazil: "🇧🇷",
    Haiti: "🇭🇹",
    Turkey: "🇹🇷",
    Paraguay: "🇵🇾"
  };

  return emojis[team] || "⚽";
}
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div style={styles.barBackground}>
        <div
          style={{
            ...styles.barFill,
            width: `${value}%`
          }}
        />
      </div>
    </div>
  );
}

function MatchPage() {
  const { id } = useParams(); // ✅ FIXED

  const match = matches?.[id]; // ✅ FIXED

  if (!match) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Match not found</h2>
        <p>{id}</p>
      </div>
    );
  }

  const home = match.home;
  const away = match.away;

  
  return (
    <div style={styles.container}>
      {/* HEADER */}
      {/* HEADER */}
{/* HEADER */}
<div key={id} style={styles.heroCard}>
  <div style={styles.matchupTitle}>
    <span
      key={`${id}-${home.code}-home`}
      style={flagTextStyle(home.code)}
    >
      {home.name}
    </span>

    <span style={styles.vsText}>vs</span>

    <span
      key={`${id}-${away.code}-away`}
      style={flagTextStyle(away.code)}
    >
      {away.name}
    </span>
  </div>

  <p style={styles.headerMeta}>{match.competition}</p>
  <p style={styles.headerMeta}>{match.group}</p>

  <p style={styles.headerDate}>
    {new Date(match.kickoff?.date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kuala_Lumpur"
    })} MYT
  </p>

  <p style={styles.headerLocation}>{match.kickoff?.location}</p>
</div>

      {/* GRID */}
      <div style={styles.grid}>

        {/* RATINGS */}
        <div style={styles.card}>
          <h3 className="shiny-card-title">Team Ratings</h3>

          <h4 className="match-section-subtitle">{match.home.name}</h4>

<RatingBar label="Attack" value={match.ratings?.[match.home.key]?.attack ?? 0} />
<RatingBar label="Defense" value={match.ratings?.[match.home.key]?.defense ?? 0} />
<RatingBar label="Pressing" value={match.ratings?.[match.home.key]?.pressing ?? 0} />
<RatingBar label="Transition" value={match.ratings?.[match.home.key]?.transition ?? 0} />

<hr />

<h4 className="match-section-subtitle">{match.away.name}</h4>

<RatingBar label="Attack" value={match.ratings?.[match.away.key]?.attack ?? 0} />
<RatingBar label="Defense" value={match.ratings?.[match.away.key]?.defense ?? 0} />
<RatingBar label="Pressing" value={match.ratings?.[match.away.key]?.pressing ?? 0} />
<RatingBar label="Transition" value={match.ratings?.[match.away.key]?.transition ?? 0} />
        </div>

        {/* SCOUTING */}
        <div style={styles.card}>
          <h3 className="shiny-card-title">Scouting Report</h3>


          <h4 className="match-section-subtitle-spaced">Injury Status</h4>
          <p>{home.name}: {match.scouting?.injury?.home}</p>
          <p>{away.name}: {match.scouting?.injury?.away}</p>

          <hr />

          <h4 className="match-section-subtitle-spaced">Matchup Weakness</h4>
          <p>{home.name} weakness: {match.scouting?.weakness?.home}</p>
          <p>{away.name} weakness: {match.scouting?.weakness?.away}</p>

          <hr />

          <h4 className="match-section-subtitle-spaced">Match Summary</h4>
          <p>{match.scouting?.summary}</p>
        </div>

        {/* TACTICS */}
        <div style={styles.card}>
  <h3 className="shiny-card-title">Tactical Analysis</h3>

  <h4 className="match-section-subtitle">{match.home.name}</h4>
  <p>{match.tactics?.[match.home.key]?.style ?? "No data"}</p>

  <h4 className="match-section-subtitle">{match.away.name}</h4>
  <p>{match.tactics?.[match.away.key]?.style ?? "No data"}</p>

  <hr />

  <p>
    Key Edge:{" "}
    <b>
      {match.tactics?.[match.home.key]?.advantage ||
        match.home.name}
    </b>
  </p>
</div>


        {/* INSIGHT */}
        {/* INSIGHT */}
<div style={styles.card}>
  <h3 className="shiny-card-title">Match Insight</h3>

  <div className="match-card-body">
    <p>Expected game style: {match.analysis?.insight?.style}</p>
    <p>Key battle: {match.analysis?.insight?.keyBattle}</p>
    <p>Risk factor: {match.analysis?.insight?.risk}</p>
  </div>
</div>

        {/* PREDICTION */}
        {/* PREDICTION */}
<div style={styles.card}>
  <h3 className="shiny-card-title">Match Prediction</h3>

  <div className="match-card-body">
    <p>
      {home.name} Win Probability: {match.analysis?.prediction?.home}%
    </p>
    <p>
      {away.name} Win Probability: {match.analysis?.prediction?.away}%
    </p>
    <p>Draw Probability: {match.analysis?.prediction?.draw}%</p>
  </div>

  <hr />

  <h3 className="shiny-card-title">Best Bets</h3>

  <div className="match-card-body">
    <p>• {match.analysis?.bestBets?.bet1 || "N/A"}</p>
    <p>• {match.analysis?.bestBets?.bet2 || "N/A"}</p>
    <p>• {match.analysis?.bestBets?.bet3 || "N/A"}</p>
  </div>
</div>

        {/* OUTLOOK */}
        <div style={styles.card}>
          <h3 className="shiny-card-title">Match Outlook</h3>

          <h4 className="match-section-subtitle">Game Flow Prediction</h4>
          <p>{match.analysis?.outlook?.flow}</p>

          <hr />

          <h4 className="match-section-subtitle">Key Deciding Factors</h4>
          {match.analysis?.outlook?.factors?.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}

          <hr />

          <h4 className="match-section-subtitle">Edge Summary</h4>
          <p>{match.analysis?.outlook?.edge}</p>
        </div>

      </div>
    </div>
  );
}
const colors = {
  background: "#0f172a",
  card: "#1e293b",
  accent: "#38bdf8",
  text: "#f8fafc",
  secondaryText: "#94a3b8",
  border: "#334155"
};
const styles = {
  container: {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: colors.background,
  minHeight: "100vh",
  padding: "20px"
},
heroCard: {
  background:
    "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 35%), linear-gradient(135deg, #020617, #1e293b)",
  color: "#f8fafc",
  padding: "30px",
  borderRadius: "22px",
  boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
  border: "1px solid rgba(212,175,55,0.55)",
  textAlign: "center",
  overflow: "visible"
},

matchupTitle: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
  flexWrap: "wrap",
  marginBottom: "14px",
  overflow: "visible"
},

vsText: {
  color: "#94a3b8",
  fontFamily: "var(--score)",
  fontSize: "26px",
  fontWeight: "900",
  textTransform: "uppercase"
},

headerMeta: {
  color: "#cbd5e1",
  fontWeight: "700",
  marginBottom: "6px"
},

headerDate: {
  color: "#facc15",
  fontFamily: "var(--score)",
  fontSize: "18px",
  fontWeight: "900",
  marginTop: "10px"
},

headerLocation: {
  color: "#94a3b8",
  marginTop: "6px",
  fontWeight: "600"
},
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  card: {
  background: "#1e293b",
  color: "#f8fafc",
  padding: "20px",
  borderRadius: "18px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  border: "1px solid #334155"
},
  barBackground: {
    width: "100%",
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "6px",
    marginTop: "4px"
  },
  barFill: {
    height: "8px",
    background: "#2563eb",
    borderRadius: "6px"
  }
};

export default MatchPage;