import axios from "axios";

const getGithubRepos = async (username: string) => {
	return await axios
		.get(`https://api.github.com/users/${username}/repos`)
		.then((res) => res.data);
};

export default getGithubRepos;
