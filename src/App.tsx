import React from "react";
import "./app.module.css";
import styles from './app.module.css';
import Dashboard from "./features/Dashboard/Dashboard";

const App = () => {
	return (
		<div className={styles.app}>
			<Dashboard></Dashboard>
		</div>
	);
};

export default App;
