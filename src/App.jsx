import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CricketUpdates from "./components/CricketUpdates";
import CricketContext from "./components/CricketContext";
import MatchDetails from "./components/MatchDetails";

const App = () => {
  const [typeMatches, setTypeMatches] = useState([]);
  const [cricketState, setCricketState] = useState(null);

  return (
    <CricketContext.Provider value={{ cricketState, setCricketState }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<CricketUpdates typeMatches={typeMatches} setTypeMatches={setTypeMatches} />}
          />
          <Route
            path="/match/:matchId"
            element={<MatchDetails typeMatches={typeMatches} />}
          />
        </Routes>
      </Router>
    </CricketContext.Provider>
  );
};

export default App;
