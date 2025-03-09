export const fetchTvShows = async (name) => {
    const APIurl = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${name}`; // No change needed here

    try {
        const res = await fetch(APIurl);
        const data = await res.json();
        console.log(data);
        
        return data;
    } catch (error) {
        console.log("Error fetching data:", error);
        return { results: [] };
    }
};
