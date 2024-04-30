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
			service: "gmail",
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.VERCEL_GMAIL_USER,
				pass: process.env.VERCEL_GMAIL_APP_PASSWORD,
			},
			tls: {
				ciphers: "SSLv3",
				rejectUnauthorized: false,
			},
		});

		const mailOptions = {
			from: process.env.VERCEL_HOTMAIL_USER,
			to: process.env.VERCEL_GMAIL_USER,
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
