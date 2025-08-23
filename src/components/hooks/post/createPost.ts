"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db/prisma";
import { UserPostType } from "@/lib/type";
import { headers } from "next/headers";

const createPost = async (lInfo: UserPostType) => {
	const sesson = await auth.api.getSession({
		headers: await headers(),
	});
	try {
		await prisma.post.create({
			data: {
				qtype: lInfo.qtype,
				question: lInfo.question,
				answer: lInfo.answer,
				user: {
					connect: {
						id: sesson?.user.id,
					},
				},
			},
		});

		return {
			success: true,
			message: "post create successfully",
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: "post create fail",
		};
	}
};

export default createPost;
