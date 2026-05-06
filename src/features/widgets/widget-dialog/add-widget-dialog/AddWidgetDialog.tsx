import Dialog from "../../../../components/dialog/Dialog";
import type { DialogProps } from "../../../../components/dialog/Dialog";
import FormCardImage from "../../../../components/form/form-card-image/FormCardImage";
import type { WidgetType } from "../../../../types/widget-type";
import styles from "./add-widget-dialog.module.css";
import useAddWidgetForm from "../../hooks/useAddWidgetForm";

interface AddDialogProps extends DialogProps {
	formError?: string;
	widgetType: NonNullable<WidgetType>["type"];
}

const AddDialog = ({
	widgetType,
	triggerText,
	dialogTitle,
	formError,
	...rest
}: AddDialogProps) => {
	const { isFormOpen, setIsFormOpen, handleAddWidgetForm } = useAddWidgetForm();

	let form: React.ReactNode;

	switch (widgetType) {
		case "CardImage":
			form = <FormCardImage action={handleAddWidgetForm}></FormCardImage>;
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

export default AddDialog;
