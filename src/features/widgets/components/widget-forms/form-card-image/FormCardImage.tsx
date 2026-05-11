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
	const isCardImage = selectedWidget?.type === "CardImage";
	if (selectedWidget && !isCardImage)
		throw Error("Selected widget is not of the correct type for FormCardImage");

	const variant = selectedWidget?.attribute.variant || "";
	const title = selectedWidget?.attribute.title || "";
	const body = selectedWidget?.attribute.body || "";
	const src = selectedWidget?.attribute.src || "";

	const colSpan = selectedWidget?.colSpan || "";
	const rowSpan = selectedWidget?.rowSpan || "";

	const activeVariant = variant || "row";

	return (
		<Form
			onSubmit={onSubmit}
			className={clsx(className, styles.formCardImage, baseStyles.form)}
			action={action}
		>
			<input type="hidden" name="type" defaultValue="CardImage"></input>

			<label htmlFor="variant">
				<p>Variant</p>
				<label htmlFor="row">
					Row
					<input
						defaultChecked={activeVariant === "row"}
						value="row"
						id="row"
						type="radio"
						name="variant"
						required
					></input>
				</label>
				<label htmlFor="column">
					Column
					<input
						defaultChecked={activeVariant === "column"}
						value="column"
						id="column"
						type="radio"
						name="variant"
						required
					></input>
				</label>
			</label>

			<label htmlFor="title">
				<p>Title</p>
				<input defaultValue={title} type="text" name="title" required></input>
			</label>

			<label htmlFor="body">
				<p>Body</p>
				<input defaultValue={body} type="text" name="body" required></input>
			</label>

			<label htmlFor="src">
				<p>Image Source</p>
				<input defaultValue={src} type="text" name="src" required></input>
			</label>

			<label htmlFor="rowSpan">
				<p>Length</p>
				<input
					defaultValue={rowSpan}
					type="number"
					name="rowSpan"
					required
				></input>
			</label>

			<label htmlFor="colSpan">
				<p>Height</p>
				<input
					defaultValue={colSpan}
					type="number"
					name="colSpan"
					required
				></input>
			</label>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default FormCardImage;
