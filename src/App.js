import { Routes, Route } from "react-router-dom";
import { DetailVideo, Home, Layout, Shorts } from "./pages";
import path from "./ultis/path";
import { Videos, Search } from "./components";
function App() {
  return (
    <>
      <Routes>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.HOME} element={<Home />}>
            <Route path={path.HOME} element={<Videos />} />
            <Route path={path.SHORT} element={<Shorts />} />
            <Route path={path.SEARCH} element={<Search />} />
          </Route>
          <Route path={path.DETAIL} element={<DetailVideo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
