import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopUsers from "./TopUser";
import TrendingPosts from "./TrendingPosts";
import Feed from "./Feed";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;