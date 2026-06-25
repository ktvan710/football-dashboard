import { Link, useParams } from "react-router-dom";
import { wnbaFixtures } from "../data/wnbaFixtures";
import { getWnbaTeamByName } from "../data/wnbaTeams";
import "./Wnba.css";

function formatValue(value) {
  if (value === null || value === undefined || value === "") return "needs update";
  return value;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(date));
}

function metricRows(homeTeam, awayTeam) {
  return [
    ["Offensive Rating", "offensiveRating"],
    ["Defensive Rating", "defensiveRating"],
    ["Net Rating", "netRating"],
    ["Pace", "pace"],
    ["eFG%", "efg"],
    ["TS%", "ts"],
    ["3PA Rate", "threePointRate"],
    ["FT Rate", "freeThrowRate"],
    ["Turnover %", "turnoverRate"],
    ["Assist %", "assistRate"],
    ["Offensive Rebound %", "offensiveReboundRate"],
    ["Defensive Rebound %", "defensiveReboundRate"],
    ["Points in Paint", "pointsInPaint"],
    ["Fast Break Points", "fastBreakPoints"],
    ["Opponent eFG%", "opponentEfg"],
    ["Opponent Turnover Rate", "opponentTurnoverRate"],
    ["Clutch Net Rating", "clutchNetRating"],
    ["Home/Away Net Rating", "homeNetRating"],
    ["Last 5 Net Rating", "lastFiveNetRating"]
  ].map(([metric, key]) => ({
    metric,
    home: homeTeam?.stats?.[key] ?? null,
    away: awayTeam?.stats?.[key] ?? null,
    edge: "needs update",
    source: "WNBA.com Stats / Her Hoop Stats",
    confidence: "low",
    note: "Verified data needed before assigning edge."
  }));
}

export default function WnbaMatchPage() {
  const { id } = useParams();
  const fixture = wnbaFixtures[id];

  if (!fixture) {
    return (
      <main className="wnba-page">
        <div className="wnba-card">
          <h1 className="wnba-card-title">Match not found</h1>
          <p className="wnba-muted">This WNBA fixture does not exist yet.</p>
          <Link to="/wnba" className="wnba-primary-btn">
            Back to WNBA
          </Link>
        </div>
      </main>
    );
  }

  const homeTeam = getWnbaTeamByName(fixture.home);
  const awayTeam = getWnbaTeamByName(fixture.away);
  const rows = metricRows(homeTeam, awayTeam);

  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">{fixture.competition}</p>
        <h1 className="wnba-report-title">
          {fixture.home} vs {fixture.away}
        </h1>

        <div className="wnba-pill-row">
          <span className="wnba-pill">{formatDate(fixture.date)}</span>
          <span className="wnba-pill">{fixture.arena}</span>
          <span className="wnba-pill">
            Records: {fixture.records.home} / {fixture.records.away}
          </span>
          <span className="wnba-pill">Rest: {fixture.restDays.home} / {fixture.restDays.away}</span>
          <span className="wnba-pill">Travel: {fixture.travelSpot}</span>
        </div>

        <p className="wnba-muted">{fixture.injuryNote}</p>
      </section>

      <section className="wnba-two-col">
        <div className="wnba-card">
          <h2 className="wnba-card-title">Quick Verdict</h2>
          <ul className="wnba-bullet-list">
            {fixture.quickVerdict.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="wnba-card">
          <h2 className="wnba-card-title">Prediction Model</h2>
          <div className="wnba-pill-row">
            <span className="wnba-pill">Home: {formatValue(fixture.prediction.homeWin)}</span>
            <span className="wnba-pill">Away: {formatValue(fixture.prediction.awayWin)}</span>
            <span className="wnba-pill">Confidence: {formatValue(fixture.prediction.confidence)}</span>
            <span className="wnba-pill">Volatility: {formatValue(fixture.prediction.volatility)}</span>
            <span className="wnba-pill">Data: {fixture.prediction.dataConfidence}</span>
          </div>
          <p className="wnba-muted">Model lean: {fixture.prediction.modelLean}</p>
          <p className="wnba-muted">Tactical lean: {fixture.prediction.tacticalLean}</p>
          <p className="wnba-muted">
            Why it could fail: {fixture.prediction.whyItCouldBeWrong}
          </p>
        </div>
      </section>

      <h2 className="wnba-section-title">Team Form Snapshot</h2>
      <section className="wnba-two-col">
        {[homeTeam, awayTeam].map((team) => (
          <div className="wnba-card" key={team?.id}>
            <h3 className="wnba-card-title">{team?.name}</h3>
            <p className="wnba-muted">Last 5: needs update</p>
            <p className="wnba-muted">Points scored per game: needs update</p>
            <p className="wnba-muted">Points allowed per game: needs update</p>
            <p className="wnba-muted">Net rating trend: {formatValue(team?.stats?.lastFiveNetRating)}</p>
            <p className="wnba-muted">Home/away split: needs update</p>
            <p className="wnba-muted">Key warning sign: needs update</p>
          </div>
        ))}
      </section>

      <h2 className="wnba-section-title">Tactical / Style Identity</h2>
      <section className="wnba-two-col">
        {[homeTeam, awayTeam].map((team) => (
          <div className="wnba-card" key={`${team?.id}-style`}>
            <h3 className="wnba-card-title">{team?.name}</h3>
            <p className="wnba-muted">Offense: {team?.offensiveIdentity}</p>
            <p className="wnba-muted">Defense: {team?.defensiveIdentity}</p>
            <p className="wnba-muted">Pace: {team?.paceIdentity}</p>
            <p className="wnba-muted">Shot profile: {team?.shotProfile}</p>
            <p className="wnba-muted">Three-point style: {team?.threePointStyle}</p>
            <p className="wnba-muted">Rim pressure: {team?.rimPressure}</p>
            <p className="wnba-muted">Pick-and-roll: {team?.pickAndRollStyle}</p>
            <p className="wnba-muted">Biggest weakness: needs update</p>
          </div>
        ))}
      </section>

      <h2 className="wnba-section-title">Statistical Dashboard</h2>
      <section className="wnba-table-card">
        <div className="wnba-table-wrap">
          <table className="wnba-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>{fixture.home}</th>
                <th>{fixture.away}</th>
                <th>Edge</th>
                <th>Source</th>
                <th>Confidence</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.metric}>
                  <td>{row.metric}</td>
                  <td>{formatValue(row.home)}</td>
                  <td>{formatValue(row.away)}</td>
                  <td>{row.edge}</td>
                  <td>{row.source}</td>
                  <td>{row.confidence}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="wnba-section-title">Key Player Battle</h2>
      <section className="wnba-card">
        <div className="wnba-pill-row">
          <span className="wnba-pill">Star vs star: needs update</span>
          <span className="wnba-pill">Creator matchup: needs update</span>
          <span className="wnba-pill">Frontcourt battle: needs update</span>
          <span className="wnba-pill">Bench scoring: needs update</span>
          <span className="wnba-pill">Rebounding matchup: needs update</span>
          <span className="wnba-pill">Turnover pressure: needs update</span>
        </div>
      </section>

      <h2 className="wnba-section-title">Player Watch</h2>
      <section className="wnba-two-col">
        {[homeTeam, awayTeam].map((team) => (
          <div className="wnba-card" key={`${team?.id}-watch`}>
            <h3 className="wnba-card-title">{team?.name}</h3>
            <p className="wnba-muted">Key scorer: {team?.keyPlayers.star}</p>
            <p className="wnba-muted">Key playmaker: {team?.keyPlayers.creator}</p>
            <p className="wnba-muted">Best defender: {team?.keyPlayers.defender}</p>
            <p className="wnba-muted">Best rebounder: {team?.keyPlayers.rebounder}</p>
            <p className="wnba-muted">X-factor: {team?.keyPlayers.xFactor}</p>
            <p className="wnba-muted">Injury concern: {team?.injuryStatusSummary}</p>
          </div>
        ))}
      </section>

      <h2 className="wnba-section-title">Game Script Scenarios</h2>
      <section className="wnba-card">
        <ul className="wnba-bullet-list">
          <li>If the home team starts hot: needs update from pace and shot profile.</li>
          <li>If the away team starts hot: needs update from defensive adjustment data.</li>
          <li>If the game is close entering the 4th: clutch data needed.</li>
          <li>If pace is fast: transition and turnover data needed.</li>
          <li>If pace is slow: half-court efficiency data needed.</li>
          <li>If one star gets into foul trouble: rotation and on/off data needed.</li>
        </ul>
      </section>
    </main>
  );
}