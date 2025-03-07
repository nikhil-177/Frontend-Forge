export const fetchMovieDetails = async ({params}) => {

    console.log(params);
    
    // let id =params.movieId
    // console.log(id);
    
    const APIkey = process.env.API_KEY;

    const APIurl = `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${APIkey}&append_to_response=credits,images,videos,recommendations,similar,reviews`; // No change needed here



    try {
      const res = await fetch(APIurl);
      const data = await res.json();
      // console.log(data);
        
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return { results: [] };
    }
  };
