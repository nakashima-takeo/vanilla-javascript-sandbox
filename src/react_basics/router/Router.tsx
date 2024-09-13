import React from "react";
import Css from "../css/App";
import Rendering from "../rendering/App";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../NotFound";
import { SamplePageRoutes } from "./SamplePageRoutes";
import App from "../App";
import { ReactBasicsRoutes } from "../AtmicDesign/router/ReactBasicsRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="css" element={<Css />} />
      <Route path="rendering" element={<Rendering />} />
      <Route path="atmic-design/*" element={<ReactBasicsRoutes />} />
      <Route path="sample/*" element={<SamplePageRoutes />} />
      <Route path="react_basics/index.html" element={<App />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
