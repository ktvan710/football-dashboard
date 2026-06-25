import { wnbaTeams } from "./wnbaTeams";

export const wnbaTeamStats = wnbaTeams.map((team) => ({
  id: team.id,
  team: team.name,
  conference: team.conference,
  record: team.record,
  offensiveRating: team.stats.offensiveRating,
  defensiveRating: team.stats.defensiveRating,
  netRating: team.stats.netRating,
  pace: team.stats.pace,
  efg: team.stats.efg,
  ts: team.stats.ts,
  turnoverRate: team.stats.turnoverRate,
  reboundRate: team.stats.reboundRate,
  freeThrowRate: team.stats.freeThrowRate,
  threePointRate: team.stats.threePointRate,
  pointsInPaint: team.stats.pointsInPaint,
  fastBreakPoints: team.stats.fastBreakPoints,
  opponentEfg: team.stats.opponentEfg,
  opponentTurnoverRate: team.stats.opponentTurnoverRate,
  source: "needs update",
  confidence: "low"
}));