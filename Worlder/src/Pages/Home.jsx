import { useEffect, useState } from "react";
import data from "../API/HomeAPI.json";
import { FactCards } from "../components/UI/FactsCard";

export const Home = () => {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    const InterestingFacts = data;
    setFacts(InterestingFacts);
  }, []);

  return (
    <div>
      <section>
        <div>
          <h1>Welcome to Explore Nations</h1>
          <p>
            Discover detailed information about any country with just a click!
            From population and geography to currency and languages, get all the
            insights you need.
          </p>
          <p>
            Start your journey by searching for a country and explore its rich
            details.
          </p>
        </div>
        <div>
          <img
            src="/images/pngwing.com (4).png"
            alt="globe"
            className="home-img"
            width={400}
          />
        </div>
      </section>
      <section>
        <div>
          <h2>Here are some Interesting Facts </h2>
          <h2>you should know about </h2>
        </div>
        <div>
          <ul>
            {facts.map((currData) => (
              <FactCards key={currData.id} currData={currData} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
