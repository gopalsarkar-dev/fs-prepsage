import TopBar from "@/components/Header/TopBar";
import "./globals.css";

type RootLayoutProviderProps = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
	return (
		<html lang="en">
			<body>
				<TopBar />
				<main className="container mx-auto max-w-7xl px-6 py-4">
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
