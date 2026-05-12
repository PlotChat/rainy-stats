import { AnimatePresence } from "framer-motion";
import { useWidgetsDataContext } from "../../context/widgets-data-context/WidgetsDataContext";
import WidgetSelector from "../../features/widgets/components/widget-selector/WidgetSelector";
import Widget from "../../features/widgets/components/widget/Widget";
import Dashboard from "../../features/dashboard/Dashboard";
import styles from "./home.module.css";

const Home = () => {
	const { widgets } = useWidgetsDataContext();

	return (
		<div className={styles.home}>
			<WidgetSelector></WidgetSelector>

			<main className={styles.main}>
				<Dashboard variant="grid" gridColumns={12}>
					<AnimatePresence mode="popLayout">
						{widgets.map((w, index) => (
							<Widget key={index} widget={w} widgetIndex={index}></Widget>
						))}
					</AnimatePresence>
				</Dashboard>
			</main>
		</div>
	);
};

export default Home;
