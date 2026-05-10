import Dialog from "../../../../components/dialog/Dialog";
import type { DialogProps } from "../../../../components/dialog/Dialog";
import FormCardImage from "../widget-forms/form-card-image/FormCardImage";
import type { WidgetType } from "../../../../types/widget-type";
import styles from "./widget-dialog.module.css";
import useWidgetForm from "../hooks/useWidgetForm";

export type WidgetDialogVariantType = "add" | "edit";

interface WidgetDialogProps extends DialogProps {
	selectedWidget: WidgetType;
	formError?: string;
	widgetDialogType: WidgetDialogVariantType;
	widgetType: NonNullable<WidgetType>["type"];
}

const WidgetDialog = ({
	widgetDialogType,
	widgetType,
	selectedWidget,
	triggerText,
	dialogTitle,
	formError,
	...rest
}: WidgetDialogProps) => {
	const { isFormOpen, setIsFormOpen, handleWidgetForm } = useWidgetForm();

	let form: React.ReactNode;

	switch (widgetType) {
		case "CardImage":
			form = (
				<FormCardImage
					action={(data) =>
						handleWidgetForm({
							selectedWidget: selectedWidget,
							formData: data,
							formAction: widgetDialogType,
						})
					}
				></FormCardImage>
			);
			break;
		default:
			break;
	}

	return (
		<Dialog
			{...rest}
			open={isFormOpen}
			onOpenChange={setIsFormOpen}
			triggerText={triggerText}
			dialogTitle={dialogTitle}
		>
			<div className={styles.formError}>{formError}</div>
			{form}
		</Dialog>
	);
};

export default WidgetDialog;
