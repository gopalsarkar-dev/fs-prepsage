import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
	try {
		const cookieHeader = request.headers.get("cookie") || "";
		console.log(cookieHeader);

		const { data: session } = await betterFetch<Session>(
			"/api/auth/get-session",
			{
				headers: { cookie: cookieHeader },
				baseURL: request.nextUrl.origin,
			},
		);

		if (!session) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		return NextResponse.next();
	} catch (err) {
		console.log(`${err} `);

		return NextResponse.redirect(new URL("/login", request.url));
	}
}

export const config = {
	// protect all app routes except api/static/public ones. Adjust pattern to taste.
	matcher: ["/profile", "/prepsage-post"],
};
