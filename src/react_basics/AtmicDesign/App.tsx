import React from "react";
import "./style.css";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { UserProvider } from "./providers/UserProvider";
import { Outlet } from "react-router-dom";

export const App = () => {
	return (
		<>
      <UserProvider>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </UserProvider>
		</>
	);
};

export default App;
