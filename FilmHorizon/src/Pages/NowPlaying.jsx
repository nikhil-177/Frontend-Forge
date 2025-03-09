import { useLoaderData } from "react-router-dom";
import { DataCards } from "../components/UI/Cards";

export const NowPlaying = () => {
  const PopularData = useLoaderData(); // State to store movie data
console.log(PopularData);

  

  return (
    <>
    <h1 className="text-4xl font-bold ham-p">Now Playing Shows :</h1>
      <ul className="grid grid-cols-2 gap-7 container md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {PopularData.results
          .map((currData) => <DataCards currData={currData} id={currData.id}/>)}
      </ul>
    </>
  );
};
