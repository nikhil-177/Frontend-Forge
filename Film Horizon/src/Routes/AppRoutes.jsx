import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Home } from "../Pages/Home/Home";
import { Search } from "../Pages/Search/Search";
import { Movies } from "../Pages/Movies/Movies";
import { TVShows } from "../Pages/TVShows/TVShows";
import { Favourites } from "../Pages/Favourites/Favourites";
import { Trending } from "../Pages/Trending/Trending";
import { AppLayout } from "../components/Layout/AppLayout";
import { NowPlaying } from "../Pages/NowPlaying/NowPlaying";
import { Popular } from "../Pages/Popular/Popular";
import { MovieDetails } from "../Pages/MovieDetails/MovieDetails";
import { TVShowDetails } from "../Pages/TVShowDetails/TVShowDetails";


export const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout /> ,
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