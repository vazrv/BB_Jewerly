import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "@pages/Main page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default AppRoutes;
