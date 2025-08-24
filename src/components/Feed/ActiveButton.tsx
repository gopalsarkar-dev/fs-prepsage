"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import FeedCardMap from "./FeedCardMap";

const ActiveButton = ({ all, easy, hard, medium }: any) => {
	const [activ, setActiv] = useState<string>("all");

	return (
		<>
			<div className="grid place-items-center gap-6">
				<h1 className="text-center font-bold sm:text-7xl">
					“Interview Prep Master: Cracking Interviews with Confidence!”
				</h1>
				<h4 className="text-center font-bold sm:text-2xl">
					A curated collection of commonly asked interview questions with clear
					and concise answers — ideal for developers preparing for job
					interviews.
				</h4>

				<div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
					<Button
						className="cursor-pointer"
						size="lg"
						onClick={() => setActiv("easy")}
						variant={activ === "easy" ? "default" : "outline"}>
						Easy ({easy.length})
					</Button>
					<Button
						className="cursor-pointer"
						variant={activ === "medium" ? "default" : "outline"}
						size="lg"
						onClick={() => setActiv("medium")}>
						Medium ({medium?.length})
					</Button>
					<Button
						className="cursor-pointer"
						variant={activ === "hard" ? "default" : "outline"}
						size="lg"
						onClick={() => setActiv("hard")}>
						Hard ({hard?.length})
					</Button>
					<Button
						className="cursor-pointer"
						variant={activ === "all" ? "default" : "outline"}
						size="lg"
						onClick={() => setActiv("all")}>
						All ({all?.length})
					</Button>
				</div>

				<div className="mt-8 sm:w-full">
					{activ === "easy" && <FeedCardMap fInfo={easy} />}
					{activ === "medium" && <FeedCardMap fInfo={medium} />}
					{activ === "hard" && <FeedCardMap fInfo={hard} />}
					{activ === "all" && <FeedCardMap fInfo={all} />}
				</div>
			</div>
		</>
	);
};

export default ActiveButton;
