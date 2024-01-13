import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface IMainLayout {
	children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
