import type { WidgetType } from "../../../types/widget-type";
import { useWidgetsDataContext } from "../context/widgets-data-context/WidgetsDataContext";
import { useWidgetsUIContext } from "../context/widgets-ui-context/WidgetsUIContext";

const useRemoveWidget = () => {
	const { widgets, setWidgets } = useWidgetsDataContext();
	const { setWidgetEditError } = useWidgetsUIContext();

	const handleRemoveOnClick = (widget: WidgetType) => {
		removeWidget(widget);
	};

	const removeWidget = (widget: WidgetType) => {
		if (widget === undefined || widget === null) {
			setWidgetEditError("Cannot delete a widget that doesn't exist");
			return;
		}

		const found = widgets.find((w) => w === widget);
		setWidgets((prev) => prev.filter((w) => w !== found));

		return found;
	};

	return { handleRemoveOnClick, removeWidget };
};

export default useRemoveWidget;
