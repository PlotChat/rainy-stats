import { useState } from "react";
import type { WidgetType } from "../types/widget/WidgetType";

const useAddWidget = () => {
	const [tempWidget, setTempWidget] = useState<WidgetType>();
	const [errorMsg, setErrorMsg] = useState<string>("");

	const handleAddWidget = (formData: FormData) => {
		const data = Object.fromEntries(formData);
		const { type } = data;

		let newWidget: WidgetType;

		if (type === null) {
			setErrorMsg("Error when choosing widget type.");
			return;
		}

		if (type === "CardImage") {
			const title = data.title as string;
			const content = data.content as string;
			const src = data.src as string;
			const alt = (data.alt as string) || src;

			const colSpan = Number(data.colSpan);
			const rowSpan = Number(data.rowSpan);

			if (isNaN(colSpan) || isNaN(rowSpan)) {
				setErrorMsg("Columns and rows must be valid numbers.");
				return;
			}

			newWidget = {
				type: "CardImage", 
				colSpan,
				rowSpan,
				attribute: { title, content, src, alt },
                isPreview: false,
			};

		} else {
			setErrorMsg("This widget type does not exist.");
			return;
		}

        setErrorMsg("");
		setTempWidget(newWidget);
	};

	return { errorMsg, tempWidget, handleAddWidget };
};

export default useAddWidget;
