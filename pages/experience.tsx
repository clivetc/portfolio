import {
	Container,
	Flex,
	Heading,
	Stack,
	VStack,
	useColorMode,
} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import ExperienceCard from "~/compoments/common/cards/ExperienceCard";
import { companies, educations } from "~/compoments/common/contants";
import { MotionBox } from "~/utils/animations/motion";
import {
	PageSlideFade,
	StaggerChildren,
} from "~/utils/animations/page.transtions";

const Experience = () => {
	const { colorMode } = useColorMode();
	return (
		<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
			<PageSlideFade>
				<StaggerChildren>
					<Flex alignItems="center" my={10}>
						<Flex alignItems={"center"}>
							<Stack 
								pr={4}
								p={3}
								borderRadius="lg"
								bgGradient="linear(to-r, blue.500, purple.500)"
								color="white"
							>
								<BsFillBriefcaseFill size={"30px"} />
							</Stack>

							<Heading 
								fontSize={{ base: "32px", md: "40px" }}
								fontWeight="800"
								bgGradient="linear(to-r, blue.500, purple.500)"
								bgClip="text"
							>
								Career
							</Heading>
						</Flex>
					</Flex>

					<VStack
						spacing={6}
						marginBottom={10}
						align="left"
						mx={[0, 0, 6]}
						mt={5}
					>
						{companies.map((company, index) => (
							<MotionBox 
								whileHover={{ y: -8, scale: 1.02 }} 
								key={index}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<ExperienceCard
									key={index}
									company={company}
									colorMode={colorMode}
								/>
							</MotionBox>
						))}
					</VStack>

					<Flex alignItems="center" my={10}>
						<Flex alignItems="center">
							<Stack 
								pr={4}
								p={3}
								borderRadius="lg"
								bgGradient="linear(to-r, purple.500, pink.500)"
								color="white"
							>
								<FaGraduationCap size={"30px"} />
							</Stack>
							<Heading 
								fontSize={{ base: "32px", md: "40px" }}
								fontWeight="800"
								bgGradient="linear(to-r, purple.500, pink.500)"
								bgClip="text"
							>
								Education
							</Heading>
						</Flex>
					</Flex>

					<VStack
						spacing={6}
						marginBottom={10}
						align="left"
						mx={[0, 0, 6]}
						mt={5}
					>
						{educations.map((education, index) => (
							<MotionBox 
								whileHover={{ y: -8, scale: 1.02 }} 
								key={index}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<ExperienceCard
									key={index}
									company={education}
									colorMode={colorMode}
								/>
							</MotionBox>
						))}
					</VStack>
				</StaggerChildren>
			</PageSlideFade>
		</Container>
	);
};

export default Experience;
