import { createContext, use } from "react";
import type { WidgetListType } from "../../types/WidgetListType";

export interface WidgetsDataContextType {
	widgets: WidgetListType;
	setWidgets: React.Dispatch<React.SetStateAction<WidgetListType>>;
}

export const WidgetsDataContext = createContext<WidgetsDataContextType | null>(
	null,
);

export const useWidgetsDataContext = () => {
	const context = use(WidgetsDataContext);

	if (!context)
		throw new Error(
			"useWidgetsDataContext must be used within a WidgetProvider",
		);

	return context;
};
