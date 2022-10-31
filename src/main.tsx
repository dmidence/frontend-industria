import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing/landing";
import "./index.scss";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
