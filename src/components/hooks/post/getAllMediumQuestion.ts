import prisma from "@/lib/db/prisma";

const getAllMediumQuestion = async () => {
	try {
		const allMediumQuestion = await prisma.post.findMany({
			where: {
				qtype: "medium",
			},
		});
		return {
			allMediumQuestion: allMediumQuestion,
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			allMediumQuestion: null,
			error: error || "Failed to fetch getAllMediumQuestion",
		};
	}
};

export default getAllMediumQuestion;
