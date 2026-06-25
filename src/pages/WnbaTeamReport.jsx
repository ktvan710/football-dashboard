import { Link, useParams } from "react-router-dom";
import { wnbaTeamMap } from "../data/wnbaTeams";
import "./Wnba.css";

function value(item) {
  if (item === null || item === undefined || item === "") return "needs update";
  return item;
}

export default function WnbaTeamReport() {
  const { teamId } = useParams();
  const team = wnbaTeamMap[teamId];

  if (!team) {
    return (
      <main className="wnba-page">
        <div className="wnba-card">
          <h1 className="wnba-card-title">Team not found</h1>
          <Link to="/wnba/team-info" className="wnba-primary-btn">
            Back to WNBA Teams
          </Link>
        </div>
      </main>
    );
  }

  const statRows = [
    ["Offensive Rating", team.stats.offensiveRating],
    ["Defensive Rating", team.stats.defensiveRating],
    ["Net Rating", team.stats.netRating],
    ["Pace", team.stats.pace],
    ["eFG%", team.stats.efg],
    ["TS%", team.stats.ts],
    ["3P Rate", team.stats.threePointRate],
    ["FT Rate", team.stats.freeThrowRate],
    ["Turnover %", team.stats.turnoverRate],
    ["Assist %", team.stats.assistRate],
    ["Rebound Rate", team.stats.reboundRate],
    ["Clutch Net Rating", team.stats.clutchNetRating],
    ["Home Net Rating", team.stats.homeNetRating],
    ["Away Net Rating", team.stats.awayNetRating],
    ["Last 5 Net Rating", team.stats.lastFiveNetRating]
  ];

  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">{team.conference} Conference</p>
        <h1 className="wnba-report-title">{team.name}</h1>

        <div className="wnba-pill-row">
          <span className="wnba-pill">City: {team.city}</span>
          <span className="wnba-pill">Arena: {team.arena}</span>
          <span className="wnba-pill">Coach: {team.coach}</span>
          <span className="wnba-pill">Record: {team.record}</span>
          <span className="wnba-pill">Star: {team.starPlayer}</span>
          <span className="wnba-pill">X-factor: {team.xFactor}</span>
        </div>

        <p className="wnba-muted">{team.injuryStatusSummary}</p>
      </section>

      <section className="wnba-two-col">
        <div className="wnba-card">
          <h2 className="wnba-card-title">Team Identity</h2>
          <p className="wnba-muted">Offense: {team.offensiveIdentity}</p>
          <p className="wnba-muted">Defense: {team.defensiveIdentity}</p>
          <p className="wnba-muted">Pace: {team.paceIdentity}</p>
          <p className="wnba-muted">Shot profile: {team.shotProfile}</p>
          <p className="wnba-muted">Three-point style: {team.threePointStyle}</p>
          <p className="wnba-muted">Rim pressure: {team.rimPressure}</p>
          <p className="wnba-muted">Pick-and-roll: {team.pickAndRollStyle}</p>
          <p className="wnba-muted">Transition: {team.transitionStyle}</p>
          <p className="wnba-muted">Rebounding: {team.reboundingIdentity}</p>
          <p className="wnba-muted">Late-game: {team.lateGameIdentity}</p>
        </div>

        <div className="wnba-card">
          <h2 className="wnba-card-title">Key Players</h2>
          <p className="wnba-muted">Star: {team.keyPlayers.star}</p>
          <p className="wnba-muted">Creator: {team.keyPlayers.creator}</p>
          <p className="wnba-muted">Shooter: {team.keyPlayers.shooter}</p>
          <p className="wnba-muted">Defender: {team.keyPlayers.defender}</p>
          <p className="wnba-muted">Rebounder: {team.keyPlayers.rebounder}</p>
          <p className="wnba-muted">Bench scorer: {team.keyPlayers.benchScorer}</p>
          <p className="wnba-muted">X-factor: {team.keyPlayers.xFactor}</p>
          <p className="wnba-muted">Breakout: {team.keyPlayers.breakout}</p>
        </div>
      </section>

      <h2 className="wnba-section-title">Strengths</h2>
      <section className="wnba-card">
        <ul className="wnba-bullet-list">
          {team.strengths.map((item) => (
            <li key={item.label}>
              {item.label} — {item.source} / {item.confidence}
            </li>
          ))}
        </ul>
      </section>

      <h2 className="wnba-section-title">Weaknesses</h2>
      <section className="wnba-card">
        <ul className="wnba-bullet-list">
          {team.weaknesses.map((item) => (
            <li key={item.label}>
              {item.label} — {item.source} / {item.confidence}
            </li>
          ))}
        </ul>
      </section>

      <h2 className="wnba-section-title">Advanced Team Stats</h2>
      <section className="wnba-table-card">
        <div className="wnba-table-wrap">
          <table className="wnba-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Source</th>
                <th>Confidence</th>
              </tr>
            </thead>

            <tbody>
              {statRows.map(([metric, statValue]) => (
                <tr key={metric}>
                  <td>{metric}</td>
                  <td>{value(statValue)}</td>
                  <td>WNBA.com Stats / Her Hoop Stats</td>
                  <td>low until updated</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="wnba-section-title">Matchup Profile</h2>
      <section className="wnba-card">
        {Object.entries(team.matchupProfile).map(([key, item]) => (
          <p className="wnba-muted" key={key}>
            <strong>{key}:</strong> {item}
          </p>
        ))}
      </section>

      <h2 className="wnba-section-title">Team Report Summary</h2>
      <section className="wnba-card">
        {team.reportSummary.map((paragraph) => (
          <p className="wnba-muted" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}   