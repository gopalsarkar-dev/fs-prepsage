import { authClient } from "@/lib/auth-client";
import { LoginFormType } from "@/lib/type";

const logIn = async (lInfo: LoginFormType) => {
	try {
		const { email, password } = lInfo;

		const { error } = await authClient.signIn.email({
			email,
			password,
		});

		if (error) {
			const { message, statusText } = error;

			return {
				success: false,
				message: message || statusText,
			};
		}

		return {
			success: true,
			message: "User login Successfully",
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: "Network error Check your Internet connection",
		};
	}
};

export default logIn;
