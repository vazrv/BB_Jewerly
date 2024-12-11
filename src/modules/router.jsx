import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, Blog, About } from "@pages";

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
