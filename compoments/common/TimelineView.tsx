import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface TimelineViewProps {
	children: React.ReactNode;
}

const TimelineView: React.FC<TimelineViewProps> = ({ children }) => {
	return (
		<Box position="relative" pl={[0, 0, 8]}>
			{/* Timeline line */}
			<Box
				position="absolute"
				left={[0, 0, 3]}
				top={0}
				bottom={0}
				width="2px"
				bgGradient="linear(to-b, blue.500, purple.500, pink.500)"
				display={["none", "none", "block"]}
				opacity={0.3}
			/>
			
			{children}
		</Box>
	);
};

export default TimelineView;
