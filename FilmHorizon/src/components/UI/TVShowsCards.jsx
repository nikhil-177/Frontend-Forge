
export const TvShowsCards = ({currData , id}) => {

    return (
        <li
        key={id}
        className="rounded-3xl li-p bg-white hover:shadow-2xl hover:scale-[1.01]"
      >
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${currData.poster_path}`}
            alt={currData.name}
            className="w-[100%] rounded-3xl"
          />
        </figure>
        <h1 className="text-3xl h1-m font-medium pl-6 sm:text-4xl">
          {currData.name}
        </h1>
      </li>
    )
}