import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />  {/* ✅ This line */}
    </Routes>
  );
}

