import type { WidgetType } from "../../../types/widget-type";

const useEditWidget = () => {
	const handleEditOnClick = (widget: WidgetType) => {
		return widget;
	};

	return { handleEditOnClick };
};

export default useEditWidget;
