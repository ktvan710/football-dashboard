import { Link } from "react-router-dom";
import { wnbaFixtures } from "../data/wnbaFixtures";
import "./Wnba.css";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(date));
}

export default function WnbaFixtures() {
  const fixtures = Object.values(wnbaFixtures);

  return (
    <main className="wnba-page">
      <section className="wnba-report-header">
        <p className="wnba-eyebrow">WNBA</p>
        <h1 className="wnba-report-title">Fixtures</h1>
        <p className="wnba-muted">
          Upcoming and completed WNBA games with records, arena, matchup tags,
          injury/news notes, and tactical context.
        </p>
      </section>

      <section className="wnba-fixture-grid">
        {fixtures.map((fixture) => (
          <Link
            key={fixture.id}
            to={`/wnba/match/${fixture.id}`}
            className="wnba-fixture-card"
          >
            <h2 className="wnba-card-title">
              {fixture.home} vs {fixture.away}
            </h2>

            <div className="wnba-pill-row">
              <span className="wnba-pill">{formatDate(fixture.date)}</span>
              <span className="wnba-pill">{fixture.status}</span>
              <span className="wnba-pill">{fixture.arena}</span>
            </div>

            <p className="wnba-muted">{fixture.matchupTag}</p>
            <p className="wnba-muted">{fixture.injuryNote}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}