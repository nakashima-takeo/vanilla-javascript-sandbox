import React from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = (props: Props) => {
  const { children } = props;
	return (
		<>
			<Header />
      {children}
			<Footer />
		</>
	);
};
