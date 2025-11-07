import { Box, Flex, Image, SlideFade, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const WorkPlace = () => {
	return (
		<SlideFade in offsetY={20}>
			<Box
				borderRadius="2xl"
				bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				boxShadow="2xl"
				p={8}
				position="relative"
				overflow="hidden"
			>
				<Box
					position="absolute"
					top="-50%"
					right="-20%"
					width="400px"
					height="400px"
					borderRadius="full"
					bgGradient="linear(to-br, purple.400, pink.400)"
					opacity="0.1"
					filter="blur(60px)"
					animation="float 6s ease-in-out infinite"
				/>
				<Flex justifyContent={"center"} alignItems={"center"} position="relative" zIndex={1}>
					<Box
						width={["100%", "85%", "70%"]}
						height="auto"
						opacity={1}
						position={"relative"}
						transition="all 0.5s ease"
						_hover={{
							transform: "scale(1.02)",
						}}
					>
						<Image
							src="https://www.bebold.ch/img/home/macbook-white.png"
							alt="MacBook Computer Apple"
							width="100%"
							height="auto"
							style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" }}
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
							borderRadius="md"
							boxShadow="inset 0 0 20px rgba(0,0,0,0.1)"
						/>
					</Box>
				</Flex>
			</Box>
		</SlideFade>
	);
};

export default WorkPlace;
