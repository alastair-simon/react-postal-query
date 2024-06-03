import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
