import { Box, Flex, Image, SlideFade } from "@chakra-ui/react";
import React from "react";

const WorkPlace = () => {
	return (
		<SlideFade in offsetY={20}>
			<Flex justifyContent={"center"} alignItems={"center"}>
				<Box
					width={["90%", "80%", "65%"]}
					height={["90%", "80%", "65%"]}
					opacity={1}
					position={"relative"}
				>
					<Image
						src="https://www.bebold.ch/img/home/macbook-white.png"
						alt="MacBook Computer Apple"
						width="100%"
						height="auto"
					/>
					<Box
						id="gif"
						bgSize="cover"
						position="absolute"
						top={["50%", "50%", "50%"]}
						left="50%"
						transform="translate(-50%, -50%)"
						width={["80%", "60%", "50%"]}
						paddingTop={["50%", "40%", "32%"]}
						backgroundImage="url(https://www.bebold.ch/img/home/presentation-anim.gif)"
					/>
				</Box>
			</Flex>
		</SlideFade>
	);
};

export default WorkPlace;
