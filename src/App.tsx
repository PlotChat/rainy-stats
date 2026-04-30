import "./app.module.css";
import appStyles from "./app.module.css";
import mainStyles from "./main.module.css";
import Dashboard from "./features/Dashboard/Dashboard";
import Dialog from "./components/dialog/Dialog";
import Button from "./components/button/Button";
import type { WidgetListType } from "./types/widget/WidgetListType";
import { useWidgets } from "./context/Widgets/WidgetsContext";
import Widget from "./components/widget/Widget";

const App = () => {
	const { widgets, setWidgets } = useWidgets();

	return (
		<div className={appStyles.app}>
			<Button>Click to add a Card</Button>
			<main className={mainStyles.main}>
				<Dashboard variant="grid" gridCols={8}>
					{widgets.map(w => 
						<Widget widget={w}></Widget>
					)}
				</Dashboard>
			</main>
			<Dialog>
				<Button
					onClick={() =>
						setWidgets((prev: WidgetListType) => [
							...prev,
							{
								type: "CardImage",
								colSpan: 1,
								rowSpan: 1,
								attribute: {
									variant: "row",
									title: "Hello there",
									body: "This is a card",
									src: "https://i.pinimg.com/736x/15/d4/d5/15d4d5329b30ef778ded24b1c7c713e1.jpg",
									alt: "Flower",
								},
							},
						])
					}
				>
					Add a Card
				</Button>
			</Dialog>
		</div>
	);
};

export default App;
