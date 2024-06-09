import { Route, Routes, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Results from "../pages/Results/Results";
import { useState } from "react";
import { SearchType } from "../types/SearchType";

const Layout = ({ selected, setSelected, list, setList }) => (
  <div className="flex">
    <Home selected={selected} setSelected={setSelected} list={list} setList={setList} />
    <div className="ml-[320px] flex-grow">
      <Outlet />
    </div>
  </div>
);

function App() {
  const [selected, setSelected] = useState<SearchType | null>(null);
  const [list, setList] = useState<SearchType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout selected={selected} setSelected={setSelected} list={list} setList={setList} />}
      >
        <Route
          path="results"
          element={<Results selected={selected} isLoading={isLoading} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
