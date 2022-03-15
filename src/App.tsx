import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./pages/Library";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import YourPosts from "./pages/YourPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/your_posts" element={<YourPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
