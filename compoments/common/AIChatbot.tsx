import {
	Box,
	Button,
	Flex,
	Icon,
	IconButton,
	Input,
	Text,
	useColorModeValue,
	VStack,
	HStack,
	Avatar,
	Tooltip,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { BiBot, BiUser } from "react-icons/bi";
import { SiGoogle } from "react-icons/si";

const MotionBox = motion(Box);

interface Message {
	role: "user" | "assistant";
	content: string;
}

const AIChatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "assistant",
			content: "Hi! I'm an AI assistant powered by Google Gemini. Ask me about Tendai's skills, experience, or projects!",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = async () => {
		if (!input.trim() || isLoading) return;

		const userMessage: Message = { role: "user", content: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsLoading(true);

		try {
			const response = await fetch("/api/gemini-chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input }),
			});

			const data = await response.json();

			const assistantMessage: Message = {
				role: "assistant",
				content: data.response || "I'm having trouble responding right now. Please try again!",
			};

			setMessages((prev) => [...prev, assistantMessage]);
		} catch (error) {
			const errorMessage: Message = {
				role: "assistant",
				content: "Sorry, I encountered an error. Please try again later!",
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<>
			{/* Floating Chat Button */}
			<AnimatePresence>
				{!isOpen && (
					<MotionBox
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						position="fixed"
						bottom={8}
						left={8}
						zIndex={9999}
					>
						<Tooltip label="Chat with AI Assistant" placement="right">
							<IconButton
								aria-label="Open AI Chat"
								icon={<FaRobot />}
								size="lg"
								borderRadius="full"
								bgGradient="linear(to-r, blue.500, cyan.500)"
								color="white"
								boxShadow="xl"
								_hover={{
									bgGradient:"linear(to-r, blue.600, cyan.600)",
									transform: "scale(1.1)",
								}}
								_active={{
									transform: "scale(0.95)",
								}}
								onClick={() => setIsOpen(true)}
								w={16}
								h={16}
								fontSize="2xl"
								animation="pulse 2s ease-in-out infinite"
							/>
						</Tooltip>
					</MotionBox>
				)}
			</AnimatePresence>

			{/* Chat Window */}
			<AnimatePresence>
				{isOpen && (
					<MotionBox
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						position="fixed"
						bottom={8}
						left={8}
						w={["90vw", "400px"]}
						h={["80vh", "600px"]}
						zIndex={9999}
						borderRadius="2xl"
						bg={useColorModeValue("white", "gray.800")}
						boxShadow="2xl"
						border="1px solid"
						borderColor={useColorModeValue("gray.200", "gray.700")}
						overflow="hidden"
						display="flex"
						flexDirection="column"
					>
						{/* Header */}
						<Flex
							p={4}
							bgGradient="linear(to-r, blue.500, cyan.500)"
							color="white"
							align="center"
							justify="space-between"
						>
							<HStack spacing={3}>
								<Icon as={FaRobot} boxSize={6} />
								<Box>
									<Text fontWeight="700" fontSize="lg">
										AI Assistant
									</Text>
									<HStack spacing={1} fontSize="xs" opacity={0.9}>
										<Text>Powered by</Text>
										<Icon as={SiGoogle} />
										<Text>Gemini</Text>
									</HStack>
								</Box>
							</HStack>
							<IconButton
								aria-label="Close chat"
								icon={<FaTimes />}
								size="sm"
								variant="ghost"
								color="white"
								_hover={{ bg: "whiteAlpha.300" }}
								onClick={() => setIsOpen(false)}
							/>
						</Flex>

						{/* Messages */}
						<VStack
							flex={1}
							overflowY="auto"
							p={4}
							spacing={4}
							align="stretch"
							bg={useColorModeValue("gray.50", "gray.900")}
						>
							{messages.map((message, index) => (
								<Flex
									key={index}
									justify={message.role === "user" ? "flex-end" : "flex-start"}
								>
									<HStack
										spacing={2}
										maxW="80%"
										flexDirection={message.role === "user" ? "row-reverse" : "row"}
									>
										<Avatar
											size="sm"
											icon={message.role === "user" ? <BiUser /> : <BiBot />}
											bg={message.role === "user" ? "blue.500" : "cyan.500"}
										/>
										<Box
											bg={
												message.role === "user"
													? "blue.500"
													: useColorModeValue("white", "gray.700")
											}
											color={
												message.role === "user"
													? "white"
													: useColorModeValue("gray.800", "white")
											}
											px={4}
											py={3}
											borderRadius="xl"
											boxShadow="md"
										>
											<Text fontSize="sm" whiteSpace="pre-wrap">
												{message.content}
											</Text>
										</Box>
									</HStack>
								</Flex>
							))}
							{isLoading && (
								<Flex justify="flex-start">
									<HStack spacing={2}>
										<Avatar size="sm" icon={<BiBot />} bg="cyan.500" />
										<Box
											bg={useColorModeValue("white", "gray.700")}
											px={4}
											py={3}
											borderRadius="xl"
											boxShadow="md"
										>
											<HStack spacing={1}>
												<Box
													w={2}
													h={2}
													borderRadius="full"
													bg="cyan.500"
													animation="bounce 1s infinite"
												/>
												<Box
													w={2}
													h={2}
													borderRadius="full"
													bg="cyan.500"
													animation="bounce 1s infinite 0.2s"
												/>
												<Box
													w={2}
													h={2}
													borderRadius="full"
													bg="cyan.500"
													animation="bounce 1s infinite 0.4s"
												/>
											</HStack>
										</Box>
									</HStack>
								</Flex>
							)}
							<div ref={messagesEndRef} />
						</VStack>

						{/* Input */}
						<Flex
							p={4}
							borderTop="1px solid"
							borderColor={useColorModeValue("gray.200", "gray.700")}
							bg={useColorModeValue("white", "gray.800")}
						>
							<Input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyPress={handleKeyPress}
								placeholder="Ask me anything..."
								size="lg"
								borderRadius="xl"
								mr={2}
								disabled={isLoading}
							/>
							<IconButton
								aria-label="Send message"
								icon={<FaPaperPlane />}
								size="lg"
								borderRadius="xl"
								bgGradient="linear(to-r, blue.500, cyan.500)"
								color="white"
								_hover={{
									bgGradient:"linear(to-r, blue.600, cyan.600)",
								}}
								onClick={handleSend}
								isLoading={isLoading}
								disabled={!input.trim() || isLoading}
							/>
						</Flex>
					</MotionBox>
				)}
			</AnimatePresence>
		</>
	);
};

export default AIChatbot;
