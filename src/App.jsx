import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MatchPage from "./pages/MatchPage";

function Home() {
  return (
    <div>
      <h1>World Cup 2026 Fixture Dashboard</h1>
      <p>Select a match from the sidebar to view analysis.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* dynamic match route */}
          <Route path="/match/:matchId" element={<MatchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
