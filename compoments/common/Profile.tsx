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
		<Box>
			<MotionFlex
				alignItems="center"
				justifyContent="space-between"
				opacity="0"
				initial={{
					opacity: 0,
					translateX: 150,
				}}
				animate={{
					opacity: 1,
					translateX: 0,
					transition: {
						duration: 0.5,
					},
				}}
			>
				<Heading
					as="h1"
					fontSize={{ base: "28px", md: "40px", lg: "48px" }}
					mb={3}
				>
					Hi There , I am Tendai! <span className="waving-hand">👋</span>
				</Heading>
				<MotionFlex alignItems={"flex-end"} whileHover={{ scale: 1.2 }}>
					<Avatar
						name="Tendai Clive Chikwape"
						src="/profile_picture.png"
						mb={5}
						size="lg"
					/>
				</MotionFlex>
			</MotionFlex>
			<Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
				Software Developer
			</Paragraph>
			<Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
				Focused on{" "}
				<Link
					color={useColorModeValue("blue.500", "blue.400")}
					href="https://react.dev/"
					fontWeight="500"
					isExternal
				>
					React
				</Link>
				{" , "}
				<Link
					color={useColorModeValue("blue.500", "blue.400")}
					href="https://www.typescriptlang.org/"
					fontWeight="500"
					isExternal
				>
					TypeScript
				</Link>
				{" , "}
				<Link
					color={useColorModeValue("blue.500", "blue.400")}
					href="https://nestjs.com/"
					fontWeight="500"
					isExternal
				>
					NestJs
				</Link>
				{" & "}
				<Link
					color={useColorModeValue("blue.500", "blue.400")}
					href="https://spring.io/"
					fontWeight="500"
					isExternal
				>
					SpringBoot
				</Link>
			</Paragraph>
			<Box mt={5}>
				<ButtonGroup>
					<SocialButton social={resume} />
					<Link href={"/contact"} style={{ textDecoration: "none" }}>
						<Button
							colorScheme="blue"
							size="sm"
							margin={"5px"}
							leftIcon={<BiPhoneCall />}
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
