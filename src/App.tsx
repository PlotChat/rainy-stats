import "./app.module.css";
import appStyles from "./app.module.css";
import mainStyles from "./main.module.css";
import Dashboard from "./features/Dashboard/Dashboard";
import { useWidgets } from "./context/Widgets/WidgetsContext";
import Widget from "./components/widget/Widget";
import { useState } from "react";
import useAddWidget from "./hooks/useAddWidget";
import AddDialog from "./features/AddDialog/AddDialog";
import type { WidgetType } from "./types/widget/WidgetType";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const { widgets, setWidgets } = useWidgets();
	const [widgetsMode, setWidgetsMode] = useState<string>("default");
	const { errorMsg, tempWidget, handleAddWidget } = useAddWidget();

	const insertWidget = (
		widget: WidgetType,
		uiIndex: number,
		direction: "left" | "right",
	) => {
		setWidgets((cur) => {
			const cleanWidgets = cur.filter((w) => !w?.isPreview);

			// Because the UI index included the ghost widget, if the ghost
			// was sitting *before* our target, our target just shifted left by 1
			let actualIndex = uiIndex;
			const ghostIndex = cur.findIndex((w) => w?.isPreview);

			if (ghostIndex !== -1 && ghostIndex < uiIndex) {
				actualIndex = uiIndex - 1;
			}

			// If clicking left, insert exactly at the actual index.
			// If clicking right, insert right after the actual index.
			const insertPosition =
				direction === "left" ? actualIndex : actualIndex + 1;

			const before = cleanWidgets.slice(0, insertPosition);
			const after = cleanWidgets.slice(insertPosition);

			return [...before, widget, ...after];
		});
	};

	const widgetsEdgesOnClick = (
		e: React.MouseEvent,
		widgetIndex: number,
		direction: "left" | "right",
	) => {
		e.preventDefault();
		if (widgetsMode !== "edit" || !tempWidget) return;
		insertWidget(tempWidget, widgetIndex, direction);
		setWidgetsMode("default");
	};

	const widgetsEdgesOnHover = (
		e: React.MouseEvent,
		widgetIndex: number,
		direction: "left" | "right",
	) => {
		e.preventDefault();
		if (widgetsMode !== "edit" || !tempWidget) return;

		const previewWidget = { ...tempWidget, isPreview: true };
		insertWidget(previewWidget, widgetIndex, direction);
	};

	return (
		<div className={appStyles.app}>
			{errorMsg && <div className="errorMessage">{errorMsg}</div>}
			{widgetsMode && <div className="widgetsMode">{widgetsMode}</div>}

			<AddDialog
				formAction={handleAddWidget}
				onSuccess={() => {
					setWidgets((cur) => {
						const cleanWidgets = cur.filter((w) => !w?.isPreview);
						return [...cleanWidgets];
					});

					setWidgetsMode("edit");
				}}
				widgetType="CardImage"
			></AddDialog>

			<main className={mainStyles.main}>
				<Dashboard variant="grid" gridCols={8}>
					<AnimatePresence mode="popLayout">
						{widgets.map((w, index) => (
							<Widget
								key={index}
								widget={w}
								widgetIndex={index}
								onClickEdges={widgetsEdgesOnClick}
								onHoverEdges={widgetsEdgesOnHover}
							></Widget>
						))}
					</AnimatePresence>
				</Dashboard>
			</main>
		</div>
	);
};

export default App;
