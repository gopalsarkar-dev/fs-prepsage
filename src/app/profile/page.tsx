import ActiveButton from "@/components/Feed/ActiveButton";
import currentUserAllPost from "@/components/hooks/currentuser/currentUserAllPost";
import currentUserEasy from "@/components/hooks/currentuser/currentUserEasy";
import currentUserHard from "@/components/hooks/currentuser/currentUserHard";
import currentUserMedium from "@/components/hooks/currentuser/currentUserMedium";

const page = async () => {
	const { cuId } = await currentUserAllPost();
	const { cuEsy } = await currentUserEasy();
	const { cuHard } = await currentUserHard();
	const { cuMedium } = await currentUserMedium();

	return (
		<>
			<ActiveButton
				all={cuId}
				easy={cuEsy}
				hard={cuHard}
				medium={cuMedium}
			/>
		</>
	);
};

export default page;
