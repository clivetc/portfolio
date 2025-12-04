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
				<link rel="canonical" href="https://www.tendaiclivechikwape.co.uk" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.tendaiclivechikwape.co.uk"
				/>
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
					content="https://www.tendaiclivechikwape.co.uk/og-image.png"
				/>
				<meta property="og:site_name" content="Tendai Chikwape Portfolio" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://www.tendaiclivechikwape.co.uk"
				/>
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
					content="https://www.tendaiclivechikwape.co.uk/twitter-image.png"
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

				{/* Structured Data - JSON-LD for Person */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							"@id": "https://www.tendaiclivechikwape.co.uk/#person",
							name: "Tendai Clive Chikwape",
							alternateName: "Tendai Chikwape",
							url: "https://www.tendaiclivechikwape.co.uk",
							image:
								"https://www.tendaiclivechikwape.co.uk/profile_picture.png",
							jobTitle: "Full Stack Software Engineer",
							description:
								"Experienced Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot. Building scalable web applications with modern technologies.",
							email: "clivetchikwape@gmail.com",
							telephone: "+44-XXX-XXX-XXXX",
							worksFor: {
								"@type": "Organization",
								name: "CDL Software",
								url: "https://www.cdl.co.uk/",
							},
							alumniOf: {
								"@type": "EducationalOrganization",
								name: "Near East University",
								url: "https://neu.edu.tr/?lang=en",
							},
							sameAs: [
								"https://github.com/clivetc",
								"https://www.linkedin.com/in/tendai-chikwape-523b3a55/",
								"https://twitter.com/tendaichikwape",
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
								"Healthcare Technology",
								"Web Development",
							],
							knowsLanguage: ["English"],
						}),
					}}
				/>

				{/* Structured Data - JSON-LD for Professional Service */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ProfessionalService",
							"@id": "https://www.tendaiclivechikwape.co.uk/#service",
							name: "Tendai Chikwape - Software Development Services",
							image:
								"https://www.tendaiclivechikwape.co.uk/profile_picture.png",
							url: "https://www.tendaiclivechikwape.co.uk",
							telephone: "+44-XXX-XXX-XXXX",
							email: "clivetchikwape@gmail.com",
							priceRange: "$$",
							address: {
								"@type": "PostalAddress",
								addressCountry: "UK",
							},
							geo: {
								"@type": "GeoCoordinates",
								addressCountry: "UK",
							},
							description:
								"Professional software development services specializing in React, Next.js, TypeScript, Node.js, and full-stack web applications. Healthcare technology expertise.",
							areaServed: ["UK", "International", "Remote"],
							serviceType: [
								"Web Development",
								"Full Stack Development",
								"React Development",
								"TypeScript Development",
								"Healthcare Software",
								"Software Consulting",
							],
							provider: {
								"@type": "Person",
								name: "Tendai Clive Chikwape",
							},
						}),
					}}
				/>

				{/* Structured Data - JSON-LD for Portfolio/Website */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							"@id": "https://www.tendaiclivechikwape.co.uk/#website",
							url: "https://www.tendaiclivechikwape.co.uk",
							name: "Tendai Clive Chikwape - Full Stack Software Engineer Portfolio",
							description:
								"Portfolio of Tendai Clive Chikwape, an experienced Full Stack Software Engineer specializing in React, TypeScript, Node.js, and modern web technologies.",
							publisher: {
								"@type": "Person",
								name: "Tendai Clive Chikwape",
							},
							inLanguage: "en-GB",
							potentialAction: {
								"@type": "SearchAction",
								target:
									"https://www.tendaiclivechikwape.co.uk/?s={search_term_string}",
								"query-input": "required name=search_term_string",
							},
						}),
					}}
				/>

				{/* Structured Data - JSON-LD for BreadcrumbList */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "BreadcrumbList",
							itemListElement: [
								{
									"@type": "ListItem",
									position: 1,
									name: "Home",
									item: "https://www.tendaiclivechikwape.co.uk",
								},
								{
									"@type": "ListItem",
									position: 2,
									name: "Experience",
									item: "https://www.tendaiclivechikwape.co.uk/experience",
								},
								{
									"@type": "ListItem",
									position: 3,
									name: "Projects",
									item: "https://www.tendaiclivechikwape.co.uk/github",
								},
								{
									"@type": "ListItem",
									position: 4,
									name: "Contact",
									item: "https://www.tendaiclivechikwape.co.uk/contact",
								},
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
