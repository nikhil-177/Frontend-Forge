export const FetchTrending = async () => {
    const APIurl = `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`; // No change needed here



  
    
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
