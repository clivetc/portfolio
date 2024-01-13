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
				colorScheme="blue"
				size="sm"
				margin={"5px"}
				leftIcon={social.icon}
			>
				{social.name}
			</Button>
		</Link>
	);
};

export default SocialButton;
