import { AnimatePresence } from "framer-motion";
import { useWidgetsDataContext } from "../../context/widgets-data-context/WidgetsDataContext";
import WidgetSelector from "../../features/widgets/components/widget-selector/WidgetSelector";
import Widget from "../../features/widgets/components/widget/Widget";
import Dashboard from "../../features/Dashboard/Dashboard";
import styles from "./Home.module.css";

const Home = () => {
	const { widgets } = useWidgetsDataContext();

	return (
		<div className={styles.Home}>
			<main className={styles.main}>
				<WidgetSelector></WidgetSelector>
				<Dashboard
					emptyErrorMsg="There are no items in the dashboard. You can add some, though!"
					variant="grid"
					gridColumns={12}
				>
					{widgets.length > 0
						? widgets.map((w, index) => (
								<AnimatePresence mode="popLayout" key={index}>
									<Widget widget={w} widgetIndex={index}></Widget>
								</AnimatePresence>
							))
						: null}
				</Dashboard>
			</main>
		</div>
	);
};

export default Home;
