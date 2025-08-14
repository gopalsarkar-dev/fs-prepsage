import * as argon2 from "argon2";
import { serverEnv } from "./env/serverEnv";

type VerifyPassword = {
	hash: string;
	password: string;
};

export const handelHashpasswordFn = async (password: string) => {
	const hashPassword = await argon2.hash(password, {
		secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
	});
	return hashPassword;
};

export const handelVerifypasswordFn = async ({
	hash,
	password,
}: VerifyPassword) => {
	const verifyPassword = await argon2.verify(hash, password, {
		secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
	});
	return verifyPassword;
};
