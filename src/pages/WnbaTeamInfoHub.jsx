import { Link } from "react-router-dom";
import { wnbaTeams } from "../data/wnbaTeams";
import "./Wnba.css";

export default function WnbaTeamInfoHub() {
  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">WNBA Team Info</p>
        <h1 className="wnba-report-title">Team Reports</h1>
        <p className="wnba-muted">
          Team identities, advanced stats, matchup profiles, strengths,
          weaknesses, and scouting summaries.
        </p>
      </section>

      <section className="wnba-team-grid">
        {wnbaTeams.map((team) => (
          <Link
            key={team.id}
            to={`/wnba/team-info/${team.id}`}
            className="wnba-card"
          >
            <h2 className="wnba-card-title">{team.name}</h2>
            <p className="wnba-muted">
              {team.city} • {team.conference} Conference
            </p>
            <div className="wnba-pill-row">
              <span className="wnba-pill">Record: {team.record}</span>
              <span className="wnba-pill">Arena: {team.arena}</span>
              <span className="wnba-pill">Star: {team.starPlayer}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}