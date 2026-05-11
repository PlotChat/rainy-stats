import type { FormProps } from "../../../../../components/form/Form";
import Button from "../../../../../components/button/Button";
import { clsx } from "../../../../../utils/clsx";
import styles from "./form-card.module.css";
import baseStyles from "../widget-forms.module.css";
import Form from "../../../../../components/form/Form";

const FormCard = ({ className = "", onSubmit, action }: FormProps) => {
	return (
		<Form
			onSubmit={onSubmit}
			className={clsx(className, styles.formCardImage, baseStyles.form)}
			action={action}
		>
			<input type="hidden" name="type" value="Card"></input>

			<label htmlFor="title">
				<p>Title</p>
				<input type="text" name="title" required></input>
			</label>

			<label htmlFor="content">
				<p>Content</p>
				<input type="text" name="content" required></input>
			</label>

			<label htmlFor="rowSpan">
				<p>Length</p>
				<input type="number" name="rowSpan" required></input>
			</label>

			<label htmlFor="colSpan">
				<p>Height</p>
				<input type="number" name="colSpan" required></input>
			</label>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default FormCard;
