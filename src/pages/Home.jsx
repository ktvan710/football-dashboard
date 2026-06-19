import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { matches, countryFlags, globalAssets } from "../data/matches";

function getCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!targetDate) return;

    function update() {
      const now = Date.now();
      const target = Date.parse(targetDate); // 🔥 FIX

      if (isNaN(target)) return;

      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ done: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
function getMatchStatus(kickoffDate) {
    
  const matchTime = new Date(kickoffDate).getTime();

  if (isNaN(matchTime)) return "UPCOMING"; // 🔥 FIX

  const now = Date.now();
  const diff = matchTime - now;

  if (diff > 0) return "UPCOMING";

  if (diff <= 0 && diff > -2 * 60 * 60 * 1000) {
    return "LIVE";
  }

  return "FT";
}
export default function Home() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <div style={styles.hero} className="gold-animated">
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
  FIFA World Cup 2026 Dashboard
</h1>

          <p style={styles.subtitle}>
            Match analysis, tactical reports, scouting insights.
          </p>
        </div>

        <div style={{ fontSize: "70px" }}>🏆</div>
      </div>

      {/* HERO IMAGES */}
      <div style={styles.imageRow}>
        <img
          src={globalAssets.trophy}
          alt="trophy"
          style={styles.image}
        />

        <img
          src={globalAssets.ronaldo}
          alt="ronaldo"
          style={{ ...styles.image, borderRadius: "12px" }}
        />
      </div>

      {/* MATCH LIST */}
      <div style={styles.grid}>

  {Object.entries(matches).map(([id, match]) => {

  const status = getMatchStatus(match.kickoff.date);
const countdown = getCountdown(match.kickoff.date);

  return (
    <Link
      key={id}
      to={`/match/${id}`}
      className="match-card"
      style={styles.card}
    >

      {/* TEAMS */}
      <div style={styles.matchTitle}>
        <img src={countryFlags(match.home.code)} width="22" />
        <span>{match.home.name}</span>

        <span>vs</span>

        <span>{match.away.name}</span>

        <img src={countryFlags(match.away.code)} width="22" />
      </div>

      {/* GROUP */}
      <p>{match.group}</p>

      {/* DATE */}
      <p>{match.kickoff.date}</p>

      {/* ⚽ STEP 3 — STATUS + COUNTDOWN (PUT HERE) */}
      <p style={{ color: "#94a3b8", marginTop: "10px" }}>
        {status === "UPCOMING" && countdown ? (
          `⏳ ${countdown.days ?? 0}d ${countdown.hours ?? 0}h ${countdown.minutes ?? 0}m ${countdown.seconds ?? 0}s`
        ) : status === "LIVE" ? (
          "LIVE 🔴"
        ) : (
          "FT"
        )}
      </p>

      {/* CTA */}
      <p>View Analysis →</p>

    </Link>
  );
})}
</div>
    </div>
  );
}

const styles = {
  page: {
  color: "#f8fafc",
  maxWidth: "1100px",
  margin: "0 auto"
},

heroTitle: {
  marginBottom: "10px",
  fontWeight: "800",
  fontSize: "40px",
  lineHeight: "1.3",
letterSpacing: "-0.5px",          // 🔥 FIXES CUT OFF
  paddingTop: "6px",          // 🔥 gives breathing room
  paddingBottom: "6px",

  background: "linear-gradient(90deg, #d4af37, #38bdf8, #facc15)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientMove 4s ease infinite",

  fontFamily: "Montserrat, sans-serif"
},
subtitle: {
  color: "rgba(255,255,255,0.85)",
  marginTop: "12px"
},
  hero: {
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  borderRadius: "20px",
  padding: "25px",
  marginBottom: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  border: "2px solid #d4af37",
  boxShadow: "0 10px 35px rgba(212,175,55,0.15)"
},

  heroText: {
    textAlign: "left"
  },

  imageRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px"
  },

  image: {
    width: "180px",
    height: "180px",
    objectFit: "contain"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  },

  card: {
  background: "#1e293b",
  color: "#f8fafc",
  padding: "22px",
  borderRadius: "18px",
  textDecoration: "none",
  border: "1px solid #d4af37",
  boxShadow: "0 10px 30px rgba(212,175,55,0.15)",
  transition: "0.2s ease"
},

  matchTitle: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontSize: "18px",
  marginBottom: "10px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600"
}
};