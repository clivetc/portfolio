import {
	Box,
	Flex,
	Text,
	useColorModeValue,
	Badge,
	HStack,
	Icon,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const MotionBox = motion(Box);

interface Project {
	title: string;
	description: string;
	tags: string[];
	featured?: boolean;
	link?: string;
	github?: string;
}

const projects: Project[] = [
	{
		title: "E-Commerce Platform",
		description: "Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations",
		tags: ["React", "Node.js", "MongoDB", "AWS"],
		featured: true,
	},
	{
		title: "Task Management System",
		description: "Collaborative project management tool with real-time updates and team analytics",
		tags: ["Next.js", "TypeScript", "PostgreSQL"],
		featured: true,
	},
	{
		title: "Mobile Banking App",
		description: "Secure mobile banking application with biometric authentication",
		tags: ["React Native", "NestJS", "Redis"],
	},
];

const ProjectShowcase = () => {
	return (
		<Box my={16}>
			<Flex justify="space-between" align="center" mb={8}>
				<Text
					fontSize={["2xl", "3xl", "4xl"]}
					fontWeight="800"
					bgGradient="linear(to-r, purple.500, pink.500)"
					bgClip="text"
				>
					Featured Projects
				</Text>
				<HStack spacing={2}>
					<Icon as={FaStar} color="yellow.400" />
					<Text fontSize="sm" fontWeight="600" color={useColorModeValue("gray.600", "gray.400")}>
						Highlighted Work
					</Text>
				</HStack>
			</Flex>

			<VStack spacing={6} align="stretch">
				{projects.map((project, index) => (
					<MotionBox
						key={project.title}
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Box
							p={6}
							borderRadius="2xl"
							bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
							backdropFilter="blur(10px)"
							border="2px solid"
							borderColor={
								project.featured
									? useColorModeValue("purple.200", "purple.700")
									: useColorModeValue("gray.200", "whiteAlpha.200")
							}
							boxShadow="lg"
							_hover={{
								transform: "translateX(8px)",
								boxShadow: "2xl",
								borderColor: "purple.500",
							}}
							transition="all 0.3s ease"
							position="relative"
							overflow="hidden"
						>
							{project.featured && (
								<Badge
									position="absolute"
									top={4}
									right={4}
									colorScheme="purple"
									fontSize="xs"
									px={3}
									py={1}
									borderRadius="full"
								>
									FEATURED
								</Badge>
							)}

							<VStack align="flex-start" spacing={4}>
								<Text
									fontSize="2xl"
									fontWeight="700"
									color={useColorModeValue("gray.800", "white")}
								>
									{project.title}
								</Text>

								<Text
									fontSize="md"
									color={useColorModeValue("gray.600", "gray.400")}
									lineHeight="1.7"
								>
									{project.description}
								</Text>

								<HStack spacing={2} flexWrap="wrap">
									{project.tags.map((tag) => (
										<Badge
											key={tag}
											colorScheme="purple"
											variant="subtle"
											px={3}
											py={1}
											borderRadius="full"
											fontSize="xs"
											fontWeight="600"
										>
											{tag}
										</Badge>
									))}
								</HStack>

								<HStack spacing={4} pt={2}>
									{project.link && (
										<Flex
											align="center"
											gap={2}
											color="purple.500"
											cursor="pointer"
											_hover={{ color: "purple.600" }}
											transition="color 0.2s"
										>
											<Icon as={FiExternalLink} />
											<Text fontSize="sm" fontWeight="600">
												View Project
											</Text>
										</Flex>
									)}
									{project.github && (
										<Flex
											align="center"
											gap={2}
											color="purple.500"
											cursor="pointer"
											_hover={{ color: "purple.600" }}
											transition="color 0.2s"
										>
											<Icon as={FiGithub} />
											<Text fontSize="sm" fontWeight="600">
												Source Code
											</Text>
										</Flex>
									)}
								</HStack>
							</VStack>
						</Box>
					</MotionBox>
				))}
			</VStack>
		</Box>
	);
};

export default ProjectShowcase;
