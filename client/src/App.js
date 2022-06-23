import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
