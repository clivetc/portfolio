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
			<Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
				<GithubSection repos={repos} />
			</Container>
		</main>
	);
};

export async function getStaticProps() {
	const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

	return {
		props: {
			repos: repos || null,
		},
	};
}

export default Github;
