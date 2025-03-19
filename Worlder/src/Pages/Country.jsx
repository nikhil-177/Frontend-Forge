import { startTransition, useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../services/GetServices";
import { Loader } from "../components/UI/Loader";
import { CountryCards } from "../components/UI/CountryCards";

export const Country = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const getData = async () => {
        const res = await getCountriesData();
        setCountriesData(res.data);
      };
      getData();
    });
  }, []);

  // Search handler
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setCurrentPage(1);
  };

  // Continent filter handler
  const handleChange = (e) => {
    setSelectedContinent(e.target.value);
    setCurrentPage(1);
  };

  // Sorting handler
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filtering logic
  const filteredData = countriesData
    .filter((data) =>
      data.name.common.toLowerCase().includes(inputValue.toLowerCase())
    )
    .filter((data) =>
      selectedContinent ? data.continents.includes(selectedContinent) : true
    );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <>
      <section className="container country-page">
        <div className="searchbox ">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputValue}
          />
          <select value={selectedContinent} onChange={handleChange}>
            <option value="">--Select Continent--</option>
            {[
              "Africa",
              "Antarctica",
              "Asia",
              "Europe",
              "North America",
              "Oceania",
              "South America",
            ].map((continent, index) => (
              <option key={index} value={continent}>
                {continent}
              </option>
            ))}
          </select>
          <button className="SearchOrder search-rounded" onClick={handleSort}>
            Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
          </button>
        </div>
        {isPending ? (
          <Loader />
        ) : (
          <>
            <div className="container card-container">
              <ul className="country-grid">
                {currentItems.map((currData) => (
                  <CountryCards currData={currData} key={currData.id} />
                ))}
              </ul>
            </div>
            <div className="country-pagination ">
              <button
                className="btn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span className="pagination-text">
                {" "}
                Page {currentPage} of {totalPages}{" "}
              </span>
              <button
                className="btn"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};
