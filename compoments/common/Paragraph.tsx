import React from "react";
import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface IProps {
	children: React.ReactNode;
	textProps?: TextProps;
}

const Paragraph: React.FC<IProps> = ({ children, textProps }) => {
	const textColor = useColorModeValue("gray.600", "gray.400");

	return (
		<Text color={textColor} {...textProps}>
			{children}
		</Text>
	);
};

export default Paragraph;
