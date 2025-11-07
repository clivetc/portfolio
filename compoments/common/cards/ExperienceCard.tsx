import React from "react";
import {
	Box,
	Flex,
	Image,
	Stack,
	Heading,
	Text,
	Tag,
	useColorModeValue,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react";
import { TExperience } from "~/utils/experience";

interface IExperienceCard {
	company: TExperience;
	colorMode: string;
}

const ExperienceCard: React.FC<IExperienceCard> = ({ company, colorMode }) => {
	return (
		<LinkBox
			px={6}
			py={6}
			borderRadius="2xl"
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
			<LinkOverlay href={company.url} rel="noopener" isExternal>
				<Flex justifyContent="space-between">
					<Flex>
						<Box position="relative">
							<Box
								position="absolute"
								top="-2px"
								left="-2px"
								right="-2px"
								bottom="-2px"
								borderRadius="full"
								bgGradient="linear(to-r, purple.400, pink.500)"
								opacity="0.4"
								filter="blur(6px)"
							/>
							<Image
								rounded="full"
								w={16}
								h={16}
								objectFit="cover"
								src={company.logo}
								alt={company.alt}
								border="3px solid"
								borderColor={useColorModeValue("white", "gray.800")}
								position="relative"
							/>
						</Box>
						<Stack spacing={2} pl={4} align="left">
							<Heading
								fontSize="xl"
								fontWeight="700"
								color={useColorModeValue("gray.800", "white")}
							>
								{company.title}
							</Heading>
							<Heading
								fontSize="md"
								fontWeight="600"
								color={useColorModeValue("gray.600", "gray.400")}
							>
								{company.role}
							</Heading>
							<Stack
								spacing={2}
								mt={3}
								flexWrap="wrap"
								direction="row"
								display={["none", "none", "flex", "flex"]}
							>
								{company.skills.map((skill) => (
									<Tag 
										size="sm" 
										padding="4px 12px" 
										key={skill}
										borderRadius="full"
										bg={useColorModeValue("purple.50", "whiteAlpha.200")}
										color={useColorModeValue("purple.600", "purple.300")}
										fontWeight="600"
									>
										{skill}
									</Tag>
								))}
							</Stack>
						</Stack>
					</Flex>
					<Stack display={["none", "none", "flex", "flex"]}>
						<Text 
							fontSize="sm" 
							fontWeight="600"
							color={useColorModeValue("gray.600", "gray.400")}
						>
							{company.period}
						</Text>
					</Stack>
				</Flex>
				<Stack
					spacing={2}
					mt={4}
					flexWrap="wrap"
					direction="row"
					display={["flex", "flex", "none", "none"]}
				>
					{company.skills.map((skill) => (
						<Tag 
							size="sm" 
							padding="4px 12px" 
							key={skill}
							borderRadius="full"
							bg={useColorModeValue("purple.50", "whiteAlpha.200")}
							color={useColorModeValue("purple.600", "purple.300")}
							fontWeight="600"
						>
							{skill}
						</Tag>
					))}
				</Stack>
			</LinkOverlay>
		</LinkBox>
	);
};

export default ExperienceCard;
