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
				<title>Tendai Clive Chikwape</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
				<Profile />
				<TechList />
				<WorkPlace />
			</Container>
		</>
	);
}
