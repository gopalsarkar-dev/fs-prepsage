import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { User } from "lucide-react";
import DarkMode from "../theme/DarkMode";
import UserLogout from "../logout/UserLogout";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const UserMenu = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className="cursor-pointer">
					<Tooltip>
						<TooltipTrigger asChild>
							<Avatar>
								<AvatarFallback>R</AvatarFallback>
							</Avatar>
						</TooltipTrigger>
						<TooltipContent>
							<p>More Options</p>
						</TooltipContent>
					</Tooltip>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="mt-6 w-56"
					align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Link
								href="/profile"
								className="flex items-center gap-2 font-semibold">
								<User />
								<span>Profile</span>
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<DarkMode />
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />

					<DropdownMenuItem>
						<UserLogout />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default UserMenu;
