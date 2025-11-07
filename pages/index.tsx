import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container } from "@chakra-ui/react";
import Profile from "~/compoments/common/Profile";
import ThreeModel from "~/compoments/common/ThreeModel";
import TechList from "~/compoments/common/TechList";
import WorkPlace from "~/compoments/common/WorkPlace";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tendai Clive Chikwape - Software Developer</title>
				<meta name="description" content="Portfolio of Tendai Clive Chikwape - Full Stack Software Developer specializing in React, TypeScript, NestJS, and SpringBoot" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
				<Profile />
				<TechList />
				<Box mt={20}>
					<WorkPlace />
				</Box>
			</Container>
		</>
	);
}
