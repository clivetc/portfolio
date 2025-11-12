import type { NextApiRequest, NextApiResponse } from "next";

interface ChatRequest {
	message: string;
}

interface ChatResponse {
	response: string;
	error?: string;
}

// Portfolio context for Gemini
const PORTFOLIO_CONTEXT = `You are an AI assistant for Tendai Clive Chikwape's portfolio website. Answer questions professionally and concisely.

ABOUT TENDAI:
- Full Stack Software Engineer with 3+ years of experience
- Currently: Software Engineer at CDL Software (Jan 2025 - Present)
- Previously: Frontend Engineer at MBL Hightech (Nov 2021 - Aug 2024)

TECHNICAL SKILLS:
Frontend: React, Next.js, TypeScript, JavaScript, Redux, Redux Saga, Tailwind CSS, Chakra UI, Ant Design, SASS
Backend: Node.js, NestJS, SpringBoot, REST APIs
Databases: MongoDB, PostgreSQL
Cloud & Tools: AWS, Firebase, Git, GitHub, GitLab, Bitbucket, CI/CD (Vercel), Jira, Asana, Cypress

FEATURED PROJECTS:
1. Carinya Healthcare Services (https://carinyahealthcareservices.com.au/)
   - Healthcare platform for NDIS disability support services in Australia
   - Tech: React, Next.js, TypeScript, Healthcare systems

2. Rhuomai Home Care (https://www.rhuomaihomecare.co.uk/)
   - Professional home care services platform in the UK
   - Tech: React, Next.js, Node.js, Healthcare management

3. Health AI System (In Development)
   - AI-powered healthcare solution with machine learning for diagnostics
   - Tech: AI/ML, Python, React, Healthcare innovation

EDUCATION:
- Bachelor's Degree in Computer Information Systems, Near East University (2016-2021)
- Telecommunication Systems Certificate, City & Guilds (2015-2016)

CONTACT:
- Email: clivetchikwape@gmail.com
- GitHub: https://github.com/clivetc
- LinkedIn: https://www.linkedin.com/in/tendai-chikwape-523b3a55/

Answer questions helpfully and professionally. Keep responses concise (2-3 sentences). If asked about availability, mention he's currently at CDL Software but open to discussing opportunities.`;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ChatResponse>
) {
	if (req.method !== "POST") {
		return res.status(405).json({ response: "", error: "Method not allowed" });
	}

	const { message }: ChatRequest = req.body;

	if (!message || message.trim().length === 0) {
		return res.status(400).json({ response: "", error: "Message is required" });
	}

	try {
		const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

		if (!GEMINI_API_KEY) {
			// Fallback to smart responses if no API key
			return res.status(200).json({
				response: getSmartResponse(message),
			});
		}

		// Call Google Gemini API
		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					contents: [
						{
							parts: [
								{
									text: `${PORTFOLIO_CONTEXT}\n\nUser question: ${message}\n\nProvide a helpful, professional response in 2-3 sentences:`,
								},
							],
						},
					],
					generationConfig: {
						temperature: 0.7,
						topK: 40,
						topP: 0.95,
						maxOutputTokens: 200,
					},
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Gemini API error");
		}

		const data = await response.json();
		const aiResponse =
			data.candidates?.[0]?.content?.parts?.[0]?.text || getSmartResponse(message);

		res.status(200).json({ response: aiResponse.trim() });
	} catch (error) {
		console.error("Gemini API error:", error);
		// Fallback to smart responses on error
		res.status(200).json({
			response: getSmartResponse(message),
		});
	}
}

// Smart fallback responses when API is not available
function getSmartResponse(message: string): string {
	const lower = message.toLowerCase();

	// Skills & Technologies
	if (
		lower.includes("skill") ||
		lower.includes("technology") ||
		lower.includes("tech stack") ||
		lower.includes("know") ||
		lower.includes("language")
	) {
		return "Tendai specializes in React, Next.js, TypeScript, Node.js, NestJS, and SpringBoot. He has extensive experience with modern web technologies including Redux, Tailwind CSS, MongoDB, PostgreSQL, and AWS. He's proficient in both frontend and backend development.";
	}

	// Experience & Work
	if (
		lower.includes("experience") ||
		lower.includes("work") ||
		lower.includes("job") ||
		lower.includes("career") ||
		lower.includes("company")
	) {
		return "Tendai has 3+ years of professional experience. He currently works as a Software Engineer at CDL Software (since Jan 2025) and previously worked as a Frontend Engineer at MBL Hightech (Nov 2021 - Aug 2024). He's built enterprise-level applications and healthcare platforms.";
	}

	// Projects
	if (
		lower.includes("project") ||
		lower.includes("portfolio") ||
		lower.includes("built") ||
		lower.includes("created")
	) {
		return "Tendai has built impressive healthcare platforms including Carinya Healthcare Services (NDIS platform in Australia) and Rhuomai Home Care (UK home care platform). He's currently developing a Health AI System using machine learning for diagnostics. Check out the live projects on this portfolio!";
	}

	// Healthcare specific
	if (
		lower.includes("healthcare") ||
		lower.includes("health") ||
		lower.includes("medical") ||
		lower.includes("ndis")
	) {
		return "Tendai has significant expertise in healthcare technology. He's built platforms for disability support services (Carinya Healthcare) and home care services (Rhuomai Home Care). He's currently developing an AI-powered healthcare solution with machine learning capabilities.";
	}

	// Contact & Hiring
	if (
		lower.includes("contact") ||
		lower.includes("email") ||
		lower.includes("reach") ||
		lower.includes("hire") ||
		lower.includes("available") ||
		lower.includes("freelance")
	) {
		return "You can contact Tendai at clivetchikwape@gmail.com or connect on LinkedIn at https://www.linkedin.com/in/tendai-chikwape-523b3a55/. He's currently at CDL Software but open to discussing new opportunities. Feel free to use the contact form on this website!";
	}

	// Education
	if (
		lower.includes("education") ||
		lower.includes("study") ||
		lower.includes("degree") ||
		lower.includes("university") ||
		lower.includes("school")
	) {
		return "Tendai holds a Bachelor's Degree in Computer Information Systems from Near East University (2016-2021, CGPA 2.80). He also has a Telecommunication Systems Certificate from City & Guilds (2015-2016). His education provided a strong foundation in software development and systems.";
	}

	// React specific
	if (lower.includes("react")) {
		return "Tendai is highly proficient in React and the React ecosystem. He has extensive experience with React, Next.js, React Native, Redux, and Redux Saga. He's built multiple production applications using React, including healthcare platforms serving users in Australia and the UK.";
	}

	// TypeScript specific
	if (lower.includes("typescript")) {
		return "Tendai is an experienced TypeScript developer. He uses TypeScript extensively in his projects for type safety and better code quality. His portfolio showcases TypeScript implementations in Next.js applications and full-stack projects.";
	}

	// AI/ML
	if (lower.includes("ai") || lower.includes("machine learning") || lower.includes("ml")) {
		return "Tendai is currently developing a Health AI System that leverages machine learning for patient data analysis and predictive diagnostics. He's interested in AI/ML applications, particularly in healthcare technology. This portfolio itself features AI-powered elements!";
	}

	// Location
	if (lower.includes("location") || lower.includes("where") || lower.includes("based")) {
		return "Tendai has worked with international companies and built platforms for clients in Australia and the UK. He's experienced in remote work and collaborating with distributed teams across different time zones.";
	}

	// Greeting
	if (
		lower.includes("hello") ||
		lower.includes("hi ") ||
		lower.includes("hey") ||
		lower === "hi" ||
		lower === "hello"
	) {
		return "Hello! I'm here to help you learn about Tendai's skills, experience, and projects. Feel free to ask me anything about his technical expertise, work history, or featured projects!";
	}

	// Thanks
	if (lower.includes("thank") || lower.includes("thanks")) {
		return "You're welcome! Feel free to ask if you have any other questions about Tendai's skills, experience, or projects. You can also reach out directly via the contact form!";
	}

	// Default response
	return "I'm here to help you learn about Tendai's skills, experience, and projects! You can ask me about his technical skills, work experience, featured projects (like Carinya Healthcare and Rhuomai Home Care), education, or how to contact him. What would you like to know?";
}
