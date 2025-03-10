import { useState, useEffect } from "react";
import { fetchSearch } from "../API/FetchSearch"; 
import { DataCards } from "../components/UI/Cards";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("lucifer");
  const [search, setSearch] = useState([]); // State to store movie data

  useEffect(() => {
    async function fetchDefaultSearch() {
      const searchedData = await fetchSearch(submittedValue);
      setSearch(searchedData.results || []);
    }
    fetchDefaultSearch();
  }, [submittedValue]); // Fetch search when submittedValue changes

  async function getInputValue() {
    if (!inputValue.trim()) return; // Prevent fetching empty queries
    setSubmittedValue(inputValue);
    const searchedData = await fetchSearch(inputValue);
    setSearch(searchedData.results || []);
    console.log(search);
  }


  return (
    <>
      <div className={`searchbox`} data-aos="fade-up">
        <input
          type="text"
          className="moviesInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for movies..."
        />
        <button className="SearchBtn bg-red" onClick={getInputValue}>
          Search
        </button>
      </div>
      <ul className={`grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 $`} >
        {search
          .filter((currSearched) => currSearched.poster_path)
          .map((currSearched) => <DataCards currData={currSearched} id={currSearched.id}/>)}
      </ul>
    </>
  );
};
