import React from "react";
import { clsx } from "../../utils/clsx";
import styles from "./form.module.css";

export interface FormProps extends Omit<React.ComponentProps<"form">, "onSubmit" | "action"> {
	action?: (formData: FormData) => void;
	onSubmit?: (formData: FormData) => void;
}

const Form = ({ className = "", action, onSubmit, ...rest }: FormProps) => {
	// Intercept the native DOM event
	const handleNativeSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		if (onSubmit) {
			e.preventDefault();
			const formData = new FormData(e.currentTarget);
			onSubmit(formData);
		}
	};
	
	return (
		<form
			{...rest}
			className={clsx(className, styles.form)}
			action={action}
			onSubmit={handleNativeSubmit}
		></form>
	);
};

export default Form;
