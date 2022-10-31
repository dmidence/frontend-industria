import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing/landing";
import MasterAdmin from "./pages/admin/MasterAdmin";
import "./index.scss";
import { AppRouter } from "./pages/router/AppRouter";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter></AppRouter>
);
