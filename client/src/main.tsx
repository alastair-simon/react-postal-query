import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);
