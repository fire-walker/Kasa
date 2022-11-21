import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Error from "./components/Error";

import "../src/sass/_index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "*",
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);