import { useLoaderData } from "react-router-dom";

export const MovieDetails = ({ params }) => {
  console.log(params);

  const data = useLoaderData();
  console.log(data);

  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;
  const runtime = `${hours} hr ${minutes} min`;

  const CrewMember = data.credits.crew;
  const getCrewMembers = (members, jobTitle) => {
    const member = members
      .filter((person) => person.job === jobTitle)
      .map((person) => person.name)
      .slice(0, 6)
      .join(" , ");
    return member.length > 0 ? member : "N/A";
  };

  const CastMember = data.credits.cast;
  const getCastMembers = (members, jobTitle) => {
    const member = members
      .filter((person) => person.job === jobTitle)
      .map((person) => person.name)
      .slice(0, 6)
      .join(" , ");
    return member.length > 0 ? member : "N/A";
  };

  return (
    <>
      <h1>{data.title}</h1>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          width={200}
          height={200}
          alt=""
        />
      </figure>
      <p>Tagline : {data.tagline}</p>
      <p>Release Date : {data.release_date}</p>
      <p>Genres : {data.genres.map((genres) => genres.name).join(" , ")}</p>
      <p>Runtime : {runtime}</p>
      <p>Description : {data.overview}</p>
      <p>Rating : {data.vote_average}</p>
      <h1>Crew : </h1>
      <h3>Director : {getCrewMembers(CrewMember, "Director")}</h3>
      <h3>Producer: {getCrewMembers(CrewMember, "Producer")}</h3>
      <h3>
        Cinematographer: {getCrewMembers(CrewMember, "Director of Photography")}
      </h3>
      <h3>Screenplay: {getCrewMembers(CrewMember, "Screenplay")}</h3>
      <h3>Writer: {getCrewMembers(CrewMember, "Writer")}</h3>
      <h3>Editor: {getCrewMembers(CrewMember, "Editor")}</h3>
      <h1>Cast : </h1>
      <h3>{getCastMembers}</h3>
      <ul>
        {data.credits.cast
          .map((currMember) => {
            return (
              <li>
                <h3>
                  {currMember.name} as {currMember.character}
                </h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500${currMember.profile_path}`}
                  alt={currMember.name}
                  width={100}
                />
              </li>
            );
          })
          .slice(0, 7)}
      </ul>
      <h1>Trailer :</h1>
      {data.videos.results.length > 0 && (
        <iframe
          src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
          title="trailer"
          width={560}
          height={315}
          frameBorder="0"
        ></iframe>
      )}
    </>
  );
};
