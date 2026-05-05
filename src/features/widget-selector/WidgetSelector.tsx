import styles from "./widget-selector.module.css";
import { clsx } from "../../utils/clsx";
import Button from "../../components/button/Button";
import { useWidgetsUIContext } from "./context/widgets-ui-context/WidgetsUIContext";
import AddDialog from "../widget-dialog/add-widget-dialog/AddWidgetDialog";
import useAddWidget from "./hooks/useAddWidget";

interface WidgetSelectorProps extends Omit<
	React.ComponentProps<"div">,
	"className"
> {
	className?: string;
	children?: React.ReactNode;
}

const WidgetSelector = ({
	className = "",
	children,
	...rest
}: WidgetSelectorProps) => {
	const {
		widgetsMode,
		setWidgetsMode,
		tempChosenWidget,
		widgetInsertError,
		widgetFormError,
	} = useWidgetsUIContext();

	const { submitWidgetForm, insertWidget, resetAddProcess } = useAddWidget();

	let editNotification;

	if (widgetFormError) {
		editNotification = widgetFormError;
	} else if (widgetInsertError) {
		editNotification = widgetInsertError;
	} else if (!tempChosenWidget) {
		editNotification = "Choose a widget";
	} else if (tempChosenWidget) {
		editNotification = "Now choose where to place it";
	}

	let modeBtnContent;
	if (widgetsMode === "edit") {
		modeBtnContent = "Apply";
	} else if (widgetsMode === "view") {
		modeBtnContent = "Edit";
	}

	const handleApplyChanges = () => {
		if (!tempChosenWidget) return;

		const { widget, index, direction } = tempChosenWidget;
		if (!widget || !index || !direction) return;

		const newWidget = { ...widget, isPreview: false };

		const success = insertWidget(newWidget, index, direction);

		return success;
	};

	const handleWidgetsModeChange = () => {
		if (widgetsMode === "edit") {
			const success = handleApplyChanges();
			if (success) {
				setWidgetsMode("view");
			}
			resetAddProcess();
		} else if (widgetsMode === "view") {
			setWidgetsMode("edit");
		}
	};

	const cancelEdit = () => {
		resetAddProcess();
		setWidgetsMode("view");
	};

	return (
		<div className={clsx(styles.WidgetSelector, className)} {...rest}>
			<div className={styles.btnsWrapper}>
				<Button
					onClick={handleWidgetsModeChange}
					className={clsx(styles.widgetsModeBtn)}
					intent="primary"
				>
					{modeBtnContent}
				</Button>
				{widgetsMode === "edit" && <Button intent="primary" onClick={cancelEdit}>Cancel</Button>}

			</div>
			<div className={clsx(styles.editNotification)}>
				{widgetsMode === "edit" && editNotification}
			</div>

			{widgetsMode === "edit" && (
				<AddDialog
					triggerText="Card"
					dialogTitle="Add Card"
					formAction={submitWidgetForm}
					formError={widgetFormError}
					widgetType="CardImage"
				></AddDialog>
			)}

			<div className={styles.others}>{children}</div>
		</div>
	);
};

export default WidgetSelector;
