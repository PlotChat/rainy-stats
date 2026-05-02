import useWidgetInsert from "./useWidgetInsert";
import useWidgetForm from "./useWidgetForm";
import type { WidgetsDirectionType } from "../../types/widget/WidgetType";
import { useWidgetsDataContext } from "../../context/Widgets/WidgetsDataContext.tsx/WidgetsDataContext";
import { useWidgetsUIContext } from "../../context/Widgets/WidgetsUIContext.tsx/WidgetsUIContext";

const useAddWidget = () => {
	const { insertErrorMsg, setInsertErrorMsg, insertWidget } = useWidgetInsert();
	const { formErrorMsg, setFormErrorMsg, handleForm } = useWidgetForm();
	const { setWidgets } = useWidgetsDataContext();

	const { tempChosenWidget, setTempChosenWidget } = useWidgetsUIContext();

	const submitWidgetForm = (formData: FormData) => {
		const parsedWidget = handleForm(formData);

		if (parsedWidget) {
			setWidgets((cur) => cur.filter((w) => !w?.isPreview));
			setTempChosenWidget({ widget: parsedWidget });
		}
	};

	const widgetsEdgesOnClick = (
		widgetIndex: number,
		direction: WidgetsDirectionType,
	) => {
		if (!tempChosenWidget) return;

		setTempChosenWidget((prev) => {
			if (!prev) return prev;
			return { ...prev, index: widgetIndex, direction: direction };
		});

		insertWidget(tempChosenWidget.widget, widgetIndex, direction);
	};

	const resetAddProcess = () => {
		setFormErrorMsg("");
		setInsertErrorMsg("");
		setTempChosenWidget(undefined);

		setWidgets((cur) => cur.filter((w) => !w?.isPreview));
	};

	return {
		formErrorMsg,
		tempChosenWidget,
		insertErrorMsg,
		insertWidget,
		submitWidgetForm,
		widgetsEdgesOnClick,
		resetAddProcess,
	};
};

export default useAddWidget;
