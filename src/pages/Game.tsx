import React from 'react'
import { parkData, isZoneKey } from "../data/parkData.ts";
import { useParams } from 'react-router-dom';

const Game = () => {
    const { zoneName, gameId } = useParams();

  if (!zoneName || !gameId || !isZoneKey(zoneName)) {
    return <h2>Invalid route</h2>;
  }

  const game = parkData[zoneName].games[gameId];

  if (!game) return <h2>Game not found</h2>;

  return (
    <>
      <h1>{game.name}</h1>
      <p>{game.tagline}</p>
      <p>Thrill: {game.difficulty}</p>
    </>
  );

}

export default Game