import Link from "next/link";
import { Button } from "../ui/button";

const TopBar = () => {
	return (
		<>
			<nav className="sticky top-0 w-full border border-b backdrop-blur-sm">
				<section className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<Link
						href="/"
						className="font-bold">
						prepsage
					</Link>
					<div className="flex items-center justify-center gap-4">
						<Button>Post</Button>
						<div className="">User Menu</div>
					</div>
				</section>
			</nav>
		</>
	);
};

export default TopBar;
