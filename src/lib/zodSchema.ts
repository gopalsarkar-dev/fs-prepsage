import z from "zod";

export const loginFormSchema = z.object({
	email: z.email({ error: "email is required!" }).toLowerCase(),

	password: z
		.string()
		.min(8, {
			error: "Password must have 8 characters or more.",
		})
		.max(20, { error: "Password Maximum have 20 characters or short." }),
});
