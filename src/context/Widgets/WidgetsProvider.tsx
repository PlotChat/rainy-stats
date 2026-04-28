import React, { useState } from "react";
import type { WidgetListType } from "../../types/widget/WidgetListType";
import currentWidgetsData from "../../data/currentWidgets";
import { getCurrentWidgets } from "../../data/getCurrentWidgets";
import { WidgetContext } from "./WidgetsContext";

export const WidgetsProvider = ({ children }: { children: React.ReactNode }) => {
    const [widgets, setWidgets] = useState<WidgetListType>(() => 
        getCurrentWidgets(currentWidgetsData)
    );

    return (
        <WidgetContext.Provider value={{ widgets, setWidgets }}>
            {children}
        </WidgetContext.Provider>
    );
};