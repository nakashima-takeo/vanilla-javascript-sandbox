import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../NotFound";


export const Router = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="react_app/index.html" element={<App />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
