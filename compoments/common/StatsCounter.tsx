import { Box, Flex, Text, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MotionBox = motion(Box);

interface StatProps {
	label: string;
	value: number;
	suffix?: string;
	delay?: number;
}

const StatItem: React.FC<StatProps> = ({ label, value, suffix = "", delay = 0 }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const duration = 2000;
		const steps = 60;
		const increment = value / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= value) {
				setCount(value);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, [value]);

	return (
		<MotionBox
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay }}
			textAlign="center"
			p={6}
			borderRadius="xl"
			bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
			backdropFilter="blur(10px)"
			border="1px solid"
			borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
			boxShadow="lg"
			whileHover={{
				y: -4,
				boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			}}
		>
			<Text
				fontSize={["3xl", "4xl"]}
				fontWeight="800"
				bgGradient="linear(to-r, purple.500, pink.500)"
				bgClip="text"
			>
				{count}
				{suffix}
			</Text>
			<Text
				fontSize="sm"
				fontWeight="600"
				color={useColorModeValue("gray.600", "gray.400")}
				mt={2}
				textTransform="uppercase"
				letterSpacing="wide"
			>
				{label}
			</Text>
		</MotionBox>
	);
};

const StatsCounter = () => {
	return (
		<Box my={12}>
			<SimpleGrid columns={[2, 2, 4]} spacing={[4, 6]}>
				<StatItem label="Years Experience" value={3} suffix="+" delay={0} />
				<StatItem label="Projects Completed" value={50} suffix="+" delay={0.1} />
				<StatItem label="Technologies" value={20} suffix="+" delay={0.2} />
				<StatItem label="Code Quality" value={99} suffix="%" delay={0.3} />
			</SimpleGrid>
		</Box>
	);
};

export default StatsCounter;
