import React from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { NotFound } from "../components/pages/NotFound";
import App from "../App";

export const ReactBasicsRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Top />} />
				<Route path="users" element={<Users />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
