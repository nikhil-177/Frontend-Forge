import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { AppLayout } from "../components/Layout/AppLayout";
import { Home } from "../Pages/Home";
import { Search } from "../Pages/Search";
import { fetchMovies, Movies } from "../Pages/Movies";
import { MovieDetails } from "../Pages/MovieDetails";
import { TVShowDetails } from "../Pages/TVShowDetails";
import { TVShows } from "../Pages/TVShows";
import { Favourites } from "../Pages/Favourites";
import { Popular } from "../Pages/Popular";
import { NowPlaying } from "../Pages/NowPlaying";
import { Trending } from "../Pages/Trending";



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
                },
                {
                    path:"/movies",
                    element: <Movies /> ,
                    loader: fetchMovies,
                },
                {
                    path:"/movies/:movieID",
                    element: <MovieDetails /> ,
                },
                {
                    path:"/tvshows",
                    element: <TVShows /> ,
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
                },
                {
                    path:"/nowplaying",
                    element: <NowPlaying /> ,
                },
                {
                    path:"/trending",
                    element: <Trending /> ,
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}