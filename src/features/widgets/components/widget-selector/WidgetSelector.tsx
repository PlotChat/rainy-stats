import styles from "./widget-selector.module.css";
import { clsx } from "../../../../utils/clsx";
import Button from "../../../../components/button/Button";
import { useWidgetsUIContext } from "../../../../context/widgets-ui-context/WidgetsUIContext";
import AddDialog from "../widget-dialog/add-widget-dialog/AddWidgetDialog";
import useAddWidget from "../../hooks/useAddWidget";
import { WIDGET_REGISTRY } from "../../config/widget-registry";

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
		setWidgetInsertError,
		widgetFormError,
	} = useWidgetsUIContext();

	const { insertWidget, resetAddProcess, resetErrors } = useAddWidget();

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
		if (!tempChosenWidget) {
			setWidgetInsertError(
				"Cannot apply widgets list changes. Error with the chosen widget.",
			);
			return;
		}

		const { widget, index, direction } = tempChosenWidget;

		if (!widget || index == null || !direction) {
			setWidgetInsertError(
				"Cannot apply widgets list changes. The chosen widget is invalid.",
			);
			return;
		}

		const newWidget = { ...widget, isPreview: false };

		const success = insertWidget(newWidget, index, direction);

		return success;
	};

	const handleWidgetsModeChange = () => {
		if (widgetsMode === "edit") {
			const success = handleApplyChanges();
			if (success) {
				setWidgetsMode("view");
				resetErrors();
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
				{widgetsMode === "edit" && (
					<Button intent="primary" onClick={cancelEdit}>
						Cancel
					</Button>
				)}
			</div>
			<div className={clsx(styles.editNotification)}>
				{widgetsMode === "edit" && editNotification}
			</div>

			{widgetsMode === "edit" && (
				<>
					{(
						Object.keys(WIDGET_REGISTRY) as Array<keyof typeof WIDGET_REGISTRY>
					).map((widgetKey) => {
						const config = WIDGET_REGISTRY[widgetKey];
						return (
							<AddDialog
								key={widgetKey}
								triggerText={config.triggerText}
								dialogTitle={config.dialogTitle}
								widgetTypeName={widgetKey}
							/>
						);
					})}
				</>
			)}

			<div className={styles.others}>{children}</div>
		</div>
	);
};

export default WidgetSelector;
