import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Country } from "../Pages/Country";
import { Contact } from "../Pages/Contact";
import { AppLayout } from "../components/Layout/AppLayout";


export const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout />,
            children: [
                {
                    path:"/",
                    element: <Home />,
                },
                {
                    path:"/about",
                    element: <About />,
                },
                {
                    path:"/country",
                    element: <Country />,
                },
                {
                    path:"/contact",
                    element: <Contact />,
                },
            ]
        },
        
    ])
    return <RouterProvider router={routes}/>
}