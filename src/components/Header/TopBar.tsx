import Link from "next/link";
import UserPostDialog from "../post/UserPostDialog";
import UserMenu from "../profilemenu/UserMenu";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import { Button } from "../ui/button";

const TopBar = async () => {
	const { data } = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	});

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
						<UserPostDialog />
						{data?.session ? (
							<UserMenu />
						) : (
							<Link href="/login">
								<Button className="cursor-pointer">Login</Button>
							</Link>
						)}
					</div>
				</section>
			</nav>
		</>
	);
};

export default TopBar;
