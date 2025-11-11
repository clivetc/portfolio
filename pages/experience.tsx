import {
	Container,
	Flex,
	Heading,
	Stack,
	VStack,
	useColorMode,
	Box,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap, FaRocket } from "react-icons/fa";
import ExperienceCard from "~/compoments/common/cards/ExperienceCard";
import { companies, educations } from "~/compoments/common/contants";
import { MotionBox } from "~/utils/animations/motion";
import {
	PageSlideFade,
	StaggerChildren,
} from "~/utils/animations/page.transtions";
import PageHero from "~/compoments/common/PageHero";
import TimelineView from "~/compoments/common/TimelineView";

const Experience = () => {
	const { colorMode } = useColorMode();
	return (
		<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
			<PageSlideFade>
				<StaggerChildren>
					{/* Hero Section */}
					<PageHero
						title="Professional Journey"
						subtitle="A timeline of my career growth, educational background, and the experiences that shaped me as a software engineer."
						icon={FaRocket}
						gradient="linear(to-r, blue.500, purple.500)"
					/>

					{/* Career Section */}
					<Box mb={16}>
						<Flex alignItems="center" mb={8}>
							<Stack 
								pr={4}
								p={3}
								borderRadius="xl"
								bgGradient="linear(to-r, blue.500, purple.500)"
								color="white"
								boxShadow="lg"
							>
								<BsFillBriefcaseFill size={"30px"} />
							</Stack>
							<Box>
								<Heading 
									fontSize={{ base: "2xl", md: "3xl" }}
									fontWeight="800"
									bgGradient="linear(to-r, blue.500, purple.500)"
									bgClip="text"
								>
									Career Path
								</Heading>
								<Text 
									fontSize="sm" 
									color={useColorModeValue("gray.600", "gray.400")}
									mt={1}
								>
									{companies.length} positions • {companies.reduce((acc, c) => {
										const years = c.period.match(/\d{4}/g);
										return years ? acc + 1 : acc;
									}, 0)}+ years experience
								</Text>
							</Box>
						</Flex>

						<TimelineView>
							<VStack spacing={6} align="stretch">
								{companies.map((company, index) => (
									<MotionBox 
										whileHover={{ x: 8 }} 
										key={index}
										transition={{ type: "spring", stiffness: 300 }}
										position="relative"
									>
										{/* Timeline dot */}
										<Box
											position="absolute"
											left={[-4, -4, -10]}
											top="50%"
											transform="translateY(-50%)"
											w={4}
											h={4}
											borderRadius="full"
											bgGradient="linear(to-r, blue.500, purple.500)"
											boxShadow="0 0 0 4px rgba(99, 102, 241, 0.2)"
											display={["none", "none", "block"]}
										/>
										<ExperienceCard
											company={company}
											colorMode={colorMode}
										/>
									</MotionBox>
								))}
							</VStack>
						</TimelineView>
					</Box>

					{/* Education Section */}
					<Box mb={16}>
						<Flex alignItems="center" mb={8}>
							<Stack 
								pr={4}
								p={3}
								borderRadius="xl"
								bgGradient="linear(to-r, purple.500, pink.500)"
								color="white"
								boxShadow="lg"
							>
								<FaGraduationCap size={"30px"} />
							</Stack>
							<Box>
								<Heading 
									fontSize={{ base: "2xl", md: "3xl" }}
									fontWeight="800"
									bgGradient="linear(to-r, purple.500, pink.500)"
									bgClip="text"
								>
									Education
								</Heading>
								<Text 
									fontSize="sm" 
									color={useColorModeValue("gray.600", "gray.400")}
									mt={1}
								>
									{educations.length} qualifications • Continuous learning
								</Text>
							</Box>
						</Flex>

						<TimelineView>
							<VStack spacing={6} align="stretch">
								{educations.map((education, index) => (
									<MotionBox 
										whileHover={{ x: 8 }} 
										key={index}
										transition={{ type: "spring", stiffness: 300 }}
										position="relative"
									>
										{/* Timeline dot */}
										<Box
											position="absolute"
											left={[-4, -4, -10]}
											top="50%"
											transform="translateY(-50%)"
											w={4}
											h={4}
											borderRadius="full"
											bgGradient="linear(to-r, purple.500, pink.500)"
											boxShadow="0 0 0 4px rgba(168, 85, 247, 0.2)"
											display={["none", "none", "block"]}
										/>
										<ExperienceCard
											company={education}
											colorMode={colorMode}
										/>
									</MotionBox>
								))}
							</VStack>
						</TimelineView>
					</Box>
				</StaggerChildren>
			</PageSlideFade>
		</Container>
	);
};

export default Experience;
