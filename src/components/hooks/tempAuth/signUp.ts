import { authClient } from "@/lib/auth-client";
import { SignupFormType } from "@/lib/type";
// import { APIError } from "better-auth";

const signUp = async (sInfo: SignupFormType) => {
	try {
		const { email, name, password } = sInfo;

		const { error } = await authClient.signUp.email({
			email,
			name,
			password,
			callbackURL: "/login",
		});

		if (error) {
			const { statusText, message } = error;

			return {
				success: false,
				message: message || statusText,
			};
		}

		return {
			success: true,
			message: "User Successfully Signup",
		};
	} catch (error) {
		console.log(error);

		return {
			success: false,
			message: "Network error",
		};
	}
};

export default signUp;
