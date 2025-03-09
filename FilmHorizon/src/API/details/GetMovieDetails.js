export const FetchDetails = async ({ params }) => {
  console.log(params);

  let APIurl = ``;

  // const APIurl = `https://api.themoviedb.org/3/movie/${params.dataID}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,images,videos,recommendations,similar,reviews`; // No change needed here

  if (params.mediaType === "tv") {
    APIurl = `https://api.themoviedb.org/3/tv/${params.dataID}?api_key=${
      import.meta.env.VITE_API_KEY
    }&append_to_response=credits,images,videos,recommendations,similar,reviews`;
  } else if (params.mediaType === "movie") {
    APIurl = `https://api.themoviedb.org/3/movie/${params.dataID}?api_key=${
      import.meta.env.VITE_API_KEY
    }&append_to_response=credits,images,videos,recommendations,similar,reviews;`;
  } else if (params.tvshowID) {
    APIurl = `https://api.themoviedb.org/3/tv/${params.tvshowID}?api_key=${
      import.meta.env.VITE_API_KEY
    }&append_to_response=credits,images,videos,recommendations,similar,reviews`;
  } else if (!params.mediaType) {
    APIurl = `https://api.themoviedb.org/3/movie/${params.dataID}?api_key=${
      import.meta.env.VITE_API_KEY
    }&append_to_response=credits,images,videos,recommendations,similar,reviews;`;
  }

  try {
    const res = await fetch(APIurl);
    const data = await res.json();
    console.log(data);
    console.log(params.tvshowID);

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return { results: [] };
  }
};
