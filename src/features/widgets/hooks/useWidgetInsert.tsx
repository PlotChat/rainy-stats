import { useWidgetsDataContext } from "../../../context/widgets-data-context/WidgetsDataContext";
import type {
	WidgetsDirectionType,
	WidgetType,
} from "../../../types/widget-type";
import { useWidgetsUIContext } from "../../../context/widgets-ui-context/WidgetsUIContext";

const useWidgetInsert = () => {
	const { setWidgets } = useWidgetsDataContext();
	const { setWidgetInsertError } = useWidgetsUIContext();

	// Inserts the widget into the widget list with a provided index and direction
	const insertWidget = (
		widget: WidgetType,
		uiIndex?: number,
		direction?: WidgetsDirectionType,
	) => {
		if (uiIndex === undefined || direction === undefined) {
			setWidgetInsertError("No place to insert widget. Choose a place.");
			return false;
		}

		setWidgets((cur) => {
			const insertPosition = direction === "left" ? uiIndex : uiIndex + 1;

            // 1. Split the array exactly where the user clicked
            const before = cur.slice(0, insertPosition);
            const after = cur.slice(insertPosition);
            
            // 2. Scrub ALL old previews out of both halves
            const cleanBefore = before.filter((w) => !w?.isPreview);
            const cleanAfter = after.filter((w) => !w?.isPreview);

            // 3. Sandwich the newly inserted widget safely in the middle
            return [...cleanBefore, widget, ...cleanAfter];
		});

		return true;
	};

	return { insertWidget };
};

export default useWidgetInsert;
