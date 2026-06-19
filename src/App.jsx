import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MatchPage from "./pages/MatchPage";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "270px", padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;