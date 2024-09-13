import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components/pages/NotFound";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="setting" element={<Setting />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="react_app/index.html" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router;
