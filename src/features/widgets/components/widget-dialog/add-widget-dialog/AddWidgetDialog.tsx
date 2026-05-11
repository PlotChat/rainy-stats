import { WIDGET_REGISTRY } from "../../../config/widget-registry";
import type { WidgetType } from "../../../../../types/widget-type";
import useAddWidgetForm from "../hooks/useAddWidgetForm";
import Dialog, {
	type DialogProps,
} from "../../../../../components/dialog/Dialog";
import styles from "./add-widget-dialog.module.css";

interface AddWidgetDialogProps extends DialogProps {
	formError?: string;
	widgetTypeName: NonNullable<WidgetType>["type"];
}

const AddWidgetDialog = ({
	triggerText,
	dialogTitle,
	formError,
	widgetTypeName,
	...rest
}: AddWidgetDialogProps) => {
	const { isFormOpen, setIsFormOpen, handleAddWidgetForm } = useAddWidgetForm();

	const config = WIDGET_REGISTRY[widgetTypeName];
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
			<WidgetFormComponent onSubmit={(formData: FormData) => handleAddWidgetForm(formData)} />
		</Dialog>
	);
};

export default AddWidgetDialog;
