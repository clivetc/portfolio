export interface ISocial {
	url: string;
	icon: any;
	name: string;
}

export interface ITechStack {
	name: string;
	icon: any;
	url: string;
}

export interface IGitRepo {
	name: string;
	description: string;
	language: string;
	url: string;
	stargazers_count: number;
	forks_count: number;
	clone_url: string;
}

export interface IFormik {
	name: string;
	email: string;
	message: string;
}
