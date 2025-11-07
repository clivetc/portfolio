import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Heading,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MotionFlex } from "~/utils/animations/motion";
import Paragraph from "./Paragraph";
import SocialButton from "./SocialButton";
import { resume } from "./contants";
import { BiPhoneCall } from "react-icons/bi";

const Profile = () => {
	return (
		<Box position="relative">
			<MotionFlex
				alignItems="center"
				justifyContent="space-between"
				opacity="0"
				initial={{
					opacity: 0,
					translateY: 30,
				}}
				animate={{
					opacity: 1,
					translateY: 0,
					transition: {
						duration: 0.8,
						ease: "easeOut",
					},
				}}
			>
				<Box>
					<Heading
						as="h1"
						fontSize={{ base: "32px", md: "48px", lg: "64px" }}
						mb={3}
						fontWeight="800"
						bgGradient="linear(to-r, blue.400, purple.500, pink.500)"
						bgClip="text"
						letterSpacing="tight"
					>
						Hi There, I'm Tendai! <span className="waving-hand">👋</span>
					</Heading>
				</Box>
				<MotionFlex 
					alignItems={"flex-end"} 
					whileHover={{ scale: 1.1, rotate: 5 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<Box position="relative">
						<Box
							position="absolute"
							top="-4px"
							left="-4px"
							right="-4px"
							bottom="-4px"
							borderRadius="full"
							bgGradient="linear(to-r, blue.400, purple.500, pink.500)"
							opacity="0.6"
							filter="blur(8px)"
							animation="pulse 2s ease-in-out infinite"
						/>
						<Avatar
							name="Tendai Clive Chikwape"
							src="/profile_picture.png"
							mb={5}
							size="xl"
							border="4px solid"
							borderColor={useColorModeValue("white", "gray.800")}
							position="relative"
							zIndex={1}
						/>
					</Box>
				</MotionFlex>
			</MotionFlex>
			<Box
				mt={4}
				p={6}
				borderRadius="2xl"
				bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
				backdropFilter="blur(10px)"
				border="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				boxShadow="xl"
			>
				<Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6, fontWeight: "600", mb: 3 }}>
					<Box as="span" bgGradient="linear(to-r, blue.500, purple.500)" bgClip="text">
						Software Developer
					</Box>
				</Paragraph>
				<Paragraph textProps={{ fontSize: "xl", lineHeight: 1.8, color: useColorModeValue("gray.700", "gray.300") }}>
					Focused on{" "}
					<Link
						color={useColorModeValue("blue.600", "blue.300")}
						href="https://react.dev/"
						fontWeight="600"
						isExternal
						position="relative"
						_hover={{
							textDecoration: "none",
							_after: {
								width: "100%",
							},
						}}
						_after={{
							content: '""',
							position: "absolute",
							bottom: "-2px",
							left: 0,
							width: "0%",
							height: "2px",
							bg: "blue.500",
							transition: "width 0.3s ease",
						}}
					>
						React
					</Link>
					{" , "}
					<Link
						color={useColorModeValue("blue.600", "blue.300")}
						href="https://www.typescriptlang.org/"
						fontWeight="600"
						isExternal
						position="relative"
						_hover={{
							textDecoration: "none",
							_after: {
								width: "100%",
							},
						}}
						_after={{
							content: '""',
							position: "absolute",
							bottom: "-2px",
							left: 0,
							width: "0%",
							height: "2px",
							bg: "blue.500",
							transition: "width 0.3s ease",
						}}
					>
						TypeScript
					</Link>
					{" , "}
					<Link
						color={useColorModeValue("blue.600", "blue.300")}
						href="https://nestjs.com/"
						fontWeight="600"
						isExternal
						position="relative"
						_hover={{
							textDecoration: "none",
							_after: {
								width: "100%",
							},
						}}
						_after={{
							content: '""',
							position: "absolute",
							bottom: "-2px",
							left: 0,
							width: "0%",
							height: "2px",
							bg: "blue.500",
							transition: "width 0.3s ease",
						}}
					>
						NestJs
					</Link>
					{" & "}
					<Link
						color={useColorModeValue("blue.600", "blue.300")}
						href="https://spring.io/"
						fontWeight="600"
						isExternal
						position="relative"
						_hover={{
							textDecoration: "none",
							_after: {
								width: "100%",
							},
						}}
						_after={{
							content: '""',
							position: "absolute",
							bottom: "-2px",
							left: 0,
							width: "0%",
							height: "2px",
							bg: "blue.500",
							transition: "width 0.3s ease",
						}}
					>
						SpringBoot
					</Link>
				</Paragraph>
			</Box>
			<Box mt={6}>
				<ButtonGroup spacing={4}>
					<SocialButton social={resume} />
					<Link href={"/contact"} style={{ textDecoration: "none" }}>
						<Button
							size="lg"
							bgGradient="linear(to-r, blue.500, purple.500)"
							color="white"
							leftIcon={<BiPhoneCall />}
							_hover={{
								bgGradient: "linear(to-r, blue.600, purple.600)",
								transform: "translateY(-2px)",
								boxShadow: "xl",
							}}
							_active={{
								transform: "translateY(0)",
							}}
							transition="all 0.3s ease"
							boxShadow="lg"
						>
							Contact Me
						</Button>
					</Link>
				</ButtonGroup>
			</Box>
		</Box>
	);
};

export default Profile;
