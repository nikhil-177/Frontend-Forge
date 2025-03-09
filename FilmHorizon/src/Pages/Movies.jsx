import { useState, useEffect } from "react";
import { fetchMovies } from "../API/FetchAPI"; // Ensure to import fetchMovies
import { DataCards } from "../components/UI/Cards";

export const Movies = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("titanic");
  const [movies, setMovies] = useState([]); // State to store movie data
  // console.log(movies);
  

  useEffect(() => {
    async function fetchDefaultMovies() {
      const moviesData = await fetchMovies(submittedValue);
      setMovies(moviesData.results || []);
    }
    fetchDefaultMovies();
  }, [submittedValue]); // Fetch movies when submittedValue changes

  async function getInputValue() {
    if (!inputValue.trim()) return; // Prevent fetching empty queries
    setSubmittedValue(inputValue);
    const moviesData = await fetchMovies(inputValue);
    setMovies(moviesData.results || []);
  }

  return (
    <>
      <div className="searchbox">
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
      <ul className="grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {movies
          .filter((currMovie) => currMovie.poster_path) // Filter out movies without poster_path
          .map((currMovie) => <DataCards currData={currMovie} id={currMovie.id}/>)}
      </ul>
    </>
  );
};
