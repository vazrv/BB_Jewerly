import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "@pages/about";
import Blog from "@pages/blog";
import { MainPage } from "@pages/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
