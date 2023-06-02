import { Routes, Route } from "react-router-dom";
import { DetailVideo, Home, Layout } from "./pages";
import path from "./ultis/path";
function App() {
  return (
    <>
      <Routes>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.DETAIL} element={<DetailVideo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
