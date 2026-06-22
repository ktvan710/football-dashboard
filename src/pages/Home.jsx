import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { matches, countryFlags } from "../data/matches";
const HERO_TITLES = [
  "FIFA WORLD CUP 2026 DASHBOARD",
  "MADE BY KT"
];
const HOME_BACKGROUNDS = [
  "/images/backgrounds/worldcup-1.jpg",
  "/images/backgrounds/france.webp",
  "/images/backgrounds/brazil.png",
  "/images/backgrounds/germany.webp",
  "/images/backgrounds/argentina.webp",
  "/images/backgrounds/portugal.webp",
  "/images/backgrounds/spain.jpg",
  "/images/backgrounds/usa.jpg",
  "/images/backgrounds/japan.webp"
];
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function getCountdown(targetDate) {
  const target = Date.parse(targetDate);

  if (isNaN(target)) return null;

  const diff = target - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

function getMatchStatus(kickoffDate) {
  const matchTime = new Date(kickoffDate).getTime();

  if (isNaN(matchTime)) return "UPCOMING";

  const diff = matchTime - Date.now();
  const MATCH_DURATION = 125 * 60 * 1000;

  if (diff > 0) return "UPCOMING";

  if (Math.abs(diff) < MATCH_DURATION) {
    return "ACTIVE";
  }

  return "FT";
}

function MatchCard({ id, match }) {
  const status = getMatchStatus(match.kickoff.date);
  const countdown = getCountdown(match.kickoff.date);

  const hasScore =
    match.score?.home !== undefined &&
    match.score?.away !== undefined;

  return (
    <Link
      key={id}
      to={`/match/${id}`}
      className="match-card"
      style={styles.card}
    >
      {/* TEAMS */}
      <div style={styles.matchTitle}>
        <img
          src={countryFlags(match.home.code)}
          width="22"
          alt={match.home.name}
        />

        <span>{match.home.name}</span>

        {status === "FT" && hasScore ? (
          <span style={styles.scoreText}>
            {match.score.home} - {match.score.away}
          </span>
        ) : (
          <span>vs</span>
        )}

        <span>{match.away.name}</span>

        <img
          src={countryFlags(match.away.code)}
          width="22"
          alt={match.away.name}
        />
      </div>

      {/* GROUP */}
      <p>{match.group}</p>

      {/* DATE */}
      <p>
        {new Date(match.kickoff.date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kuala_Lumpur"
        })} MYT
      </p>

      {/* STATUS */}
      <p style={styles.statusText}>
  {status === "UPCOMING" && countdown ? (
    `⏳ ${countdown.days ?? 0}d ${countdown.hours ?? 0}h ${countdown.minutes ?? 0}m ${countdown.seconds ?? 0}s`
  ) : status === "ACTIVE" ? (
    "ACTIVE 🔴"
  ) : (
    "FT"
  )}
</p>
    </Link>
  );
}

export default function Home() {
  const [, forceUpdate] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false);
  const [heroTitleText, setHeroTitleText] = useState(HERO_TITLES[0]);
const [heroTitleIndex, setHeroTitleIndex] = useState(0);
const currentTitleRef = useRef(HERO_TITLES[0]);
const [bgIndex, setBgIndex] = useState(0);

useEffect(() => {
  HOME_BACKGROUNDS.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}, []);

useEffect(() => {
  const bgTimer = setInterval(() => {
    setBgIndex((current) => (current + 1) % HOME_BACKGROUNDS.length);
  }, 7000);

  return () => clearInterval(bgTimer);
}, []);
useEffect(() => {
  const swapTimer = setInterval(() => {
    setHeroTitleIndex((current) => (current + 1) % HERO_TITLES.length);
  }, 4300);

  return () => clearInterval(swapTimer);
}, []);

useEffect(() => {
  const target = HERO_TITLES[heroTitleIndex];
  const from = currentTitleRef.current;
  const maxLength = Math.max(from.length, target.length);

  let frame = 0;
  const totalFrames = 24;

  const animationTimer = setInterval(() => {
    frame += 1;

    const progress = frame / totalFrames;

    const nextText = Array.from({ length: maxLength })
      .map((_, index) => {
        const fromChar = from[index] || "";
        const targetChar = target[index] || "";
        const revealPoint = index / maxLength;

        if (progress > revealPoint + 0.22) {
          return targetChar;
        }

        if (targetChar === " " && progress > revealPoint) {
          return " ";
        }

        if (progress < revealPoint) {
          return fromChar;
        }

        return SCRAMBLE_CHARS[
          Math.floor(Math.random() * SCRAMBLE_CHARS.length)
        ];
      })
      .join("")
      .trimEnd();

    setHeroTitleText(nextText);

    if (frame >= totalFrames) {
      clearInterval(animationTimer);
      currentTitleRef.current = target;
      setHeroTitleText(target);
    }
  }, 32);

  return () => clearInterval(animationTimer);
}, [heroTitleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((v) => v + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const matchEntries = Object.entries(matches);

  const upcomingMatches = matchEntries.filter(([id, match]) => {
    return getMatchStatus(match.kickoff.date) !== "FT";
  });

  const completedMatches = matchEntries.filter(([id, match]) => {
    return getMatchStatus(match.kickoff.date) === "FT";
  });

  return (
  <div style={styles.homeShell}>
    <div style={styles.homeBackgroundStage}>
      {HOME_BACKGROUNDS.map((image, index) => (
        <div
          key={image}
          className={`home-bg-image ${index === bgIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
    </div>

    <div style={styles.homeDarkOverlay} />

    <div style={styles.page}>
      {/* HERO SECTION */}
      

      {/* UPCOMING / ACTIVE MATCHES */}
      <h2 style={styles.sectionTitle}>Upcoming Board</h2>

      <div style={styles.grid}>
        {upcomingMatches.length > 0 ? (
          upcomingMatches.map(([id, match]) => (
            <MatchCard key={id} id={id} match={match} />
          ))
        ) : (
          <p style={styles.emptyText}>No upcoming matches.</p>
        )}
      </div>

      {/* COMPLETED MATCHES COLLAPSIBLE */}
      <button
        onClick={() => setShowCompleted(!showCompleted)}
        style={styles.collapseButton}
      >
        <span>
          {showCompleted ? "▾" : "▸"} Completed Results
        </span>

        <span style={styles.completedCount}>
          {completedMatches.length}
        </span>
      </button>

      {showCompleted && (
        <div style={styles.grid}>
          {completedMatches.length > 0 ? (
            completedMatches.map(([id, match]) => (
              <MatchCard key={id} id={id} match={match} />
            ))
          ) : (
            <p style={styles.emptyText}>No completed matches yet.</p>
          )}
        </div>
      )}
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

  heroTitle: {
    marginBottom: "5px",
    fontWeight: "800",
    fontSize: "60px",
    lineHeight: "1.1",
    letterSpacing: "0.5px",
    paddingTop: "0px",
    paddingBottom: "0px",
    textAlign: "center",

    background: "linear-gradient(90deg, #d4af37, #6edc19, #facc15)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientMove 4s ease infinite",

    fontFamily: "var(--heading)"
  },

  subtitle: {
    color: "rgba(255,255,255,0.85)",
    marginTop: "12px"
  },
homeShell: {
  position: "relative",
  minHeight: "100vh",
  isolation: "isolate"
},

homeBackgroundStage: {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: "var(--sidebar-width)",
  zIndex: -3,
  overflow: "hidden",
  pointerEvents: "none",
  background: "#020617",
  transition: "left 0.55s cubic-bezier(0.16, 1, 0.3, 1)"
},

homeDarkOverlay: {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: "var(--sidebar-width)",
  zIndex: -2,
  pointerEvents: "none",

  background:
    "radial-gradient(circle at top, rgba(56,189,248,0.14), transparent 34%), linear-gradient(135deg, rgba(2,6,23,0.78), rgba(15,23,42,0.58), rgba(2,6,23,0.82))",

  transition: "left 0.55s cubic-bezier(0.16, 1, 0.3, 1)"
},
  hero: {
  background: "rgba(15, 23, 42, 0.76)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderRadius: "20px",
  padding: "25px",
  marginBottom: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid rgba(212,175,55,0.65)",
  boxShadow: "0 18px 45px rgba(0,0,0,0.42)"
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
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  boxShadow: "none",
  color: "#f5f5f5",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  padding: "14px 16px",
  textDecoration: "none",
  border: "1px solid rgba(212,175,55,0.52)",
  transition: "0.2s ease"
},

  matchTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "20px",
    marginBottom: "10px",
    fontFamily: "var(--sans)",
    fontWeight: "600",
    flexWrap: "wrap"
  },

  sectionTitle: {
    color: "#f8fafc",
    textAlign: "left",
    margin: "30px 0 15px",
    fontSize: "40px",
    fontWeight: "800",
    fontFamily: "var(--heading)",
    letterSpacing: "2px"
  },

  statusText: {
    color: "#94a3b8",
    marginTop: "10px",
    fontWeight: "700"
  },

  emptyText: {
    color: "#94a3b8",
    textAlign: "left"
  },

  scoreText: {
    background: "#1f1f1f",
    color: "#facc15",
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: "900",
    border: "1px solid #334155",
    fontFamily: "var(--score)",
    fontSize: "20px",
    letterSpacing: "0.5px"
  },

  collapseButton: {
  width: "100%",
  margin: "35px 0 15px",
  padding: "14px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#1f1f1f",
  color: "#f8fafc",
  fontSize: "24px",
  fontWeight: "900",
  fontFamily: "var(--heading)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  textAlign: "left",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
},

  completedCount: {
    background: "#0f172a",
    color: "#94a3b8",
    padding: "2px 10px",
    borderRadius: "999px",
    fontSize: "16px"
  }
};