"use client";

import { UserPostType } from "@/lib/type";
import { userPostSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import createPost from "../hooks/post/createPost";
import { toast } from "react-toastify";

const UserPostDialog = () => {
	const uForm = useForm<UserPostType>({
		resolver: zodResolver(userPostSchema),
		defaultValues: { qtype: "", answer: "", question: "" },
		mode: "all",
	});

	const handelLoginFn = async (lInfo: UserPostType) => {
		const { message, success } = await createPost(lInfo);

		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);
			uForm.reset();
		}
	};

	return (
		<>
			<Form {...uForm}>
				<form onSubmit={uForm.handleSubmit(handelLoginFn)}>
					<Card className="">
						<CardHeader className="">
							<CardTitle className="text-2xl">For Interviews prepare</CardTitle>
							<FormDescription className="text-lg">
								Users prepare for technical interviews, and skill development.
							</FormDescription>
						</CardHeader>
						<CardContent className="space-y-5">
							<FormField
								control={uForm.control}
								name="qtype"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg">
											Select Question Mode
										</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}>
												<FormControl>
													<SelectTrigger className="w-full text-lg">
														<SelectValue placeholder="Select Question Mode" />
													</SelectTrigger>
												</FormControl>
												<SelectContent className="w-full text-lg">
													<SelectItem
														value="easy"
														className="text-lg">
														Easy
													</SelectItem>
													<SelectItem
														value="medium"
														className="text-lg">
														Medium
													</SelectItem>
													<SelectItem
														value="hard"
														className="text-lg">
														Hard
													</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={uForm.control}
								name="question"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg">Question</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="enter your qusetion..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={uForm.control}
								name="answer"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg">Answer</FormLabel>
										<FormControl>
											<Textarea
												placeholder="enter your answer..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
						<CardFooter className="grid gap-2">
							<Button
								type="submit"
								className="w-full cursor-pointer">
								Post
							</Button>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</>
	);
};

export default UserPostDialog;
