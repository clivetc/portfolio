import React from "react";
import {
	Stack,
	IconButton,
	Link,
	Box,
	Text,
	useColorModeValue,
	Flex,
} from "@chakra-ui/react";
import { siteConfig } from "../common/contants";

const iconProps = {
	variant: "ghost",
	size: "lg",
	isRound: true,
};

const Footer = () => {
	return (
		<Box
			as="footer"
			mt={20}
			py={8}
			borderTop="1px solid"
			borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
			bg={useColorModeValue("whiteAlpha.700", "blackAlpha.400")}
			backdropFilter="blur(10px)"
		>
			<Stack
				spacing={[4, 6]}
				p={4}
				justifyContent="space-between"
				alignItems="center"
				w={["100%", "90%", "90%"]}
				maxW="container.lg"
				mx="auto"
			>
				<Flex
					flexDirection={["column", "column", "row"]}
					flexFlow={["column-reverse", "column-reverse"]}
					justifyContent={["center", "space-between"]}
					alignItems="center"
					w="100%"
					gap={6}
				>
					<Text
						textAlign="center"
						fontSize="md"
						fontWeight="500"
						color={useColorModeValue("gray.600", "gray.300")}
					>
						© {new Date().getFullYear()} Tendai Clive Chikwape
					</Text>

					<Flex gap={2} flexWrap="wrap" justifyContent="center">
						{siteConfig.author.accounts.map((sc, index) => (
							<IconButton
								key={index}
								as={Link}
								isExternal
								aria-label={sc.name}
								href={sc.url}
								icon={<sc.icon />}
								{...iconProps}
								bg={useColorModeValue("white", "whiteAlpha.100")}
								_hover={{
									transform: "translateY(-4px) scale(1.1)",
									bgGradient: "linear(to-r, purple.500, pink.500)",
									color: "white",
									boxShadow: "xl",
								}}
								transition="all 0.3s ease"
								boxShadow="md"
							/>
						))}
					</Flex>
				</Flex>
			</Stack>
		</Box>
	);
};

export default Footer;
