import React, { useState } from "react";
import { WidgetUIContext } from "./WidgetsUIContext";
import type {
	TempChosenWidgetType,
	WidgetsSelectorModeType,
} from "../../types/widget-type";

export const WidgetsUIProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [widgetsMode, setWidgetsMode] =
		useState<WidgetsSelectorModeType>("view");
	const [tempChosenWidget, setTempChosenWidget] =
		useState<TempChosenWidgetType>(null);
	const [widgetFormError, setWidgetFormError] = useState("");
	const [widgetInsertError, setWidgetInsertError] = useState("");
	const [widgetEditError, setWidgetEditError] = useState("");
	const [widgetDeleteError, setWidgetDeleteError] = useState("");

	return (
		<WidgetUIContext.Provider
			value={{
				widgetsMode,
				setWidgetsMode,

				tempChosenWidget,
				setTempChosenWidget,

				widgetFormError,
				setWidgetFormError,

				widgetEditError,
				setWidgetEditError,

				widgetDeleteError,
				setWidgetDeleteError,

				widgetInsertError,
				setWidgetInsertError,
			}}
		>
			{children}
		</WidgetUIContext.Provider>
	);
};
