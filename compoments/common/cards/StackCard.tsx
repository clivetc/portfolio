import React from "react";
import {
	LinkBox,
	Box,
	IconButton,
	LinkOverlay,
	Heading,
	Text,
	useColorModeValue,
	Flex,
} from "@chakra-ui/react";
import { MotionBox } from "~/utils/animations/motion";
import { ITechStack } from "~/utils/interfaces";

interface IStackCard {
	stack: ITechStack;
}

const StackCard: React.FC<IStackCard> = ({ stack }) => {
	return (
		<MotionBox 
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<LinkBox
				as="article"
				w="100%"
				p={5}
				bg={useColorModeValue("white", "whiteAlpha.100")}
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				borderRadius="xl"
				borderWidth="1px"
				transition="all 0.3s ease"
				cursor="pointer"
				display="flex"
				role="group"
				position="relative"
				overflow="hidden"
				boxShadow="md"
				_hover={{
					borderColor: "transparent",
					boxShadow: "2xl",
					_before: {
						opacity: 1,
					},
				}}
				_before={{
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					borderRadius: "xl",
					padding: "2px",
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
					opacity: 0,
					transition: "opacity 0.3s ease",
				}}
			>
				<Flex alignItems="center" justifyContent="flex-start" w="100%">
					<Box
						mr={4}
						fontSize="2xl"
						color={useColorModeValue("gray.600", "gray.400")}
						_groupHover={{ 
							color: "purple.500",
							transform: "rotate(10deg) scale(1.1)",
						}}
						transition="all 0.3s ease"
					>
						<stack.icon />
					</Box>
					<LinkOverlay href={stack?.url} rel="noopener" isExternal>
						<Flex>
							<Text 
								fontSize="md" 
								fontWeight="600"
								color={useColorModeValue("gray.700", "gray.200")}
								_groupHover={{ 
									bgGradient: "linear(to-r, purple.500, pink.500)",
									bgClip: "text",
								}}
								transition="all 0.3s ease"
							>
								{stack?.name}
							</Text>
						</Flex>
					</LinkOverlay>
				</Flex>
			</LinkBox>
		</MotionBox>
	);
};

export default StackCard;
