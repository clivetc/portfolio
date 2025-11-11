import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

interface Skill {
	name: string;
	level: number;
	color: string;
}

const skills: Skill[] = [
	{ name: "React/Next.js", level: 95, color: "#61DAFB" },
	{ name: "TypeScript", level: 90, color: "#3178C6" },
	{ name: "Node.js/NestJS", level: 85, color: "#E0234E" },
	{ name: "UI/UX Design", level: 80, color: "#FF6B6B" },
	{ name: "Cloud/AWS", level: 75, color: "#FF9900" },
];

const SkillsRadar = () => {
	return (
		<Box my={12}>
			<Text
				fontSize={["2xl", "3xl"]}
				fontWeight="800"
				bgGradient="linear(to-r, purple.500, pink.500)"
				bgClip="text"
				mb={6}
				textAlign="center"
			>
				Core Competencies
			</Text>
			<Box
				p={8}
				borderRadius="2xl"
				bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				boxShadow="xl"
			>
				{skills.map((skill, index) => (
					<MotionBox
						key={skill.name}
						mb={6}
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Flex justify="space-between" mb={2}>
							<Text
								fontSize="md"
								fontWeight="600"
								color={useColorModeValue("gray.700", "gray.200")}
							>
								{skill.name}
							</Text>
							<Text
								fontSize="sm"
								fontWeight="700"
								color="purple.500"
							>
								{skill.level}%
							</Text>
						</Flex>
						<Box
							h="8px"
							bg={useColorModeValue("gray.200", "whiteAlpha.200")}
							borderRadius="full"
							overflow="hidden"
							position="relative"
						>
							<MotionBox
								h="100%"
								bgGradient={`linear(to-r, ${skill.color}, purple.500)`}
								borderRadius="full"
								initial={{ width: 0 }}
								animate={{ width: `${skill.level}%` }}
								transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
								position="relative"
								_after={{
									content: '""',
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									background:
										"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
									animation: "shimmer 2s infinite",
								}}
							/>
						</Box>
					</MotionBox>
				))}
			</Box>
		</Box>
	);
};

export default SkillsRadar;
