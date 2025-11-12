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
    alt: "CDL Software logo",
    url: "https://www.cdl.co.uk/",
    role: "Software Engineer – Web",
    skills: [
      "React",
      "Next.js",
      "AWS Cloud Services",
      "TypeScript",
      "JSP",
      "RESTful APIs",
      "Agile Development",
      "CI/CD Pipelines"
    ],
    period: "Jan 2025 – Present",
    logo: "/cdl.jpg",
  },
  {
    title: "MBL HighTech",
    alt: "MBL HighTech logo",
    url: "http://mblhightech.net/",
    role: "Frontend Engineer",
    skills: [
      "React",
      "Next.js",
      "Sass",
      "Redux",
      "Redux-Saga",
      "NestJS",
      "UI/UX Optimization",
      "Component Architecture"
    ],
    period: "Nov 2021 – Aug 2024",
    logo: "/mbl.png",
  },
  {
    title: "Dekaben Bilisim",
    alt: "Dekaben Bilisim logo",
    url: "https://www.facebook.com/pazar.dekaben/",
    role: "Software Engineer",
    skills: [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "React",
      "API Integration",
      "Responsive Web Design"
    ],
    period: "Mar 2021 – Sept 2021",
    logo: "/dekaben.jpg",
  },
  {
    title: "Near East University (Robotics Lab)",
    alt: "Near East University Robotics Lab logo",
    url: "https://neu.edu.tr/?lang=en",
    role: "Software Developer Intern",
    skills: [
      "Python",
      "Arduino",
      "Raspberry Pi",
      "IoT Systems",
      "Automation Scripting",
      "Sensor Integration"
    ],
    period: "Jul 2019 – Sept 2019",
    logo: "/neu-logo.jpeg",
  },
];


const educations = [
	{
		title: "Near East University",
		alt: "Near East University logo",
		url: "https://neu.edu.tr/?lang=en",
		role: "Bachelor’s Degree in Computer Information Systems",
		skills: [
			"Software Development",
			"Database Design & Management",
			"Network Administration",
			"Information Systems Analysis",
			"Object-Oriented Programming"
		],
		period: "Sept 2016 – Feb 2021",
		logo: "/neu-logo.jpeg",
	},
	{
		title: "City & Guilds",
		alt: "City & Guilds logo",
		url: "https://www.cityandguilds.com/",
		role: "Telecommunication Systems – Certificate & Part Diploma",
		skills: [
			"Electronic Communication",
			"Digital Network Systems",
			"Signal Transmission & Switching",
			"Telecom Infrastructure",
			"Technical Troubleshooting"
		],
		period: "Jan 2015 – Jun 2016",
		logo: "/c&g.png",
	},
	{
		title: "AWS",
		alt: "AWS Cloud Practitioner Certification",
		url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
		role: "AWS Certified Cloud Practitioner",
		skills: [
			"Cloud Fundamentals",
			"AWS Core Services (EC2, S3, RDS, Lambda)",
			"Security & Compliance",
			"Billing & Pricing",
			"Cloud Architecture & Deployment Models"
		],
		period: "Valid: April 2025 – April 2028",
		logo: "/aws.png",
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

const projects = [
	{
		title: "Carinya Healthcare Services",
		description: "Comprehensive healthcare platform providing disability support services with online booking, service management, and client portal for NDIS participants in Australia.",
		tags: ["React", "Next.js", "TypeScript", "Healthcare"],
		featured: true,
		link: "https://carinyahealthcareservices.com.au/",
		github: "",
	},
	{
		title: "Rhuomai Home Care",
		description: "Professional home care services platform in the UK, featuring service booking, care management, and client communication systems for elderly and disability care.",
		tags: ["React", "Next.js", "Node.js", "Healthcare"],
		featured: true,
		link: "https://www.rhuomaihomecare.co.uk/",
		github: "",
	},
	{
		title: "Health AI System",
		description: "AI-powered healthcare solution leveraging machine learning for patient data analysis, predictive diagnostics, and personalized care recommendations.",
		tags: ["AI/ML", "Python", "React", "Healthcare", "In Progress"],
		featured: true,
		link: "",
		github: "",
	},
	{
		title: "AI-Powered Portfolio",
		description: "Modern portfolio website with AI-inspired design, featuring terminal simulation, code animations, and glassmorphism effects built with Next.js and Chakra UI.",
		tags: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion"],
		featured: false,
		link: "",
		github: "https://github.com/clivetc/portfolio",
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
	projects,
};
