import { auth } from "@/lib/auth";
import prisma from "@/lib/db/prisma";
import { headers } from "next/headers";

const currentUserHard = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	try {
		const cuHard = await prisma.post.findMany({
			where: {
				userId: session?.user.id,
				qtype: "hard",
			},
		});

		console.log(cuHard);

		return {
			cuHard: cuHard,
		};
	} catch (error) {
		console.log(error);
		return {
			cuHard: null,
		};
	}
};

export default currentUserHard;
