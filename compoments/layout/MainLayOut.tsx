import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ParticleBackground from "../common/ParticleBackground";
import ScrollIndicator from "../common/ScrollIndicator";
import { Analytics } from "@vercel/analytics/react";

interface IMainLayout {
	children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
			<ScrollIndicator />
			<ParticleBackground />
			<Nav />
			<main>{children}</main>
			<Analytics mode={"production"} />
			<Footer />
		</>
	);
};

export default MainLayout;
