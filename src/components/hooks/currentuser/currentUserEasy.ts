import { auth } from "@/lib/auth";
import prisma from "@/lib/db/prisma";
import { headers } from "next/headers";

const currentUserEasy = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	try {
		const cuEsy = await prisma.post.findMany({
			where: {
				userId: session?.user.id,
				qtype: "easy",
			},
		});

		console.log(cuEsy);

		return {
			cuEsy: cuEsy,
		};
	} catch (error) {
		console.log(error);
		return {
			cuEsy: null,
		};
	}
};

export default currentUserEasy;
