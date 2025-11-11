import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

const AIBadge = () => {
	return (
		<MotionBox
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<Flex
				align="center"
				gap={2}
				px={4}
				py={2}
				borderRadius="full"
				bg={useColorModeValue("whiteAlpha.900", "blackAlpha.600")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("purple.200", "purple.700")}
				boxShadow="lg"
				position="relative"
				overflow="hidden"
				_before={{
					content: '""',
					position: "absolute",
					top: 0,
					left: "-100%",
					width: "100%",
					height: "100%",
					background:
						"linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)",
					animation: "shimmer 3s infinite",
				}}
			>
				<Box
					w={2}
					h={2}
					borderRadius="full"
					bg="green.400"
					boxShadow="0 0 10px rgba(74, 222, 128, 0.8)"
					animation="pulse 2s ease-in-out infinite"
				/>
				<Text
					fontSize="sm"
					fontWeight="700"
					bgGradient="linear(to-r, purple.500, pink.500)"
					bgClip="text"
					letterSpacing="wide"
				>
					AI-POWERED PORTFOLIO
				</Text>
			</Flex>
		</MotionBox>
	);
};

export default AIBadge;
