import { Link } from "react-router-dom";
import { parkData, zoneKeys } from "../data/parkData";

function Home() {
  return (
    <div>


      <section className="hero">
        <h1>4rt Woo!</h1>
        <p>
          Step into history and adventure through our immersive park experience!
        </p>
      </section>

      <section className="section">
        <h2>Our Story</h2>

        <div className="lore-text">
          <p>
            In 1928, an eccentric billionaire of the famous Ponce family
            became obsessed with recreating early 1800s frontier architecture.
            Nearly eight million dollars were poured into handcrafted walls,
            historic stonework, and sprawling landscapes.
          </p>

          <p>
            But after Black Tuesday and the crash of 1929, the dream collapsed.
            The unfinished Fort was sold for just $10,000 and an old Ford Model T.
          </p>

          <p>
            Passed quietly between unknown hands for decades, the property
            was finally acquired by M. Wuu Entertainment CORP.™ in 1979.
            After years of delays and failed attempts, the vision was revived
            in 2026 by Michael Wuu and his partners —
            Jason of Martinez Co., Teigan Ponce of the historic Ponce lineage,
            and Shawn of Fisher Motorsports.
          </p>

          <p>
            In late 2030, the gates opened. What was once a monument to
            reckless wealth became the most successful historical theme park
            in the Fort Worth area.
          </p>

          <p>
            A 102-year legacy of questionable investments…
            redeemed at last.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Park Map</h2>

        <div
          className="card"
          style={{
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e9dcc5"
          }}
        >
          <p style={{ fontStyle: "italic" }}>
            Park Map Image Placeholder
          </p>
        </div>
      </section>


      <section className="section">
        <h2>Explore Our Historical Zones</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {zoneKeys.map((zoneKey) => {
            const zone = parkData[zoneKey];

            return (
              <Link
                key={zoneKey}
                to={`/zones/${zoneKey}`}
              >
                <div
                  className="card"
                  style={{
                    backgroundColor: zone.color,
                    color: "white"
                  }}
                >
                  <h3>{zone.title}</h3>
                  <p>
                    Discover rides and games inspired by this era.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default Home;
