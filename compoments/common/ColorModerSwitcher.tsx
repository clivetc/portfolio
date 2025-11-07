import * as React from "react";
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	Tooltip,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props: any) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	const handleClick = () => {
		toggleColorMode();
	};

	return (
		<Tooltip
			label={text === "dark" ? "Dark mode" : "Light mode"}
			aria-label="A tooltip"
			hasArrow
		>
			<IconButton
				size="md"
				fontSize="lg"
				variant="ghost"
				color="current"
				marginLeft="2"
				onClick={handleClick}
				icon={<SwitchIcon />}
				aria-label={`Switch to ${text} mode`}
				borderRadius="lg"
				_hover={{
					bg: useColorModeValue("purple.50", "whiteAlpha.200"),
					transform: "rotate(180deg) scale(1.1)",
					color: useColorModeValue("purple.600", "purple.300"),
				}}
				transition="all 0.5s ease"
				{...props}
			/>
		</Tooltip>
	);
};
