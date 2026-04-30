import React from "react";
import { clsx } from "../../utils/clsx";
import styles from './Form.module.css';

export interface FormProps extends React.ComponentProps<"form"> {
	action?: (formData: FormData) => void;
}

const Form = ({ className = "", action, ...rest }: FormProps) => {
	return (
		<form {...rest} className={clsx(className, styles.form)} action={action}>
		</form>
	);
};

export default Form;
