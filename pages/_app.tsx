import "~/styles/index.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "~/compoments/layout";
import { useEffect, useState } from "react";
import MainLayout from "~/compoments/layout/MainLayOut";

const config = {
	useSystemColorMode: false,
	initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default function App({ Component, pageProps }: AppProps) {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	if (!domLoaded) return <></>;
	return (
		<ChakraProvider theme={theme}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ChakraProvider>
	);
}
