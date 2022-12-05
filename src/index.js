import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as HomeLoader } from "./pages/Home";
import Accommodation, { loader as AccommodationLoader } from "./pages/Accommodations/Accommodation";
import About from "./pages/About";
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
        path: "/about",
        element: <About />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
