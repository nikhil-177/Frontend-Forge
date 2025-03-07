import { useState, useEffect } from "react";
import { fetchTvShows } from "../API/FetchTvShows"; // Ensure to import fetchTvShows
import { DataCards } from "../components/UI/MoviesCards";

export const TVShows = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("breaking bad");
  const [tvShow, setTvShow] = useState([]); // State to store movie data

  useEffect(() => {
    async function fetchDefaultTvShow() {
      const tvShowsData = await fetchTvShows(submittedValue);
      setTvShow(tvShowsData.results || []);
    }
    fetchDefaultTvShow();
  }, [submittedValue]); // Fetch tvShow when submittedValue changes

  async function getInputValue() {
    if (!inputValue.trim()) return; // Prevent fetching empty queries
    setSubmittedValue(inputValue);
    const tvShowsData = await fetchTvShows(inputValue);
    setTvShow(tvShowsData.results || []);
  }

  return (
    <>
      <div className="searchbox">
        <input
          type="text"
          className="moviesInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for tvShow..."
        />
        <button className="SearchBtn bg-red" onClick={getInputValue}>
          Search
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {tvShow
          .filter((currtvshow) => currtvshow.poster_path)
          .map((currtvshow) => <DataCards currData={currtvshow} id={currtvshow.id}/>)}
      </ul>
    </>
  );
};
