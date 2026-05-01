import React, { useState } from "react";
import { WidgetUIContext } from "./WidgetsUIContext";
import type { WidgetsModeType } from "../../../types/widget/WidgetType";

export const WidgetsUIProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [widgetsMode, setWidgetsMode] = useState<WidgetsModeType>("view");

	return (
		<WidgetUIContext.Provider value={{ widgetsMode, setWidgetsMode }}>
			{children}
		</WidgetUIContext.Provider>
	);
};
