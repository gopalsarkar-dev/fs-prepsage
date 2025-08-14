import z from "zod";
import { loginFormSchema, signupFormSchema, userPostSchema } from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type SignupFormType = z.infer<typeof signupFormSchema>;

export type UserPostType = z.infer<typeof userPostSchema>;
