import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MotionBox = motion(Box);

const ScrollIndicator = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.scrollY / totalHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Progress Bar */}
			<Box
				position="fixed"
				top={0}
				left={0}
				right={0}
				height="3px"
				bg={useColorModeValue("gray.200", "gray.800")}
				zIndex={9999}
			>
				<MotionBox
					height="100%"
					bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
					style={{ width: `${scrollProgress}%` }}
					transition={{ duration: 0.1 }}
				/>
			</Box>

			{/* Scroll to Top Button */}
			{scrollProgress > 20 && (
				<MotionBox
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					position="fixed"
					bottom={8}
					right={8}
					zIndex={9998}
				>
					<Box
						as="button"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						w={12}
						h={12}
						borderRadius="full"
						bgGradient="linear(to-r, purple.500, pink.500)"
						color="white"
						display="flex"
						alignItems="center"
						justifyContent="center"
						boxShadow="xl"
						cursor="pointer"
						_hover={{
							transform: "translateY(-4px)",
							boxShadow: "2xl",
						}}
						transition="all 0.3s ease"
						fontSize="xl"
					>
						↑
					</Box>
				</MotionBox>
			)}
		</>
	);
};

export default ScrollIndicator;
