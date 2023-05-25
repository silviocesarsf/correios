import React from "react";
import "./styles.css";

interface InputProps {
	type?: string;
	placeholder?: string;
	label?: string;
	select?: boolean;
	children?: React.ReactNode;
	onChange?: React.ChangeEventHandler<
		HTMLInputElement | HTMLSelectElement
	>;
	value?: string;
}

const Textfield = ({
	type,
	placeholder,
	label,
	select,
	children,
	onChange,
	value,
}: InputProps) => {
	return (
		<div className="textfield-container">
			<label htmlFor="">{label}</label>
			{select === true ? (
				<select placeholder={placeholder}>{children}</select>
			) : (
				<input
					onChange={onChange}
					type={type}
					placeholder={placeholder}
					value={value && value}
				/>
			)}
		</div>
	);
};

export default Textfield;
