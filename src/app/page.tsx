import ActiveButton from "@/components/Feed/ActiveButton";
import getAllEasyQuestion from "@/components/hooks/post/getAllEasyQuestion";
import getAllHardQusetion from "@/components/hooks/post/getAllHardQusetion";
import getAllMediumQuestion from "@/components/hooks/post/getAllMediumQuestion";
import getAllPost from "@/components/hooks/post/getAllPost";

const page = async () => {
	const { allPost } = await getAllPost();
	const { allEasyQuestion } = await getAllEasyQuestion();
	const { allMediumQuestion } = await getAllMediumQuestion();
	const { allHardQusetion } = await getAllHardQusetion();

	return (
		<>
			<ActiveButton
				all={allPost}
				medium={allMediumQuestion}
				easy={allEasyQuestion}
				hard={allHardQusetion}
			/>
		</>
	);
};

export default page;
