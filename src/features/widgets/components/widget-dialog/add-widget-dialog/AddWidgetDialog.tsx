import Dialog from "../../../../../components/dialog/Dialog";
import type { DialogProps } from "../../../../../components/dialog/Dialog";
import type { WidgetType } from "../../../../../types/widget-type";
import styles from "./add-widget-dialog.module.css";
import useAddWidgetForm from "../../../hooks/forms-hooks/useAddWidgetForm";
import WidgetFormRenderer from "../../widget-forms/WidgetFormRenderer";

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
	const { isFormOpen, setIsFormOpen } = useAddWidgetForm();
	const form = <WidgetFormRenderer type={widgetType}></WidgetFormRenderer>;

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
