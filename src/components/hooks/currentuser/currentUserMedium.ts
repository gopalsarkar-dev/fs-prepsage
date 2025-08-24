import { auth } from "@/lib/auth";
import prisma from "@/lib/db/prisma";
import { headers } from "next/headers";

const currentUserMedium = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	try {
		const cuMedium = await prisma.post.findMany({
			where: {
				userId: session?.user.id,
				qtype: "medium",
			},
		});

		console.log(cuMedium);

		return {
			cuMedium: cuMedium,
		};
	} catch (error) {
		console.log(error);
		return {
			cuMedium: null,
		};
	}
};

export default currentUserMedium;
