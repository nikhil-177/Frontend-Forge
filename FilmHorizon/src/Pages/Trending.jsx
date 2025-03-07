import { useLoaderData } from "react-router-dom";
import { DataCards } from "../components/UI/MoviesCards";

export const Trending = () => {
  const trendingData = useLoaderData(); // State to store movie data
console.log(trendingData);

  

  return (
    <>
    <h1 className="text-4xl font-bold ham-p">Trending Shows :</h1>
      <ul className="grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {trendingData.results
          .map((currData) => <DataCards currData={currData} id={currData.id}/>)}
      </ul>
    </>
  );
};
