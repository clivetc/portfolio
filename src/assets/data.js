import React from "react";
import { FaPalette, FaReact, FaCode, FaLaptopCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
	name: "Tendai Clive Chikwape",
	title: "Software Developer",
	social: {
		github: "https://github.com/clivetc",
		linkedin: "https://www.linkedin.com/in/tendai-clive-chikwape-523b3a55/",
		twitter: "https://twitter.com/clive_tendai",
		email: "clivetc@live.com",
	},
	about: {
		title: "About Me",
		description:
			"I am result-driven and self-motivated professional who is willing to go above and beyond on any given project. A Software Developer with experience directing projects from inception to execution, strategically using allocated resources and delegated tasks to achieve on-time and on-budget. Expert in managing technical support operations, diligently troubleshooting issues to identify root causes and prevent recurrence.",
	},
	skills: [
		{
			skillName: "Software",
			skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
		{
			skillName: "Design/UX",
			skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
		{
			skillName: "ReactJS",
			skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
		{
			skillName: "Automation Testing",
			skillIcon: <FaLaptopCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
		},
	],
	experiences: [
		{
			company: "MBL Hightech",
			title: "Frontend Developer/ Automation Engineer",
			period: "29 November 2021 - Current",
			link: "https://mblhightech.com/",
		},
		{
			company: "Dekaben Bilisim",
			title: "Software Developer",
			period: "March 2021 - September 2021",
			link: "#######",
		},
	],
	projects: [
		{
			title: "Portfolio",
			description:
				"👨‍🎨 An open-source portfolio template built with React and Tailwind.",
			tags: ["template", "portfolio", "reactjs", "tailwindcss"],
			link: "https://github.com/clivetc/portofilio",
		},
		{
			title: "Old Portfolio",
			description:
				"⚡ The portfolio was built with HTML5, JavaScript and CSS3.",
			tags: ["website", "portfolio", "HTML5", "CSS3"],
			link: "https://github.com/clivetc/clivetc.github.io",
		},
		{
			title: "Online Learning System",
			description:
				"🧑‍💻 For my graduation project we developed a online learning system",
			tags: ["website", "graduation project", "vue.js", "django"],
			link: "http://ols-staging.herokuapp.com/",
		},
		{
			title: "Library Management System",
			description: "🧑‍💻 For currently working on a library management system",
			tags: ["website", "library", "Next.js", "Postgres"],
			link: "https://library-managemet-system.vercel.app",
		},
		{
			title: "Backend Servers",
			description:
				"🧑‍💻 For currently working on different backend projects one with spring boot and the other with Nestjs",
			tags: [
				"Backend",
				"Java Spring-boot",
				"Nest.js",
				"Postgres",
				"tasks",
				"student-server",
			],
			link: "https://github.com/clivetc",
		},
	],
};
export default data;
