import { Link } from "react-router-dom";
import "../pages/Wnba.css";

const navItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Overview",
    path: "/wnba"
  },
  {
    label: "Fixtures",
    path: "/wnba/fixtures"
  },
  {
    label: "Standings",
    path: "/wnba/standings"
  },
  {
    label: "Team Info",
    path: "/wnba/team-info"
  },
  {
    label: "Player Stats",
    path: "/wnba/player-stats"
  },
  {
    label: "Team Stats",
    path: "/wnba/team-stats"
  }
];

export default function WnbaTopNav({ currentPath }) {
  return (
    <nav className="wnba-top-nav">
      <div className="wnba-top-nav-hero">
        <Link to="/" className="wnba-competition-identity">
          <div className="wnba-competition-logo">🏀</div>

          <div>
            <p className="wnba-competition-title">KT Picks</p>
            <p className="wnba-competition-subtitle">WNBA Intelligence Hub</p>
          </div>
        </Link>

        <div className="wnba-top-nav-tabs">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? currentPath === "/"
                : currentPath === item.path ||
                  currentPath.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={
                  isActive
                    ? "wnba-top-nav-tab wnba-top-nav-tab-active"
                    : "wnba-top-nav-tab"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}