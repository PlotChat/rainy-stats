import React, { useState } from "react";
import { WidgetUIContext } from "./WidgetsUIContext";
import type { TempChosenWidgetType, WidgetsSelectorModeType } from "../../../types/widget/WidgetType";

export const WidgetsUIProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [widgetsMode, setWidgetsMode] = useState<WidgetsSelectorModeType>("view");
	const [tempChosenWidget, setTempChosenWidget] = useState<TempChosenWidgetType>({});

	return (
		<WidgetUIContext.Provider value={{ widgetsMode, setWidgetsMode, tempChosenWidget, setTempChosenWidget }}>
			{children}
		</WidgetUIContext.Provider>
	);
};
