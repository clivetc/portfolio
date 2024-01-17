import axios from "axios";
import { IFormik } from "~/utils/interfaces";

export async function sendMail(values: IFormik) {
	return await axios
		.post("/api/send-email", values, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((res) => res.data);
}
