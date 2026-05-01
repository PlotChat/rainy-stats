import "./app.module.css";
import appStyles from "./app.module.css";
import mainStyles from "./main.module.css";
import Dashboard from "./features/Dashboard/Dashboard";
import { useWidgetsDataContext } from "./context/Widgets/WidgetsDataContext.tsx/WidgetsDataContext";
import Widget from "./components/widget/Widget";
import useAddWidget from "./hooks/Widget/useAddWidget";
import AddDialog from "./features/AddDialog/AddDialog";
import { AnimatePresence } from "framer-motion";
import { useWidgetsUIContext } from "./context/Widgets/WidgetsUIContext.tsx/WidgetsUIContext";

const App = () => {
	const { widgetsMode, setWidgetsMode } = useWidgetsUIContext();
	const { widgets, setWidgets } = useWidgetsDataContext();

	const {
		errorMsg,
		widgetsEdgesOnClick,
		handleForm,
	} = useAddWidget();

	return (
		<div className={appStyles.app}>
			{errorMsg && <div className="errorMessage">{errorMsg}</div>}
			{widgetsMode && <div className="widgetsMode">{widgetsMode}</div>}

			<AddDialog
				formAction={handleForm}
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
							></Widget>
						))}
					</AnimatePresence>
				</Dashboard>
			</main>
		</div>
	);
};

export default App;
