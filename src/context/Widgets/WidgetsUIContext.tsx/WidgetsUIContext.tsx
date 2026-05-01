import { createContext, use } from "react";
import type { WidgetsModeType } from "../../../types/widget/WidgetType";

export interface WidgetsUIContextType {
	widgetsMode: WidgetsModeType;
	setWidgetsMode: React.Dispatch<React.SetStateAction<WidgetsModeType>>;
}

export const WidgetUIContext = createContext<WidgetsUIContextType | null>(null);

export const useWidgetsUIContext = () => {
	const context = use(WidgetUIContext);

	if(!context) throw new Error("useWidgetsUIContext must be used within a WidgetProvider");

	return context;
}