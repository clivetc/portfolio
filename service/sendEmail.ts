import axios from "axios";
import { IFormik } from "~/utils/interfaces";

export async function sendMail(values: IFormik) {
	return await axios
		.post("/api/send-email", {
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
		.then((res) => res.data);
}
