import { useParams } from "react-router-dom";
import { parkData, isZoneKey } from "../data/parkData";

function Ride() {
  const { zoneName, rideId } = useParams();

  if (!zoneName || !rideId || !isZoneKey(zoneName)) {
    return <h2>Invalid route</h2>;
  }

  const ride = parkData[zoneName].rides[rideId];

  if (!ride) return <h2>Ride not found</h2>;

  return (
    <>
      <h1>{ride.name}</h1>
      <p>{ride.tagline}</p>
      <p>Thrill: {ride.thrill}</p>
      <p>Duration: {ride.duration}</p>
    </>
  );
}

export default Ride;
