/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, SlideFade, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IGitRepo } from "~/utils/interfaces";
import Paragraph from "./Paragraph";
import GithubCard from "./cards/GithubCard";

interface IGithubSection {
	repos: IGitRepo[];
}

const GithubSection: React.FC<IGithubSection> = ({ repos }) => {
	if (!repos) return <></>;
	console.log({ repos });
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: "32px", md: "40px", lg: "48px" }}
				mb={4}
				fontWeight="800"
				bgGradient="linear(to-r, blue.400, purple.500)"
				bgClip="text"
			>
				Github
			</Heading>
			<Paragraph>
				<Text fontSize="xl" color="gray.600" mb={2}>
					List of my top featured github repositories. 🔖
				</Text>
				<Text fontSize="xl" color="gray.600">
					Feel free to pay a visit and don't forget to leave me a star! ⭐{" "}
				</Text>
			</Paragraph>
			<Box my={8}>
				<SimpleGrid columns={[1, 1, 2]} spacing={6} mt={6}>
					{repos.map((repo) => (
						<GithubCard gitRepo={repo} key={repo.name} />
					))}
				</SimpleGrid>
			</Box>
		</SlideFade>
	);
};

export default GithubSection;
