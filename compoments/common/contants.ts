import {
	FaGithub,
	FaLinkedin,
	FaGitAlt,
	FaJs,
	FaSass,
	FaReact,
	FaNodeJs,
	FaGitlab,
	FaBitbucket,
} from "react-icons/fa";
import {
	SiKotlin,
	SiFirebase,
	SiFastlane,
	SiTypescript,
	SiTailwindcss,
	SiAntdesign,
	SiRedux,
	SiGmail,
	SiNestjs,
	SiSpring,
	SiMongodb,
	SiChakraui,
} from "react-icons/si";
import { CgAlbum } from "react-icons/cg";
import {
	TbBrandCypress,
	TbBrandNextjs,
	TbBrandReactNative,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Tendai Clive Chikwape. All Rights Reserved.`,
	author: {
		name: "Tendai Clive Chikwape",
		accounts: [
			{
				url: "https://github.com/clivetc",
				icon: FaGithub,
				name: "Github",
				type: "gray",
			},
			{
				url: "https://www.linkedin.com/in/tendai-chikwape-523b3a55/",
				icon: FaLinkedin,
				name: "Linkedin",
				type: "linkedin",
			},
			{
				url: "mailto:clivetchikwape@gmail.com",
				icon: SiGmail,
				name: "Gmail",
				type: "red",
			},
		],
	},
};

const resume = {
	url: "https://docs.google.com/document/d/1WGDPkUGthpKwBuVoTFP4qNJBwZ5oVEbg/edit?usp=sharing&ouid=101386957639912026427&rtpof=true&sd=true",
	icon: CgAlbum,
	name: "Resume",
};

const companies = [
	{
		title: "CDL Software",
		alt: "cdl image",
		url: "https://www.cdl.co.uk/",
		role: "Software Engineer",
		skills: ["React", "AWS", "NextJs","XML"],
		period: "Jan 2025 - Present",
		logo: "/cdl.jpg",
	},
	{
		title: "MBL Hightech",
		alt: "mbl image",
		url: "http://mblhightech.net/",
		role: "Frontend Engineer",
		skills: ["React", "Sass", "Redux", "Redux Saga", "NextJs", "Nestjs"],
		period: "Nov 2021 - Aug 2024",
		logo: "/mbl.png",
	},
	{
		title: "Dekaben Bilisim",
		alt: "dekaben image",
		url: "https://www.facebook.com/pazar.dekaben/",
		role: "Software Engineer",
		skills: ["HTML", "CSS", "PHP", "MySql", "React"],
		period: "March 2021 - Sept 2021",
		logo: "/dekaben.jpg",
	},
	{
		title: "Near East University(Robotics Lab)",
		alt: "neu image",
		url: "https://www.timeteccloud.com/",
		role: "Software Developer Intern",
		skills: ["Python", "Arduino", "Raspberry Pi"],
		period: "Jul 2019 - Sept 2019",
		logo: "/neu-logo.svg",
	},
];

const educations = [
	{
		title: "Near East University",
		alt: "neu image",
		url: "https://neu.edu.tr/?lang=en",
		role: "Bachelor's Degree in Computer Information Systems",
		skills: [
			"CGPA - 2.80",
			"Software Developer",
			"Database Management",
			"Network Systems",
		],
		period: "Sept 2016 - Feb 2021",
		logo: "/neu-logo.svg",
	},
	{
		title: "City & Guilds",
		alt: "c&g image",
		url: "https://www.cityandguilds.com/",
		role: "Telecommunication Systems-Certificate and Part Diploma",
		skills: [
			"Pass",
			"Electronic Communication",
			"Communication Systems and Digital Networks",
		],
		period: "Jan 2015 - Jun 2016",
		logo: "/c&g.png",
	},
];

import { FaAws, FaJira } from "react-icons/fa";
import { SiAsana } from "react-icons/si";

const otherTechStacks = [
	{
		name: "CI/CD - Vercel",
		icon: SiFastlane,
		url: "https://vercel.com/",
	},
	{
		name: "AWS",
		icon: FaAws,
		url: "https://aws.amazon.com/",
	},
	{
		name: "Asana",
		icon: SiAsana,
		url: "https://asana.com/",
	},
	{
		name: "Jira",
		icon: FaJira,
		url: "https://www.atlassian.com/software/jira",
	},
	{
		name: "Firebase",
		icon: SiFirebase,
		url: "https://firebase.google.com/",
	},
	{
		name: "Bitbucket",
		icon: FaBitbucket,
		url: "https://bitbucket.org/",
	},
	{
		name: "GitHub",
		icon: FaGithub,
		url: "http://github.com/",
	},
	{
		name: "GitLab",
		icon: FaGitlab,
		url: "https://gitlab.com/",
	},
	{
		name: "Automation",
		icon: TbBrandCypress,
		url: "https://www.cypress.io/",
	},
	{
		name: "Postgres",
		icon: BiLogoPostgresql,
		url: "https://www.postgresql.org/",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		url: "https://www.mongodb.com/",
	},
];


const backendTechStacks = [
	{
		name: "Node",
		icon: FaNodeJs,
		url: "https://nodejs.org/en",
	},
	{
		name: "NestJs",
		icon: SiNestjs,
		url: "https://nestjs.com/",
	},
	{
		name: "Springboot",
		icon: SiSpring,
		url: "https://spring.io/",
	},
];

const webTechStacks = [
	{
		name: "React",
		icon: FaReact,
		url: "https://react.dev/",
	},
	{
		name: "React Native",
		icon: TbBrandReactNative,
		url: "https://reactnative.dev/",
	},
	{
		name: "NextJS",
		icon: TbBrandNextjs,
		url: "https://nextjs.org/",
	},
	{
		name: "Typescript",
		icon: SiTypescript,
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "Javascript",
		icon: FaJs,
		url: "https://www.javascript.com/",
	},
	{
		name: "Redux & Redux Saga",
		icon: SiRedux,
		url: "https://redux.js.org/",
	},
	{
		name: "TailwindCSS",
		icon: SiTailwindcss,
		url: "https://tailwindcss.com/",
	},
	{
		name: "Ant Design",
		icon: SiAntdesign,
		url: "https://ant.design/",
	},
	{
		name: "Chakra UI",
		icon: SiChakraui,
		url: "https://chakra-ui.com/",
	},
	{
		name: "SASS",
		icon: FaSass,
		url: "https://sass-lang.com/",
	},
];

export {
	siteConfig,
	resume,
	companies,
	educations,
	backendTechStacks,
	webTechStacks,
	otherTechStacks,
};
