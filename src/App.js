import { Routes, Route } from "react-router-dom";
import {
  Channel,
  DetailVideo,
  History,
  Home,
  Layout,
  Library,
  Shorts,
  Subscriptions,
} from "./pages";
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
            <Route path={path.SUBS} element={<Subscriptions />} />
            <Route path={path.LIBRARY} element={<Library />} />
            <Route path={path.HISTORY} element={<History />} />
            <Route path={path.CHANNEL} element={<Channel />} />
          </Route>
          <Route path={path.DETAIL} element={<DetailVideo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
