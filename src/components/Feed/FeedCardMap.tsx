import { PostType } from "@/lib/type";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type FeedCardProps = {
	fInfo: PostType[];
};

const FeedCardMap = ({ fInfo }: FeedCardProps) => {
	return (
		<>
			<div className="space-y-5">
				{fInfo.map((item) => {
					return (
						<Card
							key={item.id}
							className="sm:w-full">
							<CardContent className="space-y-3">
								<Button
									className=""
									variant={"ghost"}>
									{item.qtype}
								</Button>
								<div className="text-2xl">{item.question}</div>
								<div className="text-lg">{item.answer}</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default FeedCardMap;
