import React from "react";
import "./app.module.css";
import appStyles from './app.module.css';
import mainStyles from './main.module.css';
import Dashboard from "./features/Dashboard/Dashboard";
import Dialog from "./components/dialog/Dialog";


const App = () => {
	return (
		<div className={appStyles.app}>
			<main className={mainStyles.main}>
				<Dashboard></Dashboard>
			</main>
			<Dialog></Dialog>
		</div>
	);
};

export default App;
