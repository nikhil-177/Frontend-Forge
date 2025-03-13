import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Country } from "../Pages/Country";
import { Contact } from "../Pages/Contact";
import { AppLayout } from "../components/Layout/AppLayout";
import { CountryDetails } from "../Pages/CountryDetails";
import { getDetailedData } from "../services/GetServices";

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:countryName",
          element: <CountryDetails />,
          loader: async ({ params }) => {
            const response = await getDetailedData(params.countryName);
            return response.data[0];
          },
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
