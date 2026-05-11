import { useState } from "react";
import { useWidgetsUIContext } from "../../../../../context/widgets-ui-context/WidgetsUIContext";
import type { WidgetType } from "../../../../../types/widget-type";
import useEditWidget from "../../../hooks/useEditWidget";

const useEditWidgetForm = () => {
	const { setWidgetFormError } = useWidgetsUIContext();
	const { applyWidgetEdit } = useEditWidget();
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleEditWidgetForm = (
		originalWidget: WidgetType,
		formData: FormData,
	) => {
		const data = Object.fromEntries(formData);
		const { type, colSpan, rowSpan, ...attributes } = data;

		if (!type) {
			setWidgetFormError("Error when choosing widget type.");
			return;
		}

		// construct the new widget, overriding colSpan and rowSpan as Numbers
		const newWidget = {
			type,
			colSpan: Number(colSpan),
			rowSpan: Number(rowSpan),
			attribute: attributes,
			isPreview: false,
		} as WidgetType;

		applyWidgetEdit(originalWidget, newWidget);
		setIsFormOpen(false);
	};

	return { isFormOpen, setIsFormOpen, handleEditWidgetForm };
};

export default useEditWidgetForm;
