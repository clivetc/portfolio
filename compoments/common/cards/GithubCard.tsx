import React from "react";
import {
	Box,
	useColorModeValue,
	VStack,
	Text,
	HStack,
	Tag,
	Icon,
	Flex,
	Tooltip,
	LinkBox,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { IGitRepo } from "~/utils/interfaces";
import { MotionBox } from "~/utils/animations/motion";

interface IGithubCard {
	gitRepo: IGitRepo;
}

const GithubCard: React.FC<IGithubCard> = ({ gitRepo }) => {
	return (
		<MotionBox 
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<LinkBox
				p={6}
				rounded="2xl"
				bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				_hover={{ 
					borderColor: "transparent",
					boxShadow: "2xl",
					_before: {
						opacity: 1,
					},
				}}
				minH="160px"
				position="relative"
				overflow="hidden"
				boxShadow="lg"
				transition="all 0.3s ease"
				_before={{
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					borderRadius: "2xl",
					padding: "2px",
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
					opacity: 0,
					transition: "opacity 0.3s ease",
				}}
			>
				<VStack overflow="hidden" align="start" spacing={3}>
					<VStack spacing={3} align="start" w="100%">
						<Flex
							justifyContent={"space-between"}
							width="100%"
							onClick={(e) => window.open(gitRepo.clone_url)}
						>
							<Tooltip hasArrow label={gitRepo.clone_url} placement="top">
								<HStack cursor={"pointer"} spacing={2}>
									<Icon 
										as={FiGithub} 
										boxSize="1.2em"
										color={useColorModeValue("purple.500", "purple.300")}
									/>
									<Text
										fontSize="lg"
										noOfLines={1}
										fontWeight="700"
										align="left"
										color={useColorModeValue("gray.800", "white")}
										_hover={{
											bgGradient: "linear(to-r, purple.500, pink.500)",
											bgClip: "text",
										}}
										transition="all 0.3s ease"
									>
										{gitRepo.name}
									</Text>
								</HStack>
							</Tooltip>
							<HStack spacing={3}>
								<HStack 
									spacing={1}
									_hover={{ 
										color: useColorModeValue("purple.500", "purple.300"),
										transform: "scale(1.1)",
									}}
									transition="all 0.2s ease"
								>
									<Icon as={BiStar} boxSize="1.1em" />
									<Box as="span" fontSize="sm" fontWeight="600">
										{gitRepo.stargazers_count}
									</Box>
								</HStack>
								{gitRepo.forks_count > 0 && (
									<HStack 
										spacing={1}
										_hover={{ 
											color: useColorModeValue("purple.500", "purple.300"),
											transform: "scale(1.1)",
										}}
										transition="all 0.2s ease"
									>
										<Icon as={BiGitRepoForked} boxSize="1.1em" />
										<Box as="span" fontSize="sm" fontWeight="600">
											{gitRepo.forks_count}
										</Box>
									</HStack>
								)}
							</HStack>
						</Flex>
						{gitRepo.language && (
							<Flex justifyContent={"flex-start"} width="100%">
								<Tag 
									size="md"
									borderRadius="full"
									bg={useColorModeValue("purple.50", "whiteAlpha.200")}
									color={useColorModeValue("purple.600", "purple.300")}
									fontWeight="600"
									px={3}
								>
									<Text fontSize={["xs", "sm", "sm"]}>
										{gitRepo.language}
									</Text>
								</Tag>
							</Flex>
						)}
					</VStack>
					<Box>
						<Text 
							fontSize="md" 
							noOfLines={3} 
							textAlign="left"
							color={useColorModeValue("gray.600", "gray.400")}
							lineHeight="1.6"
						>
							{gitRepo.description}
						</Text>
					</Box>
				</VStack>
			</LinkBox>
		</MotionBox>
	);
};

export default GithubCard;
