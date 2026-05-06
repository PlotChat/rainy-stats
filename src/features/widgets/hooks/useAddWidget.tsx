import type {
	WidgetsDirectionType,
	WidgetType,
} from "../../../types/widget-type";
import { useWidgetsDataContext } from "../../../context/widgets-data-context/WidgetsDataContext";
import { useWidgetsUIContext } from "../../../context/widgets-ui-context/WidgetsUIContext";
import useWidgetInsert from "../widget-selector/hooks/useWidgetInsert";

const useAddWidget = () => {
	const { widgets, setWidgets } = useWidgetsDataContext();
	const { insertWidget } = useWidgetInsert();

	const {
		tempChosenWidget,
		setTempChosenWidget,
		setWidgetFormError,
		setWidgetInsertError,
	} = useWidgetsUIContext();

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

	const addTempChosenWidget = (chosenWidget: WidgetType) => {
		if (chosenWidget) {
			if (widgets.length !== 0) {
				setWidgets((cur) => cur.filter((w) => !w?.isPreview));
				setTempChosenWidget({
					widget: chosenWidget,
					direction: null,
					index: null,
				});
			} else {
				setWidgets([chosenWidget]);
			}
		} else {
			setWidgetInsertError("No chosen widget to insert. Try again.");
		}
	};

	const resetAddProcess = () => {
		setWidgetFormError("");
		setWidgetInsertError("");
		setTempChosenWidget(null);

		setWidgets((cur) => cur.filter((w) => !w?.isPreview));
	};

	return {
		insertWidget,
		addTempChosenWidget,
		handleAddOnClick,
		resetAddProcess,
	};
};

export default useAddWidget;
