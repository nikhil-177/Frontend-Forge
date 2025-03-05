import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export const Movies = () => {
  const getMovies = useLoaderData();
  console.log(getMovies);

  const [inputValue, setInputValue] = useState("titanic");
  const [submittedValue, setSubmittedValue] = useState("");

  function getInputValue() {
    setSubmittedValue(inputValue);
    console.log(submittedValue);
    
  }

  return (
    <>
      <div className=" searchbox">
        <input
          type="text"
          className="  moviesInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="SearchBtn bg-red " onClick={getInputValue}>
          Search
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  ">
        {getMovies.results.map((currMovie) => {
          return (
            <li className="  rounded-3xl li-p  bg-white hover:shadow-2xl hover:scale-[1.01]  ">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${currMovie.poster_path}`}
                  alt={currMovie.original_title}
                  className="w-[100%] rounded-3xl"
                />
              </figure>
              <h1 className="text-3xl h1-m font-medium  pl-6 sm:text-4xl ">
                {currMovie.original_title}
              </h1>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const fetchMovies = async () => {
  const APIkey = "6247c7c1cf92b19db2ac3c80d2a17ce6";
  const APIurl =
    "https://api.themoviedb.org/3/search/movie?api_key=6247c7c1cf92b19db2ac3c80d2a17ce6&query=singham";
  try {
    const res = await fetch(APIurl);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
