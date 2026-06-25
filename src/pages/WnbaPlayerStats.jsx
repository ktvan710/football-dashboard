import { wnbaPlayerStats } from "../data/wnbaPlayerStats";
import "./Wnba.css";

const boards = [
  ["Points Per Game", wnbaPlayerStats.points],
  ["Rebounds Per Game", wnbaPlayerStats.rebounds],
  ["Assists Per Game", wnbaPlayerStats.assists],
  ["Steals", wnbaPlayerStats.steals],
  ["Blocks", wnbaPlayerStats.blocks],
  ["True Shooting %", wnbaPlayerStats.trueShooting],
  ["Usage Rate", wnbaPlayerStats.usageRate],
  ["Assist Rate", wnbaPlayerStats.assistRate],
  ["Turnover Rate", wnbaPlayerStats.turnoverRate],
  ["Player Impact", wnbaPlayerStats.impact]
];

export default function WnbaPlayerStats() {
  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">WNBA</p>
        <h1 className="wnba-report-title">Player Stats</h1>
        <p className="wnba-muted">
          Scoring, rebounding, playmaking, defensive events, efficiency, usage,
          creation, turnover rate, and impact metrics.
        </p>
      </section>

      <section className="wnba-preview-grid">
        {boards.map(([title, data]) => (
          <div className="wnba-card" key={title}>
            <h2 className="wnba-card-title">{title}</h2>

            {data.length > 0 ? (
              <div className="wnba-table-wrap">
                <table className="wnba-table">
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>Team</th>
                      <th>Value</th>
                      <th>Source</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((player) => (
                      <tr key={`${title}-${player.player}`}>
                        <td>{player.player}</td>
                        <td>{player.team}</td>
                        <td>{player.value}</td>
                        <td>{player.source || "needs update"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="wnba-muted">
                No verified data yet. Add WNBA.com Stats, Her Hoop Stats,
                Basketball-Reference WNBA, or Across the Timeline data here.
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}