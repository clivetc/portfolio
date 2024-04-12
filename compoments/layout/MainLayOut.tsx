import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

interface IMainLayout {
	children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Analytics mode={"production"} />
			<Footer />
		</>
	);
};

export default MainLayout;
