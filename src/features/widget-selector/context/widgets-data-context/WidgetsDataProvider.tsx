import React, { useState } from "react";
import type { WidgetListType } from "../../../../types/widget-list-type";
import currentWidgetsData from "../../../../data/current-widgets";
import { getCurrentWidgets } from "../../../../data/get-current-widgets";
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
