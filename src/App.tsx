import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./components/Library";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
