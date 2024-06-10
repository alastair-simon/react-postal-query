import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Results from "../pages/Results/Results";
import SideBar from "../components/SideBar/SideBar";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Results />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}