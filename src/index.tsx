import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./index.scss";
import { StateProvider } from "./state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider>
      <Home />
    </StateProvider>
  </React.StrictMode>
);
