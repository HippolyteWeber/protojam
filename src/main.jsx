import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CardListDetails from "./components/CardList";

/* import AboutList from "./pages/AboutList"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /*   {
    path: "/about",
    element: <AboutList />,
  }, */
  {
    path: "/detail/:id",
    element: <CardListDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
