import React from "react";

import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./components/templates/HeaderLayout";

export const App = () => {
  return (
    <div>
      <HeaderLayout>
        <Outlet />
      </HeaderLayout>
    </div>
  )
}

export default App;
