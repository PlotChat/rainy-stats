import { WIDGET_REGISTRY } from "../../../config/widget-registry";
import type { WidgetType } from "../../../../../types/widget-type";
import Dialog, {
	type DialogProps,
} from "../../../../../components/dialog/Dialog";
import styles from "./edit-widget-dialog.module.css";
import useEditWidgetForm from "../hooks/useEditWidgetForm";

interface AddWidgetDialogProps extends DialogProps {
	selectedWidget: WidgetType,
	isFormOpen: boolean,
	setIsFormOpen: (value: boolean) => void;
	formError?: string;
}

const EditWidgetDialog = ({
	isFormOpen,
	setIsFormOpen,
	triggerText,
	dialogTitle,
	formError,
	selectedWidget,
	...rest
}: AddWidgetDialogProps) => {
	const { handleEditWidgetForm } = useEditWidgetForm();

	if(!selectedWidget) throw new Error("EditWidgetDialog must have a selected widget");

	const config = WIDGET_REGISTRY[selectedWidget.type];
	const WidgetFormComponent = config.formComponent;

	return (
		<Dialog
			{...rest}
			open={isFormOpen}
			onOpenChange={setIsFormOpen}
			triggerText={triggerText}
			dialogTitle={dialogTitle}
		>
			<div className={styles.formError}>{formError}</div>
			<WidgetFormComponent selectedWidget={selectedWidget} onSubmit={(formData: FormData) => handleEditWidgetForm(selectedWidget, formData)} />
		</Dialog>
	);
};

export default EditWidgetDialog;
