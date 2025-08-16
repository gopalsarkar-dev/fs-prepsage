import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/client";
import { clientEnv } from "./env/clientEnv";
import { auth } from "./auth";

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL,

	plugins: [inferAdditionalFields<typeof auth>()],
});
