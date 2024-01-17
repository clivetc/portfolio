// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailRequestBody {
	name: string;
	email: string;
	message: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		const { name, email, message }: EmailRequestBody = req.body;

		const transporter = nodemailer.createTransport({
			service: "hotmail",
			auth: {
				user: process.env.HOTMAIL_USER,
				pass: process.env.HOTMAIL_APP_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.HOTMAIL_USER,
			to: process.env.GMAIL_USER,
			subject: "New Message from Contact Form",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);
			res.status(500).json({ success: false, error: "Failed to send email." });
		}
	} else {
		res.status(405).json({ success: false, error: "Method not allowed." });
	}
}
