import React, { useState } from "react";
import type { WidgetListType } from "../../../../types/WidgetListType";
import currentWidgetsData from "../../../../data/currentWidgets";
import { getCurrentWidgets } from "../../../../data/getCurrentWidgets";
import { WidgetsDataContext } from "./WidgetsDataContext";

export const WidgetsDataProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [widgets, setWidgets] = useState<WidgetListType>(() =>
		getCurrentWidgets(currentWidgetsData),
	);

	return (
		<WidgetsDataContext.Provider value={{ widgets, setWidgets }}>
			{children}
		</WidgetsDataContext.Provider>
	);
};
