import { Link } from "react-router-dom";
import { matches, globalAssets } from "../data/matches";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>World Cup Dashboard</h1>

      {/* HERO SECTION */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <img
          src={globalAssets.trophy}
          alt="trophy"
          style={{ width: "180px", height: "180px", objectFit: "contain" }}
        />

        <img
          src={globalAssets.ronaldo}
          alt="ronaldo"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* MATCH LIST */}
      <div style={styles.grid}>
        {Object.entries(matches).map(([id, match]) => (
          <Link key={id} to={`/match/${id}`} style={styles.card}>
            <h3>
              {match.home.name} vs {match.away.name}
            </h3>

            <p>{match.group}</p>
            <p>{match.kickoff.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px"
  },

  card: {
    background: "#111827",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none"
  }
};