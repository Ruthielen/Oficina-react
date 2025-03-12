import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">🏡 Home</Link></li>
          <li><Link to="/sobre">ℹ️ Sobre</Link></li>
          <li><Link to="/contato">📞 Contato</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
