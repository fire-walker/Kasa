import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as HomeLoader } from "./pages/Home";
import Accommodation, { loader as AccommodationLoader } from "./pages/Accommodations/Accommodation";
import AboutUs from "./pages/AboutUs";
import Error from "./components/Error";

import "../src/sass/_index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: HomeLoader
    },
    {
        path: 'accommodations/:accommodationId',
        element: <Accommodation />,
        loader: AccommodationLoader
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root"))
    .render(<RouterProvider router={router} />);
