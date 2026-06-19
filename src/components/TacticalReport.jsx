import { matchData } from "../data/matchData";

function TacticalReport() {
  return (
    <div className="card">
      <h2>Tactical Notes</h2>

      <ul>
        {matchData.tacticalNotes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default TacticalReport;
