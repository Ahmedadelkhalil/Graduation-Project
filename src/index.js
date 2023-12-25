import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import TransitionScrollToTopBtn from "./transitionScrollToTopBtn";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap";

// Leaflet
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <TransitionScrollToTopBtn />
      <App />
    </HashRouter>
  </React.StrictMode>
);
