import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header/Header.jsx";
import { Pizza } from "./pages/Pizza";
import { Combo } from "./pages/Combo";

function App() {
  const [showMain, setShowMain] = useState("pizza");
  return (
    <Routes>
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/combo" element={<Combo />} />
    </Routes>
  );
}
export default App;
