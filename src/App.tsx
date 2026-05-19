import styles from "./app.module.css";
import Home from "./pages/home/Home";
import { clsx } from "./utils/clsx";

const App = () => {
	return (
		<main className={clsx("canvas-breakout", "flow", styles.App)}>
			<Home></Home>
		</main>
	);
};

export default App;
