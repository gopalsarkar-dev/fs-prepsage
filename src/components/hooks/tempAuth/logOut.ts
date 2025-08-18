import { authClient } from "@/lib/auth-client";

const logOut = async () => {
	try {
		const { error } = await authClient.signOut();

		if (error) {
			const { message, statusText } = error;
			return {
				success: false,
				message: message || statusText,
			};
		}

		return {
			success: true,
			message: "User LogOut Successfully",
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: "Network Error",
		};
	}
};

export default logOut;
