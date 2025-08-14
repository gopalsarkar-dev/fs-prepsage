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
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
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

const UserPostDialog = () => {
	const uForm = useForm<UserPostType>({
		resolver: zodResolver(userPostSchema),
		defaultValues: { select: "", answer: "", question: "" },
		mode: "all",
	});

	const handelLoginFn = (lInfo: UserPostType) => {
		console.log(lInfo);
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="cursor-pointer">Post</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Post</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>

					<Form {...uForm}>
						<form onSubmit={uForm.handleSubmit(handelLoginFn)}>
							<Card className="">
								<CardHeader className="">
									<CardTitle>For Interviews prepare</CardTitle>
									<FormDescription>
										Users prepare for technical interviews, and skill
										development.
									</FormDescription>
								</CardHeader>
								<CardContent className="space-y-5">
									<FormField
										control={uForm.control}
										name="select"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Select Question Mode</FormLabel>
												<FormControl>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}>
														<FormControl>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Select Question Mode" />
															</SelectTrigger>
														</FormControl>
														<SelectContent className="w-full">
															<SelectItem value="easy">Easy </SelectItem>
															<SelectItem value="medium">Medium</SelectItem>
															<SelectItem value="hard">Hard</SelectItem>
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
												<FormLabel>Question</FormLabel>
												<FormControl>
													<Input
														type="password"
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
												<FormLabel>Answer</FormLabel>
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
				</DialogContent>
			</Dialog>
		</>
	);
};

export default UserPostDialog;
