export const Details = ({data}) => {
    console.log(data);
    
    const hours = data.runtime ? Math.floor(data.runtime / 60) : 0;
    const minutes = data.runtime ? data.runtime % 60 : 0;
    const runtime = `${hours} hr ${minutes} min`;
  
    const CrewMember = data.credits?.crew || []; // Handle undefined credits
  
    const getCrewMembers = (members, jobTitle) => {
      const member = members
        .filter((person) => person.job === (jobTitle || department))
        .map((person) => person.name)
        .slice(0, 6)
        .join(" , ");
        console.log(member);
        
      return member.length > 0 ? member : "N/A";
    };
  
    const CastMembers = data.credits?.cast || []; // Ensure it's always an array
  
    return (
      <section className="flex flex-col gap-2 container">
        <h1 className="text-4xl font-bold self-center ham-p underline md:text-6xl" data-aos="fade-right">
          {data.title ||  data.name || data.original_name }
        </h1>
        <div className="flex flex-col md:flex-row md:gap-15">
          <figure className="self-center md:self-start" data-aos="flip-down">
            <img
              className="rounded-2xl min-w-[200px] self-center hover:scale-[1.05]"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              width={200}
              height={200}
              alt={data.title || "Movie Poster"}
            />
          </figure>
  
          <div className="flex flex-col gap-3" data-aos="fade-left">
            <h3 className="text-xl font-normal md:text-3xl md:ham-p">
              Description: {data.overview || "No Description Available"}
            </h3>
  
            <h3 className="text-xl font-medium md:text-3xl">
              Rating: {data.vote_average || "Rating Not Available"}
            </h3>
  
            <h3 className="text-xl font-medium md:text-3xl">
              Tagline: {data.tagline || "No Tagline Available"}
            </h3>
  
            <h3 className="text-xl font-medium md:text-3xl">
              Release Date: {data.release_date || "Release Date Not Available"}
            </h3>
  
            <h3 className="text-xl font-medium md:text-3xl">
              Genres: {data.genres?.map((genre) => genre.name).join(", ") || "No Genres Available"}
            </h3>
  
            <h3 className="text-xl font-medium md:text-3xl">
              Runtime: {runtime || "Runtime Not Available"}
            </h3>
          </div>
        </div>
  
  <div data-aos="fade-right">
  
        <h1 className="text-xl font-bold md:text-3xl">Crew:</h1>
        <h3 className="text-lg font-medium md:text-2xl">
          Director: {getCrewMembers(CrewMember, "Director")}
        </h3>
        <h3 className="text-lg font-medium md:text-2xl">
          Producer: {getCrewMembers(CrewMember, "Producer")}
        </h3>
        <h3 className="text-lg font-medium md:text-2xl">
          Cinematographer: {getCrewMembers(CrewMember, "Director of Photography")}
        </h3>
        <h3 className="text-lg font-medium md:text-2xl">
          Screenplay: {getCrewMembers(CrewMember, "Screenplay")}
        </h3>
        <h3 className="text-lg font-medium md:text-2xl">
          Writer: {getCrewMembers(CrewMember, "Writer")}
        </h3>
        <h3 className="text-lg font-medium md:text-2xl">
          Editor: {getCrewMembers(CrewMember, "Editor")}
        </h3>
  </div>
  
        <h1 className="text-xl font-bold md:text-3xl">Cast:</h1>
        {CastMembers.length > 0 ? (
          <ul className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-7">
            {CastMembers.slice(0, 7).map((currMember, index) => (
              <li key={index} className="bg-white ham-p h-fit hover:scale-3d hover:shadow-2xl" data-aos="flip-right">
                <h3 className="text-lg font-medium md:text-2xl" >
                  {currMember.name} as {currMember.character || "N/A"}
                </h3>
                {currMember.profile_path ? (
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/w500${currMember.profile_path}`}
                    alt={currMember.name}
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg font-medium md:text-2xl">No Cast Information Available</p>
        )}
  
        <h1 className="text-2xl font-bold md:text-3xl">Trailer:</h1>
        {data.videos?.results?.length > 0 ? (
          <iframe
            className="w-[35rem] md:w-[60rem]"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            title="trailer"
            width={560}
            height={315}
            frameBorder="0"
          ></iframe>
        ) : (
          <p className="text-lg font-medium md:text-2xl">No Trailer Available</p>
        )}
      </section>
    );
  };
  