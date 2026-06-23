import { createContext, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { portugalTeamInfo } from "../data/teamInfo/portugalTeamInfo";
import { englandTeamInfo } from "../data/teamInfo/englandTeam";

const teamDirectory = [
  {
    id: "portugal",
    teamInfo: portugalTeamInfo
  },
  {
    id: "england",
    teamInfo: englandTeamInfo
  }
];

const teamInfoMap = Object.fromEntries(
  teamDirectory.map((item) => [item.id, item.teamInfo])
);

const TeamInfoContext = createContext(null);

function TeamInfoProvider({ teamInfo, children }) {
  return (
    <TeamInfoContext.Provider value={teamInfo}>
      {children}
    </TeamInfoContext.Provider>
  );
}

function useTeamInfo() {
  return useContext(TeamInfoContext);
}

function getFlagUrl(code) {
  return `https://flagcdn.com/w80/${code}.png`;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getRatingStyle(rating) {
  const number = Number(rating);

  if (!Number.isFinite(number)) {
    return {
      background: "#242424",
      color: "#a1a1aa",
      border: "1px solid rgba(255,255,255,0.1)"
    };
  }

  if (number >= 7.5) {
    return {
      background: "rgba(34,197,94,0.16)",
      color: "#4ade80",
      border: "1px solid rgba(34,197,94,0.35)"
    };
  }

  if (number >= 7) {
    return {
      background: "rgba(250,204,21,0.16)",
      color: "#facc15",
      border: "1px solid rgba(250,204,21,0.35)"
    };
  }

  if (number >= 6.5) {
    return {
      background: "rgba(59,130,246,0.16)",
      color: "#93c5fd",
      border: "1px solid rgba(59,130,246,0.35)"
    };
  }

  return {
    background: "rgba(239,68,68,0.16)",
    color: "#fca5a5",
    border: "1px solid rgba(239,68,68,0.35)"
  };
}

function PlayerFace({ player }) {
  const [failed, setFailed] = useState(false);

  return (
    <div style={styles.faceCircle}>
      {!failed ? (
        <img
          src={player.imagePath}
          alt={player.player}
          style={styles.faceImage}
          onError={() => setFailed(true)}
        />
      ) : (
        <span style={styles.faceFallback}>{initials(player.player)}</span>
      )}
    </div>
  );
}

function RatingBadge({ rating }) {
  return (
    <span style={{ ...styles.ratingBadge, ...getRatingStyle(rating) }}>
      SofaScore {rating}
    </span>
  );
}

function PitchPlayer({ player }) {
  return (
    <div
      style={{
        ...styles.pitchPlayer,
        left: player.x,
        top: player.y
      }}
    >
      <PlayerFace player={player} />

      <div style={styles.pitchPlayerLabel}>
        <span style={styles.playerPosition}>{player.pos}</span>
        <span style={styles.pitchPlayerName}>{player.player}</span>
        <RatingBadge rating={player.previousMatchRating} />
      </div>
    </div>
  );
}

function Section({ eyebrow, title, children, right }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <div>
          {eyebrow && <p style={styles.eyebrow}>{eyebrow}</p>}
          <h2 style={styles.sectionTitle}>{title}</h2>
        </div>

        {right}
      </div>

      {children}
    </section>
  );
}

function SourcePill({ children }) {
  return <span style={styles.sourcePill}>{children}</span>;
}

function InfoNote({ children }) {
  if (!children) return null;
  return <p style={styles.infoNote}>{children}</p>;
}

function SnapshotCard({ label, value }) {
  return (
    <div style={styles.snapshotCard}>
      <span style={styles.snapshotLabel}>{label}</span>
      <strong style={styles.snapshotValue}>{value}</strong>
    </div>
  );
}

function TextCard({ title, text, variant = "neutral" }) {
  const style =
    variant === "good"
      ? styles.goodTextCard
      : variant === "warning"
        ? styles.warningTextCard
        : styles.textCard;

  return (
    <article style={style}>
      <h3 style={styles.textCardTitle}>{title}</h3>
      <p style={styles.textCardText}>{text}</p>
    </article>
  );
}

function FormBadge({ result }) {
  const letter = result?.[0];

  const style =
    letter === "W"
      ? styles.formWin
      : letter === "D"
        ? styles.formDraw
        : styles.formLoss;

  return <span style={{ ...styles.formBadge, ...style }}>{letter}</span>;
}

function TeamInfoIndex() {
  return (
    <div style={styles.page}>
      <section style={styles.teamIndexHero}>
        <p style={styles.eyebrow}>Team Info</p>
        <h1 style={styles.teamIndexTitle}>World Cup Team Hub</h1>
        <p style={styles.teamIndexSubtitle}>
          Pick a national team to open its KT Picks scouting report, tactical
          profile, lineup, player notes, stats dashboard, and matchup analysis.
        </p>
      </section>

      <section style={styles.teamGrid}>
        {teamDirectory.map(({ id, teamInfo }) => {
          const team = teamInfo.team;

          return (
            <Link key={id} to={`/team-info/${id}`} style={styles.teamSelectCard}>
              <div style={styles.teamSelectTop}>
                <span style={styles.flagCircle}>
                  <img
                    src={getFlagUrl(team.flagCode)}
                    alt={team.name}
                    style={styles.flagImage}
                  />
                </span>

                <span style={styles.groupBadge}>{team.group}</span>
              </div>

              <h2 style={styles.teamSelectName}>{team.name}</h2>
              <p style={styles.teamSelectText}>{team.identitySentence}</p>

              <div style={styles.teamSelectMeta}>
                <span>FIFA Rank {team.fifaRanking}</span>
                <span>{team.tournamentStatus}</span>
              </div>

              <span style={styles.openTeamButton}>
                Open {team.name} Report →
              </span>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

function TeamNotFound() {
  return (
    <div style={styles.page}>
      <section style={styles.section}>
        <p style={styles.eyebrow}>Team Info</p>
        <h1 style={styles.sectionTitle}>Team not found</h1>
        <p style={styles.sectionParagraph}>
          This team page has not been added yet.
        </p>

        <Link to="/team-info" style={styles.backButton}>
          Back to Team Hub
        </Link>
      </section>
    </div>
  );
}

function Hero() {
  const team = useTeamInfo().team;

  return (
    <section style={styles.hero}>
      <div style={styles.heroMain}>
        <div style={styles.heroMeta}>
          <span style={styles.flagCircle}>
            <img
              src={getFlagUrl(team.flagCode)}
              alt={team.name}
              style={styles.flagImage}
            />
          </span>

          <span style={styles.groupBadge}>{team.group}</span>
          <span style={styles.updatedBadge}>{team.updateContext}</span>
        </div>

        <h1 style={styles.heroTitle}>{team.name}</h1>
        <p style={styles.heroSubtitle}>{team.identitySentence}</p>
      </div>

      <div style={styles.heroCards}>
        <SnapshotCard label="FIFA rank" value={team.fifaRanking} />
        <SnapshotCard label="Coach" value={team.headCoach} />
        <SnapshotCard label="Captain" value={team.captain} />
        <SnapshotCard label="Star player" value={team.starPlayer} />
        <SnapshotCard label="Breakout" value={team.breakoutPlayer} />
        <SnapshotCard label="Status" value={team.tournamentStatus} />
      </div>
    </section>
  );
}

function SnapshotSection() {
  const snapshot = useTeamInfo().snapshot;

  return (
    <Section
      eyebrow="Profile"
      title={snapshot.sectionTitle}
      right={<SourcePill>{snapshot.primarySources}</SourcePill>}
    >
      <InfoNote>{snapshot.dataConfidence}</InfoNote>
      <p style={styles.sectionParagraph}>{snapshot.intro}</p>

      {snapshot.extraParagraphs?.length > 0 && (
        <div style={{ ...styles.paragraphStack, marginTop: "12px" }}>
          {snapshot.extraParagraphs.map((paragraph, index) => (
            <p key={index} style={styles.sectionParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div style={styles.snapshotGrid}>
        {snapshot.fields.map((item) => (
          <SnapshotCard key={item.field} label={item.field} value={item.value} />
        ))}
      </div>
    </Section>
  );
}

function LineupSection() {
  const lineup = useTeamInfo().lineupSection;

  return (
    <Section
      eyebrow="Verified XI"
      title={lineup.sectionTitle}
      right={<SourcePill>{lineup.ratingSource}</SourcePill>}
    >
      <InfoNote>{lineup.note}</InfoNote>
      <InfoNote>{lineup.ratingNote}</InfoNote>

      <div style={styles.pitchWrap}>
        <div style={styles.pitch}>
          <div style={styles.pitchStripeOne} />
          <div style={styles.pitchStripeTwo} />
          <div style={styles.pitchHalfLine} />
          <div style={styles.pitchCircle} />
          <div style={styles.pitchBoxTop} />
          <div style={styles.pitchBoxBottom} />

          {lineup.players.map((player) => (
            <PitchPlayer key={`${player.pos}-${player.player}`} player={player} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function QuickVerdictSection() {
  const quick = useTeamInfo().quickVerdict;

  return (
    <Section eyebrow="Verdict" title={quick.sectionTitle}>
      <div style={styles.verdictGrid}>
        {quick.cards.map((card) => (
          <article key={card.label} style={styles.verdictCard}>
            <p style={styles.cardLabel}>{card.label}</p>
            <h3 style={styles.verdictHeadline}>{card.headline}</h3>
            <p style={styles.cardText}>{card.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TournamentContextSection() {
  const context = useTeamInfo().tournamentContext;

  return (
    <Section
      eyebrow="Context"
      title={context.sectionTitle}
      right={<SourcePill>{context.primarySources}</SourcePill>}
    >
      <InfoNote>{context.dataConfidence}</InfoNote>

      <div style={styles.paragraphStack}>
        {context.paragraphs.map((paragraph, index) => (
          <p key={index} style={styles.sectionParagraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

function RecentFormSection() {
  const form = useTeamInfo().recentForm;
  const hasXgColumns = form.matches.some(
    (match) => match.englandXg || match.opponentXg
  );

  return (
    <Section eyebrow="Form" title={form.sectionTitle}>
      <InfoNote>{form.dataConfidence}</InfoNote>

      <div style={styles.formSummaryCard}>
        <div>
          <p style={styles.formRecord}>{form.formRecord.display}</p>
          <p style={styles.formSmall}>
            {form.formRecord.goalsScored} goals scored ·{" "}
            {form.formRecord.goalsConceded} conceded ·{" "}
            {form.formRecord.cleanSheets} clean sheets
          </p>
        </div>

        <div style={styles.formStack}>
          {form.formBadges.map((badge, index) => (
            <FormBadge key={`${badge}-${index}`} result={badge} />
          ))}
        </div>
      </div>

      <div style={styles.formTableWrap}>
        <div style={styles.formTable}>
          {form.matches.map((match) => (
            <div
              key={`${match.date}-${match.match}`}
              style={{
                ...styles.formRow,
                gridTemplateColumns: hasXgColumns
                  ? "118px minmax(170px, 1fr) 74px 74px 70px"
                  : "118px minmax(170px, 1fr) 70px 100px"
              }}
            >
              <span style={styles.formDate}>{match.date}</span>
              <strong style={styles.formMatch}>{match.match}</strong>
              <span style={styles.formResult}>{match.result}</span>

              {hasXgColumns ? (
                <>
                  <span style={styles.formCompetition}>
                    xG {match.englandXg ?? "—"}
                  </span>
                  <span style={styles.formCompetition}>
                    xGA {match.opponentXg ?? "—"}
                  </span>
                </>
              ) : (
                <span style={styles.formCompetition}>{match.competition}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.twoColumnGrid}>
        <TextCard title="Recent form read" text={form.summary} />
        <TextCard title="xG context" text={form.xgContext} variant="warning" />
      </div>

      <TextCard title="Momentum rating" text={form.momentumRating} />

      {form.keyWarning && (
        <TextCard title="Key warning sign" text={form.keyWarning} variant="warning" />
      )}
    </Section>
  );
}

function TacticalIdentitySection() {
  const tactical = useTeamInfo().tacticalIdentity;

  return (
    <Section
      eyebrow="Tactics"
      title={tactical.sectionTitle}
      right={<SourcePill>{tactical.primarySources}</SourcePill>}
    >
      <InfoNote>{tactical.dataConfidence}</InfoNote>

      <div style={styles.tacticalCardGrid}>
        {tactical.tacticalCards.map((card) => (
          <article key={card.label} style={styles.tacticalCard}>
            <p style={styles.cardLabel}>{card.label}</p>
            <h3 style={styles.tacticalValue}>{card.value}</h3>
            <p style={styles.cardText}>{card.note}</p>
          </article>
        ))}
      </div>

      {tactical.subSections.map((subSection) => (
        <div key={subSection.title} style={styles.subSectionBlock}>
          <h3 style={styles.subSectionTitle}>{subSection.title}</h3>

          <div style={styles.paragraphStack}>
            {subSection.paragraphs.map((paragraph, index) => (
              <p key={index} style={styles.sectionParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

function StrengthsWeaknessesSection() {
  const data = useTeamInfo().strengthsWeaknesses;

  return (
    <Section eyebrow="Scouting" title={data.sectionTitle}>
      <InfoNote>{data.dataConfidence}</InfoNote>

      <div style={styles.twoColumnGrid}>
        <div>
          <h3 style={styles.columnTitle}>{data.strengths.title}</h3>
          <div style={styles.cardStack}>
            {data.strengths.items.map((item) => (
              <TextCard
                key={item.title}
                title={item.title}
                text={item.text}
                variant="good"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 style={styles.columnTitle}>{data.weaknesses.title}</h3>
          <div style={styles.cardStack}>
            {data.weaknesses.items.map((item) => (
              <TextCard
                key={item.title}
                title={item.title}
                text={item.text}
                variant="warning"
              />
            ))}
          </div>
        </div>
      </div>

      {data.whatCouldGoWrong && (
        <TextCard
          title={data.whatCouldGoWrong.title}
          text={data.whatCouldGoWrong.text}
          variant="warning"
        />
      )}
    </Section>
  );
}

function StyleTagsSection() {
  const tags = useTeamInfo().styleTags;

  return (
    <Section eyebrow="Identity" title={tags.sectionTitle}>
      <p style={styles.sectionParagraph}>{tags.display}</p>

      <div style={styles.tagGrid}>
        {tags.tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </Section>
  );
}

function KeyPlayersSection() {
  const keyPlayers = useTeamInfo().keyPlayers;

  return (
    <Section
      eyebrow="Players"
      title={keyPlayers.sectionTitle}
      right={<SourcePill>{keyPlayers.primarySources}</SourcePill>}
    >
      <InfoNote>{keyPlayers.dataConfidence}</InfoNote>

      <div style={styles.playerGrid}>
        {keyPlayers.players.map((player) => (
          <article key={`${player.category}-${player.player}`} style={styles.playerCard}>
            <p style={styles.playerCategory}>{player.category}</p>
            <h3 style={styles.playerName}>{player.player}</h3>
            <p style={styles.playerClub}>
              {player.position} · {player.club}
            </p>

            <div style={styles.playerDetail}>
              <span>Role</span>
              <p>{player.roleInTeam}</p>
            </div>

            <div style={styles.playerDetail}>
              <span>Main strengths</span>
              <p>{player.mainStrengths}</p>
            </div>

            <div style={styles.playerDetail}>
              <span>Risk</span>
              <p>{player.mainWeaknessOrRisk}</p>
            </div>

            <div style={styles.playerDetail}>
              <span>Tactical value</span>
              <p>{player.whyHeMattersTactically}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StatisticalDashboardSection() {
  const stats = useTeamInfo().statisticalDashboard;

  return (
    <Section
      eyebrow="Stats"
      title={stats.sectionTitle}
      right={<SourcePill>{stats.primarySources}</SourcePill>}
    >
      <InfoNote>{stats.dataConfidence}</InfoNote>
      <InfoNote>{stats.importantNote}</InfoNote>

      <div style={styles.tableWrap}>
        <table style={styles.statsTable}>
          <thead>
            <tr>
              <th style={{ ...styles.th, textAlign: "left" }}>Metric</th>
              <th style={styles.th}>Value</th>
              <th style={styles.th}>Source</th>
              <th style={styles.th}>Confidence</th>
              <th style={{ ...styles.th, textAlign: "left" }}>Note</th>
            </tr>
          </thead>

          <tbody>
            {stats.metrics.map((row) => (
              <tr key={row.metric} style={styles.tr}>
                <td style={{ ...styles.td, textAlign: "left" }}>{row.metric}</td>
                <td style={styles.tdValue}>{row.value}</td>
                <td style={styles.td}>{row.source}</td>
                <td style={styles.td}>{row.confidence}</td>
                <td style={{ ...styles.td, textAlign: "left", color: "#a1a1aa" }}>
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function MatchupProfileSection() {
  const matchup = useTeamInfo().matchupProfile;

  return (
    <Section
      eyebrow="Matchups"
      title={matchup.sectionTitle}
      right={<SourcePill>{matchup.primarySources}</SourcePill>}
    >
      <InfoNote>{matchup.dataConfidence}</InfoNote>

      <div style={styles.profileGrid}>
        {matchup.cards.map((card) => (
          <TextCard key={card.title} title={card.title} text={card.text} />
        ))}
      </div>
    </Section>
  );
}

function GameScriptSection() {
  const scripts = useTeamInfo().gameScriptAnalysis;

  return (
    <Section eyebrow="Game scripts" title={scripts.sectionTitle}>
      <div style={styles.profileGrid}>
        {scripts.scripts.map((script) => (
          <TextCard key={script.title} title={script.title} text={script.text} />
        ))}
      </div>
    </Section>
  );
}

function WhatCouldGoWrongSection() {
  const section = useTeamInfo().whatCouldGoWrong;

  if (!section) return null;

  return (
    <Section eyebrow="Risk report" title={section.sectionTitle}>
      <div style={styles.finalReadCard}>
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} style={styles.finalReadText}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

function TeamReportSummarySection() {
  const section = useTeamInfo().teamReportSummary;

  if (!section) return null;

  return (
    <Section eyebrow="Final read" title={section.sectionTitle}>
      <div style={styles.finalReadCard}>
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} style={styles.finalReadText}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

function KTPicksAdditionSection() {
  const section = useTeamInfo().ktPicksAddition;

  if (!section) return null;

  return (
    <section style={styles.ktAdditionCard}>
      <p style={styles.cardLabel}>{section.label}</p>
      <h2 style={styles.ktAdditionTitle}>{section.sectionTitle}</h2>
      <p style={styles.cardText}>{section.text}</p>
    </section>
  );
}

function TeamProfilePage({ teamInfo }) {
  return (
    <TeamInfoProvider teamInfo={teamInfo}>
      <div style={styles.page}>
        <Link to="/team-info" style={styles.backButton}>
          ← Back to Team Hub
        </Link>

        <Hero />
        <SnapshotSection />
        <LineupSection />
        <QuickVerdictSection />
        <TournamentContextSection />
        <RecentFormSection />
        <TacticalIdentitySection />
        <StrengthsWeaknessesSection />
        <StyleTagsSection />
        <KeyPlayersSection />
        <StatisticalDashboardSection />
        <MatchupProfileSection />
        <GameScriptSection />
        <WhatCouldGoWrongSection />
        <TeamReportSummarySection />
        <KTPicksAdditionSection />
      </div>
    </TeamInfoProvider>
  );
}

export default function TeamInfo() {
  const { teamId } = useParams();

  if (!teamId) {
    return <TeamInfoIndex />;
  }

  const teamInfo = teamInfoMap[teamId];

  if (!teamInfo) {
    return <TeamNotFound />;
  }

  return <TeamProfilePage teamInfo={teamInfo} />;
}

const styles = {
  page: {
    width: "100%",
    maxWidth: "1040px",
    margin: "0 auto",
    color: "#f5f5f5",
    fontFamily: "var(--sans)",
    paddingBottom: "48px"
  },

  teamIndexHero: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "30px",
    marginBottom: "18px",
    textAlign: "center"
  },

  teamIndexTitle: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "clamp(52px, 9vw, 92px)",
    fontWeight: "900",
    letterSpacing: "-1.2px",
    lineHeight: "0.9",
    textTransform: "uppercase"
  },

  teamIndexSubtitle: {
    maxWidth: "760px",
    margin: "16px auto 0",
    color: "#d4d4d8",
    fontSize: "17px",
    fontWeight: "750",
    lineHeight: "1.6",
    textAlign: "center"
  },

  teamGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px"
  },

  teamSelectCard: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "28px",
    textDecoration: "none",
    color: "#f5f5f5",
    display: "block",
    transition: "transform 180ms ease, border-color 180ms ease"
  },

  teamSelectTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "18px"
  },

  teamSelectName: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "46px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "-0.7px",
    textAlign: "center"
  },

  teamSelectText: {
    maxWidth: "740px",
    margin: "10px auto 16px",
    color: "#d4d4d8",
    fontSize: "15px",
    fontWeight: "750",
    lineHeight: "1.55",
    textAlign: "center"
  },

  teamSelectMeta: {
    display: "grid",
    gap: "8px",
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "850",
    marginBottom: "16px",
    textAlign: "center"
  },

  openTeamButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    margin: "0 auto",
    background: "#f5f5f5",
    color: "#111",
    borderRadius: "999px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "950"
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#f5f5f5",
    borderRadius: "999px",
    padding: "10px 14px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "900",
    marginBottom: "14px"
  },

  hero: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "24px",
    marginBottom: "18px",
    overflow: "hidden"
  },

  heroMain: {
    minWidth: 0
  },

  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "16px"
  },

  flagCircle: {
    width: "46px",
    height: "46px",
    borderRadius: "999px",
    overflow: "hidden",
    background: "#2a2a2a",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },

  flagImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  },

  groupBadge: {
    background: "#242424",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#f5f5f5",
    borderRadius: "999px",
    padding: "9px 13px",
    fontSize: "13px",
    fontWeight: "900"
  },

  updatedBadge: {
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "850",
    lineHeight: "1.4"
  },

  heroTitle: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "clamp(58px, 11vw, 106px)",
    fontWeight: "900",
    letterSpacing: "-1.4px",
    lineHeight: "0.9",
    textTransform: "uppercase"
  },

  heroSubtitle: {
    maxWidth: "780px",
    margin: "18px 0 0",
    color: "#d4d4d8",
    fontSize: "20px",
    fontWeight: "800",
    lineHeight: "1.45"
  },

  heroCards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
    gap: "10px",
    alignSelf: "stretch"
  },

  section: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "22px",
    marginBottom: "18px",
    overflow: "hidden"
  },

  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "14px",
    flexWrap: "wrap"
  },

  eyebrow: {
    margin: "0 0 5px",
    color: "#4ade80",
    fontFamily: "var(--heading)",
    fontSize: "14px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.8px"
  },

  sectionTitle: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "clamp(28px, 5vw, 38px)",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "-0.4px",
    lineHeight: "1"
  },

  sourcePill: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "999px",
    color: "#a1a1aa",
    padding: "9px 13px",
    fontSize: "12px",
    fontWeight: "900",
    lineHeight: "1.35",
    maxWidth: "520px"
  },

  infoNote: {
    margin: "0 0 14px",
    color: "#a1a1aa",
    fontSize: "14px",
    fontWeight: "750",
    lineHeight: "1.55"
  },

  sectionParagraph: {
    margin: "0",
    color: "#d4d4d8",
    fontSize: "15px",
    fontWeight: "750",
    lineHeight: "1.75"
  },

  paragraphStack: {
    display: "grid",
    gap: "12px"
  },

  snapshotGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "10px",
    marginTop: "16px"
  },

  snapshotCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px",
    minWidth: 0
  },

  snapshotLabel: {
    display: "block",
    color: "#71717a",
    fontSize: "12px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    marginBottom: "8px"
  },

  snapshotValue: {
    display: "block",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "22px",
    fontWeight: "900",
    letterSpacing: "-0.3px",
    lineHeight: "1.05"
  },

  pitchWrap: {
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
    touchAction: "pan-x pan-y",
    marginTop: "16px"
  },

  pitch: {
    position: "relative",
    minWidth: "720px",
    height: "800px",
    borderRadius: "28px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    background:
      "linear-gradient(180deg, rgba(34,197,94,0.22), rgba(22,163,74,0.14)), #12351f"
  },

  pitchStripeOne: {
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 80px, rgba(255,255,255,0.015) 80px 160px)"
  },

  pitchStripeTwo: {
    position: "absolute",
    inset: "18px",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "20px"
  },

  pitchHalfLine: {
    position: "absolute",
    left: "18px",
    right: "18px",
    top: "50%",
    height: "1px",
    background: "rgba(255,255,255,0.2)"
  },

  pitchCircle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "120px",
    height: "120px",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    transform: "translate(-50%, -50%)"
  },

  pitchBoxTop: {
    position: "absolute",
    top: "18px",
    left: "28%",
    width: "44%",
    height: "112px",
    border: "1px solid rgba(255,255,255,0.22)",
    borderTop: 0,
    borderRadius: "0 0 20px 20px"
  },

  pitchBoxBottom: {
    position: "absolute",
    bottom: "18px",
    left: "28%",
    width: "44%",
    height: "112px",
    border: "1px solid rgba(255,255,255,0.22)",
    borderBottom: 0,
    borderRadius: "20px 20px 0 0"
  },

  pitchPlayer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "7px",
    width: "152px",
    zIndex: 3
  },

  faceCircle: {
    width: "58px",
    height: "58px",
    borderRadius: "999px",
    overflow: "hidden",
    background: "#1f1f1f",
    border: "2px solid rgba(255,255,255,0.75)",
    boxShadow: "0 12px 22px rgba(0,0,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  faceImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  },

  faceFallback: {
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "18px",
    fontWeight: "900"
  },

  pitchPlayerLabel: {
    background: "rgba(24,24,24,0.94)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    padding: "7px 9px",
    textAlign: "center",
    width: "100%",
    backdropFilter: "blur(10px)"
  },

  playerPosition: {
    display: "block",
    color: "#4ade80",
    fontSize: "10px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  },

  pitchPlayerName: {
    display: "block",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "16px",
    fontWeight: "900",
    letterSpacing: "-0.2px",
    lineHeight: "1"
  },

  ratingBadge: {
    display: "inline-flex",
    marginTop: "5px",
    borderRadius: "999px",
    padding: "4px 7px",
    fontSize: "10px",
    fontWeight: "900"
  },

  verdictGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
    gap: "12px"
  },

  verdictCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px"
  },

  cardLabel: {
    margin: "0 0 8px",
    color: "#4ade80",
    fontSize: "12px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.6px"
  },

  verdictHeadline: {
    margin: "0 0 10px",
    color: "#facc15",
    fontFamily: "var(--heading)",
    fontSize: "28px",
    fontWeight: "900",
    lineHeight: "1",
    letterSpacing: "-0.4px"
  },

  cardText: {
    margin: 0,
    color: "#d4d4d8",
    fontSize: "14px",
    fontWeight: "750",
    lineHeight: "1.65"
  },

  formSummaryCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "14px"
  },

  formRecord: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "28px",
    fontWeight: "900"
  },

  formSmall: {
    margin: "4px 0 0",
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "800"
  },

  formStack: {
    display: "flex",
    gap: "7px"
  },

  formBadge: {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "900"
  },

  formWin: {
    background: "#22c55e"
  },

  formDraw: {
    background: "#71717a"
  },

  formLoss: {
    background: "#ef4444"
  },

  formTableWrap: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    marginBottom: "14px"
  },

  formTable: {
    display: "grid",
    gap: "8px",
    minWidth: "620px"
  },

  formRow: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "14px",
    padding: "11px 12px",
    display: "grid",
    gap: "10px",
    alignItems: "center"
  },

  formDate: {
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "800"
  },

  formMatch: {
    color: "#f5f5f5",
    fontSize: "14px",
    fontWeight: "900"
  },

  formResult: {
    color: "#facc15",
    fontFamily: "var(--score)",
    fontSize: "16px",
    fontWeight: "900",
    textAlign: "center"
  },

  formCompetition: {
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "800",
    textAlign: "right"
  },

  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "14px",
    marginTop: "14px"
  },

  textCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "15px"
  },

  goodTextCard: {
    background: "#181818",
    border: "1px solid rgba(74,222,128,0.18)",
    borderRadius: "16px",
    padding: "15px"
  },

  warningTextCard: {
    background: "#181818",
    border: "1px solid rgba(250,204,21,0.2)",
    borderRadius: "16px",
    padding: "15px"
  },

  textCardTitle: {
    margin: "0 0 8px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "23px",
    fontWeight: "900",
    lineHeight: "1"
  },

  textCardText: {
    margin: 0,
    color: "#d4d4d8",
    fontSize: "14px",
    fontWeight: "750",
    lineHeight: "1.65"
  },

  tacticalCardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "12px",
    marginBottom: "18px"
  },

  tacticalCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "17px",
    padding: "15px"
  },

  tacticalValue: {
    margin: "0 0 8px",
    color: "#facc15",
    fontFamily: "var(--heading)",
    fontSize: "26px",
    fontWeight: "900",
    lineHeight: "1"
  },

  subSectionBlock: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px",
    marginTop: "14px"
  },

  subSectionTitle: {
    margin: "0 0 12px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "28px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  columnTitle: {
    margin: "0 0 12px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "30px",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  cardStack: {
    display: "grid",
    gap: "10px"
  },

  tagGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "16px"
  },

  tag: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "999px",
    color: "#d4d4d8",
    padding: "9px 13px",
    fontSize: "13px",
    fontWeight: "900"
  },

  playerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "14px"
  },

  playerCard: {
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "16px"
  },

  playerCategory: {
    margin: 0,
    color: "#4ade80",
    fontSize: "12px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.6px"
  },

  playerName: {
    margin: "7px 0 2px",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "30px",
    fontWeight: "900",
    letterSpacing: "-0.4px",
    lineHeight: "1"
  },

  playerClub: {
    margin: "0 0 12px",
    color: "#a1a1aa",
    fontSize: "13px",
    fontWeight: "850"
  },

  playerDetail: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "10px",
    marginTop: "10px"
  },

  tableWrap: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch"
  },

  statsTable: {
    width: "100%",
    minWidth: "900px",
    borderCollapse: "collapse",
    background: "#181818",
    borderRadius: "14px",
    overflow: "hidden"
  },

  th: {
    padding: "13px 14px",
    color: "#a1a1aa",
    fontSize: "12px",
    fontWeight: "900",
    textTransform: "uppercase",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center"
  },

  tr: {
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  },

  td: {
    padding: "13px 14px",
    color: "#f5f5f5",
    fontSize: "14px",
    fontWeight: "750",
    textAlign: "center"
  },

  tdValue: {
    padding: "13px 14px",
    color: "#facc15",
    fontFamily: "var(--score)",
    fontSize: "16px",
    fontWeight: "900",
    textAlign: "center"
  },

  profileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "12px"
  },

  finalReadCard: {
    background: "#181818",
    border: "1px solid rgba(250,204,21,0.18)",
    borderRadius: "18px",
    padding: "18px",
    display: "grid",
    gap: "12px"
  },

  finalReadText: {
    margin: 0,
    color: "#d4d4d8",
    fontSize: "15px",
    fontWeight: "750",
    lineHeight: "1.75"
  },

  ktAdditionCard: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "22px",
    marginBottom: "18px"
  },

  ktAdditionTitle: {
    margin: "0 0 10px",
    color: "#facc15",
    fontFamily: "var(--heading)",
    fontSize: "34px",
    fontWeight: "900",
    textTransform: "uppercase"
  }
};