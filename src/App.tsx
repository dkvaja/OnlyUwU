import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./pages/Library";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import YourPosts from "./pages/YourPosts";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Followers from "./pages/Followers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/your_posts" element={<YourPosts />} />
        <Route path="/search/:caption" element={<Search />} />
        <Route path="/profile/:uuid" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </Router>
  );
}

export default App;
