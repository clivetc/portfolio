import {
	Text,
	Container,
	Flex,
	IconButton,
	HStack,
	Box,
	Button,
	Stack,
	Link as CharkaLink,
	useColorModeValue,
	Avatar,
	useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { menu } from "../common/menu";
import NextLink from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../common/ColorModerSwitcher";

const Nav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	const navItem = (
		<>
			{menu.map((link) => (
				<NextLink href={link.link} key={link.title} passHref>
					<CharkaLink
						href={link.link}
						px={4}
						py={2}
						rounded={"lg"}
						position="relative"
						_hover={{
							textDecoration: "none",
							transform: "translateY(-2px)",
							_after: {
								width: "100%",
							},
						}}
						bg={
							link.link === router.pathname
								? useColorModeValue("purple.50", "whiteAlpha.200")
								: "transparent"
						}
						color={
							link.link === router.pathname
								? useColorModeValue("purple.600", "purple.300")
								: useColorModeValue("gray.700", "gray.200")
						}
						onClick={isOpen ? onClose : onOpen}
						fontWeight="600"
						transition="all 0.3s ease"
						_after={{
							content: '""',
							position: "absolute",
							bottom: "0",
							left: "50%",
							transform: "translateX(-50%)",
							width: link.link === router.pathname ? "80%" : "0%",
							height: "2px",
							bgGradient: "linear(to-r, purple.500, pink.500)",
							transition: "width 0.3s ease",
						}}
					>
						{link.title}
					</CharkaLink>
				</NextLink>
			))}
		</>
	);
	return (
		<>
			<Box 
				bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")} 
				px={4} 
				boxShadow={"xl"}
				backdropFilter="blur(10px)"
				borderBottom="1px solid"
				borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
				position="sticky"
				top={0}
				zIndex={1000}
			>
				<Flex
					h={20}
					alignItems={"center"}
					justifyContent={"space-between"}
					w={["95%", "95%", "95%"]}
					maxW={"container.lg"}
					mx="auto"
				>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={["inherit", "inherit", "none"]}
						onClick={isOpen ? onClose : onOpen}
						variant="ghost"
						_hover={{
							bg: useColorModeValue("purple.50", "whiteAlpha.200"),
						}}
					/>
					<HStack spacing={8} alignItems={"center"}>
						<Box position="relative">
							<Box
								position="absolute"
								top="-2px"
								left="-2px"
								right="-2px"
								bottom="-2px"
								borderRadius="full"
								bgGradient="linear(to-r, purple.400, pink.500)"
								opacity="0.6"
								filter="blur(4px)"
							/>
							<Avatar
								as={CharkaLink}
								size="md"
								href="/"
								src="/profile_picture.png"
								border="2px solid"
								borderColor={useColorModeValue("white", "gray.800")}
								position="relative"
								cursor="pointer"
								_hover={{ 
									transform: "scale(1.1)",
								}}
								transition="all 0.3s ease"
							/>
						</Box>
						<HStack as="nav" spacing="2" display={{ base: "none", md: "flex" }}>
							{navItem}
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						<ColorModeSwitcher justifySelf="flex-end" />
					</Flex>
				</Flex>

				{isOpen && (
					<Box
						pb={4}
						w={["100%", "100%", "80%"]}
						maxW={"container.lg"}
						display={["inherit", "inherit", "none"]}
					>
						<Stack as={"nav"} spacing={3}>
							{navItem}
						</Stack>
					</Box>
				)}
			</Box>
		</>
	);
};

export default Nav;
