import { useState } from "react";

const useWidgetForm = () => {
	const [formErrorMsg, setFormErrorMsg] = useState<string>("");

	const handleForm = (formData: FormData) => {
		const data = Object.fromEntries(formData);
		const { type } = data;

		if (type === null) {
			setFormErrorMsg("Error when choosing widget type.");
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
				setFormErrorMsg("Columns and rows must be valid numbers.");
				return;
			}

			setFormErrorMsg("");
			return {
				type: "CardImage" as const,
				colSpan,
				rowSpan,
				attribute: { title, content, src, alt },
				isPreview: true,
			};
		} else {
			setFormErrorMsg("This widget type does not exist.");
			return;
		}
	};

	return { formErrorMsg, handleForm, setFormErrorMsg };
};

export default useWidgetForm;
