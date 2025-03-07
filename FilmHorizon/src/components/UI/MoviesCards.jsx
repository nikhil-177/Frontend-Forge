import { NavLink, useLocation } from "react-router-dom";

export const DataCards = ({ currData, id }) => {
  const location = useLocation(); 

  // Determine the base path dynamically
  let basePath = "/movies"; // Default for movies

  if (location.pathname.includes("tvshows")) {
    basePath = "/tvshows";
  } else if (location.pathname.includes("trending")) {
    basePath = "/trending";
  } else if (location.pathname.includes("popular")) {
    basePath = "/popular";
  }  else if (location.pathname.includes("nowplaying")) {
    basePath = "/nowplaying";
  }  else if (location.pathname.includes("search")) {
    basePath = "/search";
  }

  return (
    <li
      key={id}
      className="rounded-3xl li-p bg-white hover:shadow-2xl hover:scale-[1.01]"
    >
      <NavLink to={`${basePath}/${currData.id}`}>
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${currData.poster_path}`}
            alt={currData.name || currData.title}
            className="w-[100%] rounded-3xl"
          />
        </figure>
        <h1 className="text-3xl h1-m font-medium pl-6 sm:text-4xl">
          {currData.name || currData.title}
        </h1>
      </NavLink>
    </li>
  );
};
