import { createContext, use } from "react";
import type { TempChosenWidgetType, WidgetsSelectorModeType } from "../../../types/widget/WidgetType";

export interface WidgetsUIContextType {
	widgetsMode: WidgetsSelectorModeType;
	setWidgetsMode: React.Dispatch<React.SetStateAction<WidgetsSelectorModeType>>;

	tempChosenWidget: TempChosenWidgetType
	setTempChosenWidget: React.Dispatch<React.SetStateAction<TempChosenWidgetType>>;
}

export const WidgetUIContext = createContext<WidgetsUIContextType | null>(null);

export const useWidgetsUIContext = () => {
	const context = use(WidgetUIContext);

	if(!context) throw new Error("useWidgetsUIContext must be used within a WidgetProvider");

	return context;
}