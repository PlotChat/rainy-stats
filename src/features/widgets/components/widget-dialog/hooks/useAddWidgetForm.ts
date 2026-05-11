import { useState } from "react";
import { useWidgetsUIContext } from "../../../../../context/widgets-ui-context/WidgetsUIContext";
import useAddWidget from "../../../hooks/useAddWidget";
import type { WidgetType } from "../../../../../types/widget-type";

const useAddWidgetForm = () => {
	const { setWidgetFormError } = useWidgetsUIContext();
	const { addTempChosenWidget } = useAddWidget();
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleAddWidgetForm = (formData: FormData) => {
		const data = Object.fromEntries(formData);
		const { type, colSpan, rowSpan, ...attributes } = data;

		if (!type) {
			setWidgetFormError("Error when choosing widget type.");
			setIsFormOpen(false);
			return;
		}

		// construct the new widget, overriding colSpan and rowSpan as Numbers
		const newWidget = {
			type,
			colSpan: Number(colSpan),
			rowSpan: Number(rowSpan),
			isPreview: true,
			attribute: attributes
		} as WidgetType;

		addTempChosenWidget(newWidget);
		setIsFormOpen(false);
	};

	return { isFormOpen, setIsFormOpen, handleAddWidgetForm };
};

export default useAddWidgetForm;
