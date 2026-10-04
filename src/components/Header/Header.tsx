import { Link } from "react-router-dom";
import { parkData, zoneKeys } from "../../data/parkData.ts";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🏰 Home
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            {zoneKeys.map((zoneKey) => {
              const zone = parkData[zoneKey];
                // example path - - /zones/early-america/rides/wilderness-expedition
              return (
                <li key={zoneKey} className="nav-item">
                  <div className="nav-link">{zone.title} ▼</div>

                  <ul className="dropdown">
                    {/* Rides */}
                    {Object.entries(zone.rides).map(([rideKey, ride]) => (
                      <li key={rideKey}>
                        <Link
                          to={`/zones/${zoneKey}/rides/${rideKey}`}
                          className="dropdown-link"
                        >
                          Ride: {ride.name}
                        </Link>
                      </li>
                    ))}

                    {/* Games */}
                    {Object.entries(zone.games).map(([gameKey, game]) => (
                      <li key={gameKey}>
                        <Link
                          to={`/zones/${zoneKey}/games/${gameKey}`}
                          className="dropdown-link"
                        >
                          Game: {game.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
