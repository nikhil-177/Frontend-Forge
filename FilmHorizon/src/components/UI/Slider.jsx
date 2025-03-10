import { NavLink } from "react-router-dom";

export const Slider = ({ currData, index, page }) => {
  // console.log(window.innerWidth);

  let RedirectTo = "";
  if (page === "Trending") {
    RedirectTo = "/trending";
  } else if(page === "Popular"){
    RedirectTo = "/popular";
  } else if(page === "NowPlaying"){
    RedirectTo = "/nowplaying"
  }

  return (
    <NavLink to={RedirectTo}>
      <li key={currData.id} className="flex-shrink-0 w-[14rem]  relative ">
        <img
          src={`https://image.tmdb.org/t/p/w300${currData.poster_path}`}
          alt=""
          className="w-full h-[200px] object-cover  rounded-lg"
        />
        <div className="text-center text-8xl font-semibold mt-2 absolute z-20 top-0 left-2 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)] ">
          {index + 1}
        </div>
      </li>
    </NavLink>
  );
};
