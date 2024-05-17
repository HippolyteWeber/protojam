import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutList from "./pages/AboutList";
import FlowerList from "./components/FlowerList";
import CardDetails from "./pages/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutList />,
  },
  {
    path: "/details/:id",
    element: <CardDetails />,
  },
  {
    path: "/flowers",
    element: <FlowerList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
