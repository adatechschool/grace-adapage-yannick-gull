
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Specialite from "./pages/Specialite";
import Citation from "./pages/Citation";
import Frise from "./pages/Frise";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/specialite" element={<Specialite />} />
        <Route path="/citation" element={<Citation />} />
        <Route path="/frise" element={<Frise />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

