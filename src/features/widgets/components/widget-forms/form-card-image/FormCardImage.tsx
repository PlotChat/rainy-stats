import Button from "../../../../../components/button/Button";
import { clsx } from "../../../../../utils/clsx";
import styles from "./form-card-image.module.css";
import baseStyles from "../widget-forms.module.css";
import Form from "../../../../../components/form/Form";
import type { WidgetFormType } from "../types/widget-form-type";

const FormCardImage = ({
	className = "",
	onSubmit,
	action,
	selectedWidget,
}: WidgetFormType) => {
	const colSpan = selectedWidget?.colSpan || "";
	const rowSpan = selectedWidget?.rowSpan || "";

	const isCardImage = selectedWidget?.type === "CardImage";
	const title = isCardImage ? selectedWidget.attribute.title : "";
	const body = isCardImage ? selectedWidget.attribute.body : "";
	const src = isCardImage ? selectedWidget.attribute.src : "";

	if(selectedWidget &&!isCardImage) throw Error("Selected widget is not of the correct type for FormCardImage");

	return (
		<Form
			onSubmit={onSubmit}
			className={clsx(className, styles.formCardImage, baseStyles.form)}
			action={action}
		>
			<input type="hidden" name="type" defaultValue="CardImage"></input>

			<label htmlFor="title">
				<p>Title</p>
				<input defaultValue={title} type="text" name="title" required></input>
			</label>

			<label htmlFor="content">
				<p>Content</p>
				<input defaultValue={body} type="text" name="content" required></input>
			</label>

			<label htmlFor="src">
				<p>Image Source</p>
				<input defaultValue={src} type="text" name="src" required></input>
			</label>

			<label htmlFor="rowSpan">
				<p>Length</p>
				<input defaultValue={rowSpan} type="number" name="rowSpan" required></input>
			</label>

			<label htmlFor="colSpan">
				<p>Height</p>
				<input defaultValue={colSpan} type="number" name="colSpan" required></input>
			</label>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default FormCardImage;
