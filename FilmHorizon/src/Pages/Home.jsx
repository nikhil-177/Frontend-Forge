import { NavLink } from "react-router-dom";
import { HomeLoader } from "../API/HomeLoader";
import { useEffect, useState } from "react";
import { Slider } from "../components/UI/Slider";

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
      <section className="relative bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] welcome-section h-[70vh] flex flex-col items-center gap-3 container lg:h-[90vh] lg:flex-row">
        <div className="content self-center order-2 flex flex-col lg:order-1 " data-aos="fade-right">
          <h1 className="home-h1 text-4xl font-semibold md:text-6xl">
            Welcome to My Movie Hub 🎬
          </h1>
          <p className="home-p text-xl font-normal md:text-3xl">
            Discover the latest movies, trending shows, and explore your
            favorites. Your one-stop destination for all things cinema!
          </p>
          <button className="explore-btn text-xl text-white bg-blue-600 px-4 py-2 rounded-md md:text-3xl">
            <NavLink to={"/movies"}>Explore Now</NavLink>
          </button>
        </div>
        <figure className="order-1" data-aos="fade-left">
          <img
            className="scale-x-[-1] w-[30rem] sm:w-[35rem] md:w-[40rem] lg:w-[80rem]"
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

      <section className="mt-6 container">
        <section data-aos="fade-left">
          <h2 className="text-5xl font-bold mb-4 px-4">Trending</h2>
          <div className="overflow-x-auto hide-scrollbar relative">
            <ul
              className={`flex space-x-4 px-4 gap-8 relative ul-p w-[35rem] 
            `}
            >
              {loaderData.trending.map((currData, index) => (
                <Slider currData={currData} index={index} page={"Trending"}/>
              ))}
            </ul>
          </div>
        </section>
        <section data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-4 px-4">Popular</h2>
          <div className="overflow-x-auto hide-scrollbar relative">
            <ul
              className={`flex space-x-4 px-4 gap-8 relative ul-p w-[35rem] 
            `}
            >
              {loaderData.popular.map((currData, index) => (
                <Slider currData={currData} index={index} page={"Popular"} />
              ))}
            </ul>
          </div>
        </section>
        <section data-aos="fade-left">
          <h2 className="text-5xl font-bold mb-4 px-4">Now Playing</h2>
          <div className="overflow-x-auto hide-scrollbar relative">
            <ul
              className={`flex space-x-4 px-4 gap-8 relative ul-p w-[35rem]  
            `}
            >
              {loaderData.nowPlaying.map((currData, index) => (
                <Slider currData={currData} index={index} page ={"NowPlaying"}/>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};
