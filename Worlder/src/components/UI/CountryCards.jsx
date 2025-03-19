import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCards = ({ currData }) => {
  return (
    <li
      className="card country-card"
      key={currData.cca3 || currData.ccn3 || currData.name.official}
    >
      <NavLink
        className={`cards-navlink`}
        to={`/country/${currData.name.official}`}
      >
        <figure>
          <img
            className="card-img"
            src={currData.flags.svg}
            alt={currData.flags.alt}
            width={200}
          />
        </figure>
        <h2>{currData.name.common || currData.name.official}</h2>
        <div className="card-sub-heading">
          <p>Continent: {currData.continents}</p>
          <p>Capital : {currData.capital}</p>
          <p>Population: {currData.population}</p>
        </div>

        <button className="card-btn" tabIndex={-1}>
          Read More <FaLongArrowAltRight />
        </button>
      </NavLink>
    </li>
  );
};
