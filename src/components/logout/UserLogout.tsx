"use client";

import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { signupTologinRedirect } from "../hooks/action/actions";
import logOut from "../hooks/tempAuth/logOut";

const UserLogout = () => {
	const handelLogOutFn = async () => {
		const { message, success } = await logOut();
		if (!success) {
			toast.error(message);
		}
		if (success) {
			toast.success(message);
			await signupTologinRedirect();
		}
	};

	return (
		<>
			<div
				className="flex cursor-pointer items-center gap-2 font-semibold text-red-500"
				onClick={handelLogOutFn}>
				<LogOut className="text-red-500" />
				<span>LogOut</span>
			</div>
		</>
	);
};

export default UserLogout;
