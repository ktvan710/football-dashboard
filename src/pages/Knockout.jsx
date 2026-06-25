import { useMemo, useState } from "react";
import { worldCupFixtures } from "../data/worldCupFixtures";
import { buildGroupStandings } from "../data/buildStandings";
import { buildProjectedKnockout } from "../data/buildKnockout";

const GROUP_ORDER = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
  "Group H",
  "Group I",
  "Group J",
  "Group K",
  "Group L"
];

function sortGroupsByLetter(groups) {
  return [...groups].sort((a, b) => {
    const aIndex = GROUP_ORDER.indexOf(a.group);
    const bIndex = GROUP_ORDER.indexOf(b.group);

    if (aIndex === -1 && bIndex === -1) {
      return a.group.localeCompare(b.group);
    }

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });
}

function TeamSlot({ team }) {
  return (
    <div className="ktko-team-slot">
      {team.flagUrl ? (
        <img src={team.flagUrl} alt={team.name} className="ktko-flag" />
      ) : (
        <span className="ktko-shield" />
      )}

      <span className={team.placeholder ? "ktko-team ktko-placeholder" : "ktko-team"}>
        {team.abbr}
      </span>
    </div>
  );
}

function KnockoutCard({ match, compact = false }) {
  return (
    <div className={compact ? "ktko-card ktko-card-compact" : "ktko-card"}>
      <div className="ktko-card-teams">
        <TeamSlot team={match.homeTeam} />
        <TeamSlot team={match.awayTeam} />
      </div>

      <div className="ktko-card-date">{match.date}</div>

      {match.label && (
        <div
          className={
            match.type === "bronze"
              ? "ktko-match-label ktko-blue"
              : "ktko-match-label"
          }
        >
          {match.label}
        </div>
      )}
    </div>
  );
}

function SplitColumn({ matches, className }) {
  return (
    <div className={`ktko-column ${className || ""}`}>
      {matches.map((match) => (
        <KnockoutCard key={match.match} match={match} />
      ))}
    </div>
  );
}

function CenterColumn({ knockout }) {
  const final = knockout.finals.find((match) => match.type === "final");
  const bronze = knockout.finals.find((match) => match.type === "bronze");
  const leftSemi = knockout.semiFinals[0];
  const rightSemi = knockout.semiFinals[1];

  return (
    <div className="ktko-center-column">
      <div className="ktko-trophy-block">
        <div className="ktko-trophy">🏆</div>
        <p>CHAMPION</p>
      </div>

      <div className="ktko-center-final-row">
        <KnockoutCard match={leftSemi} compact />
        <KnockoutCard match={final} compact />
        <KnockoutCard match={rightSemi} compact />
      </div>

      <KnockoutCard match={bronze} compact />
    </div>
  );
}

function ThirdPlacedStrip({ teams }) {
  return (
    <div className="ktko-third-strip">
      <p className="ktko-third-title">Best third-placed teams used in projection</p>

      <div className="ktko-third-list">
        {teams.length > 0 ? (
          teams.map((team) => (
            <div key={`${team.groupLetter}-${team.team}`} className="ktko-third-pill">
              {team.flagUrl ? (
                <img
                  src={team.flagUrl}
                  alt={team.team}
                  className="ktko-third-flag"
                />
              ) : (
                <span className="ktko-small-shield" />
              )}

              <strong>{team.seed}</strong>
              <span>{team.team}</span>
              <em>{team.points} pts</em>
            </div>
          ))
        ) : (
          <span className="ktko-third-empty">No confirmed third-placed teams yet.</span>
        )}
      </div>
    </div>
  );
}

export default function Knockout() {
  const [mode, setMode] = useState("standing");

  const groupStandings = useMemo(() => {
    return sortGroupsByLetter(buildGroupStandings(worldCupFixtures));
  }, []);

  const knockout = useMemo(() => {
    return buildProjectedKnockout(groupStandings, mode);
  }, [groupStandings, mode]);

  const leftR32 = knockout.roundOf32
    .filter((match) => match.side === "left")
    .sort((a, b) => a.order - b.order);

  const rightR32 = knockout.roundOf32
    .filter((match) => match.side === "right")
    .sort((a, b) => a.order - b.order);

  const leftR16 = knockout.roundOf16
    .filter((match) => match.side === "left")
    .sort((a, b) => a.order - b.order);

  const rightR16 = knockout.roundOf16
    .filter((match) => match.side === "right")
    .sort((a, b) => a.order - b.order);

  const leftQF = knockout.quarterFinals
    .filter((match) => match.side === "left")
    .sort((a, b) => a.order - b.order);

  const rightQF = knockout.quarterFinals
    .filter((match) => match.side === "right")
    .sort((a, b) => a.order - b.order);

  return (
    <div className="ktko-page">
      <style>{KNOCKOUT_CSS}</style>

      <section className="ktko-hero">
        <div>
          <p className="ktko-eyebrow">Knockout</p>
          <h1>World Cup Bracket</h1>
          <p>
            Auto-generated from your current group table. “As it stands” fills
            the bracket from live rankings. “Confirmed” only trusts completed
            groups.
          </p>
        </div>

        <div className="ktko-toggle">
          <button
            type="button"
            className={mode === "standing" ? "ktko-toggle-active" : ""}
            onClick={() => setMode("standing")}
          >
            As it stands
          </button>

          <button
            type="button"
            className={mode === "confirmed" ? "ktko-toggle-active" : ""}
            onClick={() => setMode("confirmed")}
          >
            Confirmed
          </button>
        </div>
      </section>

      <section className="ktko-board-card">
        <div className="ktko-board-scroll">
          <div className="ktko-bracket">
            <SplitColumn matches={leftR32} className="ktko-r32 ktko-left-r32" />
            <SplitColumn matches={leftR16} className="ktko-r16 ktko-left-r16" />
            <SplitColumn matches={leftQF} className="ktko-qf ktko-left-qf" />

            <CenterColumn knockout={knockout} />

            <SplitColumn matches={rightQF} className="ktko-qf ktko-right-qf" />
            <SplitColumn matches={rightR16} className="ktko-r16 ktko-right-r16" />
            <SplitColumn matches={rightR32} className="ktko-r32 ktko-right-r32" />
          </div>
        </div>
      </section>

      <ThirdPlacedStrip teams={knockout.qualifiedThirds} />
    </div>
  );
}

const KNOCKOUT_CSS = `
.ktko-page {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  color: #f5f5f5;
  font-family: var(--sans);
}

.ktko-hero {
  background: #1f1f1f;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 28px;
  margin-bottom: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.ktko-eyebrow {
  margin: 0 0 8px;
  color: #4ade80;
  font-family: var(--heading);
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.ktko-hero h1 {
  margin: 0;
  color: #f1f0e8;
  font-family: var(--heading);
  font-size: clamp(52px, 8vw, 92px);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -1px;
}

.ktko-hero p {
  max-width: 720px;
  margin: 14px 0 0;
  color: #a1a1aa;
  font-size: 15px;
  font-weight: 850;
  line-height: 1.55;
}

.ktko-toggle {
  display: inline-flex;
  gap: 8px;
  background: #181818;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.08);
}

.ktko-toggle button {
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  background: #2f2f2f;
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 950;
  cursor: pointer;
}

.ktko-toggle .ktko-toggle-active {
  background: #f5f5f5;
  color: #111;
}

.ktko-board-card {
  background: #1f1f1f;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 18px;
}

.ktko-board-scroll {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.ktko-bracket {
  width: 100%;
  min-width: 0;
  padding: 26px 16px;
  display: grid;
  grid-template-columns: 92px 92px 110px minmax(260px, 1fr) 110px 92px 92px;
  gap: 18px;
  align-items: center;
  box-sizing: border-box;
}

.ktko-column {
  display: grid;
  align-content: center;
  position: relative;
  z-index: 2;
}

.ktko-r32 {
  gap: 10px;
}

.ktko-r16 {
  gap: 62px;
}

.ktko-qf {
  gap: 198px;
}

.ktko-card {
  width: 88px;
  min-height: 72px;
  border-radius: 12px;
  background: #1f1f1f;
  border: 1px solid rgba(255,255,255,0.14);
  display: grid;
  place-items: center;
  padding: 8px 6px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.35);
  position: relative;
}

.ktko-card::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 18px;
  height: 2px;
  background: rgba(255,255,255,0.14);
}

.ktko-left-r32 .ktko-card::after,
.ktko-left-r16 .ktko-card::after,
.ktko-left-qf .ktko-card::after {
  right: -19px;
}

.ktko-right-r32 .ktko-card::after,
.ktko-right-r16 .ktko-card::after,
.ktko-right-qf .ktko-card::after {
  left: -19px;
}

.ktko-card-compact {
  width: 96px;
}

.ktko-card-teams {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  align-items: center;
}

.ktko-team-slot {
  min-width: 0;
  display: grid;
  justify-items: center;
  gap: 5px;
}

.ktko-flag {
  width: 21px;
  height: 21px;
  border-radius: 999px;
  object-fit: cover;
  display: block;
}

.ktko-shield,
.ktko-small-shield {
  display: block;
  background: #494949;
  clip-path: polygon(50% 0, 90% 15%, 85% 70%, 50% 100%, 15% 70%, 10% 15%);
}

.ktko-shield {
  width: 19px;
  height: 22px;
}

.ktko-small-shield {
  width: 16px;
  height: 18px;
}

.ktko-team {
  color: #f5f5f5;
  font-size: 13px;
  line-height: 1;
  font-weight: 950;
  white-space: nowrap;
  letter-spacing: -0.15px;
}

.ktko-placeholder {
  color: #f5f5f5;
}

.ktko-card-date {
  margin-top: 7px;
  color: #a1a1aa;
  font-size: 12px;
  font-weight: 850;
}

.ktko-match-label {
  margin-top: 5px;
  padding: 3px 8px;
  border-radius: 6px;
  background: #facc15;
  color: #181818;
  font-size: 11px;
  font-weight: 950;
}

.ktko-blue {
  background: #38bdf8;
}

.ktko-center-column {
  min-height: 700px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 18px;
}

.ktko-trophy-block {
  text-align: center;
  color: #8a8a8a;
}

.ktko-trophy {
  font-size: 52px;
  opacity: 0.55;
  filter: grayscale(1);
}

.ktko-trophy-block p {
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 3px;
}

.ktko-center-final-row {
  display: flex;
  align-items: center;
  gap: 18px;
}

.ktko-third-strip {
  background: #1f1f1f;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 18px;
  margin-bottom: 34px;
}

.ktko-third-title {
  margin: 0 0 12px;
  color: #f1f0e8;
  font-family: var(--heading);
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
}

.ktko-third-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ktko-third-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #181818;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 8px 10px;
  color: #d4d4d8;
  font-size: 13px;
  font-weight: 850;
}

.ktko-third-flag {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  object-fit: cover;
}

.ktko-third-pill strong {
  color: #4ade80;
}

.ktko-third-pill em {
  color: #a1a1aa;
  font-style: normal;
}

.ktko-third-empty {
  color: #a1a1aa;
  font-size: 14px;
  font-weight: 800;
}

@media (max-width: 900px) {
  .ktko-page {
    max-width: 100%;
  }

  .ktko-hero {
    padding: 18px;
    border-radius: 20px;
  }

  .ktko-toggle {
    width: 100%;
  }

  .ktko-toggle button {
    flex: 1;
    padding: 11px 10px;
    font-size: 13px;
  }

  .ktko-board-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .ktko-bracket {
    width: 1280px;
    min-width: 1280px;
    grid-template-columns: 110px 110px 125px 1fr 125px 110px 110px;
    gap: 32px;
    padding: 26px 20px;
  }

  .ktko-card {
    width: 100px;
  }

  .ktko-card-compact {
    width: 112px;
  }
}
`;