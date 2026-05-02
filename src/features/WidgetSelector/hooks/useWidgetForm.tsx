import { useWidgetsUIContext } from "../context/WidgetsUIContext.tsx/WidgetsUIContext";

const useWidgetForm = () => {
	const {
		setWidgetFormError,
	} = useWidgetsUIContext();

	const handleWidgetForm = (formData: FormData) => {
		const data = Object.fromEntries(formData);
		const { type } = data;

		if (type === null) {
			setWidgetFormError("Error when choosing widget type.");
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
				setWidgetFormError("Columns and rows must be valid numbers.");
				return;
			}

			setWidgetFormError("");
			return {
				type: "CardImage" as const,
				colSpan,
				rowSpan,
				attribute: { title, content, src, alt },
				isPreview: true,
			};
		} else {
			setWidgetFormError("This widget type does not exist.");
			return;
		}
	};

	return { handleWidgetForm };
};

export default useWidgetForm;
