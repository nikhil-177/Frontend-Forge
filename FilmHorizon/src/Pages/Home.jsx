import { NavLink } from "react-router-dom";
import { HomeLoader } from "../API/HomeLoader";
import { useEffect, useState } from "react";

export const Home = () => {
  const [loaderData, setLoaderData] = useState({
    trending: [],
    nowPlaying: [],
    popular: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await HomeLoader();
      setLoaderData(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <section className="relative bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] welcome-section h-[70vh] flex flex-col items-center gap-3 container">
        <div className="content self-center order-2 flex flex-col">
          <h1 className="home-h1 text-4xl font-semibold">
            Welcome to My Movie Hub 🎬
          </h1>
          <p className="home-p text-xl font-normal">
            Discover the latest movies, trending shows, and explore your
            favorites. Your one-stop destination for all things cinema!
          </p>
          <button className="explore-btn text-xl text-white bg-blue-600 px-4 py-2 rounded-md">
            <NavLink to={"/movies"}>Explore Now</NavLink>
          </button>
        </div>
        <figure className="order-1">
          <img
            className="scale-x-[-1] w-[30rem]"
            src={"../public/hero.webp"}
            alt=""
          />
        </figure>
        <div className="custom-shape-divider-bottom-1741535379">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Trending Movies Slider */}
      <section className="mt-6 container">
        <h2 className="text-5xl font-bold mb-4 px-4">Trending Movies</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-4 px-4 gap-5 relative">
            {loaderData.trending.map((currData, index) => (
              <li key={currData.id} className="flex-shrink-0 w-[15rem] bg-red-500 relative">
                <img
                  src={`https://image.tmdb.org/t/p/w300${currData.poster_path}`}
                  alt=""
                  className="w-[120px] h-[270px] object-cover  rounded-md"
                />
                <div className="text-center text-8xl font-semibold mt-2 absolute z-20 bottom-0 left-2 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)] ">
                  {index + 1}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
