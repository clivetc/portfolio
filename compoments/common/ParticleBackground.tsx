import { Box } from "@chakra-ui/react";
import React from "react";

const ParticleBackground = () => {
	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="100%"
			zIndex={-3}
			opacity={0.4}
			pointerEvents="none"
			sx={{
				backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.15) 1px, transparent 1px)`,
				backgroundSize: "50px 50px",
			}}
		/>
	);
};

export default ParticleBackground;
