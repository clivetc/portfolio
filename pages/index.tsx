import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Profile from "~/compoments/common/Profile";
import TechList from "~/compoments/common/TechList";
import WorkPlace from "~/compoments/common/WorkPlace";
import AIFeatures from "~/compoments/common/AIFeatures";
import ProjectShowcase from "~/compoments/common/ProjectShowcase";

export default function Home() {
	return (
		<>
			<Head>
				{/* Primary Meta Tags */}
				<title>
					Tendai Clive Chikwape | Full Stack Software Engineer | React,
					TypeScript, Node.js Developer
				</title>
				<meta
					name="title"
					content="Tendai Clive Chikwape | Full Stack Software Engineer | React, TypeScript, Node.js Developer"
				/>
				<meta
					name="description"
					content="Experienced Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot. Building scalable web applications with modern technologies. Available for hire."
				/>
				<meta
					name="keywords"
					content="Tendai Chikwape, Software Engineer, Full Stack Developer, React Developer, TypeScript Developer, Next.js Developer, Node.js Developer, NestJS, SpringBoot, Frontend Engineer, Backend Engineer, Web Developer, JavaScript Developer, Software Development, Hire Developer, Portfolio"
				/>
				<meta name="author" content="Tendai Clive Chikwape" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://your-domain.com" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://your-domain.com" />
				<meta
					property="og:title"
					content="Tendai Clive Chikwape | Full Stack Software Engineer"
				/>
				<meta
					property="og:description"
					content="Experienced Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot. Building scalable web applications."
				/>
				<meta
					property="og:image"
					content="hhttps://www.tendaiclivechikwape.co.uk/og-image.png"
				/>
				<meta property="og:site_name" content="Tendai Chikwape Portfolio" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://your-domain.com" />
				<meta
					property="twitter:title"
					content="Tendai Clive Chikwape | Full Stack Software Engineer"
				/>
				<meta
					property="twitter:description"
					content="Experienced Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot."
				/>
				<meta
					property="twitter:image"
					content="hhttps://www.tendaiclivechikwape.co.uk/twitter-image.png"
				/>

				{/* Additional SEO */}
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="7 days" />
				<meta name="theme-color" content="#667eea" />

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>

				{/* Structured Data - JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Tendai Clive Chikwape",
							url: "https://your-domain.com",
							image:
								"hhttps://www.tendaiclivechikwape.co.uk/profile_picture.png",
							jobTitle: "Full Stack Software Engineer",
							worksFor: {
								"@type": "Organization",
								name: "CDL Software",
							},
							description:
								"Experienced Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot",
							sameAs: [
								"https://github.com/clivetc",
								"https://www.linkedin.com/in/tendai-chikwape-523b3a55/",
								"mailto:clivetchikwape@gmail.com",
							],
							knowsAbout: [
								"React",
								"Next.js",
								"TypeScript",
								"JavaScript",
								"Node.js",
								"NestJS",
								"SpringBoot",
								"MongoDB",
								"PostgreSQL",
								"AWS",
								"Full Stack Development",
								"Frontend Development",
								"Backend Development",
							],
						}),
					}}
				/>
			</Head>
			<Container
				maxW="container.lg"
				mt={["8", "12"]}
				mb={["8", "12"]}
				px={[4, 6, 8]}
			>
				<Profile />
				<AIFeatures />
				<TechList />
				<ProjectShowcase />
				<Box mt={20}>
					<WorkPlace />
				</Box>
			</Container>
		</>
	);
}
