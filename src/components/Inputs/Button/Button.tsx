import "./styles.css";

interface ButtonProps {
	children: string;
}

//Prevent default reload

const handleSubmit = (e: any) => {
	e.preventDefault();
	console.log("Query sent! 🚀");
};

const Button = ({ children }: ButtonProps) => {
	return (
		<button
			onClick={handleSubmit}
			type="submit"
			className="btn-send"
		>
			{children}
		</button>
	);
};

export default Button;
