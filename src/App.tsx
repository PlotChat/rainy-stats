import "./app.module.css";
import appStyles from "./app.module.css";
import mainStyles from "./main.module.css";
import Dashboard from "./features/Dashboard/Dashboard";
import { useWidgetsDataContext } from "./features/WidgetSelector/context/WidgetsDataContext.tsx/WidgetsDataContext";
import Widget from "./components/widget/Widget";
import useAddWidget from "./features/WidgetSelector/hooks/useAddWidget";
import { AnimatePresence } from "framer-motion";
import WidgetSelector from "./features/WidgetSelector/WidgetSelector";

const App = () => {
	const { widgets } = useWidgetsDataContext();
	const { widgetsEdgesOnClick } = useAddWidget();

	return (
		<div className={appStyles.app}>
			<WidgetSelector></WidgetSelector>

			<main className={mainStyles.main}>
				<Dashboard variant="grid" gridColumns={8}>
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
