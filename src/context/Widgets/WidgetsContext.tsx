import { createContext, use } from "react";
import type { WidgetListType } from "../../types/widget/WidgetListType";

// 1. The Types
export interface WidgetContextType {
    widgets: WidgetListType;
    setWidgets: React.Dispatch<React.SetStateAction<WidgetListType>>;
}

// 2. The Context Object
export const WidgetContext = createContext<WidgetContextType | null>(null);

// 3. The Hook
export const useWidgets = () => {
    const context = use(WidgetContext);
    if (!context) {
        throw new Error("useWidgets must be used within a WidgetProvider");
    }
    return context;
};