import { auth } from "@/lib/auth";
import prisma from "@/lib/db/prisma";
import { headers } from "next/headers";

const currentUserAllPost = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	try {
		const cuId = await prisma.post.findMany({
			where: {
				userId: session?.user.id,
			},
		});

		console.log(cuId);

		return {
			cuId: cuId,
		};
	} catch (error) {
		console.log(error);
		return {
			cuId: null,
		};
	}
};

export default currentUserAllPost;
