import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { AppLayout } from "../components/Layout/AppLayout";
import { Home } from "../Pages/Home";
import { Search } from "../Pages/Search";
import { Movies } from "../Pages/Movies";
import { MovieDetails } from "../Pages/Pages Details/MovieDetails";
import { TVShowDetails } from "../Pages/Pages Details/TVShowDetails";
import { TVShows } from "../Pages/TVShows";
import { Favourites } from "../Pages/Favourites";
import { Popular } from "../Pages/Popular";
import { NowPlaying } from "../Pages/NowPlaying";
import { Trending } from "../Pages/Trending";
import { fetchMovies } from "../API/FetchAPI";
import { FetchPopular } from "../API/PopularAPI";
import { FetchTrending } from "../API/trendingAPI";
import { FetchNowPlaying } from "../API/NowPlayingAPI";
import { SearchDetails } from "../Pages/Pages Details/SearchDetails";
import { PopularDetails } from "../Pages/Pages Details/PopularDetails";
import { NowPlayingDetails } from "../Pages/Pages Details/NowPlayingDetails";
import { TrendingDetails } from "../Pages/Pages Details/TrendingDetails";
import { fetchSearch } from "../API/FetchSearch";
import { fetchTvShows } from "../API/FetchTvShows";
import { fetchMovieDetails } from "../API/details/GetMovieDetails";



export const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout/> ,
            children: [
                {
                    path:"/",
                    element: <Home /> ,
                },
                {
                    path:"/search",
                    element: <Search /> ,
                    loader: fetchSearch,
                },
                {
                    path:"/search/:searchID",
                    element: <SearchDetails /> ,
                },
                {
                    path:"/movies",
                    element: <Movies /> ,
                    loader: fetchMovies,
                },
                {
                    path:"/movies/:movieID",
                    element: <MovieDetails /> ,
                    loader: fetchMovieDetails,
                },
                {
                    path:"/tvshows",
                    element: <TVShows /> ,
                    loader: fetchTvShows,
                },
                {
                    path:"/tvshows/:tvshowsID",
                    element: <TVShowDetails /> ,
                },
                {
                    path:"/favourites",
                    element: <Favourites /> ,
                },
                {
                    path:"/popular",
                    element: <Popular /> ,
                    loader: FetchPopular,
                },
                {
                    path:"/popular/:popularID",
                    element: <PopularDetails /> ,
                },
                {
                    path:"/nowplaying",
                    element: <NowPlaying /> ,
                    loader: FetchNowPlaying,
                },
                {
                    path:"/nowplaying/:nowplayingID",
                    element: <NowPlayingDetails /> ,
                },
                {
                    path:"/trending",
                    element: <Trending /> ,
                    loader: FetchTrending, 
                },
                {
                    path:"/trending/:trendingID",
                    element: <TrendingDetails /> ,
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}