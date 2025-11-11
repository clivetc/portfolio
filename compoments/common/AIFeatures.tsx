import { Box, SimpleGrid, Text, useColorModeValue, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FaBrain, FaRocket, FaCode, FaLightbulb } from "react-icons/fa";

const MotionBox = motion(Box);

interface Feature {
	icon: any;
	title: string;
	description: string;
	color: string;
}

const features: Feature[] = [
	{
		icon: FaBrain,
		title: "AI-Driven Development",
		description: "Leveraging modern AI tools to accelerate development and enhance code quality",
		color: "purple.500",
	},
	{
		icon: FaRocket,
		title: "Performance Optimized",
		description: "Building lightning-fast applications with cutting-edge optimization techniques",
		color: "blue.500",
	},
	{
		icon: FaCode,
		title: "Clean Architecture",
		description: "Writing maintainable, scalable code following industry best practices",
		color: "pink.500",
	},
	{
		icon: FaLightbulb,
		title: "Innovation First",
		description: "Constantly exploring new technologies and implementing creative solutions",
		color: "cyan.500",
	},
];

const AIFeatures = () => {
	return (
		<Box my={16}>
			<Text
				fontSize={["2xl", "3xl", "4xl"]}
				fontWeight="800"
				bgGradient="linear(to-r, blue.500, purple.500)"
				bgClip="text"
				mb={8}
				textAlign="center"
			>
				What Sets Me Apart
			</Text>
			<SimpleGrid columns={[1, 2, 2, 4]} spacing={6}>
				{features.map((feature, index) => (
					<MotionBox
						key={feature.title}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Box
							p={6}
							borderRadius="2xl"
							bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
							backdropFilter="blur(10px)"
							border="1px solid"
							borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
							boxShadow="lg"
							_hover={{
								transform: "translateY(-8px)",
								boxShadow: "2xl",
								borderColor: feature.color,
							}}
							transition="all 0.3s ease"
							height="100%"
						>
							<VStack align="flex-start" spacing={4}>
								<Box
									p={3}
									borderRadius="lg"
									bg={`${feature.color.split(".")[0]}.50`}
									color={feature.color}
								>
									<Icon as={feature.icon} boxSize={6} />
								</Box>
								<Text
									fontSize="lg"
									fontWeight="700"
									color={useColorModeValue("gray.800", "white")}
								>
									{feature.title}
								</Text>
								<Text
									fontSize="sm"
									color={useColorModeValue("gray.600", "gray.400")}
									lineHeight="1.6"
								>
									{feature.description}
								</Text>
							</VStack>
						</Box>
					</MotionBox>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default AIFeatures;
