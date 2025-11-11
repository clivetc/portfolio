import {
	Box,
	Container,
	Flex,
	Heading,
	SlideFade,
	Text,
	SimpleGrid,
	Icon,
	VStack,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useMessageHandler } from "~/hooks/messageHandler";
import { IFormik } from "~/utils/interfaces";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import PageHero from "~/compoments/common/PageHero";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactInfo = () => {
	const contactMethods = [
		{
			icon: FaEnvelope,
			label: "Email",
			value: "clivetchikwape@gmail.com",
			link: "mailto:clivetchikwape@gmail.com",
			color: "red",
		},
		{
			icon: FaLinkedin,
			label: "LinkedIn",
			value: "Connect with me",
			link: "https://www.linkedin.com/in/tendai-chikwape-523b3a55/",
			color: "linkedin",
		},
		{
			icon: FaGithub,
			label: "GitHub",
			value: "@clivetc",
			link: "https://github.com/clivetc",
			color: "gray",
		},
	];

	return (
		<SimpleGrid columns={[1, 1, 3]} spacing={6} mb={12}>
			{contactMethods.map((method, index) => (
				<MotionBox
					key={method.label}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					<Link href={method.link} isExternal style={{ textDecoration: "none" }}>
						<Box
							p={6}
							borderRadius="xl"
							bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
							backdropFilter="blur(10px)"
							border="1px solid"
							borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
							boxShadow="lg"
							_hover={{
								transform: "translateY(-4px)",
								boxShadow: "xl",
								borderColor: `${method.color}.500`,
							}}
							transition="all 0.3s ease"
							cursor="pointer"
						>
							<VStack spacing={3} align="flex-start">
								<Box
									p={3}
									borderRadius="lg"
									bg={`${method.color}.50`}
									color={`${method.color}.500`}
								>
									<Icon as={method.icon} boxSize={6} />
								</Box>
								<Box>
									<Text
										fontSize="sm"
										fontWeight="600"
										color={useColorModeValue("gray.600", "gray.400")}
										textTransform="uppercase"
										letterSpacing="wide"
									>
										{method.label}
									</Text>
									<Text
										fontSize="md"
										fontWeight="700"
										color={useColorModeValue("gray.800", "white")}
										mt={1}
									>
										{method.value}
									</Text>
								</Box>
							</VStack>
						</Box>
					</Link>
				</MotionBox>
			))}
		</SimpleGrid>
	);
};

const Contact = () => {
	const { handleSubmit, validationSchema, initialValues, isLoading } =
		useMessageHandler();

	return (
		<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
			<PageHero
				title="Let's Connect"
				subtitle="Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, creative ideas, or partnerships."
				icon={BiMessageDetail}
				gradient="linear(to-r, blue.500, purple.500)"
			/>

			<ContactInfo />

			<SlideFade in offsetY={80}>
				<Flex width="full" align="center" justifyContent="center">
					<Box
						p={10}
						maxWidth="container.md"
						width="100%"
						borderRadius="2xl"
						bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
						backdropFilter="blur(10px)"
						border="1px solid"
						borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
						boxShadow="2xl"
						position="relative"
						overflow="hidden"
					>
						<Box
							position="absolute"
							top="-50%"
							right="-20%"
							width="300px"
							height="300px"
							borderRadius="full"
							bgGradient="linear(to-br, blue.400, purple.400)"
							opacity="0.1"
							filter="blur(60px)"
						/>
						<Box position="relative" zIndex={1}>
							<Heading 
								size={"xl"} 
								mb={2}
								bgGradient="linear(to-r, blue.500, purple.500)"
								bgClip="text"
								fontWeight="800"
							>
								Send me a message 💬
							</Heading>
							<Text 
								fontSize={"lg"} 
								my={4} 
								color={useColorModeValue("gray.600", "gray.400")}
							>
								Fill out the form below and I'll get back to you as soon as possible!
							</Text>
							<Box my={6} textAlign="left">
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={(values: IFormik, { setSubmitting, resetForm }) => {
										handleSubmit(values, { setSubmitting, resetForm });
									}}
								>
									<Form>
										<InputControl
											name="name"
											label={"Name"}
											inputProps={{
												size: "lg",
												placeholder: "Your name",
												borderRadius: "lg",
											}}
										/>
										<InputControl
											name="email"
											label={"Email"}
											inputProps={{
												size: "lg",
												placeholder: "your.email@example.com",
												borderRadius: "lg",
											}}
										/>
										<TextareaControl 
											name="message" 
											label={"Message"}
											textareaProps={{
												size: "lg",
												placeholder: "Your message here...",
												borderRadius: "lg",
												rows: 6,
											}}
										/>
										<SubmitButton
											bgGradient="linear(to-r, blue.500, purple.500)"
											color="white"
											mt="2em"
											w="100%"
											size="lg"
											mb="1em"
											isLoading={isLoading}
											_hover={{
												bgGradient: "linear(to-r, blue.600, purple.600)",
												transform: "translateY(-2px)",
												boxShadow: "xl",
											}}
											_active={{
												transform: "translateY(0)",
											}}
											transition="all 0.3s ease"
											borderRadius="lg"
										>
											Send Message
										</SubmitButton>
									</Form>
								</Formik>
							</Box>
						</Box>
					</Box>
				</Flex>
			</SlideFade>
		</Container>
	);
};

export default Contact;
