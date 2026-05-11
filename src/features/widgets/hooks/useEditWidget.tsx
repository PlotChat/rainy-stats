import { useWidgetsDataContext } from "../../../context/widgets-data-context/WidgetsDataContext";
import type { WidgetType } from "../../../types/widget-type";

const useEditWidget = () => {
	const { setWidgets } = useWidgetsDataContext();

	const applyWidgetEdit = (
		originalWidget: WidgetType,
		newWidget: WidgetType,
	) => {
		if(!originalWidget || !newWidget){
			throw Error("applyWidgetEdit must accept existing originalWidget and newWidget");
		}

		if(originalWidget.type !== newWidget.type){
			throw Error("applyWidgetEdit must accept originalWidget and newWidget to be of the same type");
		}

		setWidgets((prev) => 
            prev.map((w) => w === originalWidget ? newWidget : w)
        );
	};

	return { applyWidgetEdit };
};

export default useEditWidget;
