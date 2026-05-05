import { useState } from "react";
import Dialog from "../../../components/dialog/Dialog";
import type { DialogProps } from "../../../components/dialog/Dialog";
import FormCardImage from "../../../components/form/form-card-image/FormCardImage";
import type { WidgetType } from "../../../types/widget-type";
import styles from "./add-widget-dialog.module.css";

interface AddDialogProps extends DialogProps {
	formError?: string;
	widgetType: NonNullable<WidgetType>["type"];
	formAction?: (formData: FormData) => void;
	onSuccess?: () => void;
}

const AddDialog = ({
	widgetType,
	triggerText,
	dialogTitle,
	formError,
	formAction,
	onSuccess,
	...rest
}: AddDialogProps) => {
	const [isOpen, setIsOpen] = useState(false);

	let form: React.ReactNode;

	const handleFormAction = (formData: FormData) => {
		formAction?.(formData);
		onSuccess?.();
		setIsOpen(false);
	};

	switch (widgetType) {
		case "CardImage":
			form = <FormCardImage action={handleFormAction}></FormCardImage>;
			break;
		default:
			break;
	}

	return (
		<Dialog
			{...rest}
			open={isOpen}
			onOpenChange={setIsOpen}
			triggerText={triggerText}
			dialogTitle={dialogTitle}
		>
			<div className={styles.formError}>{formError}</div>
			{form}
		</Dialog>
	);
};

export default AddDialog;
