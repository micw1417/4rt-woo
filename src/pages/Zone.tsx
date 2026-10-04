import React from 'react'
import { parkData, isZoneKey } from "../data/parkData.ts";
import { Link, useParams } from 'react-router-dom';

const Zone = () => {
  const { zoneName } = useParams();

  if (!zoneName || !isZoneKey(zoneName)) {
    return <h2>Invalid route</h2>;
  }

  const zone = parkData[zoneName];

return (
  <>
    <h1>{zone.title}</h1>

    <h2>Rides</h2>
    {Object.entries(zone.rides).map(([id, ride]) => (
      <Link to={`/zones/${zoneName}/rides/${id}`}>
        {ride.name}
      </Link>
    ))}

    <h2>Games</h2>
    {Object.entries(zone.games).map(([id, game]) => (
      <Link to={`/zones/${zoneName}/games/${id}`}>
        {game.name}
      </Link>
    ))}
  </>
);

}

export default Zone