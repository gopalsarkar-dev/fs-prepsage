import prisma from "@/lib/db/prisma";

const getAllHardQusetion = async () => {
	try {
		const allHardQusetion = await prisma.post.findMany({
			where: {
				qtype: "hard",
			},
		});
		return {
			allHardQusetion: allHardQusetion,
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			allHardQusetion: null,
			error: error || "Failed to fetch allHardQusetion",
		};
	}
};

export default getAllHardQusetion;
