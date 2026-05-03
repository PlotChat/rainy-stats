import type { WidgetsDirectionType } from "../../../types/WidgetType";
import { useWidgetsDataContext } from "../context/WidgetsDataContext.tsx/WidgetsDataContext";
import { useWidgetsUIContext } from "../context/WidgetsUIContext.tsx/WidgetsUIContext";
import useWidgetForm from "./useWidgetForm";
import useWidgetInsert from "./useWidgetInsert";

const useAddWidget = () => {
	const { setWidgets } = useWidgetsDataContext();
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
			setWidgets((cur) => cur.filter((w) => !w?.isPreview));
			setTempChosenWidget({ widget: parsedWidget });
		}
	};

	const widgetsEdgesOnClick = (
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
		setTempChosenWidget(undefined);

		setWidgets((cur) => cur.filter((w) => !w?.isPreview));
	};

	return {
		insertWidget,
		submitWidgetForm,
		widgetsEdgesOnClick,
		resetAddProcess,
	};
};

export default useAddWidget;
