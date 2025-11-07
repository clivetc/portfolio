import { Container } from "@chakra-ui/react";
import GithubSection from "~/compoments/common/GithubSection";
import getGithubRepos from "~/service/getRepo";
import { IGitRepo } from "~/utils/interfaces";

interface IGithubPage {
	repos: IGitRepo[];
}
const Github = ({ repos }: IGithubPage) => {
	return (
		<main>
			<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
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
