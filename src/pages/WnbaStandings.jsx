import { wnbaTeams } from "../data/wnbaTeams";
import "./Wnba.css";

export default function WnbaStandings() {
  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">WNBA</p>
        <h1 className="wnba-report-title">Standings</h1>
        <p className="wnba-muted">
          Records, conference view, recent form, win percentage, and net rating.
        </p>
      </section>

      <section className="wnba-table-card">
        <div className="wnba-table-wrap">
          <table className="wnba-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Conference</th>
                <th>Record</th>
                <th>Win %</th>
                <th>Recent Form</th>
                <th>Net Rating</th>
                <th>Source</th>
              </tr>
            </thead>

            <tbody>
              {wnbaTeams.map((team) => (
                <tr key={team.id}>
                  <td>{team.name}</td>
                  <td>{team.conference}</td>
                  <td>{team.record}</td>
                  <td>needs update</td>
                  <td>{team.form.length ? team.form.join(" ") : "needs update"}</td>
                  <td>{team.stats.netRating ?? "needs update"}</td>
                  <td>WNBA.com Stats</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}