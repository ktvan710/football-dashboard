import { useParams } from "react-router-dom";
import { matches } from "../data/matches";

function RatingBar({ label, value }) {
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
  const { matchId } = useParams();
  const match = matches?.[matchId];

  if (!match) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Match not found</h2>
        <p>{matchId}</p>
      </div>
    );
  }

  const home = match.home;
  const away = match.away;

  const homeKey = matchId === "usa-australia" ? "usa"
    : matchId === "scotland-morocco" ? "scotland"
    : matchId === "brazil-haiti" ? "brazil"
    : "home";

  const awayKey = matchId === "usa-australia" ? "australia"
    : matchId === "scotland-morocco" ? "morocco"
    : matchId === "brazil-haiti" ? "haiti"
    : "away";

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.card}>
        <h1>
          {home.name} vs {away.name}
        </h1>
        <p>{match.competition}</p>
        <p>{match.group}</p>
        <p>{match.kickoff?.date}</p>
        <p>{match.kickoff?.location}</p>
      </div>

      {/* GRID */}
      <div style={styles.grid}>

        {/* RATINGS */}
        <div style={styles.card}>
          <h3>Team Ratings</h3>

          <h4>{match.home.name}</h4>

<RatingBar label="Attack" value={match.ratings?.[match.home.key]?.attack ?? 0} />
<RatingBar label="Defense" value={match.ratings?.[match.home.key]?.defense ?? 0} />
<RatingBar label="Pressing" value={match.ratings?.[match.home.key]?.pressing ?? 0} />
<RatingBar label="Transition" value={match.ratings?.[match.home.key]?.transition ?? 0} />

<hr />

<h4>{match.away.name}</h4>

<RatingBar label="Attack" value={match.ratings?.[match.away.key]?.attack ?? 0} />
<RatingBar label="Defense" value={match.ratings?.[match.away.key]?.defense ?? 0} />
<RatingBar label="Pressing" value={match.ratings?.[match.away.key]?.pressing ?? 0} />
<RatingBar label="Transition" value={match.ratings?.[match.away.key]?.transition ?? 0} />
        </div>

        {/* SCOUTING */}
        <div style={styles.card}>
          <h3>Scouting Report</h3>

          <h4>Injury Status</h4>
          <p>{home.name}: {match.scouting?.injury?.home}</p>
          <p>{away.name}: {match.scouting?.injury?.away}</p>

          <hr />

          <h4>Matchup Weakness</h4>
          <p>{home.name} weakness: {match.scouting?.weakness?.home}</p>
          <p>{away.name} weakness: {match.scouting?.weakness?.away}</p>

          <hr />

          <h4>Match Summary</h4>
          <p>{match.scouting?.summary}</p>
        </div>

        {/* TACTICS */}
        <div style={styles.card}>
  <h3>Tactical Analysis</h3>

  <h4>{match.home.name}</h4>
  <p>{match.tactics?.[match.home.key]?.style ?? "No data"}</p>

  <h4>{match.away.name}</h4>
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
        <div style={styles.card}>
          <h3>Match Insight</h3>

          <p>Expected game style: {match.analysis?.insight?.style}</p>
          <p>Key battle: {match.analysis?.insight?.keyBattle}</p>
          <p>Risk factor: {match.analysis?.insight?.risk}</p>
        </div>

        {/* PREDICTION */}
        <div style={styles.card}>
  <h3>Match Prediction</h3>

  <p>
    {home.name} Win Probability: {match.analysis?.prediction?.home}%
  </p>
  <p>
    {away.name} Win Probability: {match.analysis?.prediction?.away}%
  </p>
  <p>Draw Probability: {match.analysis?.prediction?.draw}%</p>

  <hr />

  <h3>Best Bets</h3>

  <p>• {match.analysis?.bestBets?.bet1 || "N/A"}</p>
<p>• {match.analysis?.bestBets?.bet2 || "N/A"}</p>
<p>• {match.analysis?.bestBets?.bet3 || "N/A"}</p>
</div>

        {/* OUTLOOK */}
        <div style={styles.card}>
          <h3>Match Outlook</h3>

          <h4>Game Flow Prediction</h4>
          <p>{match.analysis?.outlook?.flow}</p>

          <hr />

          <h4>Key Deciding Factors</h4>
          {match.analysis?.outlook?.factors?.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}

          <hr />

          <h4>Edge Summary</h4>
          <p>{match.analysis?.outlook?.edge}</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
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