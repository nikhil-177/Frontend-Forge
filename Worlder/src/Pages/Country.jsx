import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCountriesData } from "../services/GetServices";

export const Country = () => {
  const [countriesData, setCountriesData] = useState([]);
  // const [sortOrder, setSortOrder] = useState("asc");
  const [inputValue, setInputValue] = useState("");
  const getData = async () => {
    const res = await getCountriesData();
    console.log(res.data.flags);
    setCountriesData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // searched functionality
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  // console.log();

  // region based search funstionality
  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  const [selectedContinent, setSelectedContinent] = useState("");

  const handleChange = (e) => {
    setSelectedContinent(e.target.value)
  }

  const searchedData = countriesData.filter((data) =>
    data.name.common.toLowerCase().includes(inputValue.toLowerCase())
  ) || countriesData.filter((data) => data.continents.includes(selectedContinent));
  // console.log(searchedData);

  // countriesData.name.includes(inputValue)

  return (
    <>
      <section>
        <div>
          {/* <button>Acs</button> */}
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => handleInputValue(e)}
          />
          <select value={selectedContinent} onChange={handleChange} id="">
            <option >--select--</option>
            {
              continents.map((currContinent , index) => (
                <option key={index} value={currContinent}>{currContinent}</option>
              ))
            }
          </select>
        </div>
        <div>
          <ul>
            {searchedData.map((currData) => {
              return (
                <li
                  key={currData.cca3 || currData.ccn3 || currData.name.official}
                >
                  <NavLink to={`/country/${currData.name.official}`}>
                    <figure>
                      <img
                        src={currData.flags.svg}
                        alt={currData.flags.alt}
                        width={200}
                      />
                    </figure>
                    <h2>{currData.name.common || currData.name.official}</h2>
                    <p>Population : {currData.population}</p>
                    <p>Continent: {currData.continents}</p>
                    <p>Population : {currData.population}</p>
                    <button>Read More </button>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
