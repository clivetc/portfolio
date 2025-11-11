import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const codeSnippets = [
  "const developer = new SoftwareEngineer('Tendai');",
  "developer.stack.add('React', 'TypeScript', 'NestJS', 'AWS');",
  "while (true) learning++; // never stop improving 🚀",
  "const passion = (idea) => build(innovation(idea));",
  "// Every bug is just an opportunity to learn 🐛✨",
  "function solve(problem) { return elegantly(solution); }",
  "commit('persistence', 'innovation', 'impact');",
  "if (code.works) { refactor(); } // perfection is iteration 💡",
  "const mindset = ['curious', 'creative', 'resilient'];",
  "devLife.push('debugging', 'coffee', 'deploy', 'repeat');",
  "try { buildFuture(); } catch (fear) { overcome(fear); }",
  "// Turning complex problems into clean solutions 💻",
  "import { Passion, Precision } from 'life';",
  "await dreamToReality('next big project');",
  "const motto = 'Code. Create. Inspire.';",
];


const CodeAnimation = () => {
	const [currentLine, setCurrentLine] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [charIndex, setCharIndex] = useState(0);

	const textColor = useColorModeValue("gray.600", "gray.400");
	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

	useEffect(() => {
		const snippet = codeSnippets[currentLine];

		if (charIndex < snippet.length) {
			const timeout = setTimeout(() => {
				setDisplayText(snippet.slice(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			}, 50);
			return () => clearTimeout(timeout);
		} else {
			const timeout = setTimeout(() => {
				setCharIndex(0);
				setDisplayText("");
				setCurrentLine((currentLine + 1) % codeSnippets.length);
			}, 2000);
			return () => clearTimeout(timeout);
		}
	}, [charIndex, currentLine]);

	return (
		<Box
			fontFamily="mono"
			fontSize="sm"
			color={textColor}
			bg={bgColor}
			px={4}
			py={3}
			borderRadius="lg"
			border="1px solid"
			borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
			minH="60px"
			display="flex"
			alignItems="center"
			position="relative"
			overflow="hidden"
		>
			<Box as="span" mr={2} color="purple.500" fontWeight="bold">
				&gt;
			</Box>
			<Box as="span">
				{displayText}
				<Box
					as="span"
					display="inline-block"
					w="2px"
					h="1em"
					bg="purple.500"
					ml={1}
					animation="blink 1s step-end infinite"
				/>
			</Box>
		</Box>
	);
};

export default CodeAnimation;
