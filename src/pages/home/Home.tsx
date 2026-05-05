import { AnimatePresence } from "framer-motion";
import { useWidgetsDataContext } from "../../features/WidgetSelector/context/WidgetsDataContext.tsx/WidgetsDataContext";
import WidgetSelector from "../../features/WidgetSelector/WidgetSelector";
import Widget from "../../features/Dashboard/components/widget/Widget";
import Dashboard from "../../features/Dashboard/Dashboard";
import styles from "./Home.module.css";

const Home = () => {
	const { widgets } = useWidgetsDataContext();

	return (
		<div className={styles.home}>
			<WidgetSelector></WidgetSelector>

			<main className={styles.main}>
				<Dashboard variant="grid" gridColumns={8}>
					<AnimatePresence mode="popLayout">
						{widgets.map((w, index) => (
							<Widget
								key={index}
								widget={w}
								widgetIndex={index}
							></Widget>
						))}
					</AnimatePresence>
				</Dashboard>
			</main>
		</div>
	);
};

export default Home;
