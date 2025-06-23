import "./globals.css";
import {Space_Grotesk} from "next/font/google";
import {ThemeProvider} from "next-themes";

const space_grotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${space_grotesk.className} scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg`}
			suppressHydrationWarning>
			<body suppressHydrationWarning>
				<ThemeProvider attribute={"class"} defaultTheme='system' enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
