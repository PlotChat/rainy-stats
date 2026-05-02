import { useState } from "react";
import { useWidgetsDataContext } from "../../context/Widgets/WidgetsDataContext.tsx/WidgetsDataContext";
import type {
	WidgetsDirectionType,
	WidgetType,
} from "../../types/widget/WidgetType";

const useWidgetInsert = () => {
	const { setWidgets } = useWidgetsDataContext();
	const [insertErrorMsg, setInsertErrorMsg] = useState<string>("");

	const insertWidget = (
		widget: WidgetType,
		uiIndex?: number,
		direction?: WidgetsDirectionType,
	) => {
		if (uiIndex === undefined || direction === undefined) {
			setInsertErrorMsg("No chosen place to insert widget. Choose a place.");
			return false;
		}
		setWidgets((cur) => {
			const cleanWidgets = cur.filter((w) => !w?.isPreview);

			// Because the UI index included the ghost widget, if the ghost
			// was sitting *before* our target, our target just shifted left by 1
			let actualIndex = uiIndex;
			const ghostIndex = cur.findIndex((w) => w?.isPreview);

			if (ghostIndex !== -1 && ghostIndex < uiIndex) {
				actualIndex = uiIndex - 1;
			}

			// If clicking left, insert exactly at the actual index.
			// If clicking right, insert right after the actual index.
			const insertPosition =
				direction === "left" ? actualIndex : actualIndex + 1;

			const before = cleanWidgets.slice(0, insertPosition);
			const after = cleanWidgets.slice(insertPosition);

			return [...before, widget, ...after];
		});

		return true;
	};

	return { insertErrorMsg, insertWidget, setInsertErrorMsg };
};

export default useWidgetInsert;
