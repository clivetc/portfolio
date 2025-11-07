import {
	Grid,
	Heading,
	SlideFade,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorModeValue,
	Box
} from "@chakra-ui/react";
import React from "react";
import { backendTechStacks, otherTechStacks, webTechStacks } from "./contants";
import StackCard from "./cards/StackCard";

const TechList = () => {
	return (
		<SlideFade in offsetY={80}>
			<Box mt={16}>
				<Heading
					as="h2"
					fontSize={{ base: "32px", md: "40px", lg: "48px" }}
					mb={4}
					fontWeight="800"
					bgGradient="linear(to-r, purple.400, pink.500)"
					bgClip="text"
				>
					Tech Stack
				</Heading>
				<Text
					textColor={useColorModeValue("gray.600", "gray.400")}
					fontSize={"xl"}
					mb={8}
				>
					A list of my favorite tools and technologies that I use on a regular
					basis.
				</Text>
				<Box
					borderRadius="2xl"
					bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
					backdropFilter="blur(10px)"
					border="1px solid"
					borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
					boxShadow="2xl"
					p={6}
				>
					<Tabs variant="soft-rounded" colorScheme="purple">
						<TabList 
							mb={6}
							flexWrap="wrap"
							gap={2}
						>
							<Tab 
								mx={1}
								fontWeight="600"
								fontSize="lg"
								_selected={{
									bgGradient: "linear(to-r, purple.500, pink.500)",
									color: "white",
									boxShadow: "lg",
								}}
								_hover={{
									transform: "translateY(-2px)",
								}}
								transition="all 0.3s ease"
							>
								Web
							</Tab>
							<Tab 
								mx={1}
								fontWeight="600"
								fontSize="lg"
								_selected={{
									bgGradient: "linear(to-r, purple.500, pink.500)",
									color: "white",
									boxShadow: "lg",
								}}
								_hover={{
									transform: "translateY(-2px)",
								}}
								transition="all 0.3s ease"
							>
								Backend
							</Tab>
							<Tab 
								mx={1}
								fontWeight="600"
								fontSize="lg"
								_selected={{
									bgGradient: "linear(to-r, purple.500, pink.500)",
									color: "white",
									boxShadow: "lg",
								}}
								_hover={{
									transform: "translateY(-2px)",
								}}
								transition="all 0.3s ease"
							>
								Others
							</Tab>
						</TabList>

						<TabPanels>
							<TabPanel px={0}>
								<Grid
									templateColumns={[
										"1fr",
										"repeat(2,1fr)",
										"repeat(3, 1fr)",
										"repeat(4, 1fr)",
									]}
									gap={[3, 4, 5, 6]}
								>
									{webTechStacks.map((stack, index) => (
										<Box
											key={stack?.name}
											opacity={0}
											animation={`fadeInUp 0.5s ease forwards ${index * 0.1}s`}
										>
											<StackCard stack={stack} />
										</Box>
									))}
								</Grid>
							</TabPanel>
							<TabPanel px={0}>
								<Grid
									templateColumns={[
										"1fr",
										"repeat(2,1fr)",
										"repeat(3, 1fr)",
										"repeat(4, 1fr)",
									]}
									gap={[3, 4, 5, 6]}
								>
									{backendTechStacks.map((stack, index) => (
										<Box
											key={stack?.name}
											opacity={0}
											animation={`fadeInUp 0.5s ease forwards ${index * 0.1}s`}
										>
											<StackCard stack={stack} />
										</Box>
									))}
								</Grid>
							</TabPanel>
							<TabPanel px={0}>
								<Grid
									templateColumns={[
										"1fr",
										"repeat(2,1fr)",
										"repeat(3, 1fr)",
										"repeat(4, 1fr)",
									]}
									gap={[3, 4, 5, 6]}
								>
									{otherTechStacks.map((stack, index) => (
										<Box
											key={stack?.name}
											opacity={0}
											animation={`fadeInUp 0.5s ease forwards ${index * 0.1}s`}
										>
											<StackCard stack={stack} />
										</Box>
									))}
								</Grid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Box>
		</SlideFade>
	);
};

export default TechList;
