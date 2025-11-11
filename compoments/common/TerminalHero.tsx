import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MotionBox = motion(Box);

const commands = [
	{ cmd: "whoami", output: "Software Engineer | Full-Stack Developer" },
	{ cmd: "cat skills.txt", output: "React • TypeScript • Node.js • AWS" },
	{ cmd: "git status", output: "On branch: innovation | All tests passing ✓" },
];

const TerminalHero = () => {
	const [currentCmd, setCurrentCmd] = useState(0);
	const [showOutput, setShowOutput] = useState(false);

	const bgColor = useColorModeValue("gray.900", "gray.950");
	const borderColor = useColorModeValue("gray.700", "gray.800");

	useEffect(() => {
		const cmdTimer = setTimeout(() => {
			setShowOutput(true);
		}, 1000);

		const nextTimer = setTimeout(() => {
			setShowOutput(false);
			setCurrentCmd((prev) => (prev + 1) % commands.length);
		}, 4000);

		return () => {
			clearTimeout(cmdTimer);
			clearTimeout(nextTimer);
		};
	}, [currentCmd]);

	return (
		<MotionBox
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			my={8}
		>
			<Box
				bg={bgColor}
				borderRadius="xl"
				overflow="hidden"
				border="1px solid"
				borderColor={borderColor}
				boxShadow="2xl"
			>
				{/* Terminal Header */}
				<Flex
					bg={useColorModeValue("gray.800", "gray.900")}
					px={4}
					py={3}
					align="center"
					gap={2}
					borderBottom="1px solid"
					borderColor={borderColor}
				>
					<Box w={3} h={3} borderRadius="full" bg="red.500" />
					<Box w={3} h={3} borderRadius="full" bg="yellow.500" />
					<Box w={3} h={3} borderRadius="full" bg="green.500" />
					<Text
						ml={4}
						fontSize="xs"
						color="gray.400"
						fontFamily="mono"
						fontWeight="600"
					>
						portfolio@tendai:~
					</Text>
				</Flex>

				{/* Terminal Body */}
				<Box p={6} fontFamily="mono" fontSize="sm" minH="120px">
					<Flex align="center" mb={2}>
						<Text color="green.400" fontWeight="bold" mr={2}>
							$
						</Text>
						<Text color="white">{commands[currentCmd].cmd}</Text>
						<Box
							as="span"
							display="inline-block"
							w="8px"
							h="16px"
							bg="green.400"
							ml={2}
							animation="blink 1s step-end infinite"
						/>
					</Flex>

					{showOutput && (
						<MotionBox
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Text color="cyan.300" mt={2}>
								{commands[currentCmd].output}
							</Text>
						</MotionBox>
					)}
				</Box>
			</Box>
		</MotionBox>
	);
};

export default TerminalHero;
