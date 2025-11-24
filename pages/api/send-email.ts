import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import {
	ContactEmailTemplate,
	ContactAutoReplyTemplate,
} from "~/compoments/ContactEmailTemplate";

interface EmailRequestBody {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, error: "Method not allowed." });
	}

	const { name, email, phone, message }: EmailRequestBody = req.body;

	if (!name || !email || !message) {
		return res
			.status(400)
			.json({ success: false, error: "Missing required fields." });
	}

	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
		});

		// Send email to yourself
		await transporter.sendMail({
			from: `"${name}" <${process.env.GMAIL_USER}>`,
			to: process.env.GMAIL_USER,
			replyTo: email,
			subject: `📬 Portfolio Message from ${name}`,
			html: ContactEmailTemplate({ name, email, phone, message }),
		});

		// Send automatic reply to user
		await transporter.sendMail({
			from: `"Tendai Chikwape" <${process.env.GMAIL_USER}>`,
			to: email,
			subject: "Thank you for contacting us!",
			html: ContactAutoReplyTemplate(name),
		});

		res.status(200).json({ success: true });
	} catch (error) {
		console.error("❌ Error sending email:", error);
		res.status(500).json({ success: false, error: "Failed to send email." });
	}
}
