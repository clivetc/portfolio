import { FormikState } from "formik";
import { sendMail } from "~/service/sendEmail";
import { IFormik } from "~/utils/interfaces";
import * as Yup from "yup";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

type ValidationSchema = Yup.ObjectSchema<IFormik>;

const initialValues: IFormik = {
	name: "",
	email: "",
	message: "",
};

export const useMessageHandler = () => {
	const router = useRouter();
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const validationSchema: ValidationSchema = Yup.object({
		name: Yup.string().required("Field Required"),
		email: Yup.string().required("Field Required"),
		message: Yup.string().required("Field Required"),
	});

	const handleSubmit = async (
		values: IFormik,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (isSubmitting: boolean) => void;
			resetForm: (
				nextState?: Partial<FormikState<IFormik>> | undefined,
			) => void;
		},
	) => {
		try {
			setIsLoading(true);
			const response = await sendMail(values);

			if (response) {
				toast({
					title: "Message Sent",
					description: "Your message has been sent successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
				setIsLoading(false);
				router.replace("/");
			}
		} catch (error) {
			toast({
				title: "Message Not Sent",
				description: "Error Sending Message Please Try Again!",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
			setIsLoading(false);
		} finally {
			setSubmitting(false);
			resetForm();
		}
	};

	return { handleSubmit, validationSchema, initialValues, isLoading };
};
