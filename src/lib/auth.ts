import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./db/prisma";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),
});
