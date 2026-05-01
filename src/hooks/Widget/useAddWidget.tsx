import useWidgetInsert from "./useWidgetInsert";
import useWidgetForm from "./useWidgetForm";
import type { WidgetType } from "../../types/widget/WidgetType";

const useAddWidget = () => {
	const { insertWidget } = useWidgetInsert();
	const { errorMsg, tempWidget, handleForm } = useWidgetForm();

	const widgetsEdgesOnClick = (
		e: React.MouseEvent,
		widgetIndex: number,
		direction: "left" | "right",
	) => {
		e.preventDefault();

		if (!tempWidget) return;

		const previewWidget: WidgetType = { ...tempWidget, isPreview: true };
		insertWidget(previewWidget, widgetIndex, direction);
	};

	return {
		errorMsg,
		tempWidget,
		insertWidget,
		widgetsEdgesOnClick,
		handleForm,
	};
};

export default useAddWidget;
