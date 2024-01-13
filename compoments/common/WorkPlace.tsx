// Import necessary components and styles from Chakra UI
import { Box } from "@chakra-ui/react";
import React from "react";

// Define the component
const WorkPlace = () => {
	return (
		<Box bgColor="#FAFAFA" height="50vh" display="grid" placeItems="center">
			<Box
				className="container"
				width={{ md: "800px", base: "420px" }}
				height="480px"
				position="relative"
				top="15%"
			>
				{/* Lamp Holder */}
				<Box className="lamp-holder" />

				{/* Lamp */}
				<Box className="lamp" />

				{/* Light */}
				<Box className="light" />

				{/* Wall */}
				<Box className="wall" />

				{/* Desk */}
				<Box className="desk" />

				{/* Screen */}
				<Box className="screen">
					{/* Sidebar */}
					<Box className="sidebar">
						<Box className="h1" />
						<Box className="h2" />
					</Box>

					{/* Main */}
					<Box className="main">
						{/* Search */}
						<Box className="search" />

						{/* Pens */}
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
							<Box key={index} className={`pen pen${index}`} />
						))}

						{/* Mouse */}
						<Box className="mouse" />

						{/* Keyboard */}
						<Box className="keyboard" />

						{/* Cup */}
						<Box className="cup">
							{/* Tea */}
							<Box className="tea" />
							{/* Steam */}
							<Box className="steam" />
						</Box>

						{/* Plant */}
						<Box className="plant">
							{/* Leaves */}
							<Box className="leaf1" />
							<Box className="leaf2" />
							<Box className="leaf3" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

// Export the component
export default WorkPlace;
