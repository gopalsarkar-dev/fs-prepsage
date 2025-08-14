import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./db/prisma";
import { serverEnv } from "./env/serverEnv";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
	secret: serverEnv.BETTER_AUTH_SECRET,
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
	},

	plugins: [nextCookies()],
});
