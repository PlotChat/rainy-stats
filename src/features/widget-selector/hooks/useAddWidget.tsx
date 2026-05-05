import type { WidgetsDirectionType } from "../../../types/widget-type";
import { useWidgetsDataContext } from "../context/widgets-data-context/WidgetsDataContext";
import { useWidgetsUIContext } from "../context/widgets-ui-context/WidgetsUIContext";
import useWidgetForm from "./useWidgetForm";
import useWidgetInsert from "./useWidgetInsert";

const useAddWidget = () => {
	const { widgets, setWidgets } = useWidgetsDataContext();
	const { handleWidgetForm } = useWidgetForm();
	const { insertWidget } = useWidgetInsert();

	const {
		tempChosenWidget,
		setTempChosenWidget,
		setWidgetFormError,
		setWidgetInsertError,
	} = useWidgetsUIContext();

	const submitWidgetForm = (formData: FormData) => {
		const parsedWidget = handleWidgetForm(formData);

		if (parsedWidget) {
			if (widgets.length !== 0) {
				setWidgets((cur) => cur.filter((w) => !w?.isPreview));
				setTempChosenWidget({
					widget: parsedWidget,
					direction: null,
					index: null,
				});
			} else {
				setWidgets([parsedWidget]);
			}
		}
	};

	const handleAddOnClick = (
		widgetIndex: number,
		direction: WidgetsDirectionType,
	) => {
		if (!tempChosenWidget) {
			setWidgetInsertError("Choose a widget before you can insert");
			return;
		}

		setTempChosenWidget((prev) => {
			if (!prev) return prev;
			return { ...prev, index: widgetIndex, direction: direction };
		});

		insertWidget(tempChosenWidget.widget, widgetIndex, direction);
	};

	const resetAddProcess = () => {
		setWidgetFormError("");
		setWidgetInsertError("");
		setTempChosenWidget(null);

		setWidgets((cur) => cur.filter((w) => !w?.isPreview));
	};

	return {
		insertWidget,
		submitWidgetForm,
		handleAddOnClick,
		resetAddProcess,
	};
};

export default useAddWidget;
