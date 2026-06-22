import { useState } from "react";
import { Link } from "react-router-dom";
import { matches } from "../data/matches";

function getFlagEmoji(code, teamName) {
  const flagEmojis = {
    us: "🇺🇸",
    au: "🇦🇺",
    br: "🇧🇷",
    ht: "🇭🇹",
    tr: "🇹🇷",
    py: "🇵🇾",
    ma: "🇲🇦",
    "gb-sct": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    nl: "🇳🇱",
    se: "🇸🇪",
    de: "🇩🇪",
    ci: "🇨🇮",
    ec: "🇪🇨",
    cw: "🇨🇼",
    tn: "🇹🇳",
    jp: "🇯🇵",
    es: "🇪🇸",
    sa: "🇸🇦",
    be: "🇧🇪",
    ir: "🇮🇷",
    uy: "🇺🇾",
    cv: "🇨🇻",
    nz: "🇳🇿",
    eg: "🇪🇬",
    ar: "🇦🇷",
at: "🇦🇹",
fr: "🇫🇷",
iq: "🇮🇶",
no: "🇳🇴",
sn: "🇸🇳",
jo: "🇯🇴",
dz: "🇩🇿"
  };

  const nameFallbacks = {
    "United States": "🇺🇸",
    Australia: "🇦🇺",
    Brazil: "🇧🇷",
    Haiti: "🇭🇹",
    Turkey: "🇹🇷",
    Paraguay: "🇵🇾",
    Morocco: "🇲🇦",
    Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    Netherlands: "🇳🇱",
    Sweden: "🇸🇪",
    Germany: "🇩🇪",
    "Ivory Coast": "🇨🇮",
    Ecuador: "🇪🇨",
    Curacao: "🇨🇼",
    Tunisia: "🇹🇳",
    Japan: "🇯🇵",
    Spain: "🇪🇸",
    "Saudi Arabia": "🇸🇦",
    Belgium: "🇧🇪",
    Iran: "🇮🇷",
    Uruguay: "🇺🇾",
    "Cape Verde": "🇨🇻",
    "New Zealand": "🇳🇿",
    Egypt: "🇪🇬",
    Argentina: "🇦🇷",
Austria: "🇦🇹",
France: "🇫🇷",
Iraq: "🇮🇶",
Norway: "🇳🇴",
Senegal: "🇸🇳",
Jordan: "🇯🇴",
Algeria: "🇩🇿"
  };

  return flagEmojis[code] || nameFallbacks[teamName] || "🏳️";
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

function Sidebar({ open, setOpen }) {
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
          transform: open ? "translateX(0)" : "translateX(-250px)"
        }}
      >
        {/* HOME */}
        <Link className="sidebar-link" style={styles.homeLink} to="/">
  🏠 Home
</Link>



<div style={styles.scrollArea} className="sidebar-scrollbar">
  <p style={styles.sectionTitle}>Upcoming Board</p>

        {upcomingMatches.length > 0 ? (
          upcomingMatches.map(([id, match]) => (
            <Link
  key={id}
  className="sidebar-link"
  style={styles.matchLink}
  to={`/match/${id}`}
>
             {getFlagEmoji(match.home.code, match.home.name)} {match.home.name}
{" vs "}
{match.away.name} {getFlagEmoji(match.away.code, match.away.name)}
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
  style={styles.matchLink}
  to={`/match/${id}`}
>
                {getFlagEmoji(match.home.code, match.home.name)} {match.home.name}
{hasScore ? (
  <>
    {" "}
    {match.score.home} - {match.score.away}
    {" "}
  </>
) : (
  " vs "
)}
{match.away.name} {getFlagEmoji(match.away.code, match.away.name)}
              </Link>
            );
          })}
      </div>
     </div> 
    </>
  );
}

const styles = {
  sidebar: {
  width: "250px",
  height: "100dvh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2000,
  boxSizing: "border-box",

  background: "#050505",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",

  borderRight: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "none",

  padding: "14px",
  display: "flex",
  flexDirection: "column",

  transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
  overflow: "hidden"
},

  toggle: {
  position: "fixed",
  top: "15px",
  left: open ? "15px" : "15px",
  zIndex: 1001,

  background: "#0f172a",
  color: "#f8fafc",
  border: "1px solid #334155",
  borderRadius: "10px",
  padding: "8px 12px",
  cursor: "pointer"
},

  sectionTitle: {
  color: "#f8fafc",
  fontSize: "11px",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  textAlign: "left",
  margin: "10px 0 7px",
  fontFamily: "var(--heading)"
},

  collapseButton: {
  marginTop: "10px",
  marginBottom: "8px",
  padding: "7px 8px",
  borderRadius: "9px",
  border: "1px solid #334155",
  background: "#1f1f1f",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "none",
  color: "#f8fafc",
  cursor: "pointer",
  fontWeight: "800",
  fontSize: "11px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "var(--sans)"
},

  countBadge: {
  background: "#1e293b",
  color: "#94a3b8",
  padding: "1px 6px",
  borderRadius: "999px",
  fontSize: "10px"
},
  scrollArea: {
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "4px",
  paddingBottom: "20px"
},

homeLink: {
  padding: "9px 10px",
  borderRadius: "10px",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "900",
  background: "#1f1f1f",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "none"
},

matchLink: {
  padding: "5px 7px",
  borderRadius: "8px",
  marginBottom: "4px",
  fontSize: "11px",
  lineHeight: "1.15",
  minHeight: "auto",
  whiteSpace: "normal",
  background: "#1f1f1f",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "none"
},

  emptyText: {
    color: "#64748b",
    fontSize: "14px",
    textAlign: "left",
    marginBottom: "10px",
    background: "#1f1f1f",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "none"
  }
};

export default Sidebar;