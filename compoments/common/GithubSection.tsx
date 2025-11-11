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
	
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Box my={8}>
				<SimpleGrid columns={[1, 1, 2]} spacing={6}>
					{repos.map((repo) => (
						<GithubCard gitRepo={repo} key={repo.name} />
					))}
				</SimpleGrid>
			</Box>
		</SlideFade>
	);
};

export default GithubSection;
