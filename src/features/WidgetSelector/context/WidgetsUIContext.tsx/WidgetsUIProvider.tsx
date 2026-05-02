import React, { useState } from "react";
import { WidgetUIContext } from "./WidgetsUIContext";
import type {
	TempChosenWidgetType,
	WidgetsSelectorModeType,
} from "../../types/WidgetType";

export const WidgetsUIProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [widgetsMode, setWidgetsMode] =
		useState<WidgetsSelectorModeType>("view");
	const [tempChosenWidget, setTempChosenWidget] =
		useState<TempChosenWidgetType>({});
	const [widgetFormError, setWidgetFormError] = useState("");
	const [widgetInsertError, setWidgetInsertError] = useState("");

	return (
		<WidgetUIContext.Provider
			value={{
				widgetsMode,
				setWidgetsMode,

				tempChosenWidget,
				setTempChosenWidget,

				widgetFormError,
				setWidgetFormError,

				widgetInsertError,
				setWidgetInsertError,
			}}
		>
			{children}
		</WidgetUIContext.Provider>
	);
};
