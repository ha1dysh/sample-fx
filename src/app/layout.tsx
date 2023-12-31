import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "sample fx",
};

const theme = createTheme({});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>

			<body
				className={inter.className}
				style={{ backgroundColor: "#eee" }}
			>
				<MantineProvider
					defaultColorScheme="light"
					theme={theme}
					forceColorScheme="light"
				>
					<main className="main">
						<div className="container">
							<div className="content">{children}</div>
						</div>
					</main>
				</MantineProvider>
			</body>
		</html>
	);
}
