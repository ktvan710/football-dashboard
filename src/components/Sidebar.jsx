import { useState } from "react";
import { Link } from "react-router-dom";
import { matches } from "../data/matches";

function getEmoji(team) {
  const emojis = {
    USA: "🇺🇸",
    Australia: "🇦🇺",
    Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    Morocco: "🇲🇦",
    Brazil: "🇧🇷",
    Haiti: "🇭🇹",
    Turkey: "🇹🇷",
    Paraguay: "🇵🇾",
    Netherlands: "🇳🇱",
  Sweden: "🇸🇪",
  Germany: "🇩🇪",
  "Ivory Coast": "🇨🇮",
  Ecuador: "🇪🇨",
  Curacao: "🇨🇼",
  Tunisia: "🇹🇳",
  Japan: "🇯🇵"
  };

  return emojis[team] || "⚽";
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

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);

  const matchEntries = Object.entries(matches);

  const upcomingMatches = matchEntries.filter(([id, match]) => {
    return getMatchStatus(match.kickoff.date) !== "FT";
  });

  const completedMatches = matchEntries.filter(([id, match]) => {
    return getMatchStatus(match.kickoff.date) === "FT";
  });

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button onClick={() => setOpen(!open)} style={styles.toggle}>
        ☰
      </button>

      {/* SIDEBAR */}
      <div
        style={{
          ...styles.sidebar,
          transform: open ? "translateX(0)" : "translateX(-260px)"
        }}
      >
        {/* HOME */}
        <Link className="sidebar-link" to="/">
        Home
        </Link>

        {/* UPCOMING MATCHES */}
        <p style={styles.sectionTitle}>Upcoming Board</p>

        {upcomingMatches.length > 0 ? (
          upcomingMatches.map(([id, match]) => (
            <Link
              key={id}
              className="sidebar-link"
              to={`/match/${id}`}
            >
              {getEmoji(match.home.name)} {match.home.name}
              {" vs "}
              {match.away.name} {getEmoji(match.away.name)}
            </Link>
          ))
        ) : (
          <p style={styles.emptyText}>No upcoming matches</p>
        )}

        {/* COMPLETED MATCHES COLLAPSIBLE */}
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          style={styles.collapseButton}
        >
          <span>{showCompleted ? "▾" : "▸"} Completed</span>
          <span style={styles.countBadge}>{completedMatches.length}</span>
        </button>

        {showCompleted &&
          completedMatches.map(([id, match]) => {
            const hasScore =
              match.score?.home !== undefined &&
              match.score?.away !== undefined;

            return (
              <Link
                key={id}
                className="sidebar-link"
                to={`/match/${id}`}
              >
                {getEmoji(match.home.name)} {match.home.name}
                {hasScore ? (
                  <>
                    {" "}
                    {match.score.home} - {match.score.away}
                    {" "}
                  </>
                ) : (
                  " vs "
                )}
                {match.away.name} {getEmoji(match.away.name)}
              </Link>
            );
          })}
      </div>
    </>
  );
}

const styles = {
  sidebar: {
    width: "300px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,

    background: "rgba(2, 6, 23, 0.65)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    borderRight: "1px solid rgba(148, 163, 184, 0.2)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)",

    padding: "20px",
    display: "flex",
    flexDirection: "column",

    transition: "0.35s ease",
    overflowY: "auto"
  },

  toggle: {
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 999,

    background: "#0f172a",
    color: "#f8fafc",
    border: "1px solid #334155",
    borderRadius: "10px",
    padding: "8px 12px",
    cursor: "pointer"
  },

  sectionTitle: {
    color: "#f8fafc",
    fontSize: "13px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    textAlign: "left",
    margin: "18px 0 10px"
  },

  collapseButton: {
    marginTop: "18px",
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "#f8fafc",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  countBadge: {
    background: "#1e293b",
    color: "#94a3b8",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "12px"
  },

  emptyText: {
    color: "#64748b",
    fontSize: "14px",
    textAlign: "left",
    marginBottom: "10px"
  }
};

export default Sidebar;