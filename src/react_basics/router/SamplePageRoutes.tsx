import React from "react";
import { Route, Routes } from "react-router-dom";
import { UrlParameter } from "../UrlParameter";
import { SamplePage } from "../SamplePage";
import { NotFound } from "../NotFound";

export const SamplePageRoutes = () => {
  return (
    <Routes>
      <Route index element={<SamplePage />} />
      <Route path=":id" element={<UrlParameter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

