import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins the standard Next.js way. `variable` exposes it as the CSS
// custom property --font-poppins, which globals.css feeds into Tailwind's
// --font-sans / --font-display tokens.
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

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
		<html lang="en" className={poppins.variable}>
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				{/* Google's Material Symbols icon font (used by the <span className="material-symbols-outlined"> icons) */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
				/>
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
