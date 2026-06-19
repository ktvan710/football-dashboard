import { matchData } from "../data/matchData";

function InjuryTracker() {
  return (
    <div className="card">
      <h2>Injury Report</h2>

      {matchData.injuries.map((player, index) => (
        <p key={index}>
          {player.player} - {player.status}
        </p>
      ))}
    </div>
  );
}

export default InjuryTracker;
