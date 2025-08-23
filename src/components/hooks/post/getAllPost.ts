import prisma from "@/lib/db/prisma";

const getAllPost = async () => {
	try {
		const allPost = await prisma.post.findMany();

		return {
			allPost: allPost,
			error: null,
		};
	} catch (error) {
		console.error("Error fetching allPost:", error);

		return {
			allPost: null,
			error: error || "Failed to fetch allPost",
		};
	}
};

export default getAllPost;
