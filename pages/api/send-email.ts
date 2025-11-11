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

		// Gmail SMTP configuration
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER, // Your Gmail address
				pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
			},
		});

		const mailOptions = {
			from: process.env.GMAIL_USER,
			to: process.env.GMAIL_USER, // Where you want to receive messages
			replyTo: email, // Visitor's email for easy reply
			subject: `Portfolio Contact: Message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #667eea;">New Contact Form Submission</h2>
					<div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
					</div>
					<div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
						<h3 style="color: #4a5568; margin-top: 0;">Message:</h3>
						<p style="color: #2d3748; line-height: 1.6;">${message}</p>
					</div>
					<p style="color: #718096; font-size: 12px; margin-top: 20px;">
						This message was sent from your portfolio contact form.
					</p>
				</div>
			`,
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
