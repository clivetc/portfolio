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
		<Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
			<SlideFade in offsetY={80}>
				<Flex
					width="full"
					align="center"
					justifyContent="center"
					position={"relative"}
				>
					<i className="ring" style={{ borderColor: "#00ff0a" }}></i>
					<i className="ring" style={{ borderColor: "#ff0057" }}></i>
					<i className="ring" style={{ borderColor: "#fffd44" }}></i>
					<Box
						p={8}
						maxWidth="container.lg"
						borderWidth={1}
						borderRadius={8}
						boxShadow="lg"
					>
						<Heading size={"lg"}>
							Let's get in touch. Leave me your message. 💬
						</Heading>
						<Text fontSize={"lg"} my={2}>
							Do not hesitate to contact me!
						</Text>
						<Box my={4} textAlign="left">
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
											size: "md",
											placeholder: "Name",
										}}
									/>
									<InputControl
										name="email"
										label={"Email"}
										inputProps={{
											size: "md",
											placeholder: "email",
										}}
									/>
									<TextareaControl name="message" label={"Message"} />
									<SubmitButton
										colorScheme="blue"
										mt="3em"
										w="100%"
										size="md"
										mb="3em"
										isLoading={isLoading}
									>
										Submit
									</SubmitButton>
								</Form>
							</Formik>
						</Box>
					</Box>
				</Flex>
			</SlideFade>
		</Container>
	);
};

export default Contact;
