import React, { FC } from "react";
import { motion } from "framer-motion";

interface IPageLayout {
	children: React.ReactNode;
	description?: string;
	keywords?: string;
	image?: string;
}

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: FC<IPageLayout> = ({ children }) => {
	return (
		<motion.main
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ type: "linear" }}
		>
			{children}
		</motion.main>
	);
};

export default Layout;
