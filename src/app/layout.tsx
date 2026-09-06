import "../styles/globals.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "WeKodeit — Custom software, built around you",
	description:
		"WeKodeit builds websites, web apps, CRMs, and mobile apps for clients. Direct communication, and a free prototype before you commit to anything.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
				/>
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
