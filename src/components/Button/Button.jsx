
const Button = ({ data, bg, textColor }) => {
    
    return (
		<button
			className={`${bg} ${textColor} py-[6px] px-5 rounded-md hover-effect`}
		>
			{data}
		</button>
	);
};

export default Button;