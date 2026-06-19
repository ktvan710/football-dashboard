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
    Paraguay: "🇵🇾"
  };

  return emojis[team] || "⚽";
}

function Sidebar() {
  const [open, setOpen] = useState(true);

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
          🏠 Home
        </Link>

        {/* MATCHES */}
        {Object.entries(matches).map(([id, match]) => (
          <Link
            key={id}
            className="sidebar-link"
            to={`/match/${id}`}
          >
            {getEmoji(match.home.name)} {match.home.name}
            {" vs "}
            {match.away.name} {getEmoji(match.away.name)}
          </Link>
        ))}
      </div>
    </>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,

    /* 🌫 GLASSMORPHISM */
    background: "rgba(2, 6, 23, 0.65)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    borderRight: "1px solid rgba(148, 163, 184, 0.2)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)",

    padding: "20px",
    display: "flex",
    flexDirection: "column",

    transition: "0.35s ease"
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
  }
};

export default Sidebar;