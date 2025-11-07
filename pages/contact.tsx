import {
	Box,
	Container,
	Flex,
	Heading,
	SlideFade,
	Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useMessageHandler } from "~/hooks/messageHandler";
import { IFormik } from "~/utils/interfaces";

const Contact = () => {
	const { handleSubmit, validationSchema, initialValues, isLoading } =
		useMessageHandler();

	return (
		<Container maxW="container.lg" mt={["8", "12"]} mb={["8", "12"]} px={[4, 6, 8]}>
			<SlideFade in offsetY={80}>
				<Flex width="full" align="center" justifyContent="center">
					<Box
						p={10}
						maxWidth="container.md"
						width="100%"
						borderRadius="2xl"
						bg="whiteAlpha.700"
						backdropFilter="blur(10px)"
						border="1px solid"
						borderColor="whiteAlpha.200"
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
								Let's get in touch 💬
							</Heading>
							<Text fontSize={"lg"} my={4} color="gray.600">
								Do not hesitate to contact me!
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
