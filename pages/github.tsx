import { Container, Box, SimpleGrid, Text, useColorModeValue, Flex, Icon } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import GithubSection from "~/compoments/common/GithubSection";
import PageHero from "~/compoments/common/PageHero";
import getGithubRepos from "~/service/getRepo";
import { IGitRepo } from "~/utils/interfaces";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface IGithubPage {
	repos: IGitRepo[];
}

const GithubStats = ({ repos }: { repos: IGitRepo[] }) => {
	const totalStars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0;
	const totalForks = repos?.reduce((acc, repo) => acc + repo.forks_count, 0) || 0;
	const totalRepos = repos?.length || 0;

	const stats = [
		{ label: "Repositories", value: totalRepos, icon: FiGithub, color: "blue" },
		{ label: "Total Stars", value: totalStars, icon: FaStar, color: "yellow" },
		{ label: "Total Forks", value: totalForks, icon: FaCodeBranch, color: "purple" },
	];

	return (
		<SimpleGrid columns={[1, 3]} spacing={6} mb={12}>
			{stats.map((stat, index) => (
				<MotionBox
					key={stat.label}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<Box
						p={6}
						borderRadius="xl"
						bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
						backdropFilter="blur(10px)"
						border="1px solid"
						borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
						boxShadow="lg"
						_hover={{
							transform: "translateY(-4px)",
							boxShadow: "xl",
						}}
						transition="all 0.3s ease"
					>
						<Flex align="center" justify="space-between">
							<Box>
								<Text
									fontSize="3xl"
									fontWeight="800"
									bgGradient={`linear(to-r, ${stat.color}.400, ${stat.color}.600)`}
									bgClip="text"
								>
									{stat.value}
								</Text>
								<Text
									fontSize="sm"
									fontWeight="600"
									color={useColorModeValue("gray.600", "gray.400")}
									textTransform="uppercase"
									letterSpacing="wide"
								>
									{stat.label}
								</Text>
							</Box>
							<Box
								p={3}
								borderRadius="lg"
								bg={`${stat.color}.50`}
								color={`${stat.color}.500`}
							>
								<Icon as={stat.icon} boxSize={6} />
							</Box>
						</Flex>
					</Box>
				</MotionBox>
			))}
		</SimpleGrid>
	);
};

const Github = ({ repos }: IGithubPage) => {
	return (
		<main>
			<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
				<PageHero
					title="Open Source Contributions"
					subtitle="Explore my GitHub repositories, contributions, and open-source projects. Building in public and sharing knowledge with the developer community."
					icon={FiGithub}
					gradient="linear(to-r, purple.500, pink.500)"
				/>
				
				{repos && <GithubStats repos={repos} />}
				
				<GithubSection repos={repos} />
			</Container>
		</main>
	);
};

export async function getStaticProps() {
	const repos = await getGithubRepos(process.env.VERCEL_GITHUB_USERNAME || "");

	return {
		props: {
			repos: repos || null,
		},
	};
}

export default Github;
