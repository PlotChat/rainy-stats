import { createContext, use } from "react";
import type {
	TempChosenWidgetType,
	WidgetsSelectorModeType,
} from "../../../../types/WidgetType";

export interface WidgetsUIContextType {
	widgetsMode: WidgetsSelectorModeType;
	setWidgetsMode: React.Dispatch<React.SetStateAction<WidgetsSelectorModeType>>;

	tempChosenWidget: TempChosenWidgetType;
	setTempChosenWidget: React.Dispatch<
		React.SetStateAction<TempChosenWidgetType>
	>;

	widgetInsertError: string;
	setWidgetInsertError: React.Dispatch<React.SetStateAction<string>>;

	widgetFormError: string;
	setWidgetFormError: React.Dispatch<React.SetStateAction<string>>;
}

export const WidgetUIContext = createContext<WidgetsUIContextType | null>(null);

export const useWidgetsUIContext = () => {
	const context = use(WidgetUIContext);

	if (!context)
		throw new Error("useWidgetsUIContext must be used within a WidgetProvider");

	return context;
};
