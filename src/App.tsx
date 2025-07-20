import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />         {/* ✅ Add this */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

