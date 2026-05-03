import { AnimatePresence } from "framer-motion";
import { useWidgetsDataContext } from "../../features/WidgetSelector/context/WidgetsDataContext.tsx/WidgetsDataContext";
import useAddWidget from "../../features/WidgetSelector/hooks/useAddWidget";
import WidgetSelector from "../../features/WidgetSelector/WidgetSelector";
import Widget from "../../components/widget/Widget";
import Dashboard from "../../features/Dashboard/Dashboard";
import styles from './Home.module.css';

const Home = () => { 
    const { widgets } = useWidgetsDataContext();
	const { widgetsEdgesOnClick } = useAddWidget();

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
								onClickEdges={widgetsEdgesOnClick}
							></Widget>
						))}
					</AnimatePresence>
				</Dashboard>
			</main>
		</div>
	);
  
}

export default Home