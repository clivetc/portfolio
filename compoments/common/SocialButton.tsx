import React from "react";
import { Link, Button } from "@chakra-ui/react";
import { ISocial } from "~/utils/interfaces";

interface IProps {
	social: ISocial;
}

const SocialButton: React.FC<IProps> = ({ social }) => {
	return (
		<Link href={social.url} isExternal style={{ textDecoration: "none" }}>
			<Button
				size="lg"
				bg="white"
				color="gray.700"
				border="2px solid"
				borderColor="gray.200"
				leftIcon={social.icon}
				_hover={{
					bgGradient: "linear(to-r, blue.500, purple.500)",
					color: "white",
					borderColor: "transparent",
					transform: "translateY(-2px)",
					boxShadow: "xl",
				}}
				_active={{
					transform: "translateY(0)",
				}}
				transition="all 0.3s ease"
				boxShadow="md"
			>
				{social.name}
			</Button>
		</Link>
	);
};

export default SocialButton;
