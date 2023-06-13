
const StatusBtn = ({status}) => {
	return (
		<div
			className={`${
				status === "Close"
					? "text-light-green-color border-light-green-color  hover:bg-light-green-color"
					: status === "Answered"
					? "text-primary-color border-primary-color hover:bg-primary-color  "
					: status === "In Progress"
					? "text-danger-color border-danger-color hover:bg-danger-color"
					: "text-light-green-color border-light-green-color hover:bg-light-green-color "
			} hover:text-white-color border  text-center py-[2px] px-2 rounded-md mx-auto hover-effect`}
		>
			{status}
		</div>
	);
};

export default StatusBtn;