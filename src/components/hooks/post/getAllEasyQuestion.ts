import prisma from "@/lib/db/prisma";

const getAllEasyQuestion = async () => {
	try {
		const allEasyQuestion = await prisma.post.findMany({
			where: {
				qtype: "easy",
			},
		});
		return {
			allEasyQuestion: allEasyQuestion,
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			allEasyQuestion: null,
			error: error || "Failed to fetch getAllEasyQuestion",
		};
	}
};

export default getAllEasyQuestion;
