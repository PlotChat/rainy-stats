import styles from "./app.module.css";
import Home from "./pages/home/Home";

const App = () => {
	return (
		<div className={styles.App}>
			<Home></Home>
		</div>
	)
};

export default App;
