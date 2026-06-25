import { wnbaTeamStats } from "../data/wnbaTeamStats";
import "./Wnba.css";

export default function WnbaTeamStats() {
  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">WNBA</p>
        <h1 className="wnba-report-title">Team Stats</h1>
        <p className="wnba-muted">
          Offensive rating, defensive rating, net rating, pace, shot quality,
          turnover profile, rebounding, free-throw rate, and opponent metrics.
        </p>
      </section>

      <section className="wnba-table-card">
        <div className="wnba-table-wrap">
          <table className="wnba-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>ORtg</th>
                <th>DRtg</th>
                <th>Net</th>
                <th>Pace</th>
                <th>eFG%</th>
                <th>TS%</th>
                <th>TOV%</th>
                <th>REB%</th>
                <th>FT Rate</th>
                <th>3PA Rate</th>
                <th>Paint</th>
                <th>Fast Break</th>
                <th>Opp eFG%</th>
                <th>Opp TOV%</th>
              </tr>
            </thead>

            <tbody>
              {wnbaTeamStats.map((team) => (
                <tr key={team.id}>
                  <td>{team.team}</td>
                  <td>{team.offensiveRating ?? "needs update"}</td>
                  <td>{team.defensiveRating ?? "needs update"}</td>
                  <td>{team.netRating ?? "needs update"}</td>
                  <td>{team.pace ?? "needs update"}</td>
                  <td>{team.efg ?? "needs update"}</td>
                  <td>{team.ts ?? "needs update"}</td>
                  <td>{team.turnoverRate ?? "needs update"}</td>
                  <td>{team.reboundRate ?? "needs update"}</td>
                  <td>{team.freeThrowRate ?? "needs update"}</td>
                  <td>{team.threePointRate ?? "needs update"}</td>
                  <td>{team.pointsInPaint ?? "needs update"}</td>
                  <td>{team.fastBreakPoints ?? "needs update"}</td>
                  <td>{team.opponentEfg ?? "needs update"}</td>
                  <td>{team.opponentTurnoverRate ?? "needs update"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}