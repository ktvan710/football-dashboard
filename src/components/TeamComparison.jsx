import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { matchData } from "../data/matchData";

function TeamComparison() {
  return (
    <div className="card">
      <h2>Goals Scored</h2>

      <BarChart
        width={500}
        height={300}
        data={matchData.stats}
      >
        <XAxis dataKey="team" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="goals" />
      </BarChart>
    </div>
  );
}

export default TeamComparison;
