import { PostType } from "@/lib/type";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type FeedCardProps = {
	fInfo: PostType[];
};

const FeedCardMap = ({ fInfo }: FeedCardProps) => {
	if (fInfo.length === 0) {
		return (
			<div className="text-2xl font-bold">
				No qusetion & answers avable at this time.
			</div>
		);
	}

	return (
		<>
			<div className="space-y-5">
				{fInfo.map((item) => {
					return (
						<Card
							key={item.id}
							className="sm:w-full">
							<CardContent className="space-y-3">
								<Button variant={"outline"}>{item.qtype}</Button>
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
