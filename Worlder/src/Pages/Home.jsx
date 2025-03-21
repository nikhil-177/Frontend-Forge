import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../API/HomeAPI.json";
import { FactCards } from "../components/UI/FactsCard";

export const Home = () => {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    const InterestingFacts = data;
    setFacts(InterestingFacts);
  }, []);

  return (
    <section className="container home-page">
      <div className="home-hero-grid">
        <div className="home-hero-left">
          <h2>Welcome to Worlder</h2>
          <p className="p-1">
            Discover detailed information about any country with just a click!
            From population and geography to currency and languages, get all the
            insights you need.
          </p>
          <p className="p-2">
            Start your journey by searching for a country and explore its rich
            details.
          </p>
          <NavLink to={"/country"}>
            <button className="btn">Explore More</button>
          </NavLink>
        </div>
        <div className="home-hero-right">
          <img src="images/homeimg.png" alt="globe" width={100} />
        </div>
      </div>
      <div className="home-facts">
        <div className="facts-heading">
          <h2>Here are some Interesting Facts </h2>
          <h2>you should know about </h2>
        </div>
        <div>
          <ul className="home-cards">
            {facts.map((currData) => (
              <FactCards key={currData.id} currData={currData} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
