import { Box, Heading, Text, useColorModeValue, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

interface PageHeroProps {
	title: string;
	subtitle: string;
	icon?: any;
	gradient?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
	title, 
	subtitle, 
	icon,
	gradient = "linear(to-r, blue.500, purple.500)"
}) => {
	return (
		<MotionBox
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			mb={12}
		>
			<Box
				p={8}
				borderRadius="2xl"
				bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				boxShadow="2xl"
				position="relative"
				overflow="hidden"
			>
				{/* Animated background orb */}
				<Box
					position="absolute"
					top="-50%"
					right="-20%"
					width="400px"
					height="400px"
					borderRadius="full"
					bgGradient={gradient}
					opacity="0.1"
					filter="blur(60px)"
					animation="float 6s ease-in-out infinite"
				/>

				<VStack spacing={4} align="flex-start" position="relative" zIndex={1}>
					{icon && (
						<Box
							p={4}
							borderRadius="xl"
							bgGradient={gradient}
							color="white"
							boxShadow="lg"
						>
							<Icon as={icon} boxSize={8} />
						</Box>
					)}
					
					<Heading
						fontSize={["3xl", "4xl", "5xl"]}
						fontWeight="800"
						bgGradient={gradient}
						bgClip="text"
						lineHeight="1.2"
					>
						{title}
					</Heading>
					
					<Text
						fontSize={["lg", "xl"]}
						color={useColorModeValue("gray.600", "gray.400")}
						lineHeight="1.7"
						maxW="2xl"
					>
						{subtitle}
					</Text>
				</VStack>
			</Box>
		</MotionBox>
	);
};

export default PageHero;
