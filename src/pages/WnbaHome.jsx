import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { wnbaFixtures } from "../data/wnbaFixtures";
import { getWnbaTeamByName } from "../data/wnbaTeams";
import "./Wnba.css";

function toDateKey(dateValue) {
  return new Date(dateValue).toISOString().slice(0, 10);
}

function addDays(dateKey, amount) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + amount);
  return date.toISOString().slice(0, 10);
}

function formatDayLabel(dateKey) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short"
  }).format(new Date(`${dateKey}T00:00:00`));
}

function formatShortDate(dateKey) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(new Date(`${dateKey}T00:00:00`));
}

function formatGameTime(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(dateValue));
}

function TeamLogo({ team }) {
  const initials = team?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  if (team?.logo) {
    return <img src={team.logo} alt={team.name} className="wnba-fixture-logo" />;
  }

  return (
    <div
      className="wnba-fixture-logo-fallback"
      style={{ background: team?.color || "#343434" }}
    >
      {initials || "TBD"}
    </div>
  );
}

function WnbaFixtureRow({ fixture }) {
  const home = getWnbaTeamByName(fixture.home);
  const away = getWnbaTeamByName(fixture.away);

  return (
    <Link to={`/wnba/match/${fixture.id}`} className="wnba-match-row">
      <div className="wnba-match-time">
        <span>{formatGameTime(fixture.date)}</span>
        <small>{fixture.status}</small>
      </div>

      <div className="wnba-match-team wnba-match-team-home">
        <TeamLogo team={home} />
        <div>
          <strong>{fixture.home}</strong>
          <small>Record: {fixture.records.home}</small>
        </div>
      </div>

      <div className="wnba-match-center">
        <span>vs</span>
      </div>

      <div className="wnba-match-team">
        <TeamLogo team={away} />
        <div>
          <strong>{fixture.away}</strong>
          <small>Record: {fixture.records.away}</small>
        </div>
      </div>

      <div className="wnba-match-meta">
        <span>{fixture.arena}</span>
        <small>{fixture.matchupTag}</small>
      </div>
    </Link>
  );
}

export default function WnbaHome() {
  const fixtures = useMemo(() => {
    return Object.values(wnbaFixtures).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, []);

  const upcomingFixtures = useMemo(() => {
    return fixtures.filter((fixture) => fixture.status !== "completed");
  }, [fixtures]);

  const availableDateKeys = useMemo(() => {
    return [...new Set(upcomingFixtures.map((fixture) => toDateKey(fixture.date)))];
  }, [upcomingFixtures]);

  const firstDateKey = availableDateKeys[0] || toDateKey(new Date());

  const [selectedDate, setSelectedDate] = useState(firstDateKey);

  const quickDates = [
    {
      label: "Yesterday",
      key: addDays(selectedDate, -1)
    },
    {
      label: "Today",
      key: selectedDate
    },
    {
      label: "Tomorrow",
      key: addDays(selectedDate, 1)
    }
  ];

  const selectedFixtures = upcomingFixtures.filter((fixture) => {
    return toDateKey(fixture.date) === selectedDate;
  });

  return (
    <main className="wnba-page wnba-home-page">
      <section className="wnba-hero">
        <div>
          <p className="wnba-eyebrow">WNBA</p>
          <h1 className="wnba-hero-title">WNBA Intelligence Dashboard</h1>
          <p className="wnba-hero-subtitle">
            Fixtures, team reports, player stats, team trends, and matchup
            previews powered by advanced basketball research.
          </p>
        </div>
      </section>

      <section className="wnba-date-board">
        <div className="wnba-date-board-header">
          <div>
            <p className="wnba-eyebrow">Schedule</p>
            <h2 className="wnba-section-title wnba-section-title-tight">
              Upcoming Matches
            </h2>
          </div>

          <div className="wnba-quick-date-tabs">
            {quickDates.map((date) => (
              <button
                key={`${date.label}-${date.key}`}
                type="button"
                className={
                  date.key === selectedDate
                    ? "wnba-quick-date-tab wnba-quick-date-tab-active"
                    : "wnba-quick-date-tab"
                }
                onClick={() => setSelectedDate(date.key)}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        <div className="wnba-calendar-strip">
          {availableDateKeys.map((dateKey) => (
            <button
              key={dateKey}
              type="button"
              className={
                dateKey === selectedDate
                  ? "wnba-calendar-day wnba-calendar-day-active"
                  : "wnba-calendar-day"
              }
              onClick={() => setSelectedDate(dateKey)}
            >
              <span>{formatDayLabel(dateKey)}</span>
              <strong>{formatShortDate(dateKey)}</strong>
            </button>
          ))}
        </div>

        <div className="wnba-match-board">
          {selectedFixtures.length > 0 ? (
            selectedFixtures.map((fixture) => (
              <WnbaFixtureRow key={fixture.id} fixture={fixture} />
            ))
          ) : (
            <div className="wnba-empty-state">
              No upcoming WNBA matches on this date.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}