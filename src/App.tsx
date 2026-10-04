import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ride from "./pages/Ride";
import Game from "./pages/Game";
import Zone from "./pages/Zone";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zones/:zoneName" element={<Zone />} />
        <Route path="/zones/:zoneName/rides/:rideId" element={<Ride />} />
        <Route path="/zones/:zoneName/games/:gameId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
