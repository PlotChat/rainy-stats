import type { FormProps } from "../../../../components/form/Form";
import Button from "../../../../components/button/Button";
import { clsx } from "../../../../utils/clsx";
import styles from "./form-card-image.module.css";
import Form from "../../../../components/form/Form";

const FormCardImage = ({ className = "", onSubmit, action }: FormProps) => {
	return (
		<Form
			onSubmit={onSubmit}
			className={clsx(className, styles.formCardImage)}
			action={action}
		>
			<input type="hidden" name="type" value="CardImage"></input>

			<label htmlFor="title">
				<p>Title</p>
				<input type="text" name="title" required></input>
			</label>

			<label htmlFor="content">
				<p>Content</p>
				<input type="text" name="content" required></input>
			</label>

			<label htmlFor="src">
				<p>Image Source</p>
				<input type="text" name="src" required></input>
			</label>

			<label htmlFor="rowSpan">
				<p>Length</p>
				<input type="number" name="rowSpan" required></input>
			</label>

			<label htmlFor="colSpan">
				<p>Height</p>
				<input type="number" name="colSpan" required></input>
			</label>

			<Button type="submit">Start Adding Card</Button>
		</Form>
	);
};

export default FormCardImage;
